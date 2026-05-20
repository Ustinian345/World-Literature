// ================================================================
// RealPageBackground — 使用真实照片（Unsplash/Pexels）的页面背景
// 有图 → Fade-in 动画 | 无图 → 文学风格渐变占位图
// ================================================================

"use client";

import { useState, useEffect, useCallback } from "react";

interface RealPageBackgroundProps {
  workId: string;
  gradient: string;
  title: string;
}

interface BgData {
  url: string;
  photographer: string;
  photographerUrl: string;
  source: string;
}

const sessionCache = new Map<string, BgData>();

export function RealPageBackground({
  workId,
  gradient,
  title,
}: RealPageBackgroundProps) {
  const [phase, setPhase] = useState<"checking" | "gradient" | "fading-in" | "visible">(
    () => (sessionCache.has(workId) ? "fading-in" : "checking"),
  );
  const [bgData, setBgData] = useState<BgData | null>(
    () => sessionCache.get(workId) ?? null,
  );
  const [imgLoaded, setImgLoaded] = useState(false);

  // 查询 + 触发
  useEffect(() => {
    if (sessionCache.has(workId)) return;

    let cancelled = false;
    const cacheKey = `bg-session|${workId}`;

    // 检查 sessionStorage
    try {
      const stored = sessionStorage.getItem(cacheKey);
      if (stored) {
        const data = JSON.parse(stored) as BgData;
        sessionCache.set(workId, data);
        setBgData(data);
        setPhase("fading-in");
        return;
      }
    } catch { /* ignore */ }

    async function load() {
      // 1. GET 查询
      try {
        const res = await fetch(`/api/fetch-real-bg?workId=${workId}`);
        if (!res.ok || cancelled) return;
        const json = await res.json();

        if (json.status === "completed" && json.imageUrl) {
          const data: BgData = {
            url: json.imageUrl,
            photographer: json.photographer || "",
            photographerUrl: json.photographerUrl || "",
            source: json.source || "",
          };
          sessionCache.set(workId, data);
          try { sessionStorage.setItem(cacheKey, JSON.stringify(data)); } catch { /* ignore */ }
          if (!cancelled) {
            setBgData(data);
            setPhase("fading-in");
          }
          return;
        }
      } catch { /* ignore */ }

      // 2. 未找到 → 触发 POST 搜索
      if (!cancelled) setPhase("gradient");

      try {
        const res = await fetch("/api/fetch-real-bg", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workId }),
        });
        if (!res.ok || cancelled) return;
        const json = await res.json();

        if (json.status === "completed" && json.imageUrl) {
          const data: BgData = {
            url: json.imageUrl,
            photographer: json.photographer || "",
            photographerUrl: json.photographerUrl || "",
            source: json.source || "",
          };
          sessionCache.set(workId, data);
          try { sessionStorage.setItem(cacheKey, JSON.stringify(data)); } catch { /* ignore */ }
          if (!cancelled) {
            setBgData(data);
            setPhase("fading-in");
          }
        }
      } catch { /* ignore */ }
    }

    load();
    return () => { cancelled = true; };
  }, [workId]);

  const onImgLoaded = useCallback(() => {
    setImgLoaded(true);
    setPhase("visible");
  }, []);

  // 渐变占位 — 文学风格色块 + 模糊文字暗示
  if (phase === "checking" || phase === "gradient") {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20`}
        />
        {/* 文学风格装饰性占位图案 */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="text-center select-none">
            <div className="font-heading-cn text-6xl font-black tracking-widest text-umber/20 blur-sm">
              {title.slice(0, 3)}
            </div>
            <div className="mt-4 flex justify-center gap-3">
              <div className="h-40 w-0.5 bg-gradient-to-b from-transparent via-amber/40 to-transparent" />
              <div className="h-40 w-0.5 bg-gradient-to-b from-transparent via-amber/30 to-transparent" />
              <div className="h-40 w-0.5 bg-gradient-to-b from-transparent via-amber/20 to-transparent" />
            </div>
          </div>
        </div>
        {/* 微妙的呼吸动画 */}
        <div
          className="absolute inset-0 animate-pulse opacity-5"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, var(--color-amber), transparent)`,
            animationDuration: "4s",
          }}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* 背景图片 */}
      <img
        src={bgData!.url}
        alt=""
        className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-out ${
          imgLoaded ? "opacity-25 scale-100" : "opacity-0 scale-105"
        }`}
        style={{
          objectFit: "cover",
          filter: "blur(1px) saturate(0.9)",
        }}
        onLoad={onImgLoaded}
        onError={() => setPhase("gradient")}
        loading="eager"
      />

      {/* 摄影师署名（Unsplash 要求） — 右下角半透明 */}
      {imgLoaded && bgData!.photographer && (
        <a
          href={bgData!.photographerUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto absolute bottom-3 right-3 z-30 rounded-full bg-black/40 px-3 py-1 font-[system-ui] text-[10px] text-white/60 backdrop-blur-sm transition-all hover:bg-black/60 hover:text-white/90"
        >
          Photo by {bgData!.photographer} on {bgData!.source === "pexels" ? "Pexels" : "Unsplash"}
        </a>
      )}

      {/* 渐变叠加层 — 保持文字可读性 */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 transition-opacity duration-1000 ${
          imgLoaded ? "opacity-5" : "opacity-20"
        }`}
      />
    </div>
  );
}
