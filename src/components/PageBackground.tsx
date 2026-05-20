"use client";

import { useState, useEffect, useRef } from "react";

interface PageBackgroundProps {
  workId: string;
  title: string;
  titleEn: string;
  author: string;
}

const imageCache = new Map<string, string | null>();

export function PageBackground({ workId, title, titleEn, author }: PageBackgroundProps) {
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const cacheKey = `bg|${workId}`;

  // Only apply to Dream of Red Chamber
  const isTargetBook = workId === "dream-of-red-chamber";

  useEffect(() => {
    if (!isTargetBook) return;

    let cancelled = false;
    abortRef.current?.abort();
    const ac = new AbortController();
    abortRef.current = ac;

    if (imageCache.has(cacheKey)) {
      const cached = imageCache.get(cacheKey)!;
      if (!cancelled) setImgUrl(cached);
      return;
    }

    async function load() {
      let result: string | null = null;

      // ===== Phase 1: Wikimedia scene search with Chinese queries =====
      const t = titleEn || title;

      // Dramatic scene queries in Chinese — key scenes from Dream of Red Chamber
      const sceneQueries = [
        `"${title}" 黛玉葬花 painting`,
        `"${title}" 大观园 场景 painting`,
        `"${title}" 贾宝玉 林黛玉 painting`,
        `"${title}" 红楼梦 孙温 painting`,
        `"${title}" 金陵十二钗 painting`,
        `"${t}" "Dream of the Red Chamber" scene painting`,
        `"${t}" garden scene illustration`,
      ];

      for (const query of sceneQueries) {
        if (cancelled) break;
        try {
          const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&prop=imageinfo&iiprop=url|size&format=json&gsrlimit=15&origin=*`;

          const tc = new AbortController();
          const tid = setTimeout(() => tc.abort(), 5000);
          const res = await fetch(url, {
            signal: tc.signal,
            headers: { "User-Agent": "WLH/1.0" },
          });
          clearTimeout(tid);
          if (!res.ok) continue;

          const data = await res.json();
          const pages = data?.query?.pages;
          if (!pages) continue;

          // Prefer landscape images with good resolution
          let best: { url: string; w: number } | null = null;
          for (const p of Object.values(pages) as Array<{
            imageinfo?: Array<{ url: string; width: number; height: number }>;
          }>) {
            const info = p.imageinfo?.[0];
            if (!info) continue;
            // Prefer wide landscape images for full-page backgrounds
            if (info.width > 1000 && info.height > 600 && info.width / info.height > 1.3) {
              result = info.url;
              break;
            }
            if (info.width > (best?.w || 0)) best = { url: info.url, w: info.width };
          }
          if (result) break;
          if (best && best.w > 800) {
            result = best.url;
            break;
          }
        } catch {}
      }

      // ===== Phase 2: OpenLibrary cover fallback =====
      if (!result) {
        try {
          const q = encodeURIComponent(`${titleEn} ${author}`);
          const res = await fetch(
            `https://openlibrary.org/search.json?q=${q}&limit=1`,
            { signal: ac.signal }
          );
          if (res.ok) {
            const d = await res.json();
            const cid = d.docs?.[0]?.cover_i;
            if (cid) result = `https://covers.openlibrary.org/b/id/${cid}-L.jpg`;
          }
        } catch {}
      }

      // Google Books fallback
      if (!result) {
        try {
          const gbQ = encodeURIComponent(`${titleEn || title} ${author}`);
          const res = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${gbQ}&maxResults=1`,
            { signal: ac.signal }
          );
          if (res.ok) {
            const d = await res.json();
            const t2 = d.items?.[0]?.volumeInfo?.imageLinks?.thumbnail;
            if (t2)
              result = t2.replace("zoom=1", "zoom=3").replace("http:", "https:");
          }
        } catch {}
      }

      if (!cancelled && result) {
        imageCache.set(cacheKey, result);
        setImgUrl(result);
      }
    }

    load();
    return () => {
      cancelled = true;
      ac.abort();
    };
  }, [isTargetBook, cacheKey, title, titleEn, author]);

  if (!isTargetBook || !imgUrl) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <img
        src={imgUrl}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 scale-110 ${
          loaded ? "opacity-25" : "opacity-0"
        }`}
        style={{ filter: "blur(2px)" }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
