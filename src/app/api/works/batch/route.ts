import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { ids } = (await req.json()) as { ids?: string[] };
    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ works: [] });
    }

    const works = await prisma.work.findMany({
      where: { id: { in: ids } },
    });

    return NextResponse.json({ works });
  } catch (err) {
    console.error("[works/batch] error:", err);
    return NextResponse.json({ error: "服务器错误" }, { status: 500 });
  }
}
