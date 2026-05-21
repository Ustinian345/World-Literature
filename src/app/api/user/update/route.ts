import { auth } from "@/lib/auth";
import { userStore } from "@/lib/user-store";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.email) return NextResponse.json({ error: "请先登录" }, { status: 401 });

  const { name, avatar } = (await req.json()) as { name?: string; avatar?: string };
  const updated = await userStore.update(session.user.email, { name, avatar });
  if (!updated) return NextResponse.json({ error: "用户不存在" }, { status: 404 });

  return NextResponse.json({ success: true, name: updated.name, avatar: updated.avatar });
}
