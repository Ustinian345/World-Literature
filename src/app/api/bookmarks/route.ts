import { auth } from "@/lib/auth";
import { getBookmarks, addBookmark, removeBookmark } from "@/lib/bookmark-store";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const bookmarks = await getBookmarks(session.user.email);
  return NextResponse.json({ bookmarks });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { workId, action } = (await req.json()) as { workId: string; action: "add" | "remove" };
  if (!workId) return NextResponse.json({ error: "Missing workId" }, { status: 400 });

  if (action === "add") {
    await addBookmark(session.user.email, workId);
  } else {
    await removeBookmark(session.user.email, workId);
  }

  const bookmarks = await getBookmarks(session.user.email);
  return NextResponse.json({ bookmarks });
}
