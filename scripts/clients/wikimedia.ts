// scripts/clients/wikimedia.ts — Wikimedia REST API 客户端
// 使用 REST API (/page/summary) 获取更结构化的数据

const USER_AGENT = "WorldLiteratureHub/1.0 (academic research)";
const WIKIMEDIA_REST = "https://en.wikipedia.org/api/rest_v1";

interface WikimediaSummary {
  title: string;
  displaytitle: string;
  description?: string;
  extract: string;
  extract_html?: string;
  thumbnail?: { source: string; width: number; height: number };
  content_urls: { desktop: { page: string } };
}

export async function queryWikimediaSummary(
  pageTitle: string
): Promise<{ title: string; description: string; extract: string; sourceUrl: string } | null> {
  const encodedTitle = encodeURIComponent(pageTitle);
  const url = `${WIKIMEDIA_REST}/page/summary/${encodedTitle}`;

  try {
    const resp = await fetch(url, {
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "application/json",
      },
    });
    if (!resp.ok) return null;

    const data = (await resp.json()) as WikimediaSummary;
    return {
      title: data.title,
      description: data.description || "",
      extract: data.extract || "",
      sourceUrl: data.content_urls.desktop.page,
    };
  } catch {
    return null;
  }
}
