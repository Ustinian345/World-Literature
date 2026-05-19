"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY > 500);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, Math.round((scrollY / docHeight) * 100)) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-0.5 transition-all duration-300 hover:scale-110"
      aria-label="返回顶部"
    >
      {/* 进度百分比 */}
      <span className="font-heading-en text-[10px] font-bold text-terracotta/70 tabular-nums">
        {progress}%
      </span>

      {/* 圆形进度环 */}
      <svg className="h-11 w-11 -rotate-90" viewBox="0 0 44 44">
        <circle
          cx="22" cy="22" r="19"
          fill="none"
          stroke="var(--color-sand)"
          strokeWidth="2.5"
        />
        <circle
          cx="22" cy="22" r="19"
          fill="none"
          stroke="var(--color-terracotta)"
          strokeWidth="2.5"
          strokeDasharray={`${progress * 1.194} 119.4`}
          strokeLinecap="round"
          className="transition-[stroke-dasharray] duration-300"
        />
      </svg>

      {/* 箭头 */}
      <svg className="absolute h-5 w-5 text-terracotta" style={{ top: '55%', left: '50%', transform: 'translate(-50%, -50%)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  );
}
