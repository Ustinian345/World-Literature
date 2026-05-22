#!/usr/bin/env npx tsx
// ================================================================
// 每日新文抓取 - RSS + API 聚合
// 用法: npx tsx scripts/fetch-new-works.ts [--dry-run] [--source=xxx]
// ================================================================

import * as fs from "fs";
import * as path from "path";

const OUTPUT_PATH = path.join(__dirname, "..", "data", "daily-new-works.json");
const ARCHIVE_DIR = path.join(__dirname, "..", "data", "new-works-archive");
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY || "";
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

interface DailyNewWorks {
  date: string;
  articles: Article[];
}

const RSS_SOURCES = [
  { name: "The New Yorker Fiction", url: "https://www.newyorker.com/feed/fiction", lang: "en", cat: "fiction" },
  { name: "Literary Hub", url: "https://lithub.com/feed/", lang: "en", cat: "literary" },
  { name: "Granta", url: "https://granta.com/feed/", lang: "en", cat: "literary" },
  { name: "The Paris Review", url: "https://www.theparisreview.org/feed/", lang: "en", cat: "literary" },
];

async function fetchRSS(sourceUrl: string): Promise<Article[]> {
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(sourceUrl)}`;
  try {
    const resp = await fetch(apiUrl, {
      headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
      signal: AbortSignal.timeout(15000),
    });
    if (!resp.ok) return [];
    const data = (await resp.json()) as { items?: Array<{ title: string; author: string; link: string; description: string; pubDate: string }> };
    if (!data.items) return [];
    return data.items.slice(0, 4).map((item, i) => ({
      id: `rss-${Date.now()}-${i}`,
      title: item.title || "Untitled",
      author: item.author || "Unknown",
      source: "",
      sourceUrl: item.link || "",
      excerpt: stripHtml(item.description || "").slice(0, 500),
      criticism: "",
      language: "en",
      tags: [],
      publishedAt: item.pubDate || new Date().toISOString(),
      collectedAt: new Date().toISOString(),
    }));
  } catch {
    return [];
  }
}

async function fetchHNArticles(): Promise<Article[]> {
  try {
    const resp = await fetch(
      "https://hn.algolia.com/api/v1/search?query=literature+OR+fiction+OR+novel+OR+books&tags=story&hitsPerPage=5",
      { headers: { "User-Agent": USER_AGENT }, signal: AbortSignal.timeout(10000) }
    );
    if (!resp.ok) return [];
    const data = (await resp.json()) as { hits?: Array<{ title: string; author: string; url: string; objectID: string; created_at: string }> };
    if (!data.hits) return [];
    return data.hits.slice(0, 3).map((hit) => ({
      id: `hn-${hit.objectID}`,
      title: hit.title || "Untitled",
      author: hit.author || "Unknown",
      source: "Hacker News",
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

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\s+/g, " ").trim();
}

function tagArticles(articles: Article[]): Article[] {
  const tagMap: Record<string, string[]> = {
    fiction: ["短篇小说", "虚构文学"],
    literary: ["文学评论", "当代文学"],
  };
  return articles.map((a) => {
    if (a.tags.length > 0) return a;
    const cats = [a.title.toLowerCase(), a.excerpt.toLowerCase()].join(" ");
    const tags: string[] = [];
    if (/fiction|novel|story|小说/.test(cats)) tags.push("虚构文学", "短篇小说");
    if (/poem|poetry|诗歌|诗/.test(cats)) tags.push("诗歌");
    if (/review|criticism|评论/.test(cats)) tags.push("文学评论");
    if (/essay|散文|essay/.test(cats)) tags.push("散文");
    if (tags.length === 0) tags.push("当代文学");
    return { ...a, tags };
  });
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");

  console.log("╔══════════════════════════════════════════════════╗");
  console.log("║  Daily New Works Fetcher                        ║");
  console.log("╚══════════════════════════════════════════════════╝\n");

  const allArticles: Article[] = [];

  // RSS sources
  for (const src of RSS_SOURCES) {
    console.log(`📡 Fetching ${src.name}...`);
    const articles = await fetchRSS(src.url);
    const tagged = articles.map((a) => ({ ...a, source: src.name, language: src.lang }));
    console.log(`   ${tagged.length} articles`);
    allArticles.push(...tagged);
    await sleep(500);
  }

  // Hacker News
  console.log("📡 Fetching Hacker News...");
  const hnArticles = await fetchHNArticles();
  console.log(`   ${hnArticles.length} articles`);
  allArticles.push(...hnArticles);

  // Tagging
  const tagged = tagArticles(allArticles);

  // Deduplicate by title similarity
  const unique = dedupeByTitle(tagged);
  console.log(`\n📊 Total: ${tagged.length} → ${unique.length} unique articles`);

  const today = new Date().toISOString().slice(0, 10);
  const output: DailyNewWorks = { date: today, articles: unique.slice(0, 10) };

  if (!dryRun) {
    // Main output
    const dir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), "utf-8");
    console.log(`\n✅ Written ${OUTPUT_PATH} (${output.articles.length} articles)`);

    // Archive
    if (!fs.existsSync(ARCHIVE_DIR)) fs.mkdirSync(ARCHIVE_DIR, { recursive: true });
    fs.writeFileSync(
      path.join(ARCHIVE_DIR, `${today}.json`),
      JSON.stringify(output, null, 2),
      "utf-8"
    );
    console.log(`📁 Archived to new-works-archive/${today}.json`);
  } else {
    console.log("\n🔍 [dry-run] Preview:");
    console.log(JSON.stringify(output, null, 2).slice(0, 2000));
  }
}

function dedupeByTitle(articles: Article[]): Article[] {
  const seen = new Set<string>();
  return articles.filter((a) => {
    const key = a.title.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 50);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function sleep(ms: number) { return new Promise((r) => setTimeout(r, ms)); }

main().catch((err) => { console.error("Fatal:", err); process.exit(1); });
