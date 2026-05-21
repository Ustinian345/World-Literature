// scripts/clients/douban.ts — 豆瓣读书 API/爬虫客户端
// 策略 A: 直接 API（已知 doubanId）
// 策略 B: 搜索 + 页面解析（通过 title/author 搜索）
import type { DoubanBookData } from "./types";

const USER_AGENT =
  "Mozilla/5.0 (compatible; WorldLiteratureHub/1.0; +https://github.com/world-literature)";

/** 按 doubanId 直接查询（策略 A） */
export async function queryDoubanById(
  doubanId: string
): Promise<DoubanBookData | null> {
  const url = `https://api.douban.com/v2/book/${doubanId}`;

  try {
    const resp = await fetch(url, {
      headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
    });
    if (!resp.ok) return null;

    const data = (await resp.json()) as {
      title: string;
      author: string[];
      summary: string;
      rating?: { average: number };
      tags?: Array<{ name: string }>;
      id: string;
    };

    return {
      title: data.title,
      author: (data.author || []).join(", "),
      summary: data.summary || "",
      rating: data.rating?.average,
      tags: (data.tags || []).map((t) => t.name),
      sourceUrl: `https://book.douban.com/subject/${doubanId}/`,
    };
  } catch {
    return null;
  }
}

/** 按书名搜索（策略 B） */
export async function searchDoubanByTitle(
  title: string,
  author?: string
): Promise<DoubanBookData | null> {
  const query = author ? `${title} ${author}` : title;
  const searchUrl = `https://book.douban.com/subject_search?search_text=${encodeURIComponent(query)}`;

  try {
    const resp = await fetch(searchUrl, {
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "text/html",
      },
    });
    if (!resp.ok) return null;

    const html = await resp.text();

    // 从搜索结果页提取第一本书的链接
    const linkMatch = html.match(/<a[^>]*href="\/subject\/(\d+)\/"[^>]*>/);
    if (!linkMatch) return null;

    const doubanId = linkMatch[1];

    // 直接用 ID 查询（不走页面解析，API 更稳定）
    return queryDoubanById(doubanId);
  } catch {
    return null;
  }
}
