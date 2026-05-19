"use client";

import Link from "next/link";
import type { Work } from "@/lib/data";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function RelatedWorks({
  currentId,
  allWorks,
}: {
  currentId: string;
  allWorks: Work[];
}) {
  const current = allWorks.find((w) => w.id === currentId);
  if (!current) return null;

  const others = allWorks.filter((w) => w.id !== currentId);

  // Tier 1: same author
  const sameAuthor = others.filter((w) => w.author === current.author);

  // Tier 2: shared themes
  const sameTheme = others.filter(
    (w) => w.themes.some((t) => current.themes.includes(t))
  );

  // Tier 3: same genre + continent
  const sameGenreContinent = others.filter(
    (w) =>
      w.continent === current.continent &&
      w.genre.some((g) => current.genre.includes(g))
  );

  const picked: Work[] = [];
  const seen = new Set<string>();

  const add = (pool: Work[], limit: number) => {
    const fresh = shuffle(pool).filter((w) => !seen.has(w.id));
    for (const w of fresh) {
      if (picked.length >= limit) break;
      picked.push(w);
      seen.add(w.id);
    }
  };

  // Pick up to 6 with tiered fallback
  add(sameAuthor, 2);
  add(sameTheme, 4);
  add(sameGenreContinent, 6);
  add(shuffle(others), 6);

  if (picked.length === 0) return null;

  return (
    <div className="mx-auto max-w-5xl px-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {picked.slice(0, 6).map((w, i) => (
          <Link
            key={w.id}
            href={`/works/${w.id}`}
            className="group block rounded-2xl border border-sand/30 bg-warm-white p-6 shadow-bookshelf transition-all duration-500 hover:-translate-y-3 hover:shadow-xl"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {/* 书脊色条 */}
            <div
              className="-ml-6 -mt-6 mb-4 h-1.5 rounded-t-2xl"
              style={{
                background: `linear-gradient(to right, var(--color-terracotta), var(--color-amber))`,
              }}
            />

            <div className="mb-2 flex items-center gap-2">
              <span className="text-lg">{w.flag}</span>
              <span className="font-[system-ui] text-xs text-umber-light/40">
                {w.country}
              </span>
              <span className="ml-auto rounded-full bg-parchment px-2.5 py-0.5 font-[system-ui] text-[10px] font-medium text-amber-dark">
                {w.genre[0]}
              </span>
            </div>

            <h3 className="font-heading-cn text-lg font-bold text-umber transition-colors group-hover:text-terracotta">
              {w.title}
            </h3>
            {w.titleEn && (
              <p className="mt-0.5 font-heading-en text-sm italic text-umber-light/35">
                {w.titleEn}
              </p>
            )}

            <p className="mt-2.5 font-body text-sm text-umber-light/50">
              {w.author}
            </p>

            {/* 底部装饰线 */}
            <div className="mt-4 h-px bg-gradient-to-r from-sand/50 to-transparent" />
          </Link>
        ))}
      </div>
    </div>
  );
}
