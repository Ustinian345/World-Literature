"use client";

import { useState, useEffect, useCallback } from "react";

export function ReadingControls() {
  const [fontSize, setFontSize] = useState(18);
  const [useSerif, setUseSerif] = useState(true);

  const increase = useCallback(() => setFontSize((s) => Math.min(s + 1, 24)), []);
  const decrease = useCallback(() => setFontSize((s) => Math.max(s - 1, 14)), []);

  // Apply font size and family to content sections via CSS custom properties
  useEffect(() => {
    document.documentElement.style.setProperty("--reader-font-size", `${fontSize}px`);
    document.documentElement.style.setProperty(
      "--reader-font-family",
      useSerif ? "var(--font-body)" : "system-ui, -apple-system, sans-serif"
    );
  }, [fontSize, useSerif]);

  return (
    <div className="fixed bottom-24 right-6 z-40 flex flex-col gap-1.5">
      {/* Font size controls */}
      <div className="flex flex-col items-center gap-1 rounded-2xl border border-sand/40 bg-warm-white/95 p-2.5 shadow-card backdrop-blur-sm">
        <button
          onClick={increase}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-umber-light transition-colors hover:bg-cream hover:text-umber"
          aria-label="增大字体"
        >
          <span className="font-[system-ui] text-lg font-bold leading-none">A+</span>
        </button>
        <span className="font-[system-ui] text-[10px] text-umber-light/40 tabular-nums">{fontSize}px</span>
        <button
          onClick={decrease}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-umber-light transition-colors hover:bg-cream hover:text-umber"
          aria-label="缩小字体"
        >
          <span className="font-[system-ui] text-sm font-bold leading-none">A-</span>
        </button>
      </div>

      {/* Serif toggle */}
      <button
        onClick={() => setUseSerif((s) => !s)}
        className="flex h-10 w-10 items-center justify-center rounded-2xl border border-sand/40 bg-warm-white/95 text-lg font-bold shadow-card backdrop-blur-sm transition-colors hover:bg-cream"
        aria-label={useSerif ? "切换为无衬线字体" : "切换为衬线字体"}
        title={useSerif ? "当前：衬线体" : "当前：无衬线体"}
      >
        {useSerif ? "有" : "无"}
      </button>
    </div>
  );
}
