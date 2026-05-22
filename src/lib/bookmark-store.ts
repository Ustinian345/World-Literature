import { prisma } from "@/lib/prisma";

let migrated = false;

async function migrateBookmarks(): Promise<void> {
  if (migrated) return;
  migrated = true;

  const stale = await prisma.bookmark.findFirst({
    where: { userId: { contains: "@" } },
  });
  if (!stale) return;

  console.log("[bookmark-store] 检测到旧格式（email 作为 userId），开始迁移...");
  const bookmarks = await prisma.bookmark.findMany({
    where: { userId: { contains: "@" } },
  });

  for (const bm of bookmarks) {
    const user = await prisma.user.findUnique({ where: { email: bm.userId } });
    if (!user) {
      await prisma.bookmark.delete({ where: { id: bm.id } }).catch(() => {});
      continue;
    }
    try {
      await prisma.bookmark.update({
        where: { id: bm.id },
        data: { userId: user.id },
      });
    } catch {
      await prisma.bookmark.delete({ where: { id: bm.id } }).catch(() => {});
    }
  }
  console.log("[bookmark-store] 迁移完成");
}

export async function getBookmarks(userId: string): Promise<string[]> {
  await migrateBookmarks();
  const rows = await prisma.bookmark.findMany({
    where: { userId },
    select: { workId: true },
    orderBy: { createdAt: "desc" },
  });
  return rows.map((r: { workId: string }) => r.workId);
}

export async function addBookmark(userId: string, workId: string): Promise<boolean> {
  await migrateBookmarks();
  try {
    await prisma.bookmark.create({ data: { userId, workId } });
    return true;
  } catch { return false; }
}

export async function removeBookmark(userId: string, workId: string): Promise<boolean> {
  await migrateBookmarks();
  try {
    await prisma.bookmark.delete({ where: { userId_workId: { userId, workId } } });
    return true;
  } catch { return false; }
}
