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

interface ImageResult {
  url: string;
  width: number;
  height: number;
  title: string;
  score: number;
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
  const [sceneUrl, setSceneUrl] = useState<string | null>(null);
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

    // Build relevance keywords for filtering
    const keywords = buildKeywords(title, titleEn, author, characters, plotNodes);

    async function load() {
      // ===== Phase 1: Fetch cover + scene in PARALLEL =====
      // Start OpenLibrary immediately — it's the fastest
      const coverPromise = fetchCover(titleEn || title, author, ac.signal);

      // Start 3 most-promising Wikimedia queries in parallel (limited to 3s each)
      const sceneQueries = buildSceneQueries(title, titleEn, author, continent, characters, plotNodes);
      const wikiPromises = sceneQueries.slice(0, 3).map((q) =>
        searchWikimedia(q, keywords, ac.signal)
      );

      // Show cover as soon as it arrives
      const cover = await coverPromise;
      if (!cancelled && cover) {
        setImgUrl(cover);
      }

      // Wait for best scene image from Wikimedia
      const wikiResults = await Promise.allSettled(wikiPromises);
      let bestScene: ImageResult | null = null;

      for (const r of wikiResults) {
        if (r.status === "fulfilled" && r.value) {
          if (!bestScene || r.value.score > bestScene.score) {
            bestScene = r.value;
          }
        }
      }

      // Use scene if it has a decent relevance score (>= 1)
      const result = bestScene && bestScene.score >= 1
        ? bestScene.url
        : cover;

      // If still nothing, try Google Books
      let finalResult = result;
      if (!finalResult) {
        finalResult = await fetchGoogleBooks(titleEn || title, author, ac.signal);
      }

      if (!cancelled && finalResult) {
        if (imageCache.size >= MAX_CACHE) {
          const first = imageCache.keys().next().value;
          if (first) imageCache.delete(first);
        }
        imageCache.set(cacheKey, finalResult);
        setImgUrl(finalResult);
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
    <div className="fixed inset-0 z-0 pointer-events-none">
      <img
        src={imgUrl}
        alt=""
        className={`absolute inset-0 min-h-full min-w-full w-auto h-auto object-cover transition-opacity duration-700 ${
          loaded ? "opacity-25" : "opacity-0"
        }`}
        style={{
          filter: "blur(2px)",
          transform: "scale(1.05)",
          transformOrigin: "center center",
        }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

// ===== Fetch OpenLibrary cover — fast < 1s =====
async function fetchCover(
  title: string,
  author: string,
  signal: AbortSignal
): Promise<string | null> {
  try {
    const q = encodeURIComponent(`${title} ${author}`);
    const res = await fetch(
      `https://openlibrary.org/search.json?q=${q}&limit=1`,
      { signal }
    );
    if (!res.ok) return null;
    const d = await res.json();
    const cid = d.docs?.[0]?.cover_i;
    if (cid) return `https://covers.openlibrary.org/b/id/${cid}-L.jpg`;
  } catch {}
  return null;
}

// ===== Fetch Google Books — medium speed =====
async function fetchGoogleBooks(
  title: string,
  author: string,
  signal: AbortSignal
): Promise<string | null> {
  try {
    const q = encodeURIComponent(`${title} ${author}`);
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=1`,
      { signal }
    );
    if (!res.ok) return null;
    const d = await res.json();
    const t = d.items?.[0]?.volumeInfo?.imageLinks?.thumbnail;
    if (t) return t.replace("zoom=1", "zoom=3").replace("http:", "https:");
  } catch {}
  return null;
}

// ===== Search Wikimedia with relevance filtering =====
async function searchWikimedia(
  query: string,
  keywords: string[],
  signal: AbortSignal
): Promise<ImageResult | null> {
  try {
    const tc = new AbortController();
    const tid = setTimeout(() => tc.abort(), 3000); // 3s timeout
    const combinedSignal = combineSignals(signal, tc.signal);

    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&prop=imageinfo&iiprop=url|size&format=json&gsrlimit=12&origin=*`;
    const res = await fetch(url, {
      signal: combinedSignal,
      headers: { "User-Agent": "WLH/1.0" },
    });
    clearTimeout(tid);
    if (!res.ok) return null;

    const data = await res.json();
    const pages = data?.query?.pages;
    if (!pages) return null;

    let best: ImageResult | null = null;

    for (const p of Object.values(pages) as Array<{
      title?: string;
      imageinfo?: Array<{ url: string; width: number; height: number }>;
    }>) {
      const info = p.imageinfo?.[0];
      if (!info) continue;

      // Skip tiny images, icons, and SVGs
      if (info.width < 400 || info.height < 300) continue;

      // Calculate relevance score
      const fileTitle = (p.title || "").toLowerCase();
      let score = 0;
      for (const kw of keywords) {
        if (fileTitle.includes(kw.toLowerCase())) score++;
      }

      // Bonus: prefer landscape-ish images for backgrounds
      const aspect = info.width / info.height;
      const isGoodShape = aspect > 1.0 && aspect < 3.0;

      // Skip clearly irrelevant: modern photos, diagrams
      const isBad =
        fileTitle.includes("icon") ||
        fileTitle.includes("logo") ||
        fileTitle.includes("diagram") ||
        fileTitle.includes("map") ||
        fileTitle.includes("screenshot") ||
        fileTitle.includes("photo") ||
        fileTitle.includes("graph");

      if (isBad) continue;

      // Combined quality: relevance + size + shape
      const quality =
        score * 10 +
        (isGoodShape ? 3 : 0) +
        Math.min(info.width / 500, 4);

      if (!best || quality > best.score) {
        best = {
          url: info.url,
          width: info.width,
          height: info.height,
          title: p.title || "",
          score: quality,
        };
      }
    }

    // Require at least some relevance or good quality
    if (best && best.score > 2) return best;
    return null;
  } catch {
    return null;
  }
}

// ===== Build relevance keywords from book metadata =====
function buildKeywords(
  title: string,
  titleEn: string,
  author: string,
  characters?: Array<{ name: string; role: string }>,
  plotNodes?: Array<{ label: string; description: string }>
): string[] {
  const keywords: string[] = [];

  // Title words (limit to meaningful ones)
  const titleWords = (titleEn || title).split(/\s+/).filter((w) => w.length > 3);
  keywords.push(...titleWords.slice(0, 4));

  // Author last name
  const authorParts = author.split(/\s+/);
  if (authorParts.length > 0) keywords.push(authorParts[authorParts.length - 1]);

  // Main characters
  if (characters) {
    for (const c of characters.slice(0, 3)) {
      keywords.push(c.name);
    }
  }

  // Plot node keywords
  if (plotNodes) {
    for (const n of plotNodes.slice(0, 2)) {
      const words = n.label.split(/\s+/).filter((w) => w.length > 3);
      keywords.push(...words.slice(0, 2));
    }
  }

  return [...new Set(keywords)].slice(0, 12);
}

// ===== Build scene search queries =====
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

  // Priority 1: Plot node scenes
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

  // Priority 3: Title + author scene
  queries.push(`"${t}" ${author} illustration`);
  queries.push(`"${t}" ${author} painting`);
  queries.push(`"${t}" dramatic scene painting`);
  queries.push(`"${t}" classic illustration`);

  // Priority 4: Asian-specific queries
  if (isAsian && title !== t) {
    queries.push(`"${title}" 经典场景 插画`);
    queries.push(`"${title}" ${author} 绘画`);
    queries.push(`"${title}" illustration painting`);
  }

  // Priority 5: Broad
  queries.push(`${t} literary illustration`);
  queries.push(`${t} narrative art`);

  return queries;
}

// ===== Combine two AbortSignals =====
function combineSignals(a: AbortSignal, b: AbortSignal): AbortSignal {
  if (a.aborted || b.aborted) return AbortSignal.abort();
  const ac = new AbortController();
  a.addEventListener("abort", () => ac.abort(), { once: true });
  b.addEventListener("abort", () => ac.abort(), { once: true });
  return ac.signal;
}
