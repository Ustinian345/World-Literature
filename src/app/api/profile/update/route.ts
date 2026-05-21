import { auth, ensureUser, updateUser } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { name, currentPassword, newPassword, avatar } = (await req.json()) as {
    name?: string; currentPassword?: string; newPassword?: string; avatar?: string;
  };

  // 确保用户存在（Google 用户首次访问设置时自动创建）
  const user = ensureUser(session.user.email, {
    name: session.user.name || undefined,
    avatar: session.user.image || undefined,
  });

  if (currentPassword && newPassword) {
    if (!user.password) {
      return NextResponse.json({ error: "Google 登录用户无密码，无需修改" }, { status: 400 });
    }
    if (user.password !== currentPassword) {
      return NextResponse.json({ error: "当前密码错误" }, { status: 400 });
    }
    if (newPassword.length < 6) {
      return NextResponse.json({ error: "新密码至少 6 位" }, { status: 400 });
    }
    updateUser(session.user.email, { password: newPassword });
  }

  if (name && name.trim()) {
    updateUser(session.user.email, { name: name.trim() });
  }
  if (avatar) {
    updateUser(session.user.email, { avatar });
  }

  const updated = updateUser(session.user.email, {}) || user;
  return NextResponse.json({ success: true, name: updated.name || name, avatar: updated.avatar || avatar });
}
