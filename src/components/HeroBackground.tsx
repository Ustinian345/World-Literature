"use client";

import { useEffect, useState, useRef } from "react";
import { sceneImageUrls } from "@/lib/scene-images";

// Module-level cache survives navigations
const imageCache = new Map<string, string | null>();

interface Props {
  title: string;
  titleEn: string;
  author: string;
  continent: string;
  gradient: string;
  characters?: string[];   // character names for scene search
  plotNodes?: string[];    // plot node labels for scene search
}

export function HeroBackground({ title, titleEn, author, continent, gradient, characters, plotNodes }: Props) {
  const [bgUrl, setBgUrl] = useState<string | null>(null);
  const [source, setSource] = useState<string>("");
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchImage() {
      const cacheKey = `${title}|${titleEn}|${author}`;
      if (imageCache.has(cacheKey)) {
        const cached = imageCache.get(cacheKey);
        if (cached !== undefined) {
          if (!cancelled) { setBgUrl(cached); }
          return;
        }
      }

      let foundUrl: string | null = null;
      let foundSource = "";

      // === Source 1: Curated scene illustration mapping ===
      const curatedKey = Object.keys(sceneImageUrls).find(
        k => k === title || k === titleEn
      );
      if (curatedKey) {
        foundUrl = sceneImageUrls[curatedKey];
        foundSource = "curated";
      }

      // === Source 2: Wikimedia Commons — plot scene queries ===
      if (!foundUrl) {
        // Build targeted scene search queries using characters and plot nodes
        const sceneQueries = buildSceneQueries(title, titleEn, characters, plotNodes);
        for (const query of sceneQueries) {
          if (foundUrl) break;
          try {
            const commonsUrl =
              `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&prop=imageinfo&iiprop=url|size&format=json&gsrlimit=15&origin=*`;
            const res = await fetch(commonsUrl, {
              headers: { "User-Agent": "WorldLiteratureHub/1.0" },
            });
            if (!res.ok) continue;

            const data = await res.json();
            const pages = data?.query?.pages;
            if (!pages) continue;

            for (const page of Object.values(pages) as Array<{
              imageinfo?: Array<{ url: string; width: number; height: number }>;
            }>) {
              if (page.imageinfo?.[0]) {
                const { url, width, height } = page.imageinfo[0];
                // Prefer landscape scene illustrations, skip tiny icons
                if (width > 500 && height > 300 && (width / height > 1.1 || width > 900)) {
                  foundUrl = url;
                  foundSource = "wikimedia-scene";
                  break;
                }
              }
            }
            // If no landscape, take the largest image
            if (!foundUrl) {
              let best: { url: string; w: number } | null = null;
              for (const page of Object.values(pages) as Array<{
                imageinfo?: Array<{ url: string; width: number }>;
              }>) {
                if (page.imageinfo?.[0] && page.imageinfo[0].width > (best?.w || 0)) {
                  best = { url: page.imageinfo[0].url, w: page.imageinfo[0].width };
                }
              }
              if (best && best.w > 400) {
                foundUrl = best.url;
                foundSource = "wikimedia-scene";
              }
            }
          } catch { /* continue */ }
        }
      }

      // === Source 3: Wikipedia page image ===
      if (!foundUrl && titleEn) {
        foundUrl = await tryWikipedia(titleEn, "en");
        if (foundUrl) foundSource = "wikipedia-en";
      }
      if (!foundUrl) {
        foundUrl = await tryWikipedia(title, "zh");
        if (foundUrl) foundSource = "wikipedia-zh";
      }

      // === Source 4: Wikimedia Commons generic title search ===
      if (!foundUrl) {
        foundUrl = await tryWikimediaSearch(`${titleEn || title} illustration`);
        if (foundUrl) foundSource = "wikimedia-generic";
      }
      if (!foundUrl) {
        foundUrl = await tryWikimediaSearch(`${titleEn || title} painting`);
        if (foundUrl) foundSource = "wikimedia-generic";
      }

      // === Source 5: Open Library cover ===
      if (!foundUrl) {
        foundUrl = await tryOpenLibrary(titleEn || title, author);
        if (foundUrl) foundSource = "openlibrary";
      }

      // === Source 6: Google Books ===
      if (!foundUrl) {
        foundUrl = await tryGoogleBooks(titleEn || title, author);
        if (foundUrl) foundSource = "google-books";
      }

      imageCache.set(cacheKey, foundUrl);
      if (!cancelled) {
        setBgUrl(foundUrl);
        setSource(foundSource);
      }
    }

    fetchImage();
    return () => { cancelled = true; };
  }, [title, titleEn, author, characters, plotNodes]);

  // Parallax scroll
  useEffect(() => {
    if (!bgUrl) return;
    const el = parallaxRef.current;
    if (!el) return;
    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.05)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [bgUrl]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient — always present as fallback */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />

      {/* Scene image with parallax — higher opacity so it's visible */}
      {bgUrl && (
        <div
          ref={parallaxRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bgUrl})`,
            opacity: 0.7,
          }}
        />
      )}

      {/* Loading skeleton */}
      {!bgUrl && <div className="absolute inset-0 animate-pulse bg-white/5" />}

      {/* Subtle dark overlay — just enough for white text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
    </div>
  );
}

/* ---------- Query builders ---------- */

function buildSceneQueries(
  title: string,
  titleEn: string,
  characters?: string[],
  plotNodes?: string[]
): string[] {
  const queries: string[] = [];

  // Priority 1: Main character + key plot scene
  if (characters && characters.length > 0 && plotNodes && plotNodes.length > 0) {
    for (const ch of characters.slice(0, 2)) {
      for (const pn of plotNodes.slice(0, 2)) {
        queries.push(`${ch} ${pn} painting`);
        queries.push(`${ch} ${pn} illustration`);
      }
    }
  }

  // Priority 2: Main character + title
  if (characters && characters.length > 0) {
    for (const ch of characters.slice(0, 3)) {
      queries.push(`${ch} ${title} scene`);
      queries.push(`${ch} character art`);
    }
  }

  // Priority 3: Plot node + title
  if (plotNodes && plotNodes.length > 0) {
    for (const pn of plotNodes.slice(0, 2)) {
      queries.push(`${title} ${pn} illustration`);
    }
  }

  // Priority 4: Title + scene keywords
  const sceneKeywords = ["battle scene", "dramatic scene", "climax", "famous scene", "classic scene"];
  for (const kw of sceneKeywords) {
    queries.push(`${titleEn || title} ${kw} illustration`);
    queries.push(`${titleEn || title} ${kw} painting`);
  }

  return queries;
}

/* ---------- API helpers ---------- */

async function tryWikipedia(title: string, lang: string): Promise<string | null> {
  try {
    const base = lang === "zh" ? "zh.wikipedia.org" : "en.wikipedia.org";
    const res = await fetch(
      `https://${base}/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
      { headers: { "User-Agent": "WorldLiteratureHub/1.0" } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.originalimage?.source || data.thumbnail?.source || null;
  } catch {
    return null;
  }
}

async function tryWikimediaSearch(query: string): Promise<string | null> {
  try {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&prop=imageinfo&iiprop=url|size&format=json&gsrlimit=8&origin=*`;
    const res = await fetch(url, { headers: { "User-Agent": "WorldLiteratureHub/1.0" } });
    if (!res.ok) return null;
    const data = await res.json();
    const pages = data?.query?.pages;
    if (!pages) return null;

    for (const page of Object.values(pages) as Array<{
      imageinfo?: Array<{ url: string; width: number; height: number }>;
    }>) {
      if (page.imageinfo?.[0]) {
        const { url, width, height } = page.imageinfo[0];
        if (width > 500 && height > 300) return url;
      }
    }
    return null;
  } catch {
    return null;
  }
}

async function tryOpenLibrary(title: string, author: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(`${title} ${author}`)}&limit=1`,
      { headers: { "User-Agent": "WorldLiteratureHub/1.0" } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const coverId = data.docs?.[0]?.cover_i;
    return coverId ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg` : null;
  } catch {
    return null;
  }
}

async function tryGoogleBooks(title: string, author: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(`intitle:${title}+inauthor:${author}`)}&maxResults=1&printType=books`
    );
    if (!res.ok) return null;
    const data = await res.json();
    const thumb = data.items?.[0]?.volumeInfo?.imageLinks?.extraLarge ||
                 data.items?.[0]?.volumeInfo?.imageLinks?.large ||
                 data.items?.[0]?.volumeInfo?.imageLinks?.medium;
    return thumb ? thumb.replace("zoom=1", "zoom=3").replace("http:", "https:") : null;
  } catch {
    return null;
  }
}
