#!/usr/bin/env npx tsx
// ================================================================
// 每日文学热点抓取 + AI 深度分析
// 用法: npx tsx scripts/fetch-daily-trends.ts [--dry-run] [--force-llm]
// ================================================================

import * as fs from "fs";
import * as path from "path";

// ================================================================
// 配置
// ================================================================

const USER_AGENT =
  "Mozilla/5.0 (compatible; WorldLiteratureTrendBot/1.0; +https://github.com/world-literature)";

const OUTPUT_PATH = path.join(__dirname, "..", "data", "daily-trends.json");

const SOURCES = {
  redditBooks:
    "https://www.reddit.com/r/books/top.json?t=day&limit=15&raw_json=1",
  redditLiterature:
    "https://www.reddit.com/r/literature/top.json?t=day&limit=10&raw_json=1",
  hackerNews:
    "https://hn.algolia.com/api/v1/search?query=literature+OR+books+OR+novel+OR+reading&tags=story&hitsPerPage=10",
  // RSS feeds via RSS-to-JSON proxy
  lithubRSS:
    "https://api.rss2json.com/v1/api.json?rss_url=https://lithub.com/feed/",
};

// LLM 配置
const LLM_MODEL = process.env.TRENDS_LLM_MODEL || "claude-sonnet-4-6";
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY || "";
const OPENAI_KEY = process.env.OPENAI_API_KEY || "";

// ================================================================
// 类型
// ================================================================

interface RedditPost {
  data: {
    title: string;
    selftext: string;
    ups: number;
    num_comments: number;
    permalink: string;
    url: string;
    author: string;
    created_utc: number;
  };
}

interface RedditResponse {
  data: { children: RedditPost[] };
}

interface HNStory {
  title: string;
  url: string;
  points: number;
  num_comments: number;
  objectID: string;
  author: string;
  created_at: string;
}

interface HNResponse {
  hits: HNStory[];
}

interface RSSItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  author?: string;
}

interface RSSResponse {
  items: RSSItem[];
}

interface RawPost {
  id: string;
  title: string;
  body: string;
  url: string;
  score: number;
  comments: number;
  source: string;
  author: string;
  timestamp: number;
}

interface TrendTopic {
  title: string;
  background: string;
  perspectives: string;
  insight: string;
  source_links: string[];
}

interface DailyTrends {
  _meta: {
    generatedAt: string;
    sources: string[];
    totalPostsAnalyzed: number;
    llmUsed: boolean;
  };
  topics: TrendTopic[];
}

// ================================================================
// HTTP 工具
// ================================================================

async function fetchJSON(url: string): Promise<unknown> {
  const resp = await fetch(url, {
    headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
  });
  if (!resp.ok) throw new Error(`HTTP ${resp.status} for ${url}`);
  return resp.json();
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

// ================================================================
// 数据采集
// ================================================================

async function fetchReddit(url: string, source: string): Promise<RawPost[]> {
  try {
    const data = (await fetchJSON(url)) as RedditResponse;
    return data.data.children
      .map((p) => ({
        id: p.data.permalink,
        title: p.data.title,
        body: p.data.selftext || "",
        url: `https://www.reddit.com${p.data.permalink}`,
        score: p.data.ups,
        comments: p.data.num_comments,
        source,
        author: p.data.author,
        timestamp: p.data.created_utc,
      }))
      .filter((r) => r.title.length > 3);
  } catch {
    return [];
  }
}

async function fetchHackerNews(): Promise<RawPost[]> {
  try {
    const data = (await fetchJSON(SOURCES.hackerNews)) as HNResponse;
    return data.hits.map((h) => ({
      id: h.objectID,
      title: h.title,
      body: "",
      url: h.url || `https://news.ycombinator.com/item?id=${h.objectID}`,
      score: h.points || 0,
      comments: h.num_comments || 0,
      source: "Hacker News",
      author: h.author,
      timestamp: new Date(h.created_at).getTime() / 1000,
    }));
  } catch {
    return [];
  }
}

async function fetchRSS(url: string): Promise<RawPost[]> {
  try {
    const data = (await fetchJSON(url)) as RSSResponse;
    if (!data.items) return [];
    return data.items.map((item, i) => ({
      id: `rss-${i}-${new URL(item.link).hostname}`,
      title: item.title,
      body: stripHtml(item.description || ""),
      url: item.link,
      score: 0,
      comments: 0,
      source: "RSS",
      author: item.author || "",
      timestamp: item.pubDate ? new Date(item.pubDate).getTime() / 1000 : Date.now() / 1000,
    }));
  } catch {
    return [];
  }
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
}

async function collectAllPosts(): Promise<RawPost[]> {
  console.log("📡 开始采集数据源...");

  const [redditBooks, redditLit, hn, rss] = await Promise.all([
    fetchReddit(SOURCES.redditBooks, "r/books"),
    fetchReddit(SOURCES.redditLiterature, "r/literature"),
    fetchHackerNews(),
    fetchRSS(SOURCES.lithubRSS),
  ]);

  const all = [...redditBooks, ...redditLit, ...hn, ...rss];
  console.log(`   Reddit r/books: ${redditBooks.length} posts`);
  console.log(`   Reddit r/literature: ${redditLit.length} posts`);
  console.log(`   Hacker News: ${hn.length} posts`);
  console.log(`   RSS (LitHub): ${rss.length} items`);
  console.log(`   合计: ${all.length} posts`);

  return all;
}

// ================================================================
// 数据清洗
// ================================================================

function cleanPosts(posts: RawPost[]): RawPost[] {
  console.log("\n🧹 清洗数据...");

  let cleaned = posts.filter((p) => {
    // 去广告
    const lower = (p.title + " " + p.body).toLowerCase();
    if (lower.includes("buy now") || lower.includes("discount") || lower.includes("best price"))
      return false;
    // 去无意义
    if (stripHtml(p.body).length < 50 && p.title.length < 20) return false;
    // 去纯 emoji
    if (/^[\p{Emoji}\s]+$/u.test(p.title.trim())) return false;
    return true;
  });

  // 去重：标题相似度检查
  const unique: RawPost[] = [];
  for (const p of cleaned) {
    const dup = unique.find((u) => {
      const a = u.title.toLowerCase().replace(/[^a-z]/g, "");
      const b = p.title.toLowerCase().replace(/[^a-z]/g, "");
      if (!a || !b) return false;
      const longer = Math.max(a.length, b.length);
      const dist = levenshtein(a, b);
      return dist / longer < 0.3;
    });
    if (!dup) unique.push(p);
  }

  // 按 (score + comments) 排序
  unique.sort((a, b) => b.score + b.comments * 2 - (a.score + a.comments * 2));

  console.log(`   清洗后: ${unique.length} posts (删除 ${cleaned.length - unique.length} 重复/无效)`);
  return unique;
}

function levenshtein(a: string, b: string): number {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const m = a.length, n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
  return dp[m][n];
}

// ================================================================
// LLM 分析
// ================================================================

function buildLLMPrompt(posts: RawPost[]): string {
  const contexts = posts
    .slice(0, 20)
    .map(
      (p, i) =>
        `[${i + 1}] Source: ${p.source} | Score: ${p.score} | Comments: ${p.comments}\nTitle: ${p.title}\nBody: ${p.body.slice(0, 300)}\nURL: ${p.url}`
    )
    .join("\n\n");

  return `You are the literature trend analyst for a world literature hub.

Below are today's top literary discussions from Reddit, Hacker News, and LitHub RSS. Analyze them and generate 5 trending topics.

${contexts}

Return ONLY a valid JSON object (no markdown fences) with this exact structure:
{
  "topics": [
    {
      "title": "Compelling topic title",
      "background": "Core discussion context (2-3 sentences)",
      "perspectives": "Summarized viewpoints from the community (2-3 sentences)",
      "insight": "Deeper literary analysis and broader cultural significance (2-3 sentences)",
      "source_links": ["url1", "url2"]
    }
  ]
}

Rules:
- Generate exactly 5 topics.
- Each field should be in English, informative, and engaging.
- source_links must come from the URLs provided in the context.
- Group related discussions into cohesive topics.
- Each field should be 2-4 sentences, concise and meaningful.`;
}

async function callLLM(prompt: string): Promise<TrendTopic[]> {
  // Try Anthropic first
  if (ANTHROPIC_KEY) {
    console.log("   Using Anthropic API...");
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
          max_tokens: 2048,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      if (resp.ok) {
        const data = (await resp.json()) as { content: Array<{ text: string }> };
        const text = data.content?.[0]?.text || "";
        const json = extractJSON(text);
        if (json?.topics) return json.topics;
      }
    } catch (e) {
      console.log("   Anthropic API failed:", (e as Error).message);
    }
  }

  // Fallback: OpenAI
  if (OPENAI_KEY) {
    console.log("   Using OpenAI API...");
    try {
      const resp = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          max_tokens: 2048,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      if (resp.ok) {
        const data = (await resp.json()) as { choices: Array<{ message: { content: string } }> };
        const text = data.choices?.[0]?.message?.content || "";
        const json = extractJSON(text);
        if (json?.topics) return json.topics;
      }
    } catch (e) {
      console.log("   OpenAI API failed:", (e as Error).message);
    }
  }

  return [];
}

function extractJSON(text: string): { topics?: TrendTopic[] } | null {
  // Remove markdown code fences
  let cleaned = text.replace(/```(?:json)?\s*/gi, "").replace(/```\s*$/gi, "").trim();

  // Find first { and last }
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start === -1 || end === -1) return null;

  try {
    return JSON.parse(cleaned.slice(start, end + 1));
  } catch {
    return null;
  }
}

// ================================================================
// 降级模式：无 LLM 生成简单报告
// ================================================================

function generateFallbackReport(posts: RawPost[]): TrendTopic[] {
  const topPosts = posts.slice(0, 10);
  return [
    {
      title: "Today's Hottest Literary Discussion",
      background: `${topPosts.length} trending posts from Reddit and Hacker News communities.`,
      perspectives: topPosts
        .slice(0, 3)
        .map((p) => `"${p.title.slice(0, 80)}" — ${p.source}`)
        .join(" | "),
      insight: "The literary community continues to engage with both classic works and contemporary releases. Topics span genre fiction, literary criticism, and reading culture.",
      source_links: topPosts.slice(0, 5).map((p) => p.url),
    },
  ];
}

// ================================================================
// 主流程
// ================================================================

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const forceLLM = args.includes("--force-llm");
  const noLLM = args.includes("--no-llm");

  console.log("╔══════════════════════════════════════════════════╗");
  console.log("║  Daily Literature Trends Analyzer               ║");
  console.log("╚══════════════════════════════════════════════════╝");
  console.log("");

  // Step 1: Collect
  const rawPosts = await collectAllPosts();

  if (rawPosts.length === 0) {
    console.log("\n⚠ 未采集到任何数据。请检查网络连接。");
    process.exit(0);
  }

  // Step 2: Clean
  const cleaned = cleanPosts(rawPosts);

  // Step 3: Analyze
  let topics: TrendTopic[];
  let llmUsed = false;

  const hasLLMKey = !!ANTHROPIC_KEY || !!OPENAI_KEY;

  if (hasLLMKey && !noLLM) {
    console.log("\n🤖 调用 LLM 进行深度分析...");
    const prompt = buildLLMPrompt(cleaned);
    console.log(`   Prompt size: ${prompt.length} chars`);

    topics = await callLLM(prompt);

    if (topics.length > 0) {
      llmUsed = true;
      console.log(`   ✓ 生成了 ${topics.length} 个话题`);
    } else {
      console.log("   ⚠ LLM 调用失败，使用降级模式");
      topics = generateFallbackReport(cleaned);
    }
  } else {
    console.log("\n📝 未配置 LLM API Key，使用降级统计模式");
    console.log("   设置 ANTHROPIC_API_KEY 或 OPENAI_API_KEY 启用 AI 分析");
    topics = generateFallbackReport(cleaned);
  }

  // Step 4: Build output
  const output: DailyTrends = {
    _meta: {
      generatedAt: new Date().toISOString(),
      sources: ["reddit/r/books", "reddit/r/literature", "hackernews", "rss/lithub"],
      totalPostsAnalyzed: cleaned.length,
      llmUsed,
    },
    topics: topics.slice(0, 5),
  };

  // Step 5: Write
  const dir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  if (!dryRun) {
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), "utf-8");
    console.log(`\n✅ 已写入 ${OUTPUT_PATH}`);
    console.log(`   话题数: ${output.topics.length} | LLM: ${llmUsed ? "Yes" : "No"}`);
  } else {
    console.log("\n🔍 [dry-run] 预览输出:");
    console.log(JSON.stringify(output, null, 2).slice(0, 1000));
  }
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
