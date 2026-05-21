// scripts/clients/britannica.ts — Encyclopedia Britannica 客户端
const USER_AGENT =
  "Mozilla/5.0 (compatible; WorldLiteratureHub/1.0; +https://github.com/world-literature)";

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

export async function queryBritannica(
  title: string
): Promise<{ summary: string; sourceUrl: string } | null> {
  const encodedTitle = encodeURIComponent(title.replace(/\s+/g, "_"));
  const url = `https://www.britannica.com/topic/${encodedTitle}`;

  try {
    const resp = await fetch(url, {
      headers: { "User-Agent": USER_AGENT, Accept: "text/html" },
    });
    if (!resp.ok) return null;

    const html = await resp.text();

    // 提取 meta description
    const descMatch = html.match(
      /<meta[^>]*name="description"[^>]*content="([^"]*)"/
    );
    const summary = descMatch ? descMatch[1] : "";

    // 或者提取 topic-summary 段落
    if (!summary) {
      const topicMatch = html.match(
        /<p[^>]*class="[^"]*topic-paragraph[^"]*"[^>]*>([\s\S]*?)<\/p>/
      );
      if (topicMatch) return { summary: stripHtml(topicMatch[1]), sourceUrl: url };
    }

    return { summary, sourceUrl: url };
  } catch {
    return null;
  }
}
