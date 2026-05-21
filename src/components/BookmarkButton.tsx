"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect, useCallback } from "react";

export function BookmarkButton({ workId }: { workId: string }) {
  const { data: session } = useSession();
  const [bookmarked, setBookmarked] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (!session?.user) return;
    fetch("/api/bookmarks")
      .then((r) => r.json())
      .then((d) => { if (d.bookmarks) setBookmarked(d.bookmarks.includes(workId)); })
      .catch(() => {});
  }, [session, workId]);

  const toggle = useCallback(async () => {
    if (!session) return;
    setAnimating(true);
    setTimeout(() => setAnimating(false), 400);

    const next = !bookmarked;
    setBookmarked(next);
    try {
      await fetch("/api/bookmarks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ workId, action: next ? "add" : "remove" }),
      });
    } catch {
      setBookmarked(!next); // revert on error
    }
  }, [session, workId, bookmarked]);

  return (
    <button
      onClick={toggle}
      className={`fixed bottom-36 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
        bookmarked
          ? "border-terracotta/30 bg-terracotta/10 text-terracotta shadow-terracotta/10"
          : "border-sand/40 bg-warm-white/90 text-umber-light/40 hover:text-terracotta"
      } ${animating ? "bookmark-animate" : ""}`}
      aria-label={bookmarked ? "取消收藏" : "收藏此书"}
      title={session ? (bookmarked ? "已收藏" : "收藏此书") : "请先登录"}
    >
      <svg className="h-5 w-5" fill={bookmarked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={bookmarked ? 0 : 1.8}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </button>
  );
}

/** 纯展示星标（列表/详情页用） */
export function BookmarkStar({ workId, className = "" }: { workId: string; className?: string }) {
  const { data: session } = useSession();
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    if (!session?.user) return;
    fetch("/api/bookmarks")
      .then((r) => r.json())
      .then((d) => { if (d.bookmarks) setBookmarked(d.bookmarks.includes(workId)); })
      .catch(() => {});
  }, [session, workId]);

  if (!bookmarked) return null;
  return <span className={`text-red-500 ${className}`} title="已收藏" aria-label="已收藏">★</span>;
}
