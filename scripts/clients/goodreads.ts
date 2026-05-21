// scripts/clients/goodreads.ts — Goodreads 客户端
// Goodreads 公开 API 已关闭，使用 JSON-LD 结构化数据解析
import type { GoodreadsData } from "./types";

const USER_AGENT =
  "Mozilla/5.0 (compatible; WorldLiteratureHub/1.0; +https://github.com/world-literature)";

/** 按书名搜索 Goodreads */
export async function queryGoodreads(
  title: string,
  author?: string
): Promise<GoodreadsData | null> {
  const query = author ? `${title} ${author}` : title;
  const searchUrl = `https://www.goodreads.com/search?q=${encodeURIComponent(query)}`;

  try {
    const resp = await fetch(searchUrl, {
      headers: { "User-Agent": USER_AGENT, Accept: "text/html" },
    });
    if (!resp.ok) return null;

    const html = await resp.text();

    // 提取第一个搜索结果的 book ID
    const linkMatch = html.match(/\/book\/show\/(\d+)/);
    if (!linkMatch) return null;

    const bookId = linkMatch[1];
    const bookUrl = `https://www.goodreads.com/book/show/${bookId}`;

    const bookResp = await fetch(bookUrl, {
      headers: { "User-Agent": USER_AGENT, Accept: "text/html" },
    });
    if (!bookResp.ok) return null;

    const bookHtml = await bookResp.text();

    // 提取 JSON-LD 结构化数据
    const jsonLdMatch = bookHtml.match(
      /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/
    );
    let description = "";
    let genres: string[] = [];
    let rating: number | undefined;

    if (jsonLdMatch) {
      try {
        const ld = JSON.parse(jsonLdMatch[1]);
        description = ld.description || "";
        genres = ld.genre || [];
        if (ld.aggregateRating?.ratingValue) {
          rating = parseFloat(ld.aggregateRating.ratingValue);
        }
      } catch { /* ignore parse errors */ }
    }

    // 如果 JSON-LD 失败，尝试 Open Graph meta 标签
    if (!description) {
      const ogMatch = bookHtml.match(
        /<meta[^>]*property="og:description"[^>]*content="([^"]*)"/
      );
      if (ogMatch) description = ogMatch[1];
    }

    // 提取 genre 标签
    if (genres.length === 0) {
      const genreMatches = Array.from(bookHtml.matchAll(
        /<a[^>]*href="\/genres\/[^"]*"[^>]*>([^<]+)<\/a>/g
      ));
      for (const gm of genreMatches) {
        const g = gm[1].trim();
        if (g && !genres.includes(g)) genres.push(g);
      }
    }

    return { description, genres, rating, sourceUrl: bookUrl };
  } catch {
    return null;
  }
}
