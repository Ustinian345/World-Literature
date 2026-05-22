import { auth } from "@/lib/auth";
import { userStore } from "@/lib/user-store";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "请先登录" }, { status: 401 });
    }

    const body = await req.json();
    const { name, avatar } = body as { name?: string; avatar?: string };

    if (!name && !avatar) {
      return NextResponse.json({ error: "没有需要更新的字段" }, { status: 400 });
    }

    console.log(`[user/update] 收到请求: email=${session.user.email}, name=${name?.slice(0, 20)}, avatar=${avatar ? `base64(${avatar.length} chars)` : "none"}`);

    const updated = await userStore.update(session.user.email, { name, avatar });
    if (!updated) {
      console.error("[user/update] userStore.update 返回 null");
      return NextResponse.json({ error: "用户不存在或更新失败" }, { status: 500 });
    }

    console.log(`[user/update] 更新成功: name=${updated.name}, avatar=${updated.avatar ? `base64(${updated.avatar.length} chars)` : "null"}`);

    return NextResponse.json({ success: true, name: updated.name, avatar: updated.avatar });
  } catch (err) {
    console.error("[user/update] 异常:", err);
    return NextResponse.json({ error: "服务器内部错误" }, { status: 500 });
  }
}
