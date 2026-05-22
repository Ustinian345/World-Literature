#!/usr/bin/env npx tsx
// ================================================================
// 每日书籍推荐 — 基于 AI 生成推荐理由
// 用法: npx tsx scripts/fetch-daily-recommendation.ts [--dry-run]
// ================================================================

import * as fs from "fs";
import * as path from "path";

// ================================================================
// 配置
// ================================================================

const OUTPUT_PATH = path.join(__dirname, "..", "data", "daily-recommendation.json");
const HISTORY_PATH = path.join(__dirname, "..", "data", "recommendation-history.json");
const LLM_MODEL = process.env.TRENDS_LLM_MODEL || "claude-sonnet-4-6";
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY || "";
const OPENAI_KEY = process.env.OPENAI_API_KEY || "";

// 标签 → Work 字段映射
const TAG_TO_GENRE: Record<string, string[]> = {
  "古典文学": ["古典文学"],
  "现代文学": ["现代文学"],
  "魔幻现实主义": ["魔幻现实主义"],
  "爱情小说": ["爱情小说"],
  "战争文学": ["战争文学"],
  "侦探推理": ["侦探推理"],
  "科幻小说": ["科幻小说"],
  "历史小说": ["历史小说"],
  "哲学文学": ["哲学文学"],
  "诗歌散文": ["诗歌散文"],
};

const TAG_TO_THEME: Record<string, string[]> = {
  "古典文学": ["古代 (—500)", "中世纪 (500—1500)", "文艺复兴 (1500—1700)"],
  "现代文学": ["现代 (1900—1950)", "当代 (1950—)"],
  "爱情小说": ["爱情"],
  "战争文学": ["战争"],
  "历史小说": ["历史"],
  "哲学文学": ["哲学"],
  "魔幻现实主义": ["魔幻"],
};

const TAG_TO_CONTINENT: Record<string, string> = {
  "俄国文学": "europe",
  "拉美文学": "americas",
  "东亚文学": "asia",
  "非洲文学": "africa",
  "北欧文学": "europe",
};

// 诺贝尔奖作品关键词
const NOBEL_AUTHORS = [
  "海明威", "泰戈尔", "川端康成", "马尔克斯", "库切", "莫里森",
  "格拉斯", "石黑一雄", "帕慕克", "加缪", "萨特", "福克纳",
  "海塞", "肖洛霍夫", "帕斯捷尔纳克", "索尔仁尼琴", "莫言",
];

// ================================================================
// 类型
// ================================================================

interface Work {
  id: string;
  title: string;
  titleEn: string;
  author: string;
  country: string;
  flag: string;
  continent: string;
  era: string;
  genre: string[];
  themes: string[];
  excerpt: string;
  gradient: string;
  year?: number;
  featured?: boolean;
}

interface RecommendationResult {
  date: string;
  book: {
    id: string;
    title: string;
    author: string;
    tags: string[];
    cover: string;
    summary: string;
    slug: string;
  };
}

interface HistoryEntry {
  id: string;
  date: string;
}

// ================================================================
// 书籍选择
// ================================================================

function loadAllWorks(): Work[] {
  // Dynamic import doesn't work well in scripts; read and parse directly
  const dataPath = path.join(__dirname, "..", "src", "lib", "data.ts");
  const content = fs.readFileSync(dataPath, "utf-8");

  // Extract works array from the TS file
  // Look for: const works: Work[] = [...]
  const worksMatch = content.match(/const works: Work\[\] = \[([\s\S]*?)\];/);
  if (!worksMatch) {
    console.error("Cannot parse works from data.ts");
    return [];
  }

  // A simpler approach: import from the compiled JS
  // For the CI script, we'll use a JSON snapshot
  // Let's try the data JSON approach instead
  return [];
}

function loadWorksFromSnapshot(): Work[] {
  // Use the pre-built JSON snapshot for reliability
  const snapshotPath = path.join(__dirname, "..", "data", "works-snapshot.json");
  if (fs.existsSync(snapshotPath)) {
    return JSON.parse(fs.readFileSync(snapshotPath, "utf-8"));
  }

  // Generate snapshot from data.ts the first time
  console.log("Building works snapshot from data.ts...");
  const dataPath = path.join(__dirname, "..", "src", "lib", "data.ts");
  const content = fs.readFileSync(dataPath, "utf-8");

  // Match works array
  const match = content.match(/const works: Work\[\] = (\[[\s\S]*?\}\])\s*as const;/);
  if (!match) {
    console.error("Cannot parse works array");
    return [];
  }

  try {
    // Convert TS array literal to JSON-compatible string
    let arrStr = match[1];
    // Replace single quotes with double quotes in string values
    // This is fragile — better to use a proper parser
    // But for our known data structure, basic conversion works
    const works = eval(`(${arrStr})`);
    fs.writeFileSync(snapshotPath, JSON.stringify(works, null, 2), "utf-8");
    console.log(`Snapshot saved: ${works.length} works`);
    return works;
  } catch (e) {
    console.error("Failed to parse works:", e);
    return [];
  }
}

function computeTags(work: Work): string[] {
  const tags: string[] = [];

  // Genre-based tags
  for (const g of work.genre) {
    if (g === "小说") tags.push("古典文学");
    if (g === "诗歌") tags.push("诗歌散文");
    if (g === "戏剧") tags.push("古典文学");
    if (g === "史诗") tags.push("古典文学");
    if (g === "散文/随笔") tags.push("诗歌散文");
    if (g === "哲学") tags.push("哲学文学");
  }

  // Theme-based tags
  for (const t of work.themes) {
    if (t === "爱情") tags.push("爱情小说");
    if (t === "战争") tags.push("战争文学");
    if (t === "历史") tags.push("历史小说");
    if (t === "魔幻") tags.push("魔幻现实主义");
    if (t === "哲学") tags.push("哲学文学");
  }

  // Era-based tags
  const era = work.era;
  if (era.includes("古代") || era.includes("中世纪") || era.includes("文艺复兴")) {
    if (!tags.includes("古典文学")) tags.push("古典文学");
  }
  if (era.includes("近代") || era.includes("现代")) {
    if (!tags.includes("现代文学")) tags.push("现代文学");
  }
  if (era.includes("当代")) {
    if (!tags.includes("现代文学")) tags.push("现代文学");
  }

  // Continent-based tags
  const continentMap: Record<string, string> = {
    asia: "东亚文学",
    africa: "非洲文学",
    americas: "拉美文学",
    europe: "古典文学",
    oceania: "现代文学",
  };
  const cTag = continentMap[work.continent];
  if (cTag && !tags.includes(cTag)) tags.push(cTag);

  // Nobel
  if (NOBEL_AUTHORS.some((a) => work.author.includes(a))) {
    tags.push("诺贝尔奖作品");
  }

  return [...new Set(tags)];
}

function loadHistory(): HistoryEntry[] {
  if (!fs.existsSync(HISTORY_PATH)) return [];
  try {
    return JSON.parse(fs.readFileSync(HISTORY_PATH, "utf-8"));
  } catch {
    return [];
  }
}

function saveHistory(history: HistoryEntry[]): void {
  fs.writeFileSync(HISTORY_PATH, JSON.stringify(history, null, 2), "utf-8");
}

function selectBook(works: Work[], history: HistoryEntry[]): Work | null {
  const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
  const recentIds = new Set(
    history
      .filter((h) => new Date(h.date).getTime() > thirtyDaysAgo)
      .map((h) => h.id)
  );

  // Try to pick a featured work not recently recommended
  let candidates = works.filter((w) => !recentIds.has(w.id));
  if (candidates.length === 0) {
    // All books recently recommended — pick the oldest from history
    const oldestId = history[0]?.id;
    candidates = works.filter((w) => w.id === oldestId);
  }
  if (candidates.length === 0) candidates = works;

  // Pick randomly from top 20 candidates
  const pool = candidates.slice(0, Math.min(20, candidates.length));
  const picked = pool[Math.floor(Math.random() * pool.length)];
  return picked || null;
}

// ================================================================
// AI 推荐理由生成
// ================================================================

function buildRecommendationPrompt(work: Work, tags: string[]): string {
  return `You are a literary curator for a world literature hub. Write a compelling 2-3 sentence recommendation for the following book:

Title: ${work.title} (${work.titleEn})
Author: ${work.author}
Country: ${work.country}
Tags: ${tags.join(", ")}
Excerpt: ${work.excerpt}

Write ONLY the recommendation text (no title, no markdown). Make it engaging, highlight what makes this book special, and explain why a reader might love it today. Keep it under 150 words.`;
}

async function callLLM(prompt: string): Promise<string> {
  if (ANTHROPIC_KEY) {
    try {
      const resp = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": ANTHROPIC_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: LLM_MODEL,
          max_tokens: 512,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      if (resp.ok) {
        const data = (await resp.json()) as { content: Array<{ text: string }> };
        return data.content?.[0]?.text?.trim() || "";
      }
    } catch {}
  }

  if (OPENAI_KEY) {
    try {
      const resp = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          max_tokens: 512,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      if (resp.ok) {
        const data = (await resp.json()) as { choices: Array<{ message: { content: string } }> };
        return data.choices?.[0]?.message?.content?.trim() || "";
      }
    } catch {}
  }

  return "";
}

// ================================================================
// 主流程
// ================================================================

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");

  console.log("╔══════════════════════════════════════════════════╗");
  console.log("║  Daily Book Recommendation Engine               ║");
  console.log("╚══════════════════════════════════════════════════╝");
  console.log("");

  // Step 1: Load works
  const works = loadWorksFromSnapshot();
  if (works.length === 0) {
    console.error("❌ 无法加载书籍数据");
    process.exit(1);
  }
  console.log(`📚 加载了 ${works.length} 部作品`);

  // Step 2: Load history & select book
  const history = loadHistory();
  console.log(`📋 推荐历史: ${history.length} 条记录`);

  const book = selectBook(works, history);
  if (!book) {
    console.error("❌ 无法选出推荐书籍");
    process.exit(1);
  }
  const tags = computeTags(book);
  console.log(`🎯 今日推荐: ${book.title} (${book.author})`);
  console.log(`   标签: ${tags.join(", ")}`);

  // Step 3: Generate recommendation reason
  let summary = "";
  if (ANTHROPIC_KEY || OPENAI_KEY) {
    console.log("\n🤖 调用 AI 生成推荐理由...");
    const prompt = buildRecommendationPrompt(book, tags);
    summary = await callLLM(prompt);
    if (summary) {
      console.log(`   ✓ ${summary.slice(0, 80)}...`);
    } else {
      console.log("   ⚠ AI 调用失败，使用默认推荐理由");
    }
  }

  if (!summary) {
    summary = `《${book.title}》是${book.author}的代表作，来自${book.country}。${book.excerpt.slice(0, 100)}。这部作品深刻影响了世界文学，值得每一位文学爱好者细细品读。`;
  }

  // Step 4: Build output
  const today = new Date().toISOString().slice(0, 10);
  const output: RecommendationResult = {
    date: today,
    book: {
      id: book.id,
      title: book.title,
      author: book.author,
      tags,
      cover: book.gradient,
      summary,
      slug: book.id,
    },
  };

  // Step 5: Write files
  if (!dryRun) {
    // Write recommendation
    const dir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), "utf-8");
    console.log(`\n✅ 已写入 ${OUTPUT_PATH}`);

    // Update history
    history.push({ id: book.id, date: today });
    // Keep last 90 days only
    const cutoff = history.filter(
      (h) => new Date(h.date).getTime() > Date.now() - 90 * 24 * 60 * 60 * 1000
    );
    saveHistory(cutoff);
    console.log(`📋 更新推荐历史 (${cutoff.length} 条)`);
  } else {
    console.log("\n🔍 [dry-run] 预览:");
    console.log(JSON.stringify(output, null, 2));
  }
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
