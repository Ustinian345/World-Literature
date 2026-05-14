"use client";

import { useState, useEffect } from "react";

interface BookCoverProps {
  title: string;
  author: string;
  gradient: string;
  className?: string;
}

export function BookCover({ title, author, gradient, className = "" }: BookCoverProps) {
  const [coverUrl, setCoverUrl] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const query = encodeURIComponent(`${title} ${author}`);
    fetch(`https://openlibrary.org/search.json?title=${query}&limit=1`)
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        const coverId = data.docs?.[0]?.cover_i;
        if (coverId) {
          setCoverUrl(`https://covers.openlibrary.org/b/id/${coverId}-L.jpg`);
        }
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [title, author]);

  return (
    <div className={`book-3d group ${className}`}>
      {/* 书本主体 */}
      <div className="relative w-44 sm:w-52">
        {/* 书脊阴影 */}
        <div className="absolute -left-2 top-1 h-full w-3 rounded-l-sm bg-black/20 origin-right skew-y-1" />

        {/* 封面 */}
        <div className="relative overflow-hidden rounded-r-lg shadow-2xl aspect-[2/3]">
          {coverUrl ? (
            <img
              src={coverUrl}
              alt={`${title} 封面`}
              className="h-full w-full object-cover"
              onError={() => setCoverUrl(null)}
            />
          ) : (
            <div className={`flex h-full w-full flex-col items-center justify-center bg-gradient-to-br ${gradient} p-4 text-center`}>
              {/* 装饰线 */}
              <div className="mb-3 h-0.5 w-12 rounded bg-white/30" />
              <span className="font-heading-cn text-lg font-bold leading-tight text-white/90">
                {title}
              </span>
              <div className="mt-2 h-0.5 w-8 rounded bg-white/20" />
              <span className="mt-2 font-body text-xs italic text-white/60">
                {author}
              </span>
              <div className="mt-3 h-0.5 w-12 rounded bg-white/30" />
            </div>
          )}

          {/* 封面光泽 */}
          <div className="pointer-events-none absolute inset-0 rounded-r-lg bg-gradient-to-tr from-white/0 via-white/10 to-white/5" />

          {/* 书签丝带 */}
          <div className="absolute -top-1 right-3 h-8 w-2.5 rounded-b bg-terracotta/80 shadow-md" />
        </div>

        {/* 底部书页 */}
        <div className="absolute -bottom-1.5 left-1 right-1 h-2 rounded-b-md bg-cream/60 shadow-sm" />
        <div className="absolute -bottom-2.5 left-2 right-2 h-1.5 rounded-b-md bg-parchment/50" />

        {/* 3D hover 效果 */}
        <div className="pointer-events-none absolute inset-0 rounded-r-lg opacity-0 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </div>
  );
}

// 加载中骨架
export function BookCoverSkeleton() {
  return (
    <div className="w-44 sm:w-52 animate-pulse">
      <div className="aspect-[2/3] rounded-r-lg bg-sand/50" />
    </div>
  );
}
