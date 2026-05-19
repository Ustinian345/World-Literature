"use client";

import { useEffect, useState, useRef } from "react";

const CHAPTER_IDS = [
  "section-intro",
  "section-characters",
  "section-plot",
  "section-themes",
  "section-techniques",
  "section-excerpts",
  "section-insights",
];

const CHAPTER_LABELS = ["简介", "人物", "情节", "主题", "手法", "摘抄", "启发"];

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);

      // Determine active chapter
      let active = 0;
      for (let i = CHAPTER_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(CHAPTER_IDS[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            active = i;
            break;
          }
        }
      }
      setActiveChapter(active);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed top-16 z-50 w-full" ref={barRef}>
      {/* Progress bar */}
      <div className="h-1 w-full bg-sand/30">
        <div
          className="h-full bg-gradient-to-r from-terracotta via-amber to-terracotta-light transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Chapter dots — visible on scroll */}
      {progress > 2 && (
        <div className="absolute right-4 top-3 hidden gap-1 md:flex">
          {CHAPTER_IDS.map((id, i) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`group flex items-center gap-1.5 rounded-full px-2 py-1 text-[10px] transition-all duration-300 ${
                i === activeChapter
                  ? "bg-terracotta text-white shadow-md"
                  : "bg-warm-white/80 text-umber-light/40 hover:bg-warm-white hover:text-umber-light/60"
              }`}
              title={CHAPTER_LABELS[i]}
            >
              <span className={`h-1.5 w-1.5 rounded-full transition-colors ${
                i === activeChapter ? "bg-white" : "bg-sand"
              }`} />
              {CHAPTER_LABELS[i]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
