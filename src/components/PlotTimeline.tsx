"use client";

import { useEffect, useRef, useState } from "react";
import type { PlotNode } from "@/lib/book-data";

export function PlotTimeline({ nodes, gradient }: { nodes: PlotNode[]; gradient: string }) {
  const [visibleNodes, setVisibleNodes] = useState<Set<number>>(new Set([0]));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            setVisibleNodes((prev) => new Set([...prev, idx]));
          }
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -50px 0px" }
    );

    const items = container.querySelectorAll("[data-index]");
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [nodes]);

  return (
    <div ref={containerRef} className="relative">
      {/* SVG 连接线 */}
      <svg
        className="absolute left-8 top-0 h-full w-16 sm:left-1/2 sm:-translate-x-8"
        style={{ zIndex: 1 }}
        aria-hidden="true"
        viewBox={`0 0 64 ${nodes.length * 160}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`line-grad-${nodes.length}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-terracotta)" />
            <stop offset="50%" stopColor="var(--color-amber)" />
            <stop offset="100%" stopColor="var(--color-terracotta-light)" />
          </linearGradient>
        </defs>
        <line
          x1="32" y1="30"
          x2="32" y2={nodes.length * 160 - 20}
          stroke={`url(#line-grad-${nodes.length})`}
          strokeWidth="2.5"
          strokeDasharray="8 4"
        />
      </svg>

      <div className="space-y-12 sm:space-y-16">
        {nodes.map((node, i) => (
          <div
            key={i}
            data-index={i}
            className={`relative flex items-start gap-6 transition-all duration-800 ${
              visibleNodes.has(i)
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
          >
            {/* 时间线节点 — 加大尺寸 */}
            <div
              className={`absolute left-8 z-20 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-cream shadow-lg sm:left-1/2 ${
                visibleNodes.has(i)
                  ? "scale-100 opacity-100"
                  : "scale-50 opacity-0"
              } transition-all duration-600`}
              style={{
                background: `linear-gradient(135deg, var(--color-terracotta), var(--color-amber-dark))`,
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <div className="text-center">
                <span className="block font-heading-en text-sm font-bold text-white leading-none">{i + 1}</span>
              </div>
            </div>

            {/* 内容卡片 */}
            <div
              className={`ml-24 flex-1 sm:ml-0 sm:w-[calc(50%-3rem)] ${i % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="group relative rounded-2xl border border-sand/30 bg-white p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-7">
                {/* 卡片顶部装饰色条 */}
                <div
                  className="absolute left-0 right-0 top-0 h-1 rounded-t-2xl"
                  style={{
                    background: `linear-gradient(to right, var(--color-terracotta), var(--color-amber), var(--color-terracotta-light))`,
                    opacity: 0.4 + i * 0.1,
                  }}
                />

                <div className="mb-3 flex items-center gap-3">
                  <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${gradient.split(" ")[0].replace("from-", "bg-")}`} />
                  <h4 className="font-heading-cn text-xl font-bold text-umber">{node.label}</h4>
                </div>
                <p className="font-body text-sm leading-relaxed text-umber-light">{node.description}</p>

                {/* 连接点装饰 */}
                <div className="mt-5 flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-amber/30 to-transparent" />
                  <span className="font-heading-en text-[10px] text-umber-light/20 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
