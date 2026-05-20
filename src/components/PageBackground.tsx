"use client";

import { useState, useEffect } from "react";

interface PageBackgroundProps {
  title: string;
  author: string;
}

export function PageBackground({ title, author }: PageBackgroundProps) {
  const [coverUrl, setCoverUrl] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

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

  if (!coverUrl) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <img
        src={coverUrl}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          loaded ? "opacity-8" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
      <div className="absolute inset-0 bg-cream/50" />
    </div>
  );
}
