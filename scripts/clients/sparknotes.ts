// scripts/clients/sparknotes.ts — SparkNotes 客户端
import type { LitAnalysisData } from "./types";

const USER_AGENT =
  "Mozilla/5.0 (compatible; WorldLiteratureHub/1.0; +https://github.com/world-literature)";

/** 生成可能的 SparkNotes slug */
function guessSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

export async function querySparkNotes(
  title: string
): Promise<LitAnalysisData | null> {
  const slug = guessSlug(title);
  const baseUrl = `https://www.sparknotes.com/lit/${slug}`;

  try {
    // 先检查页面是否存在
    const resp = await fetch(baseUrl, {
      headers: { "User-Agent": USER_AGENT, Accept: "text/html" },
    });
    if (!resp.ok) return null;

    const html = await resp.text();

    // 提取主要摘要
    let summary = "";
    const summaryMatch = html.match(
      /<meta[^>]*name="description"[^>]*content="([^"]*)"/
    );
    if (summaryMatch) summary = summaryMatch[1];

    // 搜索页面上的 character 和 theme 部分的链接，尝试抓取
    const characters: Array<{ name: string; description: string }> = [];
    const themes: string[] = [];

    // 尝试抓取 characters 页面
    try {
      const charResp = await fetch(`${baseUrl}/characters/`, {
        headers: { "User-Agent": USER_AGENT, Accept: "text/html" },
      });
      if (charResp.ok) {
        const charHtml = await charResp.text();
        // 提取角色名称
        const charMatches = Array.from(charHtml.matchAll(
          /<h3[^>]*class="[^"]*" [^>]*>([^<]+)<\/h3>/g
        ));
        for (const cm of charMatches) {
          const name = stripHtml(cm[1]);
          if (name && name.length < 80 && !characters.find((c) => c.name === name)) {
            characters.push({ name, description: "" });
          }
        }
      }
    } catch { /* best effort */ }

    // 尝试抓取 themes 页面
    try {
      const themeResp = await fetch(`${baseUrl}/themes/`, {
        headers: { "User-Agent": USER_AGENT, Accept: "text/html" },
      });
      if (themeResp.ok) {
        const themeHtml = await themeResp.text();
        const themeMatches = Array.from(themeHtml.matchAll(
          /<h3[^>]*>([^<]+)<\/h3>/g
        ));
        for (const tm of themeMatches) {
          const t = stripHtml(tm[1]);
          if (t && t.length < 100 && !themes.includes(t)) themes.push(t);
        }
      }
    } catch { /* best effort */ }

    return {
      summary,
      characters,
      themes,
      sourceUrl: baseUrl,
    };
  } catch {
    return null;
  }
}
