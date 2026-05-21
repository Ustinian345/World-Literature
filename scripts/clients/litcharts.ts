// scripts/clients/litcharts.ts — LitCharts 客户端
import type { LitAnalysisData } from "./types";

const USER_AGENT =
  "Mozilla/5.0 (compatible; WorldLiteratureHub/1.0; +https://github.com/world-literature)";

function guessSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function queryLitCharts(
  title: string
): Promise<{ summary: string; themes: string[]; sourceUrl: string } | null> {
  const slug = guessSlug(title);
  const url = `https://www.litcharts.com/lit/${slug}/summary`;

  try {
    const resp = await fetch(url, {
      headers: { "User-Agent": USER_AGENT, Accept: "text/html" },
    });
    if (!resp.ok) return null;

    const html = await resp.text();

    // 提取 meta description
    let summary = "";
    const descMatch = html.match(
      /<meta[^>]*name="description"[^>]*content="([^"]*)"/
    );
    if (descMatch) summary = descMatch[1];

    // 从页面提取主题
    const themes: string[] = [];
    const themeMatches = Array.from(html.matchAll(
      /<a[^>]*href="\/lit\/[^"]*\/themes\/[^"]*"[^>]*>([^<]+)<\/a>/g
    ));
    for (const tm of themeMatches) {
      const t = tm[1].trim();
      if (t && !themes.includes(t) && t.length < 100) themes.push(t);
    }

    return { summary, themes, sourceUrl: url };
  } catch {
    return null;
  }
}
