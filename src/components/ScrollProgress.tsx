"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-16 z-50 h-1 w-full bg-sand/30">
      <div
        className="h-full bg-gradient-to-r from-terracotta via-amber to-terracotta-light transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
      {/* 进度末端的发光点 */}
      {progress > 0 && (
        <div
          className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-amber shadow-[0_0_8px_rgba(200,150,62,0.6)] transition-all duration-150"
          style={{ left: `${progress}%` }}
        />
      )}
    </div>
  );
}
