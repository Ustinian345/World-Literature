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
  const [bgState, setBgState] = useState<"loading" | "image" | "gradient">("loading");
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const cacheKey = `bg|${workId}`;

  useEffect(() => {
    let cancelled = false;

    if (imageCache.has(cacheKey)) {
      const cached = imageCache.get(cacheKey)!;
      if (!cancelled) {
        setImgUrl(cached);
        setBgState("image");
      }
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

      if (cancelled) return;

      if (result) {
        if (imageCache.size >= MAX_CACHE) {
          const first = imageCache.keys().next().value;
          if (first) imageCache.delete(first);
        }
        imageCache.set(cacheKey, result);
        setImgUrl(result);
        setBgState("image");
      } else {
        imageCache.set(cacheKey, null);
        setBgState("gradient");
      }
    }

    load();
    return () => { cancelled = true; };
  }, [cacheKey, title, titleEn, author, continent, characters, plotNodes]);

  if (bgState === "loading") return null;

  if (bgState === "gradient") {
    return (
      <div
        className={`fixed inset-0 z-0 pointer-events-none bg-gradient-to-br ${gradient} opacity-20`}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <img
        src={imgUrl!}
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

// ===== Main fetch: OpenLibrary + best Wikimedia query in parallel =====
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

  // Build best scene query from plot nodes and characters (same approach as SceneIllustration)
  const sceneQuery = pickBestSceneQuery(t, title, author, continent, plotNodes, characters);

  // Fire OpenLibrary + best Wikimedia query in parallel
  const [cover, scene] = await Promise.all([
    tryOpenLibrary(t, author),
    sceneQuery ? searchWikimedia(sceneQuery, keywords) : Promise.resolve(null),
  ]);

  // Prefer scene image (key characters/plot) over cover
  if (scene) return scene;
  if (cover) return cover;

  // Try OpenLibrary with original title
  if (title !== t) {
    const origCover = await tryOpenLibrary(title, author);
    if (origCover) return origCover;
  }

  // Try a second Wikimedia query with characters
  if (characters && characters.length > 0) {
    const names = characters.slice(0, 2).map((c) => c.name).join(" ");
    const charResult = await searchWikimedia(`"${t}" ${names} painting`, keywords);
    if (charResult) return charResult;
  }

  // Try Google Books
  const gb = await tryGoogleBooks(t, author);
  if (gb) return gb;

  return null;
}

// ===== Pick the single best scene query (plot nodes → characters → generic) =====
function pickBestSceneQuery(
  t: string,
  title: string,
  author: string,
  continent: string,
  plotNodes?: Array<{ label: string; description: string }>,
  characters?: Array<{ name: string; role: string }>
): string | null {
  const isAsian = continent === "asia";

  // Best: first plot node — most dramatic moment
  if (plotNodes && plotNodes.length > 0) {
    const node = plotNodes[0];
    if (isAsian && title !== t) {
      return `"${title}" ${node.label} 插画`;
    }
    return `"${t}" ${node.label} painting`;
  }

  // Second: main characters
  if (characters && characters.length > 0) {
    const names = characters.slice(0, 2).map((c) => c.name).join(" ");
    if (isAsian && title !== t) {
      return `"${title}" ${names} 场景`;
    }
    return `"${t}" ${names} illustration`;
  }

  // Third: title + author
  if (isAsian && title !== t) {
    return `"${title}" ${author} 绘画`;
  }
  return `"${t}" ${author} illustration`;
}

// ===== OpenLibrary =====
async function tryOpenLibrary(title: string, author: string): Promise<string | null> {
  try {
    const query = encodeURIComponent(`${title} ${author}`);
    const res = await fetch(
      `https://openlibrary.org/search.json?title=${query}&limit=5`,
      { signal: AbortSignal.timeout(5000) }
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
      { signal: AbortSignal.timeout(5000) }
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
async function searchWikimedia(query: string, keywords: string[]): Promise<string | null> {
  try {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&prop=imageinfo&iiprop=url|size&format=json&gsrlimit=10&origin=*`;
    const res = await fetch(url, {
      signal: AbortSignal.timeout(5000),
      headers: { "User-Agent": "WLH/1.0" },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const pages = data?.query?.pages;
    if (!pages) return null;

    let bestUrl: string | null = null;
    let bestScore = -Infinity;
    let fallbackUrl: string | null = null;
    let fallbackW = 0;

    for (const p of Object.values(pages) as Array<{
      title?: string;
      imageinfo?: Array<{ url: string; width: number; height: number }>;
    }>) {
      const info = p.imageinfo?.[0];
      if (!info) continue;

      if (info.width > fallbackW) {
        fallbackW = info.width;
        fallbackUrl = info.url;
      }

      if (info.width < 300 || info.height < 200) continue;

      const fileTitle = (p.title || "").toLowerCase();

      if (fileTitle.includes("icon") && !fileTitle.includes("iconostasis")) continue;
      if (fileTitle.includes("logo.svg")) continue;
      if (fileTitle.includes("diagram")) continue;
      if (fileTitle.includes(".pdf")) continue;

      let score = 0;
      for (const kw of keywords) {
        if (fileTitle.includes(kw.toLowerCase())) score += 2;
      }

      const aspect = info.width / info.height;
      if (aspect > 0.8 && aspect < 2.5) score += 1;
      if (aspect > 1.2 && aspect < 2.0) score += 1;
      if (info.width > 600) score += 1;
      if (info.width > 1000) score += 1;

      if (score > bestScore) {
        bestScore = score;
        bestUrl = info.url;
      }
    }

    if (bestUrl && bestScore >= 0) return bestUrl;
    if (fallbackUrl && fallbackW > 400) return fallbackUrl;
    return null;
  } catch {
    return null;
  }
}

// ===== Build keywords from book metadata =====
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
