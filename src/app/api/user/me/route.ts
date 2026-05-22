import { auth } from "@/lib/auth";
import { userStore } from "@/lib/user-store";
import { NextResponse } from "next/server";

// GET /api/user/me — 从数据库实时读取当前用户的最新数据
export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await userStore.findByEmail(session.user.email!);
  if (!user) {
    return NextResponse.json({ error: "用户不存在" }, { status: 404 });
  }

  return NextResponse.json({
    id: user.id,
    email: user.email,
    name: user.name,
    avatar: user.avatar,
    provider: user.provider,
    preferences: (user.preferences as string[] | null) || null,
    createdAt: user.createdAt,
  });
}
