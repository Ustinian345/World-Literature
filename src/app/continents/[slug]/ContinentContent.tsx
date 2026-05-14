"use client";

import { useState, useMemo, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { continents, allWorks, allGenres, allThemes, allEras } from "@/lib/data";

function getWorksByContinent(slug: string) {
  return allWorks.filter((w) => w.continent === slug);
}
import type { Genre, Theme, Era } from "@/lib/data";

export function ContinentContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const continent = continents.find((c) => c.slug === slug);
  if (!continent) notFound();

  const continentWorks = useMemo(() => getWorksByContinent(continent.slug), [continent.slug]);

  const [search, setSearch] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
  const [selectedThemes, setSelectedThemes] = useState<Theme[]>([]);
  const [selectedEras, setSelectedEras] = useState<Era[]>([]);

  const toggle = <T,>(arr: T[], item: T): T[] =>
    arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item];

  const filtered = useMemo(() => {
    let result = continentWorks;
    if (selectedGenres.length) result = result.filter((w) => w.genre.some((g) => selectedGenres.includes(g)));
    if (selectedThemes.length) result = result.filter((w) => w.themes.some((t) => selectedThemes.includes(t)));
    if (selectedEras.length) result = result.filter((w) => selectedEras.includes(w.era));
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter(
        (w) =>
          w.title.includes(q) || w.titleEn.toLowerCase().includes(q) ||
          w.author.includes(q) || w.country.includes(q)
      );
    }
    return result;
  }, [search, selectedGenres, selectedThemes, selectedEras, continentWorks]);

  const clearAll = () => { setSearch(""); setSelectedGenres([]); setSelectedThemes([]); setSelectedEras([]); };
  const hasFilters = search || selectedGenres.length || selectedThemes.length || selectedEras.length;

  const currentIndex = continents.findIndex((c) => c.slug === slug);
  const prev = continents[(currentIndex - 1 + continents.length) % continents.length];
  const next = continents[(currentIndex + 1) % continents.length];

  return (
    <>
      {/* ===== 大洲头部 ===== */}
      <section className={`mt-16 bg-gradient-to-br ${continent.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <Link
            href="/#continents"
            className="inline-flex items-center gap-1.5 font-[system-ui] text-sm text-white/70 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6" />
            </svg>
            返回首页
          </Link>

          <div className="mt-6 flex flex-col items-center text-center">
            <span className="text-6xl">{continent.icon}</span>
            <span className="mt-4 font-[system-ui] text-sm font-medium uppercase tracking-[0.25em] text-amber-light/90">
              {continent.nameEn}
            </span>
            <h1 className="mt-3 font-heading-cn text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              {continent.name}<span className="text-amber-light">文学</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cream/85">
              {continent.description}
            </p>
            <div className="mt-8 flex gap-8 divide-x divide-cream/20">
              {Object.entries(continent.stats).map(([key, val]) => (
                <div key={key} className="px-4 text-center">
                  <div className="font-heading-en text-3xl font-black text-amber-light">{val}</div>
                  <div className="mt-1 font-[system-ui] text-xs text-cream/60">
                    {key === "works" ? "作品" : key === "countries" ? "国家" : "语言"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 筛选栏 ===== */}
      <section className="sticky top-16 z-40 border-b border-sand/40 bg-cream/95 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-5 py-3">
          <input
            type="search"
            placeholder={`搜索${continent.name}作品、作家或国家…`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-3 w-full rounded-full border border-sand/60 bg-warm-white px-4 py-2 font-[system-ui] text-sm text-umber placeholder:text-umber-light/50 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
          />

          <div className="flex flex-wrap items-center gap-1.5">
            <span className="mr-1 font-[system-ui] text-[11px] text-umber-light/50">体裁:</span>
            {allGenres.map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGenres((prev) => toggle(prev, g))}
                className={`rounded-full border px-2.5 py-1 font-[system-ui] text-[11px] transition-colors ${
                  selectedGenres.includes(g)
                    ? "border-terracotta bg-terracotta text-white"
                    : "border-sand/50 bg-warm-white text-umber-light hover:border-amber/40"
                }`}
              >
                {g}
              </button>
            ))}
            <span className="mx-2 font-[system-ui] text-[11px] text-sand">|</span>
            <span className="mr-1 font-[system-ui] text-[11px] text-umber-light/50">题材:</span>
            {allThemes.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedThemes((prev) => toggle(prev, t))}
                className={`rounded-full border px-2.5 py-1 font-[system-ui] text-[11px] transition-colors ${
                  selectedThemes.includes(t)
                    ? "border-amber-dark bg-amber-dark text-white"
                    : "border-sand/50 bg-warm-white text-umber-light hover:border-amber/40"
                }`}
              >
                {t}
              </button>
            ))}
            <span className="mx-2 font-[system-ui] text-[11px] text-sand">|</span>
            <span className="mr-1 font-[system-ui] text-[11px] text-umber-light/50">年代:</span>
            {allEras.map((e) => (
              <button
                key={e}
                onClick={() => setSelectedEras((prev) => toggle(prev, e))}
                className={`rounded-full border px-2.5 py-1 font-[system-ui] text-[11px] transition-colors ${
                  selectedEras.includes(e)
                    ? "border-umber bg-umber text-cream"
                    : "border-sand/50 bg-warm-white text-umber-light hover:border-amber/40"
                }`}
              >
                {e.replace(" (—", " — ").replace(")", "")}
              </button>
            ))}
            {hasFilters && (
              <button onClick={clearAll} className="ml-auto rounded-full border border-red-300 px-2.5 py-1 font-[system-ui] text-[11px] text-red-500 hover:bg-red-50">
                清除筛选
              </button>
            )}
          </div>

          <div className="mt-2 font-[system-ui] text-[11px] text-umber-light/60">
            共 <span className="font-semibold text-umber">{filtered.length}</span> 部作品
            {hasFilters && "（已筛选）"}
          </div>
        </div>
      </section>

      {/* ===== 作品列表 ===== */}
      <section className="bg-cream py-10">
        <div className="mx-auto max-w-6xl px-5">
          {filtered.length === 0 ? (
            <div className="py-16 text-center">
              <p className="font-heading-cn text-xl text-umber-light">没有匹配的作品</p>
              <button onClick={clearAll} className="mt-3 rounded-full bg-terracotta px-5 py-2 font-[system-ui] text-sm text-white hover:bg-terracotta-dark">清除筛选</button>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((work) => (
                <Link
                  key={work.id}
                  href={`/works/${work.id}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-sand/50 bg-warm-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className={`flex h-28 items-center justify-center bg-gradient-to-br ${work.gradient} relative`}>
                    <span className="font-heading-cn text-lg font-bold text-white/85">{work.title}</span>
                    {work.titleEn && (
                      <span className="absolute bottom-1.5 right-3 font-heading-en text-[10px] italic text-white/45">{work.titleEn}</span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-sm">{work.flag}</span>
                      <span className="font-[system-ui] text-[11px] font-medium text-amber-dark">{work.country}</span>
                      {work.genre.slice(0, 2).map((g) => (
                        <span key={g} className="rounded bg-parchment px-1.5 py-0.5 font-[system-ui] text-[10px] text-umber-light/60">{g}</span>
                      ))}
                    </div>
                    <h3 className="mt-1.5 font-heading-cn text-lg font-bold text-umber">{work.title}</h3>
                    <p className="mt-0.5 font-body text-sm italic text-umber-light">{work.author}</p>
                    <p className="mt-2 line-clamp-2 flex-1 font-body text-xs leading-relaxed text-umber-light/75">{work.excerpt}</p>
                    <div className="mt-3 flex items-center gap-2 border-t border-sand/40 pt-2.5">
                      <span className="font-[system-ui] text-[10px] text-umber-light/50">{work.era.replace(" (—", " — ").replace(")", "")}</span>
                      <span className="ml-auto font-[system-ui] text-[10px] text-terracotta/70 group-hover:text-terracotta">查看详情 →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== 底部导航 ===== */}
      <section className="bg-parchment py-12">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-6 text-center">
            <h2 className="font-heading-cn text-2xl font-bold text-umber">继续探索其他大洲</h2>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Link
              href={`/continents/${prev.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-sand/50 bg-warm-white px-5 py-2.5 font-[system-ui] text-sm text-umber-light shadow-sm transition-all hover:border-amber/30 hover:text-umber"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
              {prev.icon} {prev.name}
            </Link>
            <Link
              href={`/continents/${next.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-sand/50 bg-warm-white px-5 py-2.5 font-[system-ui] text-sm text-umber-light shadow-sm transition-all hover:border-amber/30 hover:text-umber"
            >
              {next.name} {next.icon}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
