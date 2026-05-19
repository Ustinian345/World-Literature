"use client";

import { useEffect, useState, useRef } from "react";
import { sceneImageUrls } from "@/lib/scene-images";

// Module-level cache survives navigations within the same session
const imageCache = new Map<string, string | null>();

interface Props {
  title: string;
  titleEn: string;
  author: string;
  continent: string;
  gradient: string;
}

export function HeroBackground({ title, titleEn, author, continent, gradient }: Props) {
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

      // === Source 1: Curated mapping ===
      if (sceneImageUrls[title] || (titleEn && sceneImageUrls[titleEn])) {
        foundUrl = sceneImageUrls[title] || sceneImageUrls[titleEn];
        foundSource = "curated";
      }

      // === Source 2: Wikipedia API (English) ===
      if (!foundUrl && titleEn) {
        try {
          const wikiTitle = encodeURIComponent(titleEn);
          const res = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${wikiTitle}`,
            { headers: { "User-Agent": "WorldLiteratureHub/1.0" } }
          );
          if (res.ok) {
            const data = await res.json();
            if (data.originalimage?.source) {
              foundUrl = data.originalimage.source;
              foundSource = "wikipedia-en";
            } else if (data.thumbnail?.source) {
              foundUrl = data.thumbnail.source;
              foundSource = "wikipedia-en";
            }
          }
        } catch { /* continue */ }
      }

      // === Source 3: Wikipedia API (Chinese) ===
      if (!foundUrl) {
        try {
          const res = await fetch(
            `https://zh.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
            { headers: { "User-Agent": "WorldLiteratureHub/1.0" } }
          );
          if (res.ok) {
            const data = await res.json();
            if (data.originalimage?.source) {
              foundUrl = data.originalimage.source;
              foundSource = "wikipedia-zh";
            } else if (data.thumbnail?.source) {
              foundUrl = data.thumbnail.source;
              foundSource = "wikipedia-zh";
            }
          }
        } catch { /* continue */ }
      }

      // === Source 4: Wikimedia Commons API ===
      if (!foundUrl) {
        try {
          const searchTerm = titleEn || title;
          const commonsUrl =
            `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(searchTerm + " illustration")}&gsrnamespace=6&prop=imageinfo&iiprop=url&format=json&gsrlimit=10&origin=*`;
          const res = await fetch(commonsUrl, {
            headers: { "User-Agent": "WorldLiteratureHub/1.0" },
          });
          if (res.ok) {
            const data = await res.json();
            const pages = data?.query?.pages;
            if (pages) {
              for (const page of Object.values(pages) as Array<{ imageinfo?: Array<{ url: string; width: number; height: number }> }>) {
                if (page.imageinfo?.[0]) {
                  const { url, width, height } = page.imageinfo[0];
                  // Prefer landscape or large images, skip tiny thumbnails
                  if (width > 400 && (width / height > 1.1 || width > 800)) {
                    foundUrl = url;
                    foundSource = "wikimedia-commons";
                    break;
                  }
                }
              }
              // If no landscape found, take largest
              if (!foundUrl) {
                for (const page of Object.values(pages) as Array<{ imageinfo?: Array<{ url: string }> }>) {
                  if (page.imageinfo?.[0]) {
                    foundUrl = page.imageinfo[0].url;
                    foundSource = "wikimedia-commons";
                    break;
                  }
                }
              }
            }
          }
        } catch { /* continue */ }
      }

      // === Source 5: Open Library cover as hero background ===
      if (!foundUrl) {
        try {
          const query = encodeURIComponent(`${titleEn || title} ${author}`);
          const res = await fetch(
            `https://openlibrary.org/search.json?q=${query}&limit=1`,
            { headers: { "User-Agent": "WorldLiteratureHub/1.0" } }
          );
          if (res.ok) {
            const data = await res.json();
            const coverId = data.docs?.[0]?.cover_i;
            if (coverId) {
              foundUrl = `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
              foundSource = "openlibrary";
            }
          }
        } catch { /* continue */ }
      }

      // === Source 6: Google Books API (no key needed for public data) ===
      if (!foundUrl && (titleEn || title)) {
        try {
          const gbQuery = encodeURIComponent(
            `intitle:${titleEn || title}+inauthor:${author}`
          );
          const res = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${gbQuery}&maxResults=1&printType=books`
          );
          if (res.ok) {
            const data = await res.json();
            const thumb = data.items?.[0]?.volumeInfo?.imageLinks?.extraLarge ||
                         data.items?.[0]?.volumeInfo?.imageLinks?.large ||
                         data.items?.[0]?.volumeInfo?.imageLinks?.medium ||
                         data.items?.[0]?.volumeInfo?.imageLinks?.thumbnail;
            if (thumb) {
              // Upgrade thumbnail to higher quality
              foundUrl = thumb.replace("zoom=1", "zoom=3").replace("http:", "https:");
              foundSource = "google-books";
            }
          }
        } catch { /* continue */ }
      }

      imageCache.set(cacheKey, foundUrl);
      if (!cancelled) {
        setBgUrl(foundUrl);
        setSource(foundSource);
      }
    }

    fetchImage();
    return () => { cancelled = true; };
  }, [title, titleEn, author]);

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
      {/* Base gradient — always visible */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-60`} />

      {/* Scene image with parallax */}
      {bgUrl && (
        <div
          ref={parallaxRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bgUrl})`,
            opacity: source === "openlibrary" || source === "google-books" ? 0.55 : 0.35,
          }}
        />
      )}

      {/* Loading pulse skeleton */}
      {!bgUrl && (
        <div className="absolute inset-0 animate-pulse bg-umber/10" />
      )}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-umber/40 via-umber/10 to-umber/70" />
    </div>
  );
}
