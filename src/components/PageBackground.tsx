"use client";

import { useState, useEffect } from "react";

interface PageBackgroundProps {
  workId: string;
  title: string;
  titleEn: string;
  author: string;
  gradient: string;
  continent: string;
  characters?: Array<{ name: string; role: string }>;
  plotNodes?: Array<{ label: string; description: string }>;
}

const imageCache = new Map<string, string | null>();
const MAX_CACHE = 150;

// Track in-flight requests to avoid duplicates
const inflight = new Map<string, Promise<string | null>>();

export function PageBackground({
  workId,
  title,
  titleEn,
  author,
  gradient,
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
      return;
    }

    async function load() {
      let promise = inflight.get(cacheKey);
      if (!promise) {
        promise = fetchBestImage(title, titleEn, author, continent, characters, plotNodes);
        inflight.set(cacheKey, promise);
      }

      const result = await promise;
      inflight.delete(cacheKey);

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
    return () => { cancelled = true; };
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

// ===== Main fetch logic: try sources sequentially, stop at first hit =====
async function fetchBestImage(
  title: string,
  titleEn: string,
  author: string,
  continent: string,
  characters?: Array<{ name: string; role: string }>,
  plotNodes?: Array<{ label: string; description: string }>
): Promise<string | null> {
  const t = titleEn || title;
  const keywords = buildKeywords(title, titleEn, author, characters, plotNodes);

  // Try sources in order — each step only runs if the previous failed
  // This prevents rate-limiting from firing all APIs at once

  // 1. OpenLibrary (fastest, most reliable for covers)
  let result = await tryOpenLibrary(t, author);
  if (result) return result;

  // 2. OpenLibrary with original title for non-English books
  if (title !== t) {
    result = await tryOpenLibrary(title, author);
    if (result) return result;
  }

  // 3. Wikimedia with title + author
  result = await searchWikimedia(`"${t}" ${author}`, keywords);
  if (result) return result;

  // 4. Wikimedia with original title
  if (title !== t) {
    result = await searchWikimedia(`"${title}" ${author}`, keywords);
    if (result) return result;
  }

  // 5. Plot node based search (most specific)
  if (plotNodes && plotNodes.length > 0) {
    const node = plotNodes[0];
    result = await searchWikimedia(`"${t}" ${node.label}`, keywords);
    if (result) return result;
    if (title !== t) {
      result = await searchWikimedia(`"${title}" ${node.label}`, keywords);
      if (result) return result;
    }
  }

  // 6. Character based search
  if (characters && characters.length > 0) {
    const names = characters.slice(0, 2).map((c) => c.name).join(" ");
    result = await searchWikimedia(`"${t}" ${names}`, keywords);
    if (result) return result;
  }

  // 7. Google Books as last resort
  result = await tryGoogleBooks(t, author);
  if (result) return result;

  return null;
}

// ===== OpenLibrary — use title= param (same as BookCover) =====
async function tryOpenLibrary(title: string, author: string): Promise<string | null> {
  try {
    const query = encodeURIComponent(`${title} ${author}`);
    const res = await fetch(
      `https://openlibrary.org/search.json?title=${query}&limit=5`,
      { signal: AbortSignal.timeout(6000) }
    );
    if (!res.ok) return null;
    const data = await res.json();
    for (const doc of data.docs || []) {
      if (doc.cover_i) {
        return `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`;
      }
    }
  } catch {}
  return null;
}

// ===== Google Books =====
async function tryGoogleBooks(title: string, author: string): Promise<string | null> {
  try {
    const q = encodeURIComponent(`${title} ${author}`);
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=3`,
      { signal: AbortSignal.timeout(6000) }
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

// ===== Wikimedia search =====
async function searchWikimedia(
  query: string,
  keywords: string[]
): Promise<string | null> {
  try {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&prop=imageinfo&iiprop=url|size&format=json&gsrlimit=10&origin=*`;
    const res = await fetch(url, {
      signal: AbortSignal.timeout(6000),
      headers: { "User-Agent": "WLH/1.0" },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const pages = data?.query?.pages;
    if (!pages) return null;

    let bestUrl: string | null = null;
    let bestScore = -Infinity;
    let largestUrl: string | null = null;
    let largestW = 0;

    for (const p of Object.values(pages) as Array<{
      title?: string;
      imageinfo?: Array<{ url: string; width: number; height: number }>;
    }>) {
      const info = p.imageinfo?.[0];
      if (!info) continue;

      // Track largest as ultimate fallback
      if (info.width > largestW) {
        largestW = info.width;
        largestUrl = info.url;
      }

      if (info.width < 300 || info.height < 200) continue;

      const fileTitle = (p.title || "").toLowerCase();

      // Skip obviously wrong results
      if (fileTitle.includes("icon") && !fileTitle.includes("iconostasis")) continue;
      if (fileTitle.includes("logo.svg")) continue;
      if (fileTitle.includes("diagram")) continue;
      if (fileTitle.includes(".pdf")) continue;

      // Score: keyword matches
      let score = 0;
      for (const kw of keywords) {
        if (fileTitle.includes(kw.toLowerCase())) score += 2;
      }

      // Aspect ratio bonus
      const aspect = info.width / info.height;
      if (aspect > 0.8 && aspect < 2.5) score += 1;
      if (aspect > 1.2 && aspect < 2.0) score += 1;

      // Size bonus
      if (info.width > 600) score += 1;
      if (info.width > 1000) score += 1;

      if (score > bestScore) {
        bestScore = score;
        bestUrl = info.url;
      }
    }

    // Return scored result (even score 0 is fine after filtering)
    if (bestUrl && bestScore >= 0) return bestUrl;

    // Ultimate fallback: largest image > 400px wide
    if (largestUrl && largestW > 400) return largestUrl;

    return null;
  } catch {
    return null;
  }
}

// ===== Build keywords =====
function buildKeywords(
  title: string,
  titleEn: string,
  author: string,
  characters?: Array<{ name: string; role: string }>,
  plotNodes?: Array<{ label: string; description: string }>
): string[] {
  const keywords: string[] = [];

  const titleWords = (titleEn || title).split(/[\s,，。]+/).filter((w) => w.length > 2);
  keywords.push(...titleWords.slice(0, 3));

  keywords.push(author);
  const authorParts = author.split(/[\s,，]+/);
  if (authorParts.length > 1) {
    keywords.push(authorParts[authorParts.length - 1]);
  }

  if (characters) {
    for (const c of characters.slice(0, 3)) {
      keywords.push(c.name);
    }
  }

  if (plotNodes) {
    for (const n of plotNodes.slice(0, 2)) {
      keywords.push(n.label);
    }
  }

  return [...new Set(keywords)].slice(0, 12);
}
