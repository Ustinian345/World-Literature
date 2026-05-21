// scripts/clients/baidu-baike.ts — 百度百科客户端
// 解析百度百科页面获取结构化内容
import type { BaiduBaikeData } from "./types";

const USER_AGENT =
  "Mozilla/5.0 (compatible; WorldLiteratureHub/1.0; +https://github.com/world-literature)";

/** HTML 标签清理 */
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#\d+;/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export async function queryBaiduBaike(
  title: string
): Promise<BaiduBaikeData | null> {
  const encodedTitle = encodeURIComponent(title);
  const url = `https://baike.baidu.com/item/${encodedTitle}`;

  try {
    const resp = await fetch(url, {
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "text/html",
      },
      redirect: "follow",
    });
    if (!resp.ok) return null;

    const html = await resp.text();

    // 提取摘要 — .lemma-summary 或 meta description
    let summary = "";
    const summaryMatch = html.match(
      /<div[^>]*class="[^"]*lemma-summary[^"]*"[^>]*>([\s\S]*?)<\/div>/
    );
    if (summaryMatch) {
      summary = stripHtml(summaryMatch[1]);
    } else {
      const metaMatch = html.match(
        /<meta[^>]*name="description"[^>]*content="([^"]*)"/
      );
      if (metaMatch) summary = metaMatch[1];
    }

    // 提取基本信息表格
    const metadata: Record<string, string> = {};
    const basicInfoRegex =
      /<dt[^>]*class="[^"]*basicInfo-item[^"]*name[^"]*"[^>]*>([\s\S]*?)<\/dt>\s*<dd[^>]*class="[^"]*basicInfo-item[^"]*value[^"]*"[^>]*>([\s\S]*?)<\/dd>/g;
    let m: RegExpExecArray | null;
    while ((m = basicInfoRegex.exec(html)) !== null) {
      const key = stripHtml(m[1]).replace(/:$/, "");
      const value = stripHtml(m[2]);
      if (key && value && key.length < 30) {
        metadata[key] = value;
      }
    }

    // 提取段落内容
    const sections: Array<{ title: string; content: string }> = [];
    const paraRegex =
      /<div[^>]*class="[^"]*para[^"]*"[^>]*>([\s\S]*?)<\/div>/g;
    const allParas: string[] = [];
    let pm: RegExpExecArray | null;
    while ((pm = paraRegex.exec(html)) !== null) {
      const text = stripHtml(pm[1]);
      if (text.length > 30) allParas.push(text);
    }

    if (allParas.length > 0) {
      sections.push({
        title: "正文",
        content: allParas.slice(0, 15).join("\n\n"),
      });
    }

    return {
      summary,
      metadata,
      sections,
      sourceUrl: url,
    };
  } catch {
    return null;
  }
}
