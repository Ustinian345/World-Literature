// scripts/clients/gutenberg.ts — Project Gutenberg 客户端
// 使用 Gutendex JSON API（开放，无需认证）
import type { GutenbergData } from "./types";

const USER_AGENT = "WorldLiteratureHub/1.0 (academic research)";
const GUTENDEX_API = "https://gutendex.com/books";

export async function queryGutenberg(
  title: string,
  author?: string
): Promise<GutenbergData | null> {
  const query = author ? `${title} ${author}` : title;
  const url = `${GUTENDEX_API}?search=${encodeURIComponent(query)}`;

  try {
    const resp = await fetch(url, {
      headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
    });
    if (!resp.ok) return null;

    const data = (await resp.json()) as {
      count: number;
      results: Array<{
        id: number;
        title: string;
        authors: Array<{ name: string }>;
        subjects: string[];
        formats: Record<string, string>;
      }>;
    };

    if (!data.results || data.results.length === 0) return null;

    const book = data.results[0];
    return {
      id: book.id,
      title: book.title,
      authors: book.authors || [],
      subjects: book.subjects || [],
      sourceUrl: `https://www.gutenberg.org/ebooks/${book.id}`,
    };
  } catch {
    return null;
  }
}
