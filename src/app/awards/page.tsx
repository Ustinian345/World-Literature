// ================================================================
// 文学奖总览页 — 国际奖项 + 中国奖项
// ================================================================

import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "文学奖项 — 世界文学总站",
  description: "探索诺贝尔文学奖、布克奖、普利策奖、茅盾文学奖、鲁迅文学奖等中外重要文学奖项及其获奖作品。",
};

export default async function AwardsPage() {
  const [awards, awardWinnerCounts] = await Promise.all([
    prisma.award.findMany({ orderBy: [{ category: "asc" }, { slug: "asc" }] }),
    prisma.awardWinner.groupBy({ by: ["awardSlug"], _count: { awardSlug: true } }),
  ]);

  const stats: Record<string, number> = {};
  for (const row of awardWinnerCounts) {
    stats[row.awardSlug] = row._count.awardSlug;
  }

  const international = awards.filter((a) => a.category === "international");
  const chinese = awards.filter((a) => a.category === "chinese");

  return (
    <>
      <section className="mt-16 bg-gradient-to-br from-umber via-umber-light to-amber-dark py-16 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <span className="font-[system-ui] text-xs font-medium uppercase tracking-[0.2em] text-amber-light/80">Literary Awards</span>
          <h1 className="mt-3 font-heading-cn text-4xl font-black text-white sm:text-5xl">文学奖项</h1>
          <p className="mt-4 text-lg text-cream/70">从诺贝尔文学奖到茅盾文学奖，通过奖项发现被历史铭记的杰作</p>
        </div>
      </section>

      {/* 国际奖项 */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="mb-8 font-heading-cn text-2xl font-bold text-umber">🌍 国际奖项</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {international.map((award) => (
              <Link key={award.slug} href={`/awards/${award.slug}`} className="group relative overflow-hidden rounded-xl border border-sand/60 bg-warm-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                <div className={`flex h-36 items-center justify-center bg-gradient-to-br ${award.gradient} relative overflow-hidden`}>
                  <span className="text-5xl transition-transform duration-300 group-hover:scale-110">{award.icon}</span>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full border-2 border-white/80 px-5 py-2 font-[system-ui] text-sm font-medium text-white">探索 →</span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="font-[system-ui] text-xs font-medium uppercase tracking-[0.15em] text-amber-dark">{award.nameEn}</span>
                  <h3 className="mt-1 font-heading-cn text-xl font-bold text-umber">{award.name}</h3>
                  <p className="mt-3 line-clamp-2 font-body text-sm leading-relaxed text-umber-light">{award.description}</p>
                  <div className="mt-4 flex gap-4 border-t border-sand/50 pt-3 font-[system-ui] text-xs text-umber-light/70">
                    <span>{award.flag} {award.country}</span>
                    <span>{award.established}年创立</span>
                    {(stats[award.slug] || 0) > 0 && <span className="font-medium text-amber-dark">{stats[award.slug]} 部收录</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 中国奖项 */}
      <section className="bg-parchment py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="mb-8 font-heading-cn text-2xl font-bold text-umber">🇨🇳 中国奖项</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {chinese.map((award) => (
              <Link key={award.slug} href={`/awards/${award.slug}`} className="group relative overflow-hidden rounded-xl border border-sand/60 bg-warm-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                <div className={`flex h-36 items-center justify-center bg-gradient-to-br ${award.gradient} relative overflow-hidden`}>
                  <span className="text-5xl transition-transform duration-300 group-hover:scale-110">{award.icon}</span>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full border-2 border-white/80 px-5 py-2 font-[system-ui] text-sm font-medium text-white">探索 →</span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="font-[system-ui] text-xs font-medium uppercase tracking-[0.15em] text-amber-dark">{award.nameEn}</span>
                  <h3 className="mt-1 font-heading-cn text-xl font-bold text-umber">{award.name}</h3>
                  <p className="mt-3 line-clamp-2 font-body text-sm leading-relaxed text-umber-light">{award.description}</p>
                  <div className="mt-4 flex gap-4 border-t border-sand/50 pt-3 font-[system-ui] text-xs text-umber-light/70">
                    <span>{award.flag} {award.country}</span>
                    <span>{award.established}年创立</span>
                    {(stats[award.slug] || 0) > 0 && <span className="font-medium text-amber-dark">{stats[award.slug]} 部收录</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
