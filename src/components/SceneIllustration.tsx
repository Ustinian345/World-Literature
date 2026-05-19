"use client";

import { useEffect, useState, useRef } from "react";
import { ImageHotspots } from "@/components/ImageHotspots";
import { hotspotData } from "@/lib/hotspot-data";
import type { Hotspot } from "@/lib/hotspot-data";

const imageCache = new Map<string, { url: string; source: string } | null>();
const MAX_CACHE = 200;

interface Props {
  title: string;
  titleEn: string;
  author: string;
  characters?: Array<{ name: string; role: string; description: string }>;
  plotNodes?: Array<{ label: string; description: string }>;
  gradient: string;
}

export function SceneIllustration({ title, titleEn, author, characters, plotNodes, gradient }: Props) {
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [imgSource, setImgSource] = useState<string>("");
  const [loaded, setLoaded] = useState(false);
  const [searchLabel, setSearchLabel] = useState("");
  const abortRef = useRef<AbortController | null>(null);

  const cacheKey = `scene|${title}|${titleEn}|${author}`;

  useEffect(() => {
    let cancelled = false;
    abortRef.current?.abort();
    const ac = new AbortController();
    abortRef.current = ac;

    if (imageCache.has(cacheKey)) {
      const cached = imageCache.get(cacheKey)!;
      if (!cancelled) {
        setImgUrl(cached.url);
        setImgSource(cached.source);
      }
      return;
    }

    async function load() {
      let result: { url: string; source: string } | null = null;

      // ===== Phase 1: OpenLibrary cover — guaranteed display < 500ms =====
      try {
        const q = encodeURIComponent(`${titleEn || title} ${author}`);
        const res = await fetch(`https://openlibrary.org/search.json?q=${q}&limit=1`, { signal: ac.signal });
        if (res.ok) {
          const d = await res.json();
          const cid = d.docs?.[0]?.cover_i;
          if (cid) result = { url: `https://covers.openlibrary.org/b/id/${cid}-L.jpg`, source: "cover" };
        }
      } catch {}

      // Google Books fallback
      if (!result) {
        try {
          const gbQ = encodeURIComponent(`${titleEn || title} ${author}`);
          const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${gbQ}&maxResults=1`, { signal: ac.signal });
          if (res.ok) {
            const d = await res.json();
            const t = d.items?.[0]?.volumeInfo?.imageLinks?.thumbnail;
            if (t) result = { url: t.replace("zoom=1", "zoom=3").replace("http:", "https:"), source: "cover" };
          }
        } catch {}
      }

      // Show immediately
      if (!cancelled && result) {
        setImgUrl(result.url);
        setImgSource(result.source);
      }

      // ===== Phase 2: Wikimedia scene search using plot nodes =====
      // Build scene-specific queries from the most dramatic plot nodes
      const sceneQueries = buildSceneQueries(title, titleEn, author, plotNodes, characters);
      setSearchLabel(sceneQueries[0]?.split("illustration")[0]?.trim() || "");

      for (const query of sceneQueries) {
        if (cancelled) break;
        try {
          const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&prop=imageinfo&iiprop=url|size&format=json&gsrlimit=12&origin=*`;

          const tc = new AbortController();
          const tid = setTimeout(() => tc.abort(), 4000);
          const res = await fetch(url, { signal: tc.signal, headers: { "User-Agent": "WLH/1.0" } });
          clearTimeout(tid);
          if (!res.ok) continue;

          const data = await res.json();
          const pages = data?.query?.pages;
          if (!pages) continue;

          // Find best image: landscape + large enough
          let best: { url: string; w: number } | null = null;
          for (const p of Object.values(pages) as Array<{
            imageinfo?: Array<{ url: string; width: number; height: number }>;
          }>) {
            const info = p.imageinfo?.[0];
            if (!info) continue;
            // Prefer landscape with good resolution (likely narrative/group scenes)
            if (info.width > 800 && info.height > 400 && info.width / info.height > 1.2) {
              if (!cancelled) {
                setImgUrl(info.url);
                setImgSource("scene");
              }
              result = { url: info.url, source: "scene" };
              break;
            }
            if (info.width > (best?.w || 0)) best = { url: info.url, w: info.width };
          }
          if (result?.source === "scene") break;
          // Fallback to largest image
          if (!result?.url && best && best.w > 500) {
            if (!cancelled) {
              setImgUrl(best.url);
              setImgSource("scene");
            }
            result = { url: best.url, source: "scene" };
            break;
          }
        } catch {}
      }

      // Cache
      if (!cancelled && result) {
        if (imageCache.size >= MAX_CACHE) {
          const firstKey = imageCache.keys().next().value;
          if (firstKey) imageCache.delete(firstKey);
        }
        imageCache.set(cacheKey, { url: result.url, source: result.source });
      }
    }

    load();
    return () => { cancelled = true; ac.abort(); };
  }, [cacheKey, title, titleEn, author, plotNodes, characters]);

  if (!imgUrl) {
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

  // Compute hotspots: manual data or smart auto-generation
  const manual = hotspotData[title] || hotspotData[titleEn] || undefined;
  const hotspots: Hotspot[] = manual || autoHotspots(characters || []);

  const isScene = imgSource === "scene";

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-sand/30 bg-warm-white shadow-card">
      <div className="relative aspect-[21/9] overflow-hidden bg-parchment">
        <img
          src={imgUrl}
          alt={`${title} — ${searchLabel || "经典场景"}`}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
          onLoad={() => setLoaded(true)}
        />

        {/* Hotspots — show when image is ready */}
        {loaded && hotspots.length > 0 && characters && (
          <ImageHotspots hotspots={hotspots} characters={characters} />
        )}

        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
      </div>

      <div className="px-5 py-3 flex items-center gap-2">
        <span className="text-sm">{isScene ? "🎬" : "📖"}</span>
        <p className="font-heading-cn text-sm text-umber-light/60">
          {isScene && searchLabel ? `情节场景：${searchLabel}` : `${title} 封面`}
        </p>
        {hotspots.length > 0 && (
          <span className="ml-auto font-[system-ui] text-[10px] text-umber-light/25">
            {hotspots.length}人 · 悬停查看
          </span>
        )}
      </div>
    </div>
  );
}

// ===== Build scene-specific queries from plot nodes =====
function buildSceneQueries(
  title: string,
  titleEn: string,
  author: string,
  plotNodes?: Array<{ label: string; description: string }>,
  characters?: Array<{ name: string }>
): string[] {
  const queries: string[] = [];
  const t = titleEn || title;

  // Priority 1: Plot node scenes — most specific
  if (plotNodes && plotNodes.length > 0) {
    // Use the most dramatic plot nodes (typically the first 2-3)
    for (const node of plotNodes.slice(0, 3)) {
      queries.push(`"${t}" ${node.label} illustration`);
      queries.push(`"${t}" ${node.label} painting`);
      // Also try with Chinese title for Asian works
      if (title !== t) {
        queries.push(`"${title}" ${node.label} 插画`);
      }
    }
  }

  // Priority 2: Main character + key scene keywords
  if (characters && characters.length > 0) {
    const mainChar = characters[0].name;
    const sceneWords = ["battle", "meeting", "journey", "confrontation", "trial", "death", "love"];
    for (const sw of sceneWords.slice(0, 3)) {
      queries.push(`${mainChar} "${t}" ${sw} scene illustration`);
    }
  }

  // Priority 3: Characters group portrait
  if (characters && characters.length >= 2) {
    const names = characters.slice(0, 3).map(c => c.name).join(" ");
    queries.push(`"${t}" ${names} illustration`);
    queries.push(`"${t}" characters group`);
  }

  // Priority 4: Generic scene search
  queries.push(`"${t}" dramatic scene painting`);
  queries.push(`"${t}" ${author} illustration`);
  queries.push(`${t} narrative art`);

  return queries;
}

// ===== Auto-generate hotspot positions based on character count =====
function autoHotspots(
  characters: Array<{ name: string; role: string; description: string }>
): Hotspot[] {
  const count = Math.min(characters.length, 6);
  if (count === 0) return [];

  const templates: Record<number, Array<{ x: number; y: number }>> = {
    1: [{ x: 50, y: 50 }],
    2: [{ x: 32, y: 50 }, { x: 68, y: 50 }],
    3: [{ x: 22, y: 48 }, { x: 50, y: 38 }, { x: 78, y: 48 }],
    4: [{ x: 18, y: 45 }, { x: 40, y: 35 }, { x: 62, y: 45 }, { x: 84, y: 50 }],
    5: [{ x: 15, y: 45 }, { x: 35, y: 32 }, { x: 50, y: 55 }, { x: 68, y: 35 }, { x: 85, y: 48 }],
    6: [{ x: 12, y: 55 }, { x: 30, y: 35 }, { x: 48, y: 50 }, { x: 55, y: 28 }, { x: 73, y: 48 }, { x: 90, y: 35 }],
  };

  const positions = templates[count] || templates[6];
  return characters.slice(0, count).map((ch, i) => ({
    characterName: ch.name,
    x: positions[i].x,
    y: positions[i].y,
    description: ch.description?.slice(0, 30) || ch.role,
  }));
}
