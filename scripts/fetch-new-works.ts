#!/usr/bin/env npx tsx
// ================================================================
// 每日新文抓取 — 多语言均衡 RSS + API 聚合
// 目标比例：中文 40% / 英文 40% / 日韩及其他 20%
// 用法: npx tsx scripts/fetch-new-works.ts [--dry-run]
// ================================================================

import * as fs from "fs";
import * as path from "path";

const OUTPUT_PATH = path.join(__dirname, "..", "data", "daily-new-works.json");
const ARCHIVE_DIR = path.join(__dirname, "..", "data", "new-works-archive");
const USER_AGENT = "WorldLiteratureBot/1.0 (+https://github.com/world-literature)";

interface Article {
  id: string;
  title: string;
  author: string;
  source: string;
  sourceUrl: string;
  excerpt: string;
  criticism: string;
  language: string;
  tags: string[];
  publishedAt: string;
  collectedAt: string;
}

// ================================================================
// 数据源配置 — 按语言分组，每源含名称/RSS/备用URL
// ================================================================

interface SourceDef { name: string; rss?: string; fallbackUrl?: string; lang: string; category: string; maxArticles: number; }

const SOURCES: SourceDef[] = [
  // ---- 中文来源 (zh) ----
  { name: "澎湃新闻", rss: "https://www.thepaper.cn/rss.jsp", fallbackUrl: "https://www.thepaper.cn", lang: "zh", category: "时事文化", maxArticles: 2 },
  { name: "新华网文化", rss: "http://www.xinhuanet.com/culture/rss.xml", fallbackUrl: "http://www.xinhuanet.com/culture/", lang: "zh", category: "文化新闻", maxArticles: 2 },
  { name: "自由微信文学", rss: "https://chuansong.me/rss/feed/category/literature", fallbackUrl: "https://chuansong.me/", lang: "zh", category: "文学精选", maxArticles: 2 },
  { name: "知乎热门文学", fallbackUrl: "https://www.zhihu.com/topic/19551221/hot", lang: "zh", category: "文学讨论", maxArticles: 2 },

  // ---- 英文来源 (en) ----
  { name: "The New Yorker", rss: "https://www.newyorker.com/feed/fiction", lang: "en", category: "fiction", maxArticles: 2 },
  { name: "Literary Hub", rss: "https://lithub.com/feed/", lang: "en", category: "literary", maxArticles: 2 },
  { name: "Granta", rss: "https://granta.com/feed/", lang: "en", category: "literary", maxArticles: 2 },
  { name: "The Paris Review", rss: "https://www.theparisreview.org/feed/", lang: "en", category: "literary", maxArticles: 2 },
  { name: "Hacker News", fallbackUrl: "hn", lang: "en", category: "tech-culture", maxArticles: 2 },

  // ---- 日韩及其他地区 (ja/ko/other) ----
  { name: "Words Without Borders", rss: "https://wordswithoutborders.org/feed/", lang: "other", category: "translation", maxArticles: 2 },
  { name: "Asymptote Journal", rss: "https://www.asymptotejournal.com/feed/", lang: "other", category: "translation", maxArticles: 2 },
  { name: "Literary Hub Asia", rss: "https://lithub.com/tag/asian-literature/feed/", lang: "other", category: "asian-lit", maxArticles: 2 },
];

// 配额：中文 max 4，英文 max 4，其他 max 2 → 总数 ≤ 10
const QUOTAS: Record<string, number> = { zh: 4, en: 4, other: 2 };

// ================================================================
// 直接 RSS XML 抓取（中文源优先使用，不走代理）
// ================================================================

async function fetchRSSDirect(src: SourceDef): Promise<Article[]> {
  if (!src.rss) return [];
  try {
    const resp = await fetch(src.rss, {
      headers: { "User-Agent": USER_AGENT, Accept: "application/xml;q=0.9,text/xml;q=0.8,*/*;q=0.7" },
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
  // Match <item>...</item> blocks
  const itemRegex = /<item>([\s\S]*?)<\/item>/gi;
  let match;
  let count = 0;
  while ((match = itemRegex.exec(xml)) !== null && count < src.maxArticles) {
    const block = match[1];
    const title = extractTag(block, "title");
    const link = extractTag(block, "link");
    const desc = extractTag(block, "description");
    const pubDate = extractTag(block, "pubDate");
    const author = extractTag(block, "author") || extractTag(block, "dc:creator");

    if (!title || title.length < 8) continue;

    articles.push({
      id: `${src.lang}-rssd-${Date.now()}-${count}`,
      title: stripHtml(title),
      author: author || src.name,
      source: src.name,
      sourceUrl: link || "",
      excerpt: stripHtml(desc || "").slice(0, 500),
      criticism: "",
      language: src.lang,
      tags: [src.category],
      publishedAt: pubDate || new Date().toISOString(),
      collectedAt: new Date().toISOString(),
    });
    count++;
  }

  // Also try Atom format: <entry>
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
      articles.push({
        id: `${src.lang}-atom-${Date.now()}-${articles.length}`,
        title: stripHtml(title),
        author: author || src.name,
        source: src.name,
        sourceUrl: link || "",
        excerpt: stripHtml(desc || "").slice(0, 500),
        criticism: "",
        language: src.lang,
        tags: [src.category],
        publishedAt: pubDate || new Date().toISOString(),
        collectedAt: new Date().toISOString(),
      });
    }
  }
  return articles;
}

function extractTag(xml: string, tag: string): string {
  const regex = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`, "i");
  const cdata = xml.match(regex);
  if (cdata) return cdata[1];

  const plain = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"));
  return plain?.[1] || "";
}

// ================================================================
// RSS 抓取 (via rss2json proxy — 备用)
// ================================================================

async function fetchRSS(src: SourceDef): Promise<Article[]> {
  if (!src.rss) return [];
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(src.rss)}`;
  try {
    const resp = await fetch(apiUrl, {
      headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
      signal: AbortSignal.timeout(15000),
    });
    if (!resp.ok) return [];
    const data = (await resp.json()) as { items?: Array<{ title: string; author: string; link: string; description: string; pubDate: string; content?: string }> };
    if (!data.items) return [];
    return data.items.slice(0, src.maxArticles).map((item, i) => ({
      id: `${src.lang}-rss-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      title: item.title || "Untitled",
      author: item.author || "Unknown",
      source: src.name,
      sourceUrl: item.link || "",
      excerpt: stripHtml(item.description || item.content || "").slice(0, 500),
      criticism: "",
      language: src.lang,
      tags: [src.category],
      publishedAt: item.pubDate || new Date().toISOString(),
      collectedAt: new Date().toISOString(),
    }));
  } catch {
    return [];
  }
}

// ================================================================
// 直接 fetch (无 RSS 的源)
// ================================================================

async function fetchDirect(src: SourceDef): Promise<Article[]> {
  if (!src.fallbackUrl) return [];
  const url = src.fallbackUrl;
  try {
    const resp = await fetch(url, {
      headers: { "User-Agent": USER_AGENT, Accept: "text/html" },
      signal: AbortSignal.timeout(12000),
    });
    if (!resp.ok) return [];
    const html = await resp.text();
    return extractArticlesFromHTML(html, src);
  } catch {
    return [];
  }
}

function extractArticlesFromHTML(html: string, src: SourceDef): Article[] {
  const articles: Article[] = [];
  const seen = new Set<string>();

  // Multiple patterns to extract article links + titles
  const patterns: RegExp[] = [
    // Pattern 1: h2/h3 with anchor (most common)
    /<h[23][^>]*>\s*<a[^>]*href="([^"]*)"[^>]*>([^<]+)<\/a>\s*<\/h[23]>/gi,
    // Pattern 2: anchor with title class
    /<a[^>]*class="[^"]*title[^"]*"[^>]*href="([^"]*)"[^>]*>([^<]+)<\/a>/gi,
    // Pattern 3: list items with links (Chinese sites often use this)
    /<li[^>]*>\s*<a[^>]*href="([^"]*)"[^>]*>([^<]{10,80})<\/a>/gi,
    // Pattern 4: div.article-list style
    /<a[^>]*href="([^"]*\/\d{4}\/[^"]*)"[^>]*>([^<]{10,80})<\/a>/gi,
  ];

  for (const pattern of patterns) {
    if (articles.length >= src.maxArticles) break;
    let match;
    while ((match = pattern.exec(html)) !== null && articles.length < src.maxArticles) {
      const url = match[1];
      const title = stripHtml(match[2]);
      // Quality filters: reject noise titles
      if (title.length < 10) continue;
      // Reject titles that are just navigation/menu items
      if (/^(HOME|ABOUT|CONTACT|LOGIN|SIGN|MENU|IP |SIXTH|搜索|首页|关于|联系|登录|注册|更多|全部)$/i.test(title)) continue;
      if (/^(IP |SIXTH|FOLLOW|SUBSCRIBE|ADVERTISE|TERMS|PRIVACY)/i.test(title)) continue;
      // Chinese titles should have meaningful Chinese content
      if (src.lang === "zh" && !/[一-鿿]{4}/.test(title)) continue;
      // Reject URLs as titles
      if (/^https?:\/\//.test(title)) continue;
      const key = title.slice(0, 30);
      if (seen.has(key)) continue;
      seen.add(key);

      // Try to find surrounding paragraph for excerpt
      const pos = match.index;
      const surrounding = html.slice(pos, pos + 3000);
      const paraMatch = surrounding.match(/<p[^>]*>([^<]{50,400})<\/p>/i);

      articles.push({
        id: `${src.lang}-html-${Date.now()}-${articles.length}`,
        title,
        author: src.name,
        source: src.name,
        sourceUrl: url.startsWith("http") ? url : (src.fallbackUrl ? new URL(url, src.fallbackUrl).href : url),
        excerpt: paraMatch ? stripHtml(paraMatch[1]).slice(0, 500) : "",
        criticism: "",
        language: src.lang,
        tags: [src.category],
        publishedAt: new Date().toISOString(),
        collectedAt: new Date().toISOString(),
      });
    }
  }
  return articles;
}

// ================================================================
// Hacker News API
// ================================================================

async function fetchHNArticles(src: SourceDef): Promise<Article[]> {
  try {
    const resp = await fetch(
      "https://hn.algolia.com/api/v1/search?query=literature+OR+books+OR+novel+OR+reading&tags=story&hitsPerPage=5",
      { headers: { "User-Agent": USER_AGENT }, signal: AbortSignal.timeout(10000) }
    );
    if (!resp.ok) return [];
    const data = (await resp.json()) as { hits?: Array<{ title: string; author: string; url: string; objectID: string; created_at: string }> };
    if (!data.hits) return [];
    return data.hits.slice(0, src.maxArticles).map((hit) => ({
      id: `en-hn-${hit.objectID}`,
      title: hit.title || "Untitled",
      author: hit.author || "Unknown",
      source: src.name,
      sourceUrl: hit.url || `https://news.ycombinator.com/item?id=${hit.objectID}`,
      excerpt: "",
      criticism: "",
      language: "en",
      tags: ["科技与文化"],
      publishedAt: hit.created_at || new Date().toISOString(),
      collectedAt: new Date().toISOString(),
    }));
  } catch {
    return [];
  }
}

// ================================================================
// 工具函数
// ================================================================

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#?\w+;/g, " ")
    .replace(/\s+/g, " ").trim();
}

function tagArticles(articles: Article[]): Article[] {
  return articles.map((a) => {
    if (a.tags.length > 1) return a; // already tagged beyond category
    const text = (a.title + " " + a.excerpt).toLowerCase();
    const tags = [...a.tags];
    if (/fiction|novel|story|小说|虚构/.test(text)) tags.push("虚构文学");
    if (/poem|poetry|诗歌|诗|俳句/.test(text)) tags.push("诗歌");
    if (/review|criticism|评论|书评/.test(text)) tags.push("文学评论");
    if (/essay|散文|essay|随笔/.test(text)) tags.push("散文");
    if (/translation|翻译|译/.test(text)) tags.push("翻译文学");
    if (tags.length === 1) tags.push("当代文学");
    return { ...a, tags };
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
// 主流程 — 按语言分组抓取 + 配额控制
// ================================================================

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");

  console.log("╔══════════════════════════════════════════════════╗");
  console.log("║  Daily New Works — Multilingual Fetcher         ║");
  console.log("╚══════════════════════════════════════════════════╝\n");

  // 按语言分组
  const sourcesByLang: Record<string, SourceDef[]> = {};
  for (const src of SOURCES) {
    (sourcesByLang[src.lang] ??= []).push(src);
  }

  const allByLang: Record<string, Article[]> = {};

  // ---- 阶段一：按语言抓取 ----
  for (const [lang, sources] of Object.entries(sourcesByLang)) {
    const langLabel = { zh: "中文", en: "英文", other: "日韩/其他" }[lang] || lang;
    console.log(`\n📡 [${langLabel}] 抓取 ${sources.length} 个数据源...`);
    const collected: Article[] = [];

    for (const src of sources) {
      let articles: Article[] = [];
      if (src.fallbackUrl === "hn") {
        articles = await fetchHNArticles(src);
      } else if (lang === "zh") {
        // 中文源：直接 RSS XML → 网页爬取 → rss2json 代理
        articles = await fetchRSSDirect(src);
        if (articles.length === 0 && src.fallbackUrl) {
          console.log(`   ⚠ RSS 直连失败，尝试网页抓取...`);
          articles = await fetchDirect(src);
        }
        if (articles.length === 0 && src.rss) {
          console.log(`   ⚠ 网页抓取失败，尝试 rss2json 代理...`);
          articles = await fetchRSS(src);
        }
      } else {
        // 非中文源：rss2json 代理优先
        if (src.rss) articles = await fetchRSS(src);
        if (articles.length === 0 && src.fallbackUrl && src.fallbackUrl !== "hn") {
          articles = await fetchDirect(src);
        }
      }
      console.log(`   ${src.name}: ${articles.length} 篇`);
      collected.push(...articles);
      await sleep(600);
    }

    allByLang[lang] = collected;
  }

  // ---- 阶段二：配额裁剪 + 降级补位 ----
  const final: Article[] = [];
  const langOrder = ["zh", "en", "other"];

  for (const lang of langOrder) {
    const quota = QUOTAS[lang] || 3;
    let articles = allByLang[lang] || [];

    // 如果该语言不足，用英文补位
    if (articles.length < quota && lang !== "en") {
      const enArticles = (allByLang["en"] || []).filter((a) => !final.some((f) => f.id === a.id));
      const shortage = quota - articles.length;
      const fillers = enArticles.slice(0, shortage);
      if (fillers.length > 0) {
        console.log(`   🔄 ${lang} 不足 ${shortage} 篇，用英文补位`);
        articles = [...articles, ...fillers];
      }
    }

    // 裁剪到配额
    const selected = articles.slice(0, quota);
    final.push(...selected);
  }

  // ---- 阶段三：去重 + 标签 ----
  const tagged = tagArticles(final);
  const unique = dedupeByTitle(tagged);

  // ---- 阶段四：统计 ----
  const counts: Record<string, number> = {};
  for (const a of unique) {
    counts[a.language] = (counts[a.language] || 0) + 1;
  }
  console.log(`\n📊 最终结果: ${unique.length} 篇`);
  for (const [lang, cnt] of Object.entries(counts)) {
    const pct = ((cnt / unique.length) * 100).toFixed(0);
    const label = { zh: "中文", en: "英文", other: "日韩/其他" }[lang] || lang;
    console.log(`   ${label}: ${cnt} 篇 (${pct}%)`);
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
    console.log(JSON.stringify(output, null, 2).slice(0, 2000));
  }
}

main().catch((err) => { console.error("Fatal:", err); process.exit(1); });
