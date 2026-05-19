"use client";

import { useEffect, useState, useRef } from "react";

// Module-level cache — survives navigations within the same session
const imageCache = new Map<string, string | null>();

interface Props {
  title: string;
  author: string;
  continent: string;
  gradient: string;
}

export function HeroBackground({ title, author, continent, gradient }: Props) {
  const [bgUrl, setBgUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchImage() {
      const cacheKey = `${title}|${author}`;
      if (imageCache.has(cacheKey)) {
        const cached = imageCache.get(cacheKey);
        if (cached !== undefined) {
          if (!cancelled) {
            setBgUrl(cached);
            setLoading(false);
          }
          return;
        }
      }

      // Build search queries — try specific first, then broader
      const queries = [
        `${title} ${author} illustration`,           // e.g. "Divine Comedy Dante illustration"
        `${title} classic book illustration`,         // broader
        `${title} painting`,                          // even broader
        `${getCultureKeyword(continent)} literature`, // cultural fallback
      ];

      let foundUrl: string | null = null;

      for (const query of queries) {
        if (foundUrl) break;
        try {
          const url = `https://api.openverse.org/v1/images/?q=${encodeURIComponent(query)}&license=cc0,pdm&page_size=5`;
          const res = await fetch(url, { headers: { "User-Agent": "WorldLiteratureHub/1.0" } });
          if (!res.ok) continue;

          const data = await res.json();
          const results = data?.results;
          if (!Array.isArray(results) || results.length === 0) continue;

          // Pick the best image: prefer landscape orientation and decent size
          for (const r of results) {
            if (r.url && r.width && r.height && r.width / r.height >= 1.2) {
              foundUrl = r.url;
              break;
            }
          }
          // If no landscape found, take the first one
          if (!foundUrl && results[0]?.url) {
            foundUrl = results[0].url;
          }
        } catch {
          // API failure is fine — we fall back to gradient
        }
      }

      imageCache.set(cacheKey, foundUrl);
      if (!cancelled) {
        setBgUrl(foundUrl);
        setLoading(false);
      }
    }

    fetchImage();
    return () => { cancelled = true; };
  }, [title, author, continent]);

  // Parallax scroll effect
  useEffect(() => {
    if (!bgUrl) return;
    const el = parallaxRef.current;
    if (!el) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const speed = 0.35;
      el.style.transform = `translateY(${scrollY * speed}px) scale(1.05)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [bgUrl]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Fallback: gradient background always visible */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-70`} />

      {/* Scene image with parallax */}
      {bgUrl && (
        <div
          ref={parallaxRef}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${bgUrl})`,
            opacity: loading ? 0 : 0.4,
          }}
        />
      )}

      {/* Subtle dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-umber/40 via-umber/20 to-umber/60" />
    </div>
  );
}

function getCultureKeyword(continent: string): string {
  switch (continent) {
    case "asia": return "asian classical art painting";
    case "europe": return "european classical painting literature";
    case "africa": return "african art tradition";
    case "americas": return "latin american art mural";
    case "oceania": return "australian landscape painting";
    default: return "classical art";
  }
}
