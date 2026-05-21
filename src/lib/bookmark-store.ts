// 文件书签存储（兼容 Vercel serverless 无状态环境）
import * as fs from "fs";
import * as path from "path";

const BOOKMARK_FILE = path.join(process.cwd(), "data", "bookmarks.json");

function loadBookmarks(): Record<string, string[]> {
  try {
    if (fs.existsSync(BOOKMARK_FILE)) {
      const raw = fs.readFileSync(BOOKMARK_FILE, "utf-8");
      return JSON.parse(raw);
    }
  } catch { /* ignore */ }
  return {};
}

function saveBookmarks(data: Record<string, string[]>): void {
  const dir = path.dirname(BOOKMARK_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(BOOKMARK_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export function getBookmarks(userId: string): string[] {
  const data = loadBookmarks();
  return data[userId.toLowerCase().trim()] || [];
}

export function addBookmark(userId: string, workId: string): boolean {
  const data = loadBookmarks();
  const key = userId.toLowerCase().trim();
  if (!data[key]) data[key] = [];
  if (data[key].includes(workId)) return false;
  data[key].push(workId);
  saveBookmarks(data);
  return true;
}

export function removeBookmark(userId: string, workId: string): boolean {
  const data = loadBookmarks();
  const key = userId.toLowerCase().trim();
  if (!data[key]) return false;
  const idx = data[key].indexOf(workId);
  if (idx === -1) return false;
  data[key].splice(idx, 1);
  saveBookmarks(data);
  return true;
}
