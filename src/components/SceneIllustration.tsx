"use client";

import { useEffect, useState } from "react";
import { sceneImageUrls } from "@/lib/scene-images";

const imageCache = new Map<string, string | null>();

interface Props {
  title: string;
  titleEn: string;
  author: string;
  characters?: string[];
  plotNodes?: string[];
}

export function SceneIllustration({ title, titleEn, author, characters, plotNodes }: Props) {
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    let cancelled = false;
    const cacheKey = `scene|${title}|${titleEn}|${author}`;

    if (imageCache.has(cacheKey)) {
      const cached = imageCache.get(cacheKey);
      if (cached !== undefined && !cancelled) {
        setImgUrl(cached);
        if (cached) setLabel(plotNodes?.[0] || characters?.[0] || "");
      }
      return;
    }

    async function fetchImage() {
      let url: string | null = null;

      // 1. Curated
      const curatedKey = Object.keys(sceneImageUrls).find(k => k === title || k === titleEn);
      if (curatedKey) url = sceneImageUrls[curatedKey];

      // 2. Wikimedia scene search
      if (!url) {
        const queries = buildQueries(title, titleEn, characters, plotNodes);
        for (const q of queries) {
          if (url) break;
          try {
            const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(q)}&gsrnamespace=6&prop=imageinfo&iiprop=url|size&format=json&gsrlimit=10&origin=*`;
            const res = await fetch(apiUrl, { headers: { "User-Agent": "WLH/1.0" } });
            if (!res.ok) continue;
            const data = await res.json();
            const pages = data?.query?.pages;
            if (!pages) continue;
            for (const p of Object.values(pages) as Array<{ imageinfo?: Array<{ url: string; width: number; height: number }> }>) {
              if (p.imageinfo?.[0]) {
                const { url: u, width: w, height: h } = p.imageinfo[0];
                if (w > 500 && h > 300 && w / h > 1.1) { url = u; break; }
              }
            }
            if (!url) {
              for (const p of Object.values(pages) as Array<{ imageinfo?: Array<{ url: string; width: number }> }>) {
                if (p.imageinfo?.[0] && p.imageinfo[0].width > 400) { url = p.imageinfo[0].url; break; }
              }
            }
          } catch {}
        }
      }

      // 3. Open Library cover fallback
      if (!url) {
        try {
          const r = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(`${titleEn || title} ${author}`)}&limit=1`);
          if (r.ok) {
            const d = await r.json();
            const cid = d.docs?.[0]?.cover_i;
            if (cid) url = `https://covers.openlibrary.org/b/id/${cid}-L.jpg`;
          }
        } catch {}
      }

      imageCache.set(cacheKey, url);
      if (!cancelled) {
        setImgUrl(url);
        if (url) setLabel(plotNodes?.[0] || characters?.[0] || "");
      }
    }

    fetchImage();
    return () => { cancelled = true; };
  }, [title, titleEn, author, characters, plotNodes]);

  if (!imgUrl) return null;

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-sand/30 bg-warm-white shadow-card">
      <div className="relative aspect-[21/9] overflow-hidden">
        <img
          src={imgUrl}
          alt={`${title} 经典场景`}
          className={`h-full w-full object-cover transition-all duration-700 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
          onLoad={() => setLoaded(true)}
        />
        {/* Gradient overlay at bottom for caption */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      </div>
      {label && (
        <div className="px-5 py-3 flex items-center gap-2">
          <span className="text-sm">🎬</span>
          <p className="font-heading-cn text-sm text-umber-light/60">
            经典场景：{label}
          </p>
        </div>
      )}
    </div>
  );
}

function buildQueries(
  title: string, titleEn: string,
  characters?: string[], plotNodes?: string[]
): string[] {
  const q: string[] = [];
  if (characters?.length && plotNodes?.length) {
    for (const ch of characters.slice(0, 2))
      for (const pn of plotNodes.slice(0, 2))
        q.push(`${ch} ${pn} illustration`, `${ch} ${pn} painting`);
  }
  if (characters?.length)
    for (const ch of characters.slice(0, 2))
      q.push(`${ch} ${title} scene`, `${ch} ${titleEn || title} character art`);
  if (plotNodes?.length)
    for (const pn of plotNodes.slice(0, 2))
      q.push(`${titleEn || title} ${pn} illustration`);
  q.push(`${titleEn || title} dramatic scene illustration`);
  q.push(`${titleEn || title} classic scene painting`);
  return q;
}
