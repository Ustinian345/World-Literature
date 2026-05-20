// 从 bg-images.json 提取 Unsplash 图片 URL 用于马赛克
import bgImages from "../../data/bg-images.json";

export function getBookCoverImages(): string[] {
  const urls: string[] = [];
  for (const [key, value] of Object.entries(bgImages)) {
    if (key.startsWith("_")) continue;
    const record = value as { url?: string; status?: string };
    if (record.status === "completed" && record.url) {
      // 使用原始 URL，去掉复杂的认证参数，只保留核心图片标识和尺寸
      const url = record.url;
      const photoId = url.match(/photo-([^?]+)/)?.[1];
      if (photoId) {
        // 使用简洁的 Unsplash URL 格式（更稳定）
        urls.push(`https://images.unsplash.com/photo-${photoId}?w=400&q=75&fit=crop`);
      } else {
        urls.push(url);
      }
    }
  }
  return urls.slice(0, 50);
}

export function getAwardImages(): string[] {
  return getBookCoverImages();
}
