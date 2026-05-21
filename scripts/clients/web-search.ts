// scripts/clients/web-search.ts — 全网搜索客户端（Serper.dev / 可扩展）
// 配置: SERPER_API_KEY=... 或 GOOGLE_CSE_KEY + GOOGLE_CSE_CX
// 速率: 1 req/s（免费版限制），结果自动缓存

import type { TextFragment } from "./types";
import { makeFragment } from "./fragment-collector";
import * as fs from "fs";
import * as path from "path";

const USER_AGENT = "WorldLiteratureHub/1.0 (academic research)";
const CACHE_PATH = path.join(__dirname, "..", "..", "data", "search-cache.json");
const CACHE_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

// ================================================================
// 类型
// ================================================================

export interface SearchResult {
  title: string;
  link: string;
  snippet: string;
  source?: string;
  position: number;
}

export interface SearchResponse {
  query: string;
  results: SearchResult[];
  totalResults?: number;
  searchUrl?: string;
}

// ================================================================
// 缓存
// ================================================================

interface CacheEntry {
  results: SearchResult[];
  searchedAt: string;
  query: string;
}

function loadCache(): Record<string, CacheEntry> {
  try {
    if (fs.existsSync(CACHE_PATH)) {
      return JSON.parse(fs.readFileSync(CACHE_PATH, "utf-8"));
    }
  } catch { /* ignore */ }
  return {};
}

function saveCache(cache: Record<string, CacheEntry>): void {
  const dir = path.dirname(CACHE_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2), "utf-8");
}

function cacheKey(query: string): string {
  return query.toLowerCase().trim();
}

function getCached(query: string): SearchResult[] | null {
  const cache = loadCache();
  const entry = cache[cacheKey(query)];
  if (!entry) return null;
  const age = Date.now() - new Date(entry.searchedAt).getTime();
  if (age > CACHE_MAX_AGE_MS) return null;
  return entry.results;
}

function setCache(query: string, results: SearchResult[]): void {
  const cache = loadCache();
  cache[cacheKey(query)] = {
    results,
    searchedAt: new Date().toISOString(),
    query,
  };
  saveCache(cache);
}

// ================================================================
// Serper.dev (Google Search API)
// ================================================================

async function searchSerperDev(query: string): Promise<SearchResponse | null> {
  const apiKey = process.env.SERPER_API_KEY;
  if (!apiKey) return null;

  const url = "https://google.serper.dev/search";

  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "X-API-KEY": apiKey,
        "User-Agent": USER_AGENT,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: query,
        gl: "us",
        hl: "en",
        num: 10,
      }),
    });

    if (!resp.ok) return null;

    const data = (await resp.json()) as {
      organic?: Array<{
        title: string;
        link: string;
        snippet: string;
        position: number;
      }>;
      searchParameters?: { q: string };
    };

    const results: SearchResult[] = (data.organic || []).map((r) => ({
      title: r.title,
      link: r.link,
      snippet: r.snippet || "",
      position: r.position,
    }));

    return {
      query: data.searchParameters?.q || query,
      results,
      totalResults: results.length,
      searchUrl: `https://www.google.com/search?q=${encodeURIComponent(query)}`,
    };
  } catch {
    return null;
  }
}

// ================================================================
// DuckDuckGo Instant Answer (free fallback, no API key needed)
// ================================================================

async function searchDuckDuckGo(query: string): Promise<SearchResponse | null> {
  const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_html=1`;

  try {
    const resp = await fetch(url, {
      headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
    });
    if (!resp.ok) return null;

    const data = (await resp.json()) as {
      Abstract?: string;
      AbstractURL?: string;
      AbstractSource?: string;
      RelatedTopics?: Array<{ Text?: string; FirstURL?: string }>;
    };

    const results: SearchResult[] = [];

    if (data.Abstract) {
      results.push({
        title: data.AbstractSource || "DuckDuckGo",
        link: data.AbstractURL || "",
        snippet: data.Abstract,
        position: 1,
      });
    }

    for (const topic of data.RelatedTopics || []) {
      if (topic.Text && topic.FirstURL) {
        results.push({
          title: topic.Text.split(" - ")[0] || topic.Text.slice(0, 60),
          link: topic.FirstURL,
          snippet: topic.Text,
          position: results.length + 1,
        });
      }
    }

    if (results.length === 0) return null;

    return {
      query,
      results: results.slice(0, 10),
      totalResults: results.length,
    };
  } catch {
    return null;
  }
}

// ================================================================
// 主入口：多策略搜索
// ================================================================

/** 构建多语言搜索查询 */
export function buildSearchQueries(
  title: string,
  author: string,
  nativeTitle?: string
): Array<{ query: string; label: string }> {
  const queries: Array<{ query: string; label: string }> = [];

  // EN: literary analysis
  queries.push({
    query: `"${title}" ${author} plot summary characters analysis themes`,
    label: "EN literary analysis",
  });

  // EN: study guides
  queries.push({
    query: `"${title}" ${author} study guide sparknotes litcharts summary`,
    label: "EN study guides",
  });

  // EN: Wikipedia + encyclopedia
  queries.push({
    query: `"${title}" ${author} wikipedia plot synopsis`,
    label: "EN encyclopedia",
  });

  // CN: Chinese analysis (if native title)
  if (nativeTitle || /[一-鿿]/.test(title)) {
    const cnTitle = nativeTitle || title;
    queries.push({
      query: `"${cnTitle}" ${author} 人物分析 情节概要 主题`,
      label: "CN literary analysis",
    });
    queries.push({
      query: `"${cnTitle}" 豆瓣 书评 分析`,
      label: "CN Douban reviews",
    });
  }

  return queries;
}

/** 搜索网页并返回匹配高质量来源的结果 */
export async function searchWeb(
  title: string,
  author: string,
  nativeTitle?: string
): Promise<{ query: string; results: SearchResult[] } | null> {
  const queries = buildSearchQueries(title, author, nativeTitle);

  for (const q of queries) {
    // 先检查缓存
    const cached = getCached(q.query);
    if (cached) {
      return { query: q.label, results: cached };
    }

    // 尝试 Serper.dev
    const serperResult = await searchSerperDev(q.query);
    if (serperResult && serperResult.results.length > 0) {
      setCache(q.query, serperResult.results);
      return { query: q.label, results: serperResult.results };
    }

    // Fallback: DuckDuckGo
    const ddgResult = await searchDuckDuckGo(q.query);
    if (ddgResult && ddgResult.results.length > 0) {
      setCache(q.query, ddgResult.results);
      return { query: q.label, results: ddgResult.results };
    }

    // 限速（免费 API 配额保护）
    await new Promise((r) => setTimeout(r, 1000));
  }

  return null;
}

/** 过滤高质量来源 */
export function filterQualityResults(results: SearchResult[]): SearchResult[] {
  const qualityDomains = [
    "wikipedia.org",
    "britannica.com",
    "sparknotes.com",
    "litcharts.com",
    "cliffsnotes.com",
    "goodreads.com",
    "douban.com",
    "baike.baidu.com",
    "gutenberg.org",
    "poetryfoundation.org",
    "theparisreview.org",
    "lithub.com",
    "bookrags.com",
    "shmoop.com",
    "gradesaver.com",
    "supersummary.com",
    "literaryhub.com",
    "nybooks.com",
    "newyorker.com",
    "theguardian.com",
    "pen.org",
    "nobelprize.org",
  ];

  const scored = results.map((r) => {
    const domain = new URL(r.link).hostname.replace("www.", "");
    const isQuality = qualityDomains.some((d) => domain.includes(d));
    return { ...r, source: domain, score: isQuality ? 2 : 1 };
  });

  scored.sort((a, b) => b.score - a.score || a.position - b.position);
  return scored;
}

/** 将搜索结果转为 TextFragment 数组 */
export function searchResultsToFragments(
  results: SearchResult[],
  queryLabel: string
): TextFragment[] {
  return results.map((r, i) =>
    makeFragment(
      `[${r.title}] ${r.snippet}`,
      `Web Search: ${queryLabel} (#${i + 1})`,
      r.link,
      "reference"
    )
  );
}
