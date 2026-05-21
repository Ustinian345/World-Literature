import { prisma } from "@/lib/prisma";

export async function getBookmarks(userId: string): Promise<string[]> {
  const rows = await prisma.bookmark.findMany({
    where: { userId },
    select: { workId: true },
    orderBy: { createdAt: "desc" },
  });
  return rows.map((r: { workId: string }) => r.workId);
}

export async function addBookmark(userId: string, workId: string): Promise<boolean> {
  try {
    await prisma.bookmark.create({ data: { userId, workId } });
    return true;
  } catch { return false; }
}

export async function removeBookmark(userId: string, workId: string): Promise<boolean> {
  try {
    await prisma.bookmark.delete({ where: { userId_workId: { userId, workId } } });
    return true;
  } catch { return false; }
}
