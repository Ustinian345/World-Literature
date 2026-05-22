import { auth } from "@/lib/auth";
import { userStore } from "@/lib/user-store";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { preferences } = (await req.json()) as { preferences: string[] };
    if (!Array.isArray(preferences) || preferences.length === 0) {
      return NextResponse.json({ error: "请至少选择一个偏好" }, { status: 400 });
    }

    const updated = await userStore.updatePreferences(session.user.id, preferences);
    if (!updated) {
      return NextResponse.json({ error: "更新失败" }, { status: 500 });
    }

    return NextResponse.json({ success: true, preferences });
  } catch (err) {
    console.error("[preferences] PUT error:", err);
    return NextResponse.json({ error: "服务器错误" }, { status: 500 });
  }
}
