// scripts/clients/google-books.ts — Google Books API 客户端
import type { GBVolume } from "./types";

const USER_AGENT = "WorldLiteratureHub/1.0 (academic research)";
const GOOGLE_BOOKS_API = "https://www.googleapis.com/books/v1/volumes";

export async function queryGoogleBooks(
  title: string,
  author?: string
): Promise<{ volume: GBVolume; sourceUrl: string } | null> {
  const apiKey = process.env.GOOGLE_BOOKS_API_KEY;
  if (!apiKey) return null;

  const query = author
    ? `intitle:${title}+inauthor:${author}`
    : `intitle:${title}`;

  const params = new URLSearchParams({ q: query, maxResults: "1", key: apiKey });
  const url = `${GOOGLE_BOOKS_API}?${params}`;

  try {
    const resp = await fetch(url, {
      headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
    });
    if (!resp.ok) return null;

    const data = (await resp.json()) as { items?: GBVolume[] };
    if (!data.items || data.items.length === 0) return null;

    const volume = data.items[0];
    return {
      volume,
      sourceUrl: `https://books.google.com/books?id=${volume.id}`,
    };
  } catch {
    return null;
  }
}
