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
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );

    const items = container.querySelectorAll("[data-index]");
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [nodes]);

  return (
    <div ref={containerRef} className="relative">
      {/* SVG 连接线 */}
      <svg
        className="absolute left-6 top-0 h-full w-12 sm:left-1/2 sm:-translate-x-6"
        style={{ zIndex: 1 }}
        aria-hidden="true"
        viewBox={`0 0 48 ${nodes.length * 160}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`line-grad-${nodes.length}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-terracotta)" />
            <stop offset="50%" stopColor="var(--color-amber)" />
            <stop offset="100%" stopColor="var(--color-terracotta-light)" />
          </linearGradient>
        </defs>
        {/* 主线 */}
        <line
          x1="24" y1="20"
          x2="24" y2={nodes.length * 160 - 20}
          stroke={`url(#line-grad-${nodes.length})`}
          strokeWidth="2"
          strokeDasharray="6 3"
        />
      </svg>

      <div className="space-y-10 sm:space-y-14">
        {nodes.map((node, i) => (
          <div
            key={i}
            data-index={i}
            className={`relative flex items-start gap-8 transition-all duration-700 ${
              visibleNodes.has(i)
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            } ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
          >
            {/* 时间线节点 */}
            <div
              className={`absolute left-6 z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-cream shadow-md sm:left-1/2 ${
                visibleNodes.has(i)
                  ? "scale-100 opacity-100"
                  : "scale-50 opacity-0"
              } transition-all duration-500`}
              style={{
                background: `linear-gradient(135deg, var(--color-terracotta), var(--color-amber-dark))`,
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <span className="font-heading-en text-xs font-bold text-white">{i + 1}</span>
            </div>

            {/* 内容卡片 */}
            <div
              className={`ml-16 flex-1 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`group rounded-2xl border border-sand/50 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:p-6 ${
                i % 2 === 0 ? "" : "sm:text-left"
              }`}>
                <div className="mb-2 flex items-center gap-2">
                  <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${gradient.split(" ")[0].replace("from-", "bg-")}`} />
                  <h4 className="font-heading-cn text-lg font-bold text-umber">{node.label}</h4>
                </div>
                <p className="font-body text-sm leading-relaxed text-umber-light">{node.description}</p>

                {/* 卡片底部装饰 */}
                <div className="mt-4 flex items-center gap-1">
                  {[...Array(3)].map((_, j) => (
                    <div
                      key={j}
                      className="h-0.5 rounded-full bg-gradient-to-r from-amber/40 to-transparent"
                      style={{ width: `${(3 - j) * 20}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
