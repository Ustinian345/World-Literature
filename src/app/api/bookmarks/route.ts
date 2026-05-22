import { auth } from "@/lib/auth";
import { getBookmarks, addBookmark, removeBookmark } from "@/lib/bookmark-store";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const workId = searchParams.get("workId");

    if (workId) {
      const bookmarks = await getBookmarks(session.user.id);
      return NextResponse.json({ bookmarked: bookmarks.includes(workId) });
    }

    const bookmarks = await getBookmarks(session.user.id);
    return NextResponse.json({ bookmarks });
  } catch (err) {
    console.error("[bookmarks] GET error:", err);
    return NextResponse.json({ error: "服务器错误" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { workId, action } = (await req.json()) as { workId: string; action: "add" | "remove" };
    if (!workId) return NextResponse.json({ error: "Missing workId" }, { status: 400 });

    if (action === "add") {
      await addBookmark(session.user.id, workId);
    } else {
      await removeBookmark(session.user.id, workId);
    }

    const bookmarks = await getBookmarks(session.user.id);
    return NextResponse.json({ bookmarks });
  } catch (err) {
    console.error("[bookmarks] POST error:", err);
    return NextResponse.json({ error: "服务器错误" }, { status: 500 });
  }
}
