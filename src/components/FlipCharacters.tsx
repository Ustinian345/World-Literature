"use client";

import { useState } from "react";
import type { Character } from "@/lib/book-data";

export function FlipCharacters({ characters }: { characters: Character[] }) {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {characters.map((ch, i) => (
        <div
          key={i}
          className="group cursor-pointer [perspective:1000px]"
          onClick={() => toggle(i)}
          onKeyDown={(e) => { if (e.key === "Enter") toggle(i); }}
          tabIndex={0}
          role="button"
          aria-expanded={flipped.has(i)}
        >
          <div
            className={`relative h-72 w-full transition-transform duration-700 [transform-style:preserve-3d] ${
              flipped.has(i) ? "[transform:rotateY(180deg)]" : ""
            }`}
          >
            {/* 正面 — 角色"立绘"卡片 */}
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-sand/30 bg-gradient-to-b from-warm-white via-warm-white to-parchment p-6 shadow-lg [backface-visibility:hidden]">
              {/* 顶部聚光灯效果 */}
              <div className="absolute inset-0 rounded-2xl bg-spotlight" />

              <div className="relative z-10 flex flex-col items-center">
                {/* 角色头像 — 更大更有质感 */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber/15 to-terracotta/25 text-4xl shadow-inner ring-4 ring-amber/10">
                  <span className="opacity-80">{ch.name[0]}</span>
                </div>

                <h3 className="mt-4 font-heading-cn text-2xl font-bold text-umber">{ch.name}</h3>
                <span className="mt-1.5 inline-flex rounded-full border border-amber/30 bg-amber/5 px-4 py-1 font-[system-ui] text-xs font-medium text-amber-dark backdrop-blur-sm">
                  {ch.role}
                </span>
                <span className="mt-5 font-[system-ui] text-xs text-umber-light/30 transition-opacity group-hover:opacity-60">
                  点击翻转查看详情 →
                </span>
              </div>
            </div>

            {/* 背面 — 详细描述 */}
            <div className="absolute inset-0 flex flex-col justify-center rounded-2xl border border-amber/20 bg-gradient-to-br from-amber/5 via-warm-white to-terracotta/5 p-7 shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
              {/* 装饰性引号 */}
              <div className="absolute -top-2 right-4 font-heading-en text-6xl text-amber/10 select-none">&ldquo;</div>

              <div className="relative z-10">
                <h3 className="font-heading-cn text-xl font-bold text-umber">{ch.name}</h3>
                <span className="mt-1 inline-block font-[system-ui] text-xs font-medium text-amber-dark">{ch.role}</span>
                <div className="my-4 h-px bg-gradient-to-r from-amber/20 via-amber/10 to-transparent" />
                <p className="font-body text-sm leading-relaxed text-umber-light">{ch.description}</p>
              </div>

              <div className="mt-4 flex items-center gap-2 font-[system-ui] text-xs text-umber-light/25">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="m11 17-5-5 5-5m7 10-5-5 5-5" />
                </svg>
                点击翻转回去
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
