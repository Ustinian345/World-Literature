import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const today = new Date().toISOString().slice(0, 10);

  const rec = await prisma.dailyRecommendation.findUnique({
    where: { userId_date: { userId: session.user.id, date: today } },
  });

  if (!rec) {
    return NextResponse.json({ recommendation: null });
  }

  return NextResponse.json({
    recommendation: {
      bookId: rec.bookId,
      date: rec.date,
      reason: rec.reason,
    },
  });
}
