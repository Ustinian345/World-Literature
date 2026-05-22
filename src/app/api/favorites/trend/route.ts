import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const trends = await prisma.favoriteTrend.findMany({
    where: { userId: session.user.id },
    orderBy: { savedAt: "desc" },
  });
  return NextResponse.json({ trends });
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { trendId, trendDate, trendTitle } = (await req.json()) as {
    trendId: string; trendDate: string; trendTitle: string;
  };
  if (!trendId || !trendDate || !trendTitle) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    const fav = await prisma.favoriteTrend.create({
      data: { userId: session.user.id, trendId, trendDate, trendTitle },
    });
    return NextResponse.json({ success: true, favorite: fav });
  } catch {
    return NextResponse.json({ error: "已收藏或操作失败" }, { status: 409 });
  }
}

export async function DELETE(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { trendId } = (await req.json()) as { trendId: string };
  if (!trendId) return NextResponse.json({ error: "Missing trendId" }, { status: 400 });

  try {
    await prisma.favoriteTrend.delete({
      where: { userId_trendId: { userId: session.user.id, trendId } },
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "取消失败" }, { status: 404 });
  }
}
