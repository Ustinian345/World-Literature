// scripts/clients/open-library.ts — Open Library API 客户端
import type { OLSearchDoc, OLWork } from "./types";

const OPENLIBRARY_SEARCH = "https://openlibrary.org/search.json";
const OPENLIBRARY_WORK = "https://openlibrary.org/works";
const USER_AGENT = "WorldLiteratureHub/1.0 (academic research)";

interface OLSearchResult {
  numFound: number;
  docs: OLSearchDoc[];
}

export async function queryOpenLibrary(
  title: string,
  author?: string
): Promise<{ work: OLWork; searchResult: OLSearchDoc; sourceUrl: string } | null> {
  const params = new URLSearchParams({
    q: author ? `title:${title} author:${author}` : title,
    limit: "3",
    fields: "key,title,author_name,first_publish_year,subject,edition_count",
  });

  const url = `${OPENLIBRARY_SEARCH}?${params}`;
  const resp = await fetch(url, { headers: { "User-Agent": USER_AGENT, Accept: "application/json" } });
  if (!resp.ok) return null;

  const data = (await resp.json()) as OLSearchResult;
  if (!data.docs || data.docs.length === 0) return null;

  data.docs.sort((a, b) => (b.edition_count ?? 0) - (a.edition_count ?? 0));
  const best = data.docs[0];

  // 获取作品详情
  let work: OLWork | null = null;
  try {
    const wResp = await fetch(`${OPENLIBRARY_WORK}${best.key}.json`, {
      headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
    });
    if (wResp.ok) work = (await wResp.json()) as OLWork;
  } catch { /* ignore */ }

  return {
    work: work || { key: best.key, title: best.title },
    searchResult: best,
    sourceUrl: `${OPENLIBRARY_WORK}${best.key}`,
  };
}
