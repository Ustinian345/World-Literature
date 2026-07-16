#!/usr/bin/env npx tsx
// ================================================================
// 每日文学热点抓取 + AI 深度分析
// 用法: npx tsx scripts/fetch-daily-trends.ts [--dry-run] [--force-llm]
//
// 来源: Reddit (r/books, r/literature, r/printSF), Hacker News,
//       LitHub RSS, Guardian Books RSS, NYT Books RSS,
//       Words Without Borders RSS, 端传媒 RSS
//
// 数量保障: 第一阶段 AI 基于真实讨论生成 ≤5 个话题，
// 若不足 3 个则第二阶段基于全部素材 + 文学界普遍议题补足。
// 每个话题标注 source_type: "基于网络讨论" 或 "编辑推荐话题"
// ================================================================

import * as fs from "fs";
import * as path from "path";

// ================================================================
// 配置
// ================================================================

const USER_AGENT =
  "Mozilla/5.0 (compatible; WorldLiteratureTrendBot/1.0; +https://github.com/world-literature)";

const OUTPUT_PATH = path.join(__dirname, "..", "data", "daily-trends.json");

// ---- 数据源：每个独立 try-catch，单个失败不影响整体 ----
const SOURCES = {
  // Reddit JSON 接口（直接请求，无需代理）
  redditBooks:
    "https://www.reddit.com/r/books/top.json?t=day&limit=15&raw_json=1",
  redditLiterature:
    "https://www.reddit.com/r/literature/top.json?t=day&limit=10&raw_json=1",
  redditPrintSF:
    "https://www.reddit.com/r/printSF/top.json?t=day&limit=10&raw_json=1",
  // Hacker News Algolia 搜索
  hackerNews:
    "https://hn.algolia.com/api/v1/search?query=literature+OR+books+OR+novel+OR+reading&tags=story&hitsPerPage=10",
  // RSS → 通过 rss2json.com 代理统一抓取（GitHub Actions 海外服务器可达）
  lithubRSS:
    "https://api.rss2json.com/v1/api.json?rss_url=https://lithub.com/feed/",
  guardianBooksRSS:
    "https://api.rss2json.com/v1/api.json?rss_url=https://www.theguardian.com/books/rss",
  nytBooksRSS:
    "https://api.rss2json.com/v1/api.json?rss_url=https://rss.nytimes.com/services/xml/rss/nyt/Books.xml",
  wwbRSS:
    "https://api.rss2json.com/v1/api.json?rss_url=https://wordswithoutborders.org/feed/",
  duanMediaRSS:
    "https://api.rss2json.com/v1/api.json?rss_url=https://theinitium.com/feed/",
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
  source_type: string; // "基于网络讨论" 或 "编辑推荐话题"
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
    signal: AbortSignal.timeout(15000),
  });
  if (!resp.ok) throw new Error(`HTTP ${resp.status} for ${url}`);
  return resp.json();
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

// ================================================================
// 数据采集 — 每个源独立 try-catch
// ================================================================

async function fetchReddit(
  url: string,
  source: string
): Promise<RawPost[]> {
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
  } catch (e) {
    console.log(`   ⚠ ${source}: ${(e as Error).message}`);
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
  } catch (e) {
    console.log(`   ⚠ Hacker News: ${(e as Error).message}`);
    return [];
  }
}

async function fetchRSS(
  url: string,
  sourceLabel: string
): Promise<RawPost[]> {
  try {
    const data = (await fetchJSON(url)) as RSSResponse;
    if (!data.items) return [];
    return data.items.map((item, i) => ({
      id: `rss-${i}-${sourceLabel.replace(/[^a-zA-Z]/g, "")}`,
      title: item.title,
      body: stripHtml(item.description || ""),
      url: item.link,
      score: 0,
      comments: 0,
      source: sourceLabel,
      author: item.author || "",
      timestamp: item.pubDate
        ? new Date(item.pubDate).getTime() / 1000
        : Date.now() / 1000,
    }));
  } catch (e) {
    console.log(`   ⚠ ${sourceLabel}: ${(e as Error).message}`);
    return [];
  }
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#?\w+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function collectAllPosts(): Promise<RawPost[]> {
  console.log("📡 开始采集数据源（每个源独立 try-catch）...\n");

  // 并行抓取所有来源
  const results = await Promise.all([
    // Reddit
    fetchReddit(SOURCES.redditBooks, "r/books"),
    fetchReddit(SOURCES.redditLiterature, "r/literature"),
    fetchReddit(SOURCES.redditPrintSF, "r/printSF"),
    // Hacker News
    fetchHackerNews(),
    // RSS（每个独立调用，内部有 try-catch）
    fetchRSS(SOURCES.lithubRSS, "LitHub"),
    fetchRSS(SOURCES.guardianBooksRSS, "The Guardian Books"),
    fetchRSS(SOURCES.nytBooksRSS, "NYT Books"),
    fetchRSS(SOURCES.wwbRSS, "Words Without Borders"),
    fetchRSS(SOURCES.duanMediaRSS, "端传媒文化"),
  ]);

  const labels = [
    "Reddit r/books",
    "Reddit r/literature",
    "Reddit r/printSF",
    "Hacker News",
    "LitHub RSS",
    "The Guardian Books RSS",
    "NYT Books RSS",
    "Words Without Borders RSS",
    "端传媒 RSS",
  ];

  const all: RawPost[] = [];
  for (let i = 0; i < results.length; i++) {
    console.log(`   ${labels[i]}: ${results[i].length} posts`);
    all.push(...results[i]);
  }

  console.log(`\n   合计: ${all.length} posts`);
  return all;
}

// ================================================================
// 数据清洗
// ================================================================

function cleanPosts(posts: RawPost[]): RawPost[] {
  console.log("\n🧹 清洗数据...");

  let cleaned = posts.filter((p) => {
    // 去广告/垃圾
    const lower = (p.title + " " + p.body).toLowerCase();
    if (
      lower.includes("buy now") ||
      lower.includes("discount") ||
      lower.includes("best price") ||
      lower.includes("sponsored")
    )
      return false;
    // 过滤少于 50 字的评论/正文（信息密度不足）
    if (stripHtml(p.body).length < 50) return false;
    // 去纯 emoji
    if (/^[\p{Emoji}\s]+$/u.test(p.title.trim())) return false;
    return true;
  });

  // 去重：标题相似度检查（Levenshtein 距离 / 较长标题长度 < 0.3）
  const unique: RawPost[] = [];
  for (const p of cleaned) {
    const dup = unique.find((u) => {
      const a = u.title.toLowerCase().replace(/[^a-z0-9]/g, "");
      const b = p.title.toLowerCase().replace(/[^a-z0-9]/g, "");
      if (!a || !b) return false;
      const longer = Math.max(a.length, b.length);
      const dist = levenshtein(a, b);
      return dist / longer < 0.3;
    });
    if (!dup) unique.push(p);
  }

  // 按 (评论数 + 点赞数) 排序，提取信息密度最高的内容
  unique.sort((a, b) => b.score + b.comments * 2 - (a.score + a.comments * 2));

  console.log(
    `   清洗后: ${unique.length} posts (删除 ${cleaned.length - unique.length} 重复/无效)`
  );
  return unique;
}

function levenshtein(a: string, b: string): number {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const m = a.length,
    n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  );
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
  return dp[m][n];
}

// ================================================================
// LLM 分析 — 两阶段生成
// ================================================================

function buildPhase1Prompt(posts: RawPost[]): string {
  const contexts = posts
    .slice(0, 25)
    .map(
      (p, i) =>
        `[${i + 1}] Source: ${p.source} | Score: ${p.score} | Comments: ${p.comments}\nTitle: ${p.title}\nBody: ${p.body.slice(0, 400)}\nURL: ${p.url}`
    )
    .join("\n\n");

  return `You are the literature trend analyst for a world literature hub.

Below are today's top literary discussions from Reddit, Hacker News, and major literary RSS feeds (LitHub, The Guardian Books, NYT Books, Words Without Borders, Duan Media). Analyze them and generate 3–5 trending topics based ONLY on the real discussions provided.

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
- Generate 3–5 topics. Quality over quantity — fewer well-analyzed topics is better than many shallow ones.
- Each field should be in English, informative, and engaging.
- source_links MUST come from the URLs provided in the context above. Do not invent URLs.
- Group related discussions from different sources into cohesive topics.
- Each field should be 2–4 sentences, concise and meaningful.`;
}

function buildSupplementPrompt(
  allPosts: RawPost[],
  missingCount: number
): string {
  const contexts = allPosts
    .slice(0, 30)
    .map(
      (p, i) =>
        `[${i + 1}] Source: ${p.source}\nTitle: ${p.title}\nBody: ${p.body.slice(0, 300)}\nURL: ${p.url}`
    )
    .join("\n\n");

  return `You are the literature trend analyst for a world literature hub.

We need ${missingCount} additional literary trending topic(s) to supplement today's report.

Below is ALL the raw material we collected today (from Reddit, Hacker News, LitHub, The Guardian Books, NYT Books, Words Without Borders, Duan Media). You may also draw on broader, well-known issues currently being discussed in the literary world (e.g., major prize announcements, notable author news, publishing industry shifts, reading culture trends).

${contexts}

Return ONLY a valid JSON object (no markdown fences):
{
  "topics": [
    {
      "title": "Compelling topic title",
      "background": "Core discussion context (2-3 sentences)",
      "perspectives": "Summarized viewpoints (2-3 sentences)",
      "insight": "Deeper literary analysis and broader cultural significance (2-3 sentences)",
      "source_links": []
    }
  ]
}

Rules:
- Generate exactly ${missingCount} topic(s).
- You may base topics on the raw material above AND/OR general trends in the literary world.
- If a topic is based on specific captured URLs, include them in source_links. Otherwise use an empty array.
- Each field should be in English, 2–4 sentences, concise and meaningful.`;
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
          max_tokens: 4096,
          messages: [{ role: "user", content: prompt }],
        }),
        signal: AbortSignal.timeout(60000),
      });
      if (resp.ok) {
        const data = (await resp.json()) as {
          content: Array<{ text: string }>;
        };
        const text = data.content?.[0]?.text || "";
        const json = extractJSON(text);
        if (json?.topics) return json.topics;
        console.log("   ⚠ Failed to parse Anthropic JSON response");
      } else {
        console.log(`   ⚠ Anthropic HTTP ${resp.status}`);
      }
    } catch (e) {
      console.log("   ⚠ Anthropic API error:", (e as Error).message);
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
          max_tokens: 4096,
          messages: [{ role: "user", content: prompt }],
        }),
        signal: AbortSignal.timeout(60000),
      });
      if (resp.ok) {
        const data = (await resp.json()) as {
          choices: Array<{ message: { content: string } }>;
        };
        const text = data.choices?.[0]?.message?.content || "";
        const json = extractJSON(text);
        if (json?.topics) return json.topics;
        console.log("   ⚠ Failed to parse OpenAI JSON response");
      } else {
        console.log(`   ⚠ OpenAI HTTP ${resp.status}`);
      }
    } catch (e) {
      console.log("   ⚠ OpenAI API error:", (e as Error).message);
    }
  }

  return [];
}

function extractJSON(text: string): { topics?: TrendTopic[] } | null {
  let cleaned = text
    .replace(/```(?:json)?\s*/gi, "")
    .replace(/```\s*$/gi, "")
    .trim();

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
// 降级模式：无 LLM 时生成 ≥3 个基础话题
// ================================================================

function generateFallbackReport(posts: RawPost[]): TrendTopic[] {
  const topPosts = posts.slice(0, 15);

  const topics: TrendTopic[] = [
    {
      title: "Today's Hottest Literary Discussion",
      background: `${topPosts.length} trending posts from literary communities across Reddit, Hacker News, and major literary RSS feeds.`,
      perspectives: topPosts
        .slice(0, 3)
        .map((p) => `"${p.title.slice(0, 80)}" — ${p.source}`)
        .join(" | "),
      insight:
        "The literary community continues to engage with both classic works and contemporary releases. Topics span genre fiction, literary criticism, and reading culture.",
      source_links: topPosts.slice(0, 5).map((p) => p.url),
      source_type: "基于网络讨论",
    },
  ];

  // 如果有足够素材，生成第二个话题
  if (topPosts.length > 5) {
    topics.push({
      title: "Literary Community Highlights",
      background: `Additional perspectives from today's global literary discourse, spanning ${topPosts.length} discussions across multiple platforms.`,
      perspectives: topPosts
        .slice(3, 6)
        .map((p) => `"${p.title.slice(0, 80)}" — ${p.source}`)
        .join(" | "),
      insight:
        "The breadth of discussion reflects the diverse interests of the global reading community, from genre fiction to poetry, from publishing industry news to reading philosophy.",
      source_links: topPosts.slice(5, 10).map((p) => p.url),
      source_type: "基于网络讨论",
    });
  }

  // 第三个话题：编辑推荐
  topics.push({
    title: "The Evolving Landscape of World Literature",
    background:
      "Across the literary world, readers and critics continue to explore the boundaries between national traditions and global literary exchange. Translation, diaspora writing, and cross-cultural narrative are reshaping what we consider 'world literature.'",
    perspectives:
      "Publishers are investing more in translated works. Readers are increasingly curious about voices from underrepresented literary traditions. Digital platforms enable cross-border literary conversations that were impossible a generation ago.",
    insight:
      "World literature today is less about a fixed canon and more about an ongoing conversation. Each new translation, each cross-cultural reading, stitches another thread into a global tapestry of storytelling.",
    source_links: [],
    source_type: "编辑推荐话题",
  });

  return topics;
}

// ================================================================
// 主流程
// ================================================================

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const noLLM = args.includes("--no-llm");

  console.log("╔══════════════════════════════════════════════════╗");
  console.log("║  Daily Literature Trends Analyzer v2             ║");
  console.log("╚══════════════════════════════════════════════════╝");
  console.log("");

  // ── Step 1: 采集 ──
  const rawPosts = await collectAllPosts();

  if (rawPosts.length === 0) {
    console.log("\n⚠ 未采集到任何数据。请检查网络连接。");
    process.exit(0);
  }

  // ── Step 2: 清洗 ──
  const cleaned = cleanPosts(rawPosts);

  // ── Step 3: AI 分析（两阶段）──
  let topics: TrendTopic[] = [];
  let llmUsed = false;

  const hasLLMKey = !!ANTHROPIC_KEY || !!OPENAI_KEY;

  if (hasLLMKey && !noLLM) {
    // ---- 第一阶段：基于真实讨论生成 ≤5 个话题 ----
    console.log("\n🤖 第一阶段：基于真实讨论提炼话题...");
    const phase1Prompt = buildPhase1Prompt(cleaned);
    console.log(`   Prompt size: ${phase1Prompt.length} chars`);

    topics = await callLLM(phase1Prompt);

    if (topics.length > 0) {
      llmUsed = true;
      // 标记为基于网络讨论
      for (const t of topics) {
        t.source_type = "基于网络讨论";
      }
      console.log(`   ✓ 第一阶段生成了 ${topics.length} 个话题`);
    } else {
      console.log("   ⚠ 第一阶段 LLM 调用失败");
    }

    // ---- 第二阶段：若不足 3 个，补充生成 ----
    if (topics.length < 3) {
      const missing = 3 - topics.length;
      console.log(
        `\n🔄 第二阶段：话题不足 3 个，基于全部素材 + 文学界普遍议题补充 ${missing} 个...`
      );

      // 短暂延迟，避免 API rate limit
      await sleep(1000);

      const supplementPrompt = buildSupplementPrompt(cleaned, missing);
      const supplement = await callLLM(supplementPrompt);

      if (supplement.length > 0) {
        llmUsed = true;
        // 标记补充话题：有 source_links 的标"基于网络讨论"，否则标"编辑推荐话题"
        for (const t of supplement) {
          t.source_type =
            t.source_links && t.source_links.length > 0
              ? "基于网络讨论"
              : "编辑推荐话题";
        }
        topics = [...topics, ...supplement];
        console.log(`   ✓ 第二阶段补充了 ${supplement.length} 个话题`);
      } else {
        console.log("   ⚠ 第二阶段 LLM 调用也失败，使用降级模式补足");
        // 降级：用 fallback 补充
        const fallback = generateFallbackReport(cleaned);
        const fallbackSupplement = fallback.filter(
          (f) => f.source_type === "编辑推荐话题"
        );
        const needed = 3 - topics.length;
        topics = [
          ...topics,
          ...fallbackSupplement.slice(0, needed),
        ];
      }
    }
  }

  // ── 无 LLM Key 或全部 LLM 调用失败 → 降级模式 ──
  if (topics.length === 0) {
    console.log(
      "\n📝 未配置 LLM API Key 或全部 LLM 调用失败，使用降级模式"
    );
    console.log(
      "   设置 ANTHROPIC_API_KEY 或 OPENAI_API_KEY 启用 AI 分析"
    );
    topics = generateFallbackReport(cleaned);
  }

  // 确保至少 3 个话题
  if (topics.length < 3) {
    const fallback = generateFallbackReport(cleaned);
    const existing = new Set(topics.map((t) => t.title.slice(0, 30)));
    for (const fb of fallback) {
      if (topics.length >= 3) break;
      if (!existing.has(fb.title.slice(0, 30))) {
        topics.push(fb);
      }
    }
  }

  // ── Step 4: 构建输出 ──
  const output: DailyTrends = {
    _meta: {
      generatedAt: new Date().toISOString(),
      sources: [
        "reddit/r/books",
        "reddit/r/literature",
        "reddit/r/printSF",
        "hackernews",
        "rss/lithub",
        "rss/guardian-books",
        "rss/nyt-books",
        "rss/wwb",
        "rss/duan-media",
      ],
      totalPostsAnalyzed: cleaned.length,
      llmUsed,
    },
    topics: topics.slice(0, 5), // 最多保留 5 个
  };

  // ── Step 5: 写文件 ──
  const dir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  if (!dryRun) {
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), "utf-8");
    console.log(`\n✅ 已写入 ${OUTPUT_PATH}`);
    console.log(
      `   话题数: ${output.topics.length} | LLM: ${llmUsed ? "Yes" : "No"}`
    );
    for (const t of output.topics) {
      console.log(
        `   [${t.source_type}] ${t.title.slice(0, 60)} (${t.source_links.length} links)`
      );
    }
  } else {
    console.log("\n🔍 [dry-run] 预览输出:");
    console.log(JSON.stringify(output, null, 2).slice(0, 2000));
  }
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
