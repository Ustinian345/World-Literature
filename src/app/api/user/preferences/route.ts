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

    console.log(`[preferences] 保存偏好: userId=${session.user.id}, tags=[${preferences.join(", ")}]`);

    const updated = await userStore.updatePreferences(session.user.id, preferences);
    if (!updated) {
      console.error(`[preferences] 更新失败: userId=${session.user.id}`);
      return NextResponse.json({ error: "更新失败" }, { status: 500 });
    }

    // 验证写入结果
    const saved = updated.preferences as string[] | null;
    console.log(`[preferences] 验证写入: ${JSON.stringify(saved)}`);

    return NextResponse.json({ success: true, preferences: saved });
  } catch (err) {
    console.error("[preferences] PUT error:", err);
    return NextResponse.json({ error: "服务器错误" }, { status: 500 });
  }
}
