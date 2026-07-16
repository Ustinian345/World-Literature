"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { continents, type Continent } from "@/lib/continents";
import { BookmarkStar } from "@/components/BookmarkButton";

type Genre = "小说" | "诗歌" | "戏剧" | "史诗" | "散文/随笔" | "民间故事" | "哲学";
type Theme = "爱情" | "战争" | "历史" | "哲学" | "社会" | "冒险" | "心理" | "魔幻" | "宗教" | "自然";
type Era = "古代 (—500)" | "中世纪 (500—1500)" | "文艺复兴 (1500—1700)" | "近代 (1700—1900)" | "现代 (1900—1950)" | "当代 (1950—)";

const allGenres: Genre[] = ["小说", "诗歌", "戏剧", "史诗", "散文/随笔", "民间故事", "哲学"];
const allThemes: Theme[] = ["爱情", "战争", "历史", "哲学", "社会", "冒险", "心理", "魔幻", "宗教", "自然"];
const allEras: Era[] = ["古代 (—500)", "中世纪 (500—1500)", "文艺复兴 (1500—1700)", "近代 (1700—1900)", "现代 (1900—1950)", "当代 (1950—)"];

interface WorkProps {
  id: string;
  title: string;
  titleEn: string;
  author: string;
  country: string;
  flag: string;
  continent: string;
  era: string;
  genres: unknown;
  themes: unknown;
  excerpt: string;
  gradient: string;
  year: number | null;
}

export function BrowseClient({ works }: { works: WorkProps[] }) {
  const [search, setSearch] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
  const [selectedThemes, setSelectedThemes] = useState<Theme[]>([]);
  const [selectedEras, setSelectedEras] = useState<Era[]>([]);
  const [selectedContinent, setSelectedContinent] = useState<Continent | "">("");

  const toggle = <T,>(arr: T[], item: T): T[] =>
    arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item];

  const filtered = useMemo(() => {
    let result = works;
    if (selectedContinent) result = result.filter((w) => w.continent === selectedContinent);
    if (selectedGenres.length) result = result.filter((w) => ((w.genres as string[]) ?? []).some((g: string) => selectedGenres.includes(g as Genre)));
    if (selectedThemes.length) result = result.filter((w) => ((w.themes as string[]) ?? []).some((t: string) => selectedThemes.includes(t as Theme)));
    if (selectedEras.length) result = result.filter((w) => selectedEras.includes(w.era as Era));
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter((w) => w.title.includes(q) || w.titleEn.toLowerCase().includes(q) || w.author.includes(q) || w.country.includes(q));
    }
    return result;
  }, [search, selectedGenres, selectedThemes, selectedEras, selectedContinent, works]);

  const clearAll = () => { setSearch(""); setSelectedGenres([]); setSelectedThemes([]); setSelectedEras([]); setSelectedContinent(""); };
  const hasFilters = search || selectedGenres.length || selectedThemes.length || selectedEras.length || selectedContinent;

  return (
    <>
      {/* 顶部标题 */}
      <section className="mt-16 bg-gradient-to-br from-umber via-umber-light to-amber-dark py-16 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <span className="font-[system-ui] text-xs font-medium uppercase tracking-[0.2em] text-amber-light/80">Browse & Discover</span>
          <h1 className="mt-3 font-heading-cn text-4xl font-black text-white sm:text-5xl">浏览全部作品</h1>
          <p className="mt-4 text-lg text-cream/70">按体裁、题材、年代、地区分类探索 {works.length}+ 部世界文学经典</p>
        </div>
      </section>

      {/* 筛选栏 */}
      <section className="sticky top-16 z-40 border-b border-sand/40 bg-cream/95 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-5 py-4">
          <div className="mb-4">
            <input type="search" placeholder="搜索作品、作家或国家…" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-full border border-sand/60 bg-warm-white px-5 py-2.5 font-[system-ui] text-sm text-umber placeholder:text-umber-light/50 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20" />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <select value={selectedContinent} onChange={(e) => setSelectedContinent(e.target.value as Continent | "")} className="rounded-full border border-sand/50 bg-warm-white px-3 py-1.5 font-[system-ui] text-xs text-umber-light">
              <option value="">全部地区</option>
              {continents.map((c) => <option key={c.slug} value={c.slug}>{c.icon} {c.name}</option>)}
            </select>

            {allGenres.map((g) => (
              <button key={g} onClick={() => setSelectedGenres((prev) => toggle(prev, g))} className={`rounded-full border px-3 py-1.5 font-[system-ui] text-xs transition-colors ${selectedGenres.includes(g) ? "border-terracotta bg-terracotta text-white" : "border-sand/50 bg-warm-white text-umber-light hover:border-amber/40"}`}>{g}</button>
            ))}

            <span className="mx-1 font-[system-ui] text-xs text-sand">|</span>

            {allThemes.map((t) => (
              <button key={t} onClick={() => setSelectedThemes((prev) => toggle(prev, t))} className={`rounded-full border px-3 py-1.5 font-[system-ui] text-xs transition-colors ${selectedThemes.includes(t) ? "border-amber-dark bg-amber-dark text-white" : "border-sand/50 bg-warm-white text-umber-light hover:border-amber/40"}`}>{t}</button>
            ))}

            <span className="mx-1 font-[system-ui] text-xs text-sand">|</span>

            {allEras.map((e) => (
              <button key={e} onClick={() => setSelectedEras((prev) => toggle(prev, e))} className={`rounded-full border px-3 py-1.5 font-[system-ui] text-xs transition-colors ${selectedEras.includes(e) ? "border-umber bg-umber text-cream" : "border-sand/50 bg-warm-white text-umber-light hover:border-amber/40"}`}>{e.replace(" (—", " — ").replace(")", "")}</button>
            ))}

            {hasFilters && (
              <button onClick={clearAll} className="ml-auto rounded-full border border-red-300 px-3 py-1.5 font-[system-ui] text-xs text-red-500 transition-colors hover:bg-red-50">清除全部筛选</button>
            )}
          </div>

          <div className="mt-3 flex items-center gap-2 font-[system-ui] text-xs text-umber-light/70">
            <span>共 <span className="font-semibold text-umber">{filtered.length}</span> 部作品</span>
            {hasFilters && <span>（已筛选）</span>}
          </div>
        </div>
      </section>

      {/* 作品网格 */}
      <section className="bg-cream py-12">
        <div className="mx-auto max-w-6xl px-5">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-heading-cn text-2xl text-umber-light">没有找到匹配的作品</p>
              <p className="mt-2 text-umber-light/60">请尝试调整筛选条件</p>
              <button onClick={clearAll} className="mt-4 rounded-full bg-terracotta px-6 py-2 font-[system-ui] text-sm text-white hover:bg-terracotta-dark">清除全部筛选</button>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((work) => (
                <Link key={work.id} href={`/works/${work.id}`} className="group flex flex-col overflow-hidden rounded-xl border border-sand/50 bg-warm-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className={`relative flex h-32 items-center justify-center bg-gradient-to-br ${work.gradient}`}>
                    <BookmarkStar workId={work.id} className="absolute left-3 top-3 text-lg" />
                    <span className="font-heading-cn text-xl font-bold text-white/85">{work.title}</span>
                    {work.titleEn && <span className="absolute bottom-2 right-3 font-heading-en text-[10px] italic text-white/50">{work.titleEn}</span>}
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-base">{work.flag}</span>
                      <span className="font-[system-ui] text-[11px] font-medium text-amber-dark">{work.country}</span>
                      {((work.genres as string[]) ?? []).slice(0, 2).map((g: string) => (
                        <span key={g} className="rounded bg-parchment px-1.5 py-0.5 font-[system-ui] text-[10px] text-umber-light/60">{g}</span>
                      ))}
                    </div>
                    <h3 className="mt-1.5 font-heading-cn text-lg font-bold text-umber">{work.title}</h3>
                    <p className="mt-0.5 font-body text-sm italic text-umber-light">{work.author}</p>
                    <p className="mt-2 line-clamp-2 flex-1 font-body text-xs leading-relaxed text-umber-light/75">{work.excerpt}</p>
                    <div className="mt-3 flex items-center gap-2 border-t border-sand/40 pt-2.5">
                      <span className="font-[system-ui] text-[10px] text-umber-light/50">{work.era.replace(" (—", " — ").replace(")", "")}</span>
                      {work.year && <span className="font-[system-ui] text-[10px] text-amber-dark/60">{work.year > 0 ? `${work.year}年` : `公元前${-work.year}年`}</span>}
                      <span className="ml-auto font-[system-ui] text-[10px] text-terracotta/70 group-hover:text-terracotta">查看详情 →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
