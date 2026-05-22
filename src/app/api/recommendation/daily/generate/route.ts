import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { allWorks } from "@/lib/data";

const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY || "";

// 从作品 genre+themes+continent 推断标签，与偏好标签体系一致
function computeTags(w: (typeof allWorks)[number]): string[] {
  const tags: string[] = [];
  for (const g of w.genre) {
    if (g === "诗歌") tags.push("诗歌散文");
    if (g === "小说") tags.push("古典文学");
    if (g === "戏剧") tags.push("古典文学");
    if (g === "史诗") tags.push("古典文学");
    if (g === "散文/随笔") tags.push("诗歌散文");
    if (g === "哲学") tags.push("哲学文学");
  }
  for (const t of w.themes) {
    if (t === "爱情") tags.push("爱情小说");
    if (t === "战争") tags.push("战争文学");
    if (t === "历史") tags.push("历史小说");
    if (t === "魔幻") tags.push("魔幻现实主义");
    if (t === "哲学") tags.push("哲学文学");
  }
  const continentMap: Record<string, string> = {
    asia: "东亚文学", africa: "非洲文学", americas: "拉美文学", europe: "古典文学", oceania: "现代文学",
  };
  const cTag = continentMap[w.continent];
  if (cTag && !tags.includes(cTag)) tags.push(cTag);

  // Country-level tags for higher matching precision
  if (w.country.includes("俄")) tags.push("俄国文学");
  if (w.country.includes("英") || w.country.includes("爱尔兰")) tags.push("古典文学");
  if (/法|德|意大利|西班牙/.test(w.country)) tags.push("古典文学");
  if (/日本|韩国|朝鲜/.test(w.country)) tags.push("东亚文学");
  if (/巴西|阿根廷|墨西哥|哥伦比亚|智利|秘鲁/.test(w.country)) tags.push("拉美文学");
  if (/尼日利亚|肯尼亚|南非|埃及/.test(w.country)) tags.push("非洲文学");
  if (/挪威|瑞典|丹麦|芬兰|冰岛/.test(w.country)) tags.push("北欧文学");
  if (/中国|台湾|香港/.test(w.country) && !tags.includes("东亚文学")) tags.push("东亚文学");

  // Era-based
  if (w.era?.includes("古代") || w.era?.includes("中世纪")) tags.push("古典文学");
  if (w.era?.includes("近代") || w.era?.includes("现代") || w.era?.includes("当代")) tags.push("现代文学");

  // Nobel check
  const NOBEL = ["海明威","泰戈尔","川端康成","马尔克斯","库切","莫里森","格拉斯","石黑一雄","帕慕克","加缪","萨特","福克纳","海塞","肖洛霍夫","帕斯捷尔纳克","索尔仁尼琴","莫言","略萨","托卡尔丘克","汉德克","格丽克","古尔纳","福瑟","韩江"];
  if (NOBEL.some((n) => w.author.includes(n))) tags.push("诺贝尔奖作品");

  return [...new Set(tags)];
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const prefs = session.user.preferences;
    if (!prefs || prefs.length === 0) {
      return NextResponse.json({ error: "未设置偏好" }, { status: 400 });
    }
    const today = new Date().toISOString().slice(0, 10);

    // 检查缓存
    const existing = await prisma.dailyRecommendation.findUnique({
      where: { userId_date: { userId: session.user.id, date: today } },
    });
    if (existing) {
      return NextResponse.json({
        recommendation: { bookId: existing.bookId, date: existing.date, reason: existing.reason },
        cached: true,
      });
    }

    // 选书逻辑
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

    // 查找该用户最近 30 天推荐过的书
    const recentRecs = await prisma.dailyRecommendation.findMany({
      where: { userId: session.user.id, date: { gte: thirtyDaysAgo } },
      select: { bookId: true },
    });
    const recentIds = new Set(recentRecs.map((r) => r.bookId));

    // 为每本书计算匹配分数（与偏好标签的交集数量）
    const scored = allWorks
      .filter((w) => !recentIds.has(w.id))
      .map((w) => {
        const tags = computeTags(w);
        const matches = tags.filter((t) => prefs.includes(t));
        return { work: w, tags, score: matches.length };
      })
      .filter((s) => s.score > 0)
      .sort((a, b) => b.score - a.score);

    if (scored.length === 0) {
      return NextResponse.json({ error: "没有匹配的书籍" }, { status: 404 });
    }

    const best = scored[0];

    // AI 生成推荐理由
    let reason = "";
    if (ANTHROPIC_KEY) {
      try {
        const resp = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: { "Content-Type": "application/json", "x-api-key": ANTHROPIC_KEY, "anthropic-version": "2023-06-01" },
          body: JSON.stringify({
            model: "claude-sonnet-4-6", max_tokens: 512,
            messages: [{
              role: "user",
              content: `你是一个文学推荐助手。用户偏好标签：${prefs.join("、")}。推荐的书籍是《${best.work.title}》（${best.work.author}，${best.work.country}），匹配的标签：${best.tags.filter((t) => prefs.includes(t)).join("、")}。请用中文写一段2-3句的个性化推荐理由，说明为什么根据用户的偏好推荐这本书。直接输出推荐理由，不需要书名或作者介绍。`
            }],
          }),
          signal: AbortSignal.timeout(20000),
        });
        if (resp.ok) {
          const data = (await resp.json()) as { content?: Array<{ text: string }> };
          reason = data.content?.[0]?.text?.trim() || "";
        }
      } catch { /* fallback */ }
    }

    if (!reason) {
      const matchedTags = best.tags.filter((t) => prefs.includes(t));
      reason = `你喜欢${matchedTags.join("、")}类型的作品。《${best.work.title}》是${best.work.author}的代表作，在这些方面尤为出色，相信能给你带来深刻的阅读体验。`;
    }

    // 存入数据库
    const rec = await prisma.dailyRecommendation.create({
      data: {
        userId: session.user.id,
        bookId: best.work.id,
        date: today,
        reason,
      },
    });

    return NextResponse.json({
      recommendation: { bookId: rec.bookId, date: rec.date, reason: rec.reason },
      cached: false,
    });
  } catch (err) {
    console.error("[recommendation/generate] error:", err);
    return NextResponse.json({ error: "服务器错误" }, { status: 500 });
  }
}
