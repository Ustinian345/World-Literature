// scripts/clients/wikipedia.ts — Wikipedia API 客户端（多语言）
import type { WikiResult } from "./types";

const USER_AGENT = "WorldLiteratureHub/1.0 (academic research)";

function wikiApiUrl(lang: string): string {
  return `https://${lang}.wikipedia.org/w/api.php`;
}

export async function queryWikipedia(
  pageTitle: string,
  lang: "en" | "zh" | "fr" | "de" | "es" | "ja" | "ar" | "ru" = "en"
): Promise<WikiResult | null> {
  const apiUrl = wikiApiUrl(lang);

  // 获取简介 extract
  const introParams = new URLSearchParams({
    action: "query",
    prop: "extracts",
    exintro: "1",
    explaintext: "1",
    titles: pageTitle,
    format: "json",
  });

  let extract = "";
  let pageUrl = "";

  try {
    const introResp = await fetch(`${apiUrl}?${introParams}`, {
      headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
    });
    if (!introResp.ok) return null;

    const introData = (await introResp.json()) as {
      query?: { pages?: Record<string, { title?: string; pageid?: number; extract?: string; missing?: string }> };
    };
    const pages = introData.query?.pages;
    if (!pages) return null;

    const page = Object.values(pages)[0];
    if (!page || page.missing) return null;

    extract = page.extract || "";
    const encodedTitle = encodeURIComponent(page.title || pageTitle);
    pageUrl = `https://${lang}.wikipedia.org/wiki/${encodedTitle}`;
  } catch {
    return null;
  }

  // 获取全文并解析 section
  const fullParams = new URLSearchParams({
    action: "query",
    prop: "extracts",
    explaintext: "1",
    exintro: "0",
    titles: pageTitle,
    format: "json",
  });

  const sections: Array<{ title: string; content: string }> = [];

  try {
    const fullResp = await fetch(`${apiUrl}?${fullParams}`, {
      headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
    });
    if (!fullResp.ok) return { extract, pageUrl, sections, lang };

    const fullData = (await fullResp.json()) as {
      query?: { pages?: Record<string, { extract?: string }> };
    };
    const fp = Object.values(fullData.query?.pages || {})[0];
    if (!fp?.extract) return { extract, pageUrl, sections, lang };

    const rawExtract = fp.extract;
    const sectionRegex = /={2,}\s*(.*?)\s*={2,}/g;
    let lastIndex = 0;
    let lastTitle = "Introduction";
    let match: RegExpExecArray | null;

    while ((match = sectionRegex.exec(rawExtract)) !== null) {
      const sectionContent = rawExtract.slice(lastIndex, match.index).trim();
      if (sectionContent.length > 80) {
        sections.push({ title: lastTitle, content: sectionContent });
      }
      lastTitle = match[1].trim();
      lastIndex = match.index + match[0].length;
    }

    const finalContent = rawExtract.slice(lastIndex).trim();
    if (finalContent.length > 80) {
      sections.push({ title: lastTitle, content: finalContent });
    }
  } catch { /* sections are best-effort */ }

  return { extract, pageUrl, sections, lang };
}
