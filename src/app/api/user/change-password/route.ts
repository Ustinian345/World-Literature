import { auth } from "@/lib/auth";
import { userStore } from "@/lib/user-store";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.email) return NextResponse.json({ error: "请先登录" }, { status: 401 });

  const { currentPassword, newPassword } = (await req.json()) as { currentPassword: string; newPassword: string };
  if (!currentPassword || !newPassword) {
    return NextResponse.json({ error: "请填写当前密码和新密码" }, { status: 400 });
  }

  const result = await userStore.changePassword(session.user.email, currentPassword, newPassword);
  if (!result.success) return NextResponse.json({ error: result.error }, { status: 400 });

  return NextResponse.json({ success: true });
}
