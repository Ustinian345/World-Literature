"use client";

import { useState, useEffect, useRef } from "react";

interface PageBackgroundProps {
  workId: string;
  title: string;
  titleEn: string;
  author: string;
  continent: string;
  characters?: Array<{ name: string; role: string }>;
  plotNodes?: Array<{ label: string; description: string }>;
}

const imageCache = new Map<string, string | null>();
const MAX_CACHE = 200;

export function PageBackground({
  workId,
  title,
  titleEn,
  author,
  continent,
  characters,
  plotNodes,
}: PageBackgroundProps) {
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const cacheKey = `bg|${workId}`;

  useEffect(() => {
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

      // ===== Phase 1: Wikimedia scene search =====
      const queries = buildSceneQueries(
        title,
        titleEn,
        author,
        continent,
        characters,
        plotNodes
      );

      for (const query of queries) {
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

          let best: { url: string; w: number } | null = null;
          for (const p of Object.values(pages) as Array<{
            imageinfo?: Array<{ url: string; width: number; height: number }>;
          }>) {
            const info = p.imageinfo?.[0];
            if (!info) continue;
            if (
              info.width > 1000 &&
              info.height > 600 &&
              info.width / info.height > 1.3
            ) {
              result = info.url;
              break;
            }
            if (info.width > (best?.w || 0))
              best = { url: info.url, w: info.width };
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
          const q = encodeURIComponent(
            `${titleEn || title} ${author}`
          );
          const res = await fetch(
            `https://openlibrary.org/search.json?q=${q}&limit=1`,
            { signal: ac.signal }
          );
          if (res.ok) {
            const d = await res.json();
            const cid = d.docs?.[0]?.cover_i;
            if (cid)
              result = `https://covers.openlibrary.org/b/id/${cid}-L.jpg`;
          }
        } catch {}
      }

      // ===== Phase 3: Google Books fallback =====
      if (!result) {
        try {
          const gbQ = encodeURIComponent(
            `${titleEn || title} ${author}`
          );
          const res = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${gbQ}&maxResults=1`,
            { signal: ac.signal }
          );
          if (res.ok) {
            const d = await res.json();
            const t2 =
              d.items?.[0]?.volumeInfo?.imageLinks?.thumbnail;
            if (t2)
              result = t2
                .replace("zoom=1", "zoom=3")
                .replace("http:", "https:");
          }
        } catch {}
      }

      if (!cancelled && result) {
        if (imageCache.size >= MAX_CACHE) {
          const first = imageCache.keys().next().value;
          if (first) imageCache.delete(first);
        }
        imageCache.set(cacheKey, result);
        setImgUrl(result);
      }
    }

    load();
    return () => {
      cancelled = true;
      ac.abort();
    };
  }, [cacheKey, title, titleEn, author, continent, characters, plotNodes]);

  if (!imgUrl) return null;

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

// ===== Build scene search queries for any book =====
function buildSceneQueries(
  title: string,
  titleEn: string,
  author: string,
  continent: string,
  characters?: Array<{ name: string; role: string }>,
  plotNodes?: Array<{ label: string; description: string }>
): string[] {
  const queries: string[] = [];
  const t = titleEn || title;
  const isAsian = continent === "asia";

  // Priority 1: Plot node scenes (most specific)
  if (plotNodes && plotNodes.length > 0) {
    for (const node of plotNodes.slice(0, 3)) {
      queries.push(`"${t}" ${node.label} illustration`);
      queries.push(`"${t}" ${node.label} painting`);
      if (isAsian && title !== t) {
        queries.push(`"${title}" ${node.label} 插画`);
        queries.push(`"${title}" ${node.label} 绘画`);
      }
    }
  }

  // Priority 2: Main character scenes
  if (characters && characters.length > 0) {
    const main = characters.slice(0, 2).map((c) => c.name);
    queries.push(`"${t}" ${main.join(" ")} illustration`);
    queries.push(`"${t}" ${main.join(" ")} painting`);
    if (isAsian && title !== t) {
      queries.push(`"${title}" ${main.join(" ")} 场景`);
    }
  }

  // Priority 3: Title + author + scene keywords
  queries.push(`"${t}" ${author} illustration`);
  queries.push(`"${t}" ${author} painting`);
  queries.push(`"${t}" dramatic scene painting`);
  queries.push(`"${t}" classic illustration`);

  // Priority 4: Original title queries for non-English works
  if (isAsian && title !== t) {
    queries.push(`"${title}" 经典场景 插画`);
    queries.push(`"${title}" ${author} 绘画`);
    queries.push(`"${title}" illustration painting`);
  }

  // Priority 5: Broad scene search
  queries.push(`${t} literary illustration`);
  queries.push(`${t} narrative art`);

  return queries;
}
