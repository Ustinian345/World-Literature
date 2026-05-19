"use client";

import { useState, useEffect, useCallback } from "react";

export function BookmarkButton({ workId }: { workId: string }) {
  const [bookmarked, setBookmarked] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("wl-bookmarks");
      if (saved) {
        const bookmarks = JSON.parse(saved) as string[];
        setBookmarked(bookmarks.includes(workId));
      }
    } catch {}
  }, [workId]);

  const toggle = useCallback(() => {
    setAnimating(true);
    setTimeout(() => setAnimating(false), 400);

    setBookmarked((prev) => {
      const next = !prev;
      try {
        const saved = localStorage.getItem("wl-bookmarks");
        const bookmarks: string[] = saved ? JSON.parse(saved) : [];
        if (next) {
          if (!bookmarks.includes(workId)) bookmarks.push(workId);
        } else {
          const idx = bookmarks.indexOf(workId);
          if (idx !== -1) bookmarks.splice(idx, 1);
        }
        localStorage.setItem("wl-bookmarks", JSON.stringify(bookmarks));
      } catch {}
      return next;
    });
  }, [workId]);

  return (
    <button
      onClick={toggle}
      className={`fixed bottom-20 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
        bookmarked
          ? "border-terracotta/30 bg-terracotta/10 text-terracotta shadow-terracotta/10"
          : "border-sand/40 bg-warm-white/90 text-umber-light/40 hover:text-terracotta"
      } ${animating ? "bookmark-animate" : ""}`}
      aria-label={bookmarked ? "取消收藏" : "收藏此书"}
      title={bookmarked ? "已收藏" : "收藏此书"}
    >
      <svg className="h-5 w-5" fill={bookmarked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={bookmarked ? 0 : 1.8}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </button>
  );
}
