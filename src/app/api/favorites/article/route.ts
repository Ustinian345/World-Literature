import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const articles = await prisma.favoriteArticle.findMany({
    where: { userId: session.user.id },
    orderBy: { savedAt: "desc" },
  });
  return NextResponse.json({ articles });
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { articleId, articleTitle, articleSource, articleDate, excerpt } = (await req.json()) as {
    articleId: string; articleTitle: string; articleSource: string; articleDate: string; excerpt?: string;
  };
  if (!articleId || !articleTitle || !articleSource || !articleDate) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    const fav = await prisma.favoriteArticle.create({
      data: { userId: session.user.id, articleId, articleTitle, articleSource, articleDate, excerpt: excerpt || null },
    });
    return NextResponse.json({ success: true, favorite: fav });
  } catch {
    return NextResponse.json({ error: "已收藏或操作失败" }, { status: 409 });
  }
}

export async function DELETE(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { articleId } = (await req.json()) as { articleId: string };
  if (!articleId) return NextResponse.json({ error: "Missing articleId" }, { status: 400 });

  try {
    await prisma.favoriteArticle.delete({
      where: { userId_articleId: { userId: session.user.id, articleId } },
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "取消失败" }, { status: 404 });
  }
}
