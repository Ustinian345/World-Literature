import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

// 引用 auth.ts 的 _users 数组（通过 find/update 接口）
// 简化方案：通过共享引用更新
declare global {
  var _authUsers: Array<{
    email: string;
    password: string;
    name: string;
    createdAt: string;
  }> | undefined;
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { name, currentPassword, newPassword } = (await req.json()) as {
    name?: string;
    currentPassword?: string;
    newPassword?: string;
  };

  const users = globalThis._authUsers;
  if (!users) return NextResponse.json({ error: "User store unavailable" }, { status: 500 });

  const user = users.find((u) => u.email === session.user!.email);
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  // 更新昵称
  if (name && name.trim()) {
    user.name = name.trim();
  }

  // 修改密码
  if (currentPassword && newPassword) {
    if (user.password !== currentPassword) {
      return NextResponse.json({ error: "当前密码错误" }, { status: 400 });
    }
    if (newPassword.length < 6) {
      return NextResponse.json({ error: "新密码至少 6 位" }, { status: 400 });
    }
    user.password = newPassword;
  }

  return NextResponse.json({ success: true, name: user.name });
}
