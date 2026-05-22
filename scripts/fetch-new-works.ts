#!/usr/bin/env npx tsx
// ================================================================
// 每日新文抓取 — 多语言均衡 RSS 聚合
// 目标比例：中文 40% / 英文 40% / 其他 20%
// 用法:
//   npx tsx scripts/fetch-new-works.ts [--dry-run] [--ci|--local]
//   --ci    = GitHub Actions 模式，仅境外可访问来源
//   --local = 本地模式，含大陆来源（默认）
// ================================================================

import * as fs from "fs";
import * as path from "path";

const OUTPUT_PATH = path.join(__dirname, "..", "data", "daily-new-works.json");
const ARCHIVE_DIR = path.join(__dirname, "..", "data", "new-works-archive");
const USER_AGENT = "WorldLiteratureBot/1.0 (+https://github.com/world-literature)";
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY || "";

interface Article {
  id: string; title: string; author: string;
  source: string; sourceUrl: string; excerpt: string;
  criticism: string; language: string; tags: string[];
  publishedAt: string; collectedAt: string;
}

interface SourceDef {
  name: string; rss?: string; fallbackUrl?: string;
  lang: string; category: string; maxArticles: number;
}

// ================================================================
// CI 模式中文源（境外可访问的海外华文/港台/新马媒体）
// ================================================================
const CI_ZH_SOURCES: SourceDef[] = [
  { name: "纽约时报中文网", rss: "https://cn.nytimes.com/rss/", lang: "zh", category: "文化评论", maxArticles: 2 },
  { name: "BBC中文", rss: "https://www.bbc.com/zhongwen/simp/index.xml", lang: "zh", category: "国际文化", maxArticles: 2 },
  { name: "联合早报文化", rss: "https://www.zaobao.com.sg/culture/rss.xml", lang: "zh", category: "文学评论", maxArticles: 2 },
  { name: "香港01文化", rss: "https://www.hk01.com/rss/culture", lang: "zh", category: "文化新闻", maxArticles: 2 },
  { name: "中国数字时代", rss: "https://chinadigitaltimes.net/feed/", lang: "zh", category: "文化现象", maxArticles: 2 },
  { name: "端传媒文化", rss: "https://theinitium.com/feed/", lang: "zh", category: "深度文化", maxArticles: 2 },
];

// ================================================================
// 本地模式额外中文源（大陆网站，需境内网络或代理）
// ================================================================
const LOCAL_ZH_SOURCES: SourceDef[] = [
  { name: "澎湃思想市场", rss: "https://www.thepaper.cn/rss.jsp", fallbackUrl: "https://www.thepaper.cn", lang: "zh", category: "文学评论", maxArticles: 2 },
  { name: "新华网文化", rss: "http://www.xinhuanet.com/culture/rss.xml", fallbackUrl: "http://www.xinhuanet.com/culture/", lang: "zh", category: "文化新闻", maxArticles: 2 },
  { name: "豆瓣读书", fallbackUrl: "https://book.douban.com/", lang: "zh", category: "书评", maxArticles: 2 },
  { name: "知乎文学", fallbackUrl: "https://www.zhihu.com/topic/19551221/hot", lang: "zh", category: "文学讨论", maxArticles: 2 },
];

// ================================================================
// 英文来源（全部境外可访问）
// ================================================================
const EN_SOURCES: SourceDef[] = [
  { name: "The New Yorker", rss: "https://www.newyorker.com/feed/fiction", lang: "en", category: "fiction", maxArticles: 2 },
  { name: "Literary Hub", rss: "https://lithub.com/feed/", lang: "en", category: "literary", maxArticles: 2 },
  { name: "Granta", rss: "https://granta.com/feed/", lang: "en", category: "literary", maxArticles: 2 },
  { name: "The Paris Review", rss: "https://www.theparisreview.org/feed/", lang: "en", category: "literary", maxArticles: 2 },
  { name: "Hacker News", fallbackUrl: "hn", lang: "en", category: "tech-culture", maxArticles: 2 },
];

// ================================================================
// 日韩及其他（全部境外可访问）
// ================================================================
const OTHER_SOURCES: SourceDef[] = [
  { name: "Words Without Borders", rss: "https://wordswithoutborders.org/feed/", lang: "other", category: "translation", maxArticles: 2 },
  { name: "Asymptote Journal", rss: "https://www.asymptotejournal.com/feed/", lang: "other", category: "translation", maxArticles: 2 },
  { name: "Literary Hub Asia", rss: "https://lithub.com/tag/asian-literature/feed/", lang: "other", category: "asian-lit", maxArticles: 2 },
];

const QUOTAS: Record<string, number> = { zh: 4, en: 4, other: 2 };

// ================================================================
// RSS XML 直接解析（中文源优先，不走第三方代理）
// ================================================================

async function fetchRSSDirect(src: SourceDef): Promise<Article[]> {
  if (!src.rss) return [];
  try {
    const resp = await fetch(src.rss, {
      headers: { "User-Agent": USER_AGENT, Accept: "application/xml,text/xml" },
      signal: AbortSignal.timeout(12000),
    });
    if (!resp.ok) return [];
    const xml = await resp.text();
    return parseRSSXML(xml, src);
  } catch {
    return [];
  }
}

function parseRSSXML(xml: string, src: SourceDef): Article[] {
  const articles: Article[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/gi;
  let match, count = 0;

  while ((match = itemRegex.exec(xml)) !== null && count < src.maxArticles) {
    const block = match[1];
    const title = extractTag(block, "title");
    const link = extractTag(block, "link");
    const desc = extractTag(block, "description");
    const pubDate = extractTag(block, "pubDate");
    const author = extractTag(block, "author") || extractTag(block, "dc:creator");

    if (!title || title.length < 8) continue;
    articles.push(makeArticle(src, `${src.lang}-rssd-${Date.now()}-${count}`, stripHtml(title), author || src.name, link, stripHtml(desc || ""), pubDate));
    count++;
  }

  // Atom fallback
  if (articles.length === 0) {
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/gi;
    while ((match = entryRegex.exec(xml)) !== null && articles.length < src.maxArticles) {
      const block = match[1];
      const title = extractTag(block, "title");
      const linkMatch = block.match(/<link[^>]*href="([^"]*)"/);
      const link = linkMatch?.[1] || extractTag(block, "link");
      const desc = extractTag(block, "summary") || extractTag(block, "content");
      const pubDate = extractTag(block, "published") || extractTag(block, "updated");
      const author = extractTag(block, "author") || extractTag(block, "name");
      if (!title || title.length < 8) continue;
      articles.push(makeArticle(src, `${src.lang}-atom-${Date.now()}-${articles.length}`, stripHtml(title), author || src.name, link || "", stripHtml(desc || ""), pubDate));
    }
  }
  return articles;
}

function extractTag(xml: string, tag: string): string {
  const cdata = xml.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`, "i"));
  if (cdata) return cdata[1];
  const plain = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"));
  return plain?.[1] || "";
}

// ================================================================
// rss2json 代理（英文源可用）
// ================================================================

async function fetchRSSProxy(src: SourceDef): Promise<Article[]> {
  if (!src.rss) return [];
  try {
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(src.rss)}`;
    const resp = await fetch(apiUrl, {
      headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
      signal: AbortSignal.timeout(15000),
    });
    if (!resp.ok) return [];
    const data = (await resp.json()) as { items?: Array<{ title: string; author: string; link: string; description: string; pubDate: string; content?: string }> };
    if (!data.items) return [];
    return data.items.slice(0, src.maxArticles).map((item, i) =>
      makeArticle(src, `${src.lang}-rss-${Date.now()}-${i.toString(36)}`, item.title || "Untitled", item.author || src.name, item.link || "", item.description || item.content || "", item.pubDate)
    );
  } catch {
    return [];
  }
}

// ================================================================
// HTML 页面直接抓取
// ================================================================

async function fetchDirect(src: SourceDef): Promise<Article[]> {
  if (!src.fallbackUrl) return [];
  try {
    const resp = await fetch(src.fallbackUrl, {
      headers: { "User-Agent": USER_AGENT, Accept: "text/html" },
      signal: AbortSignal.timeout(12000),
    });
    if (!resp.ok) return [];
    return extractArticlesFromHTML(await resp.text(), src);
  } catch {
    return [];
  }
}

function extractArticlesFromHTML(html: string, src: SourceDef): Article[] {
  const articles: Article[] = [];
  const seen = new Set<string>();

  const patterns: RegExp[] = [
    /<h[23][^>]*>\s*<a[^>]*href="([^"]*)"[^>]*>([^<]+)<\/a>\s*<\/h[23]>/gi,
    /<a[^>]*class="[^"]*title[^"]*"[^>]*href="([^"]*)"[^>]*>([^<]+)<\/a>/gi,
    /<li[^>]*>\s*<a[^>]*href="([^"]*)"[^>]*>([^<]{10,80})<\/a>/gi,
    /<a[^>]*href="([^"]*\/\d{4,}\/[^"]*)"[^>]*>([^<]{10,80})<\/a>/gi,
  ];

  for (const pattern of patterns) {
    if (articles.length >= src.maxArticles) break;
    let match;
    while ((match = pattern.exec(html)) !== null && articles.length < src.maxArticles) {
      const url = match[1];
      const title = stripHtml(match[2]);
      if (title.length < 10) continue;
      if (/^(HOME|ABOUT|CONTACT|LOGIN|SIGN|MENU|IP |SIXTH|FOLLOW|SUBSCRIBE|ADVERTISE|TERMS|PRIVACY|搜索|首页|关于|联系|登录|注册|更多|全部)$/i.test(title)) continue;
      if (src.lang === "zh" && !/[一-鿿]{4}/.test(title)) continue;
      if (/^https?:\/\//.test(title)) continue;
      const key = title.slice(0, 30);
      if (seen.has(key)) continue;
      seen.add(key);

      const surrounding = html.slice(match.index, match.index + 3000);
      const paraMatch = surrounding.match(/<p[^>]*>([^<]{50,400})<\/p>/i);
      const fullUrl = url.startsWith("http") ? url : (src.fallbackUrl ? new URL(url, src.fallbackUrl).href : url);
      articles.push(makeArticle(src, `${src.lang}-html-${Date.now()}-${articles.length}`, title, src.name, fullUrl, paraMatch ? stripHtml(paraMatch[1]).slice(0, 500) : "", new Date().toISOString()));
    }
  }
  return articles;
}

// ================================================================
// Hacker News API
// ================================================================

async function fetchHN(src: SourceDef): Promise<Article[]> {
  try {
    const resp = await fetch(
      "https://hn.algolia.com/api/v1/search?query=literature+OR+books+OR+novel+OR+reading&tags=story&hitsPerPage=5",
      { headers: { "User-Agent": USER_AGENT }, signal: AbortSignal.timeout(10000) }
    );
    if (!resp.ok) return [];
    const data = (await resp.json()) as { hits?: Array<{ title: string; author: string; url: string; objectID: string; created_at: string }> };
    if (!data.hits) return [];
    return data.hits.slice(0, src.maxArticles).map((hit) =>
      makeArticle(src, `en-hn-${hit.objectID}`, hit.title || "Untitled", hit.author || "Unknown", hit.url || `https://news.ycombinator.com/item?id=${hit.objectID}`, "", hit.created_at, ["科技与文化"])
    );
  } catch {
    return [];
  }
}

// ================================================================
// AI 补位 — 中文来源全部失败时生成编辑荐评
// ================================================================

async function generateEditorial(): Promise<Article[]> {
  if (!ANTHROPIC_KEY) return [];

  console.log("   🤖 中文来源全部失败，AI 生成编辑荐评补位...");
  try {
    const resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1024,
        messages: [{
          role: "user",
          content: `你是世界文学总站的中文编辑。请为今天的"今日新文"栏目撰写一篇简短的中文文学荐评（约200字）。
主题可选：
- 近期值得关注的华语文学作品或翻译作品
- 一位经典作家诞辰/逝世纪念日的导读
- 当下文学圈的一个有趣趋势或讨论

格式要求：仅输出以下JSON，不要markdown标记：
{
  "title": "荐评标题（15字以内）",
  "body": "荐评正文（约200字，中文，文学性强，有观点）"
}`
        }],
      }),
      signal: AbortSignal.timeout(30000),
    });

    if (!resp.ok) return [];
    const data = (await resp.json()) as { content?: Array<{ text: string }> };
    const text = data.content?.[0]?.text || "";
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return [];

    const { title, body } = JSON.parse(jsonMatch[0]);
    if (!title || !body) return [];

    console.log(`   ✓ AI 生成荐评: ${title}`);
    return [{
      id: `zh-editorial-${Date.now()}`,
      title,
      author: "编辑荐评",
      source: "编辑荐评",
      sourceUrl: "",
      excerpt: body.slice(0, 500),
      criticism: "",
      language: "zh",
      tags: ["编辑荐评", "文学评论"],
      publishedAt: new Date().toISOString(),
      collectedAt: new Date().toISOString(),
    }];
  } catch (e) {
    console.log(`   ⚠ AI 补位失败: ${(e as Error).message}`);
    return [];
  }
}

// ================================================================
// 工具 / 组装
// ================================================================

function makeArticle(src: SourceDef, id: string, title: string, author: string, sourceUrl: string, excerpt: string, publishedAt: string, tags?: string[]): Article {
  return {
    id, title, author,
    source: src.name,
    sourceUrl,
    excerpt: excerpt.slice(0, 500),
    criticism: "",
    language: src.lang,
    tags: tags || [src.category],
    publishedAt: publishedAt || new Date().toISOString(),
    collectedAt: new Date().toISOString(),
  };
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#?\w+;/g, " ")
    .replace(/\s+/g, " ").trim();
}

function tagArticles(articles: Article[]): Article[] {
  return articles.map((a) => {
    if (a.tags.length > 1 && !a.tags.includes("编辑荐评")) return a;
    const text = (a.title + " " + a.excerpt).toLowerCase();
    const tags = a.tags.includes("编辑荐评") ? [...a.tags] : [...a.tags];
    if (/fiction|novel|story|小说|虚构/.test(text)) tags.push("虚构文学");
    if (/poem|poetry|诗歌|诗|俳句/.test(text)) tags.push("诗歌");
    if (/review|criticism|评论|书评|荐评/.test(text)) tags.push("文学评论");
    if (/essay|散文|essay|随笔/.test(text)) tags.push("散文");
    if (/translation|翻译|译/.test(text)) tags.push("翻译文学");
    if (tags.length === 1 || (tags.length === 2 && tags.includes("编辑荐评"))) tags.push("当代文学");
    return { ...a, tags: [...new Set(tags)] };
  });
}

function dedupeByTitle(articles: Article[]): Article[] {
  const seen = new Set<string>();
  return articles.filter((a) => {
    const key = a.title.toLowerCase().replace(/[^a-z0-9一-鿿]/g, "").slice(0, 50);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function sleep(ms: number) { return new Promise((r) => setTimeout(r, ms)); }

// ================================================================
// 主流程
// ================================================================

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const isCI = args.includes("--ci");
  const isLocal = args.includes("--local");
  const mode = isCI ? "CI (境外)" : "local (境内+境外)";

  console.log("╔══════════════════════════════════════════════════╗");
  console.log(`║  Daily New Works — ${isCI ? "CI" : "Local"} Mode`.padEnd(51) + "║");
  console.log("╚══════════════════════════════════════════════════╝\n");
  console.log(`🐢 运行模式: ${mode}\n`);

  // 构建数据源列表
  let zhSources: SourceDef[] = [...CI_ZH_SOURCES];
  if (!isCI || isLocal) {
    zhSources = [...zhSources, ...LOCAL_ZH_SOURCES];
  }

  const allByLang: Record<string, Article[]> = {};

  // ---- 中文 ----
  console.log("📡 [中文] 抓取中...");
  const zhCollected: Article[] = [];
  for (const src of zhSources) {
    let articles: Article[] = [];
    // RSS 直连优先（中文源）
    if (src.rss) articles = await fetchRSSDirect(src);
    if (articles.length === 0 && src.rss) articles = await fetchRSSProxy(src);
    if (articles.length === 0 && src.fallbackUrl) articles = await fetchDirect(src);
    console.log(`   ${src.name}: ${articles.length} 篇`);
    zhCollected.push(...articles);
    await sleep(600);
  }

  // CI 模式下中文源全失败 → AI 补位
  if (zhCollected.length === 0 && isCI) {
    const aiArticles = await generateEditorial();
    if (aiArticles.length > 0) {
      zhCollected.push(...aiArticles);
      console.log(`   AI编辑荐评: ${aiArticles.length} 篇`);
    }
  }
  allByLang["zh"] = zhCollected;

  // ---- 英文 ----
  console.log("\n📡 [英文] 抓取中...");
  const enCollected: Article[] = [];
  for (const src of EN_SOURCES) {
    let articles: Article[] = [];
    if (src.fallbackUrl === "hn") articles = await fetchHN(src);
    else {
      if (src.rss) articles = await fetchRSSProxy(src);
      if (articles.length === 0 && src.rss) articles = await fetchRSSDirect(src);
    }
    console.log(`   ${src.name}: ${articles.length} 篇`);
    enCollected.push(...articles);
    await sleep(600);
  }
  allByLang["en"] = enCollected;

  // ---- 其他 ----
  console.log("\n📡 [日韩/其他] 抓取中...");
  const otherCollected: Article[] = [];
  for (const src of OTHER_SOURCES) {
    let articles: Article[] = [];
    if (src.rss) articles = await fetchRSSProxy(src);
    if (articles.length === 0 && src.rss) articles = await fetchRSSDirect(src);
    console.log(`   ${src.name}: ${articles.length} 篇`);
    otherCollected.push(...articles);
    await sleep(600);
  }
  allByLang["other"] = otherCollected;

  // ---- 配额裁剪 + 降级补位 ----
  const final: Article[] = [];
  for (const lang of ["zh", "en", "other"]) {
    const quota = QUOTAS[lang] || 3;
    let articles = allByLang[lang] || [];

    // 非英文语言不足 → 用英文补
    if (articles.length < quota && lang !== "en") {
      const used = new Set(final.map((f) => f.id));
      const enPool = (allByLang["en"] || []).filter((a) => !used.has(a.id));
      const shortage = quota - articles.length;
      const fillers = enPool.slice(0, shortage);
      if (fillers.length > 0) {
        console.log(`\n   🔄 ${lang} 不足 ${shortage} 篇，英文补位`);
        articles = [...articles, ...fillers];
      }
    }

    final.push(...articles.slice(0, quota));
  }

  // ---- 标签 + 去重 + 统计 ----
  const tagged = tagArticles(final);
  const unique = dedupeByTitle(tagged);

  const counts: Record<string, number> = {};
  for (const a of unique) counts[a.language] = (counts[a.language] || 0) + 1;

  console.log(`\n📊 最终: ${unique.length} 篇`);
  const labels: Record<string, string> = { zh: "中文", en: "英文", other: "日韩/其他" };
  for (const [lang, cnt] of Object.entries(counts)) {
    console.log(`   ${labels[lang] || lang}: ${cnt} 篇 (${((cnt / unique.length) * 100).toFixed(0)}%)`);
  }

  const today = new Date().toISOString().slice(0, 10);
  const output = { date: today, articles: unique };

  if (!dryRun) {
    const dir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), "utf-8");
    console.log(`\n✅ ${OUTPUT_PATH}`);

    if (!fs.existsSync(ARCHIVE_DIR)) fs.mkdirSync(ARCHIVE_DIR, { recursive: true });
    fs.writeFileSync(path.join(ARCHIVE_DIR, `${today}.json`), JSON.stringify(output, null, 2), "utf-8");
    console.log(`📁 ${ARCHIVE_DIR}/${today}.json`);
  } else {
    console.log("\n🔍 [dry-run] 预览:");
    const preview = unique.slice(0, 3).map((a) => ({ title: a.title.slice(0, 40), source: a.source, lang: a.language }));
    console.log(JSON.stringify(preview, null, 2));
  }
}

main().catch((err) => { console.error("Fatal:", err); process.exit(1); });
