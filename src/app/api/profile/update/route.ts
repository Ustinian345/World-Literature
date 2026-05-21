import { auth, findUser, updateUser } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { name, currentPassword, newPassword, avatar } = (await req.json()) as {
    name?: string;
    currentPassword?: string;
    newPassword?: string;
    avatar?: string;
  };

  const user = findUser(session.user.email);
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const updates: Record<string, string> = {};

  // 更新昵称
  if (name && name.trim()) {
    updates.name = name.trim();
  }

  // 修改密码
  if (currentPassword && newPassword) {
    if (user.password !== currentPassword) {
      return NextResponse.json({ error: "当前密码错误" }, { status: 400 });
    }
    if (newPassword.length < 6) {
      return NextResponse.json({ error: "新密码至少 6 位" }, { status: 400 });
    }
    updates.password = newPassword;
  }

  // 更新头像
  if (avatar) {
    updates.avatar = avatar;
  }

  const updated = updateUser(session.user.email, updates);
  if (!updated) return NextResponse.json({ error: "Update failed" }, { status: 500 });

  return NextResponse.json({ success: true, name: updated.name, avatar: updated.avatar });
}
