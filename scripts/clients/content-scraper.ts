// scripts/clients/content-scraper.ts — 智能网页内容抓取
// 从搜索结果的顶级链接中提取正文内容
// 策略：优先标签 → 通用正文提取 → 元数据 fallback

import type { TextFragment } from "./types";
import { makeFragment } from "./fragment-collector";

const USER_AGENT =
  "Mozilla/5.0 (compatible; WorldLiteratureHub/1.0; +https://github.com/world-literature)";

const MAX_PAGES_TO_SCRAPE = 5;
const MAX_BODY_CHARS = 8000;
const SCRAPE_DELAY_MS = 2000;

// ================================================================
// HTML 工具
// ================================================================

function stripHtml(html: string): string {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, "")
    .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, "")
    .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#?\w+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** 尝试从 HTML 中提取正文 */
function extractBody(html: string): string {
  // 策略 1: <article> 标签
  const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  if (articleMatch) {
    const text = stripHtml(articleMatch[1]);
    if (text.length > 200) return text.slice(0, MAX_BODY_CHARS);
  }

  // 策略 2: <main> 标签
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) {
    const text = stripHtml(mainMatch[1]);
    if (text.length > 200) return text.slice(0, MAX_BODY_CHARS);
  }

  // 策略 3: 常见内容容器
  const contentPatterns = [
    /<div[^>]*class="[^"]*content[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
    /<div[^>]*id="[^"]*content[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
    /<div[^>]*class="[^"]*post[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
    /<div[^>]*class="[^"]*entry[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
    /<div[^>]*class="[^"]*article[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
    /<div[^>]*class="[^"]*body[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
  ];

  for (const pattern of contentPatterns) {
    const match = html.match(pattern);
    if (match) {
      const text = stripHtml(match[1]);
      if (text.length > 200) return text.slice(0, MAX_BODY_CHARS);
    }
  }

  // 策略 4: <body> 全文（去噪后）
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    const text = stripHtml(bodyMatch[1]);
    if (text.length > 100) return text.slice(0, MAX_BODY_CHARS);
  }

  return "";
}

/** 从 HTML 提取 meta description */
function extractMetaDescription(html: string): string {
  const patterns = [
    /<meta[^>]*name="description"[^>]*content="([^"]*)"/i,
    /<meta[^>]*property="og:description"[^>]*content="([^"]*)"/i,
    /<meta[^>]*name="twitter:description"[^>]*content="([^"]*)"/i,
  ];
  for (const p of patterns) {
    const m = html.match(p);
    if (m && m[1] && m[1].length > 20) return m[1];
  }
  return "";
}

// ================================================================
// 主入口
// ================================================================

export interface ScrapedPage {
  url: string;
  title: string;
  body: string;
  description: string;
  domain: string;
}

export async function scrapeUrl(url: string): Promise<ScrapedPage | null> {
  try {
    const resp = await fetch(url, {
      headers: { "User-Agent": USER_AGENT, Accept: "text/html" },
      redirect: "follow",
    });
    if (!resp.ok) return null;

    const html = await resp.text();
    const body = extractBody(html);
    const description = extractMetaDescription(html);

    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const title = titleMatch ? stripHtml(titleMatch[1]) : url;

    const domain = new URL(url).hostname.replace("www.", "");

    // 至少要有一个有意义的内容
    if (body.length < 80 && description.length < 80) return null;

    return { url, title, body, description, domain };
  } catch {
    return null;
  }
}

export async function scrapeTopResults(
  urls: string[],
  maxPages = MAX_PAGES_TO_SCRAPE
): Promise<ScrapedPage[]> {
  const results: ScrapedPage[] = [];

  for (const url of urls.slice(0, maxPages)) {
    // 跳过不可抓取的域名
    if (url.includes("pdf") || url.includes("youtube.com") || url.includes("facebook.com")) continue;

    const page = await scrapeUrl(url);
    if (page) {
      results.push(page);
    }

    // 限速
    if (urls.indexOf(url) < maxPages - 1) {
      await new Promise((r) => setTimeout(r, SCRAPE_DELAY_MS));
    }
  }

  return results;
}

export function scrapedPagesToFragments(
  pages: ScrapedPage[]
): TextFragment[] {
  return pages.map((p) => {
    const text = [p.description, p.body].filter((t) => t.length > 50).join("\n\n");
    return makeFragment(
      text.slice(0, 5000),
      `Scraped: ${p.domain}`,
      p.url,
      "reference"
    );
  });
}
