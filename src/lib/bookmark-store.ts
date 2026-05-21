// 内存书签存储（生产环境替换为数据库）
const _bookmarks: Map<string, Set<string>> = new Map();

function userKey(userId: string): string {
  return userId.toLowerCase().trim();
}

export function getBookmarks(userId: string): string[] {
  const ids = _bookmarks.get(userKey(userId));
  return ids ? [...ids] : [];
}

export function addBookmark(userId: string, workId: string): boolean {
  const key = userKey(userId);
  if (!_bookmarks.has(key)) _bookmarks.set(key, new Set());
  const set = _bookmarks.get(key)!;
  if (set.has(workId)) return false;
  set.add(workId);
  return true;
}

export function removeBookmark(userId: string, workId: string): boolean {
  const set = _bookmarks.get(userKey(userId));
  if (!set || !set.has(workId)) return false;
  set.delete(workId);
  return true;
}

export function isBookmarked(userId: string, workId: string): boolean {
  const set = _bookmarks.get(userKey(userId));
  return set ? set.has(workId) : false;
}

export function getBookmarkCount(userId: string): number {
  const set = _bookmarks.get(userKey(userId));
  return set ? set.size : 0;
}
