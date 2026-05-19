"use client";

import { useEffect, useState } from "react";
import { sceneImageUrls } from "@/lib/scene-images";

const imageCache = new Map<string, { fast: string | null; scene: string | null }>();

interface Props {
  title: string;
  titleEn: string;
  author: string;
  characters?: string[];
  plotNodes?: string[];
  gradient: string;
}

export function SceneIllustration({ title, titleEn, author, characters, plotNodes, gradient }: Props) {
  // fastUrl loads immediately from OpenLibrary cover
  const [fastUrl, setFastUrl] = useState<string | null>(null);
  // sceneUrl upgrades to Wikimedia illustration if found
  const [sceneUrl, setSceneUrl] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [label, setLabel] = useState("");

  const displayUrl = sceneUrl || fastUrl;
  const showSkeleton = !fastUrl;

  useEffect(() => {
    let cancelled = false;
    const cacheKey = `scene|${title}|${titleEn}|${author}`;

    if (imageCache.has(cacheKey)) {
      const cached = imageCache.get(cacheKey)!;
      if (!cancelled) {
        setFastUrl(cached.fast);
        setSceneUrl(cached.scene);
        if (cached.scene) setLabel(plotNodes?.[0] || "");
      }
      return;
    }

    async function fetchImages() {
      let fast: string | null = null;
      let scene: string | null = null;

      // === Phase 1: OpenLibrary cover (fast, reliable, < 300ms) ===
      try {
        const q = encodeURIComponent(`${titleEn || title} ${author}`);
        const res = await fetch(`https://openlibrary.org/search.json?q=${q}&limit=1`);
        if (res.ok) {
          const data = await res.json();
          const coverId = data.docs?.[0]?.cover_i;
          if (coverId) fast = `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
        }
      } catch {}
      // Fallback: Google Books
      if (!fast) {
        try {
          const gbQ = encodeURIComponent(`${titleEn || title} ${author}`);
          const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${gbQ}&maxResults=1`);
          if (res.ok) {
            const data = await res.json();
            const thumb = data.items?.[0]?.volumeInfo?.imageLinks?.thumbnail;
            if (thumb) fast = thumb.replace("zoom=1", "zoom=3").replace("http:", "https:");
          }
        } catch {}
      }

      // Show cover immediately
      if (!cancelled && fast) {
        setFastUrl(fast);
      }

      // === Phase 2: Try to get a scene illustration from Wikimedia ===
      // Only search once per book; use simple English queries
      const queries = buildSimpleQueries(title, titleEn, characters);

      for (const q of queries) {
        if (scene) break;
        try {
          const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(q)}&gsrnamespace=6&prop=imageinfo&iiprop=url|size&format=json&gsrlimit=8&origin=*`;
          const res = await fetch(apiUrl, { headers: { "User-Agent": "WLH/1.0" } });
          if (!res.ok) continue;
          const data = await res.json();
          const pages = data?.query?.pages;
          if (!pages) continue;

          for (const p of Object.values(pages) as Array<{
            imageinfo?: Array<{ url: string; width: number; height: number }>;
          }>) {
            if (p.imageinfo?.[0]) {
              const { url, width, height } = p.imageinfo[0];
              // Accept any decent-sized image
              if (width > 400 && height > 200) {
                scene = url;
                break;
              }
            }
          }
        } catch {}
      }

      if (!cancelled) {
        if (scene) {
          setSceneUrl(scene);
          setLabel(plotNodes?.[0] || characters?.[0] || "");
        }
        imageCache.set(cacheKey, { fast, scene });
      }
    }

    fetchImages();
    return () => { cancelled = true; };
  }, [title, titleEn, author, characters, plotNodes]);

  // Nothing to show yet
  if (!displayUrl && !showSkeleton) return null;

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-sand/30 bg-warm-white shadow-card">
      <div className="relative aspect-[21/9] overflow-hidden bg-parchment">
        {/* Skeleton while loading */}
        {showSkeleton && (
          <div className="absolute inset-0 animate-pulse">
            <div className={`h-full w-full bg-gradient-to-br ${gradient} opacity-10`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="h-2 w-32 rounded bg-amber/20" />
                <div className="h-2 w-24 rounded bg-amber/10" />
              </div>
            </div>
          </div>
        )}

        {/* Cover image (fast) or scene image (upgraded) */}
        {displayUrl && (
          <img
            src={displayUrl}
            alt={`${title} ${sceneUrl ? "经典场景" : "封面"}`}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
              loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            onLoad={() => setLoaded(true)}
          />
        )}

        {/* Bottom gradient for caption readability */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
      </div>

      {/* Caption */}
      <div className="px-5 py-3 flex items-center gap-2">
        <span className="text-sm">{sceneUrl ? "🎬" : "📖"}</span>
        <p className="font-heading-cn text-sm text-umber-light/60">
          {sceneUrl && label
            ? `经典场景：${label}`
            : `${title} 封面`}
        </p>
      </div>
    </div>
  );
}

/** Build simple English queries — keep it short for high hit rate */
function buildSimpleQueries(title: string, titleEn: string, characters?: string[]): string[] {
  const queries: string[] = [];

  // 1. Curated URL check (handled by sceneImageUrls in fetch)
  // 2. English title + painting/illustration
  if (titleEn) {
    queries.push(`"${titleEn}" painting`);
    queries.push(`"${titleEn}" illustration`);
  }
  // 3. Title + most famous character
  if (characters && characters.length > 0 && titleEn) {
    queries.push(`"${titleEn}" "${characters[0]}"`);
  }
  // 4. Chinese title for Asian classics
  if (/[一-鿿]/.test(title)) {
    queries.push(`"${title}" 插画`);
  }

  return queries;
}
