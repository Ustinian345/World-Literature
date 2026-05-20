"use client";

import { useState, useEffect } from "react";

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
  const cacheKey = `bg|${workId}`;

  useEffect(() => {
    let cancelled = false;

    if (imageCache.has(cacheKey)) {
      const cached = imageCache.get(cacheKey)!;
      if (!cancelled) setImgUrl(cached);
      return () => { cancelled = true; };
    }

    async function load() {
      // ===== Phase 1: ALL sources in parallel, race to first result =====
      const keywords = buildKeywords(title, titleEn, author, characters, plotNodes);

      const sources: Array<() => Promise<string | null>> = [
        // OpenLibrary with English title
        () => fetchOpenLibrary(titleEn || title, author),
        // OpenLibrary with original title (for Asian books)
        ...(title !== titleEn && titleEn ? [() => fetchOpenLibrary(title, author)] : []),
        // Google Books
        () => fetchGoogleBooks(titleEn || title, author),
        ...(title !== titleEn && titleEn ? [() => fetchGoogleBooks(title, author)] : []),
        // Direct Wikimedia search for covers/frontispieces
        () => searchWikimediaSimple(`"${titleEn || title}" ${author} cover`, keywords),
        () => searchWikimediaSimple(`"${titleEn || title}" ${author} frontispiece`, keywords),
        ...(title !== titleEn
          ? [() => searchWikimediaSimple(`"${title}" 封面`, keywords)]
          : []),
      ];

      // Fire all sources in parallel
      const promises = sources.map((fn) =>
        fn().catch(() => null)
      );

      // Get the first successful result
      let firstResult: string | null = null;
      let bestScene: string | null = null;

      // Use Promise.any-like approach: show first available, collect best
      const results = await Promise.allSettled(promises);

      for (const r of results) {
        if (cancelled) break;
        if (r.status === "fulfilled" && r.value) {
          if (!firstResult) firstResult = r.value;
          // Prefer scene images over covers (they have "commons" in URL)
          if (r.value.includes("wikimedia") || r.value.includes("commons")) {
            bestScene = r.value;
          }
        }
      }

      // Show immediately if we have anything
      if (!cancelled) {
        const result = bestScene || firstResult;
        if (result) {
          if (imageCache.size >= MAX_CACHE) {
            const first = imageCache.keys().next().value;
            if (first) imageCache.delete(first);
          }
          imageCache.set(cacheKey, result);
          setImgUrl(result);
        }
      }

      // ===== Phase 2: Better scene search in background =====
      if (!cancelled && characters && plotNodes) {
        const sceneQueries = buildSceneQueries(title, titleEn, author, continent, characters, plotNodes);
        const scenePromises = sceneQueries.slice(0, 2).map((q) =>
          searchWikimediaSimple(q, keywords).catch(() => null)
        );
        const sceneResults = await Promise.allSettled(scenePromises);
        for (const r of sceneResults) {
          if (cancelled) break;
          if (r.status === "fulfilled" && r.value) {
            const existing = imageCache.get(cacheKey);
            if (existing) imageCache.set(cacheKey, r.value);
            setImgUrl(r.value);
            break;
          }
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [cacheKey, title, titleEn, author, continent, characters, plotNodes]);

  if (!imgUrl) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <img
        src={imgUrl}
        alt=""
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
          loaded ? "opacity-25" : "opacity-0"
        }`}
        style={{
          objectFit: "cover",
          filter: "blur(2px)",
          transform: "scale(1.05)",
        }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

// ===== Simple timeout wrapper =====
function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("timeout")), ms);
    promise.then(
      (v) => { clearTimeout(timer); resolve(v); },
      (e) => { clearTimeout(timer); reject(e); }
    );
  });
}

// ===== OpenLibrary =====
async function fetchOpenLibrary(title: string, author: string): Promise<string | null> {
  try {
    const q = encodeURIComponent(`${title} ${author}`);
    const res = await withTimeout(
      fetch(`https://openlibrary.org/search.json?q=${q}&limit=3`),
      4000
    );
    if (!res.ok) return null;
    const data = await res.json();
    // Try up to 3 results in case first has no cover
    for (const doc of data.docs || []) {
      if (doc.cover_i) {
        return `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`;
      }
    }
  } catch {}
  return null;
}

// ===== Google Books =====
async function fetchGoogleBooks(title: string, author: string): Promise<string | null> {
  try {
    const q = encodeURIComponent(`${title} ${author}`);
    const res = await withTimeout(
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=3`),
      4000
    );
    if (!res.ok) return null;
    const data = await res.json();
    for (const item of data.items || []) {
      const thumb = item.volumeInfo?.imageLinks?.thumbnail;
      if (thumb) {
        return thumb
          .replace("zoom=1", "zoom=3")
          .replace("http:", "https:")
          .replace("&edge=curl", "");
      }
    }
  } catch {}
  return null;
}

// ===== Wikimedia — simplified, lower threshold =====
async function searchWikimediaSimple(
  query: string,
  keywords: string[]
): Promise<string | null> {
  try {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&prop=imageinfo&iiprop=url|size&format=json&gsrlimit=10&origin=*`;
    const res = await withTimeout(
      fetch(url, { headers: { "User-Agent": "WLH/1.0" } }),
      4000
    );
    if (!res.ok) return null;
    const data = await res.json();
    const pages = data?.query?.pages;
    if (!pages) return null;

    let best: { url: string; score: number } | null = null;

    for (const p of Object.values(pages) as Array<{
      title?: string;
      imageinfo?: Array<{ url: string; width: number; height: number }>;
    }>) {
      const info = p.imageinfo?.[0];
      if (!info) continue;

      // Very minimal size requirement
      if (info.width < 300 || info.height < 200) continue;

      const fileTitle = (p.title || "").toLowerCase();

      // Only skip obviously bad matches
      if (
        fileTitle.includes("icon") ||
        fileTitle.includes("logo.svg") ||
        fileTitle.includes("diagram")
      ) continue;

      // Calculate relevance
      let score = 0;
      for (const kw of keywords) {
        if (fileTitle.includes(kw.toLowerCase())) score += 2;
      }

      // Bonus for good aspect ratio for backgrounds
      const aspect = info.width / info.height;
      if (aspect > 1.0 && aspect < 2.5) score += 2;
      if (info.width > 800) score += 1;
      if (info.height > 500) score += 1;

      if (!best || score > best.score) {
        best = { url: info.url, score };
      }
    }

    // Accept anything with a decent quality signal
    if (best && best.score >= 1) return best.url;
    // If nothing scored, still return the largest image as last resort
    if (!best) {
      let largest: { url: string; w: number } | null = null;
      for (const p of Object.values(pages) as Array<{
        imageinfo?: Array<{ url: string; width: number }>;
      }>) {
        const info = p.imageinfo?.[0];
        if (info && info.width > (largest?.w || 0)) {
          largest = { url: info.url, w: info.width };
        }
      }
      if (largest && largest.w > 400) return largest.url;
    }
  } catch {}
  return null;
}

// ===== Build relevance keywords =====
function buildKeywords(
  title: string,
  titleEn: string,
  author: string,
  characters?: Array<{ name: string; role: string }>,
  plotNodes?: Array<{ label: string; description: string }>
): string[] {
  const keywords: string[] = [];

  // Title keywords
  const titleWords = (titleEn || title).split(/[\s,，。]+/).filter((w) => w.length > 2);
  keywords.push(...titleWords.slice(0, 4));

  // Author last name / whole name for short names
  const authorParts = author.split(/[\s,，]+/);
  keywords.push(author);
  if (authorParts.length > 1) {
    keywords.push(authorParts[authorParts.length - 1]);
  }

  // Characters
  if (characters) {
    for (const c of characters.slice(0, 3)) {
      keywords.push(c.name);
    }
  }

  // Plot nodes
  if (plotNodes) {
    for (const n of plotNodes.slice(0, 2)) {
      keywords.push(n.label);
    }
  }

  return [...new Set(keywords)].slice(0, 15);
}

// ===== Build scene queries =====
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

  if (plotNodes && plotNodes.length > 0) {
    for (const node of plotNodes.slice(0, 2)) {
      queries.push(`"${t}" ${node.label} illustration`);
      queries.push(`"${t}" ${node.label} painting`);
      if (isAsian && title !== t) {
        queries.push(`"${title}" ${node.label} 插画`);
      }
    }
  }

  if (characters && characters.length > 0) {
    const main = characters.slice(0, 2).map((c) => c.name);
    queries.push(`"${t}" ${main.join(" ")} illustration`);
    if (isAsian && title !== t) {
      queries.push(`"${title}" ${main.join(" ")} 场景`);
    }
  }

  queries.push(`"${t}" ${author} illustration`);
  if (isAsian && title !== t) {
    queries.push(`"${title}" 经典场景`);
    queries.push(`"${title}" ${author} 绘画`);
  }
  queries.push(`${t} literary illustration`);

  return queries;
}
