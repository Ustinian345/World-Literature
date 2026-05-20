"use client";

import { useMemo } from "react";

interface MosaicTile {
  gradient: string;
  label: string;
  type: "book" | "landmark";
  size: "sm" | "md" | "lg";
}

interface HeroMosaicProps {
  /** 书籍渐变色列表 */
  gradients: string[];
  /** 书籍标题列表 */
  titles: string[];
  /** 地标 emoji 列表 */
  landmarks?: string[];
  /** 滚动速度 (秒) */
  speed?: number;
  /** 是否显示暗色叠加 */
  overlay?: boolean;
}

export function HeroMosaic({
  gradients,
  titles,
  landmarks = ["🏛️", "🏯", "🗽", "🕌", "⛩️", "🏰", "🌍", "📚", "🦁", "🌊", "🗼", "🎭", "🏺", "🕍", "🏔️", "🌋"],
  speed = 80,
  overlay = true,
}: HeroMosaicProps) {
  const rows = useMemo(() => {
    // 生成4行，每行混合书籍和地标
    const result: MosaicTile[][] = [];
    const sizes: Array<"sm" | "md" | "lg"> = ["sm", "md", "lg", "sm", "md", "sm", "lg", "md", "sm", "md"];
    for (let r = 0; r < 4; r++) {
      const row: MosaicTile[] = [];
      const count = 18 + r * 3; // 每行18-27块
      for (let i = 0; i < count; i++) {
        const idx = (r * count + i) % titles.length;
        const useLandmark = i % 7 === 0; // 每7块插入一个地标
        if (useLandmark) {
          row.push({
            gradient: "",
            label: landmarks[(r * 3 + i) % landmarks.length],
            type: "landmark",
            size: sizes[i % sizes.length],
          });
        } else {
          row.push({
            gradient: gradients[idx],
            label: titles[idx],
            type: "book",
            size: sizes[i % sizes.length],
          });
        }
      }
      result.push(row);
    }
    return result;
  }, [gradients, titles, landmarks]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* 渐变背景底层 */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-br from-umber/92 via-umber/78 to-umber-light/60 z-10" />
      )}

      {/* 马赛克行 */}
      <div className="absolute inset-0 z-0 flex flex-col gap-1.5 opacity-30">
        {rows.map((row, ri) => (
          <div
            key={ri}
            className="flex gap-1.5 animate-scroll-row"
            style={{
              animationDuration: `${speed + ri * 15}s`,
              animationDirection: ri % 2 === 0 ? "normal" : "reverse",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              width: "max-content",
            }}
          >
            {/* 双重渲染实现无缝循环 */}
            {[...row, ...row].map((tile, ti) => (
              <div
                key={ti}
                className={`shrink-0 rounded-lg flex items-center justify-center overflow-hidden ${
                  tile.size === "sm"
                    ? "w-16 h-16"
                    : tile.size === "md"
                    ? "w-24 h-24"
                    : "w-32 h-32"
                }`}
                style={
                  tile.type === "book"
                    ? { background: `linear-gradient(135deg, var(--tw-gradient-stops))` }
                    : { background: "rgba(255,255,255,0.05)" }
                }
              >
                {tile.type === "book" && tile.size !== "sm" ? (
                  <span className="text-white/60 font-heading-cn text-xs px-1 text-center leading-tight truncate max-w-full">
                    {tile.label.slice(0, 3)}
                  </span>
                ) : tile.type === "landmark" ? (
                  <span className={`${tile.size === "sm" ? "text-xl" : tile.size === "md" ? "text-3xl" : "text-5xl"}`}>
                    {tile.label}
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
