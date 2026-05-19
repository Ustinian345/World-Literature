"use client";

import { useEffect, useState, useRef } from "react";
import { ImageHotspots } from "@/components/ImageHotspots";
import { hotspotData } from "@/lib/hotspot-data";
import type { Hotspot } from "@/lib/hotspot-data";

// Module-level LRU cache
const imageCache = new Map<string, string | null>();
const MAX_CACHE = 200;

interface Props {
  title: string;
  titleEn: string;
  author: string;
  characters?: Array<{ name: string; role: string; description: string }>;
  plotNodes?: string[];
  gradient: string;
}

export function SceneIllustration({ title, titleEn, author, characters, plotNodes, gradient }: Props) {
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [label, setLabel] = useState("");
  const abortRef = useRef<AbortController | null>(null);

  const cacheKey = `scene|${title}|${titleEn}|${author}`;

  useEffect(() => {
    let cancelled = false;
    abortRef.current?.abort();
    const ac = new AbortController();
    abortRef.current = ac;

    // Check cache
    if (imageCache.has(cacheKey)) {
      const cached = imageCache.get(cacheKey);
      if (cached !== undefined && !cancelled) {
        setImgUrl(cached);
        if (cached) setLabel(plotNodes?.[0] || characters?.[0]?.name || "");
      }
      return;
    }

    async function load() {
      // ===== Phase 1: OpenLibrary cover — guaranteed fast (< 500ms) =====
      let url: string | null = null;
      try {
        const q = encodeURIComponent(`${titleEn || title} ${author}`);
        const res = await fetch(`https://openlibrary.org/search.json?q=${q}&limit=1`, { signal: ac.signal });
        if (res.ok) {
          const d = await res.json();
          const cid = d.docs?.[0]?.cover_i;
          if (cid) url = `https://covers.openlibrary.org/b/id/${cid}-L.jpg`;
        }
      } catch {}
      // Google Books fallback
      if (!url) {
        try {
          const gbQ = encodeURIComponent(`${titleEn || title} ${author}`);
          const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${gbQ}&maxResults=1`, { signal: ac.signal });
          if (res.ok) {
            const d = await res.json();
            const t = d.items?.[0]?.volumeInfo?.imageLinks?.thumbnail;
            if (t) url = t.replace("zoom=1", "zoom=3").replace("http:", "https:");
          }
        } catch {}
      }

      // Show cover immediately
      if (!cancelled && url) {
        setImgUrl(url);
        setLabel(plotNodes?.[0] || characters?.[0]?.name || "");
      }

      // ===== Phase 2: Wikimedia scene — background upgrade with timeout =====
      if (!cancelled) {
        const sceneUrl = await tryWikimediaScene(title, titleEn, author, ac.signal);
        if (sceneUrl && !cancelled) {
          setImgUrl(sceneUrl);
          setLabel(plotNodes?.[0] || characters?.[0]?.name || "");
        }
      }

      // Cache result
      if (!cancelled) {
        if (imageCache.size >= MAX_CACHE) {
          const firstKey = imageCache.keys().next().value;
          if (firstKey) imageCache.delete(firstKey);
        }
        imageCache.set(cacheKey, url);
      }
    }

    load();
    return () => { cancelled = true; ac.abort(); };
  }, [cacheKey, title, titleEn, author, characters, plotNodes]);

  if (!imgUrl) {
    // Skeleton while loading
    return (
      <div className="mt-8 overflow-hidden rounded-2xl border border-sand/30 bg-warm-white shadow-card">
        <div className="relative aspect-[21/9] animate-pulse bg-parchment">
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-8`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="h-2 w-40 rounded bg-sand/40" />
              <div className="h-2 w-28 rounded bg-sand/30" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Compute hotspots
  const manual = hotspotData[title] || hotspotData[titleEn] || undefined;
  const hotspots: Hotspot[] = manual || generateSmartHotspots(characters || []);

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-sand/30 bg-warm-white shadow-card">
      <div className="relative aspect-[21/9] overflow-hidden bg-parchment">
        <img
          src={imgUrl}
          alt={`${title} 场景插图`}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
          onLoad={() => setLoaded(true)}
        />

        {/* Hotspots — show when image is loaded */}
        {loaded && hotspots.length > 0 && characters && (
          <ImageHotspots hotspots={hotspots} characters={characters} />
        )}

        {/* Bottom gradient for caption */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
      </div>

      <div className="px-5 py-3 flex items-center gap-2">
        <span className="text-sm">{manual ? "🎬" : "📖"}</span>
        <p className="font-heading-cn text-sm text-umber-light/60">
          {label ? `经典场景：${label}` : `${title} 插图`}
        </p>
        {!manual && hotspots.length > 0 && (
          <span className="ml-auto font-[system-ui] text-[10px] text-umber-light/25">
            {hotspots.length}人 · 悬停查看
          </span>
        )}
      </div>
    </div>
  );
}

// ===== Wikimedia scene search with timeout =====
async function tryWikimediaScene(
  title: string,
  titleEn: string,
  author: string,
  signal: AbortSignal
): Promise<string | null> {
  const queries = [
    `${titleEn || title} ${author} illustration`,
    `${titleEn || title} illustration scene`,
    `${titleEn || title} characters`,
  ];

  for (const q of queries) {
    try {
      const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(q)}&gsrnamespace=6&prop=imageinfo&iiprop=url|size&format=json&gsrlimit=10&origin=*`;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      const res = await fetch(url, {
        signal: controller.signal,
        headers: { "User-Agent": "WLH/1.0" },
      });
      clearTimeout(timeoutId);

      if (!res.ok) continue;
      const data = await res.json();
      const pages = data?.query?.pages;
      if (!pages) continue;

      // Find a good landscape image
      for (const p of Object.values(pages) as Array<{
        imageinfo?: Array<{ url: string; width: number; height: number }>;
      }>) {
        if (p.imageinfo?.[0]) {
          const { url: u, width: w, height: h } = p.imageinfo[0];
          if (w > 600 && h > 300 && w / h > 1.1) return u;
        }
      }
      // Fallback to largest
      let best: { url: string; w: number } | null = null;
      for (const p of Object.values(pages) as Array<{
        imageinfo?: Array<{ url: string; width: number }>;
      }>) {
        if (p.imageinfo?.[0] && p.imageinfo[0].width > (best?.w || 0)) {
          best = { url: p.imageinfo[0].url, w: p.imageinfo[0].width };
        }
      }
      if (best && best.w > 400) return best.url;
    } catch {}
  }
  return null;
}

// ===== Smart hotspot generation based on character count =====
function generateSmartHotspots(
  characters: Array<{ name: string; role: string; description: string }>
): Hotspot[] {
  const count = Math.min(characters.length, 6);
  if (count === 0) return [];

  // Position templates based on character count
  const templates: Record<number, Array<{ x: number; y: number }>> = {
    1: [{ x: 50, y: 50 }],
    2: [
      { x: 32, y: 50 },
      { x: 68, y: 50 },
    ],
    3: [
      { x: 22, y: 48 },
      { x: 50, y: 38 },
      { x: 78, y: 48 },
    ],
    4: [
      { x: 18, y: 45 },
      { x: 40, y: 35 },
      { x: 62, y: 45 },
      { x: 84, y: 50 },
    ],
    5: [
      { x: 15, y: 45 },
      { x: 35, y: 32 },
      { x: 50, y: 55 },
      { x: 68, y: 35 },
      { x: 85, y: 48 },
    ],
    6: [
      { x: 12, y: 55 },
      { x: 30, y: 35 },
      { x: 48, y: 50 },
      { x: 55, y: 28 },
      { x: 73, y: 48 },
      { x: 90, y: 35 },
    ],
  };

  const positions = templates[count] || templates[6];
  return characters.slice(0, count).map((ch, i) => ({
    characterName: ch.name,
    x: positions[i].x,
    y: positions[i].y,
    description: ch.description?.slice(0, 30) || ch.role,
  }));
}
