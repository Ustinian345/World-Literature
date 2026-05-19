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
    <div className="grid gap-5 sm:grid-cols-2">
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
            className={`relative h-64 w-full transition-transform duration-700 [transform-style:preserve-3d] ${
              flipped.has(i) ? "[transform:rotateY(180deg)]" : ""
            }`}
          >
            {/* 正面 — 角色头像卡片 */}
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-sand/40 bg-warm-white p-6 shadow-card [backface-visibility:hidden]">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber/20 to-terracotta/20 text-3xl shadow-inner">
                {ch.name[0]}
              </div>
              <h3 className="mt-3 font-heading-cn text-xl font-bold text-umber">{ch.name}</h3>
              <span className="mt-1 rounded-full bg-parchment px-3 py-0.5 font-[system-ui] text-xs font-medium text-amber-dark">
                {ch.role}
              </span>
              <span className="mt-4 font-[system-ui] text-xs text-umber-light/40">
                点击翻转查看详情 →
              </span>
            </div>

            {/* 背面 — 详细介绍 */}
            <div className="absolute inset-0 flex flex-col justify-center rounded-2xl border border-amber/20 bg-gradient-to-br from-amber/5 to-terracotta/5 p-6 shadow-card [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <h3 className="font-heading-cn text-lg font-bold text-umber">{ch.name}</h3>
              <span className="mt-0.5 font-[system-ui] text-xs text-amber-dark">{ch.role}</span>
              <p className="mt-3 font-body text-sm leading-relaxed text-umber-light">{ch.description}</p>
              <span className="mt-3 font-[system-ui] text-xs text-umber-light/30">
                点击翻转回去 ←
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
