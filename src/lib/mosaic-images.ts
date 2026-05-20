// 从 bg-images.json 提取 Unsplash 图片 URL 用于马赛克
import bgImages from "../../data/bg-images.json";

export function getBookCoverImages(): string[] {
  const urls: string[] = [];
  for (const [key, value] of Object.entries(bgImages)) {
    if (key.startsWith("_")) continue;
    const record = value as { url?: string; status?: string };
    if (record.status === "completed" && record.url) {
      urls.push(record.url.replace("w=1080", "w=400&q=60"));
    }
  }
  return urls.slice(0, 40);
}

export function getAwardImages(awardSlug: string): string[] {
  // 暂用全部书籍图片
  return getBookCoverImages();
}
