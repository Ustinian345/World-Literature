// ================================================================
// 单个文学奖详情页 — 奖项介绍 + 获奖作品列表
// ================================================================

import Link from "next/link";
import { notFound } from "next/navigation";
import { awards, getWinnersByAward, getAward } from "@/lib/award-data";
import { allWorks } from "@/lib/data";
import { HeroMosaic } from "@/components/HeroMosaic";

export function generateStaticParams() {
  return awards.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const award = getAward(slug);
  if (!award) return { title: "未找到" };
  return {
    title: `${award.name} — 世界文学总站`,
    description: award.description,
  };
}

export default async function AwardPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const award = getAward(slug);
  if (!award) notFound();

  const winners = getWinnersByAward(slug);
  const winnerWorks = winners
    .map((w) => {
      const work = allWorks.find((wk) => wk.id === w.workId);
      return { winner: w, work };
    })
    .filter((x) => x.work != null);

  const awardGradients = winnerWorks.map((x) => x.work!.gradient);
  const awardTitles = winnerWorks.map((x) => x.work!.title);

  return (
    <div className="min-h-screen bg-cream">
      <section className={`relative mt-16 overflow-hidden bg-gradient-to-br ${award.gradient}`}>
        <HeroMosaic
          gradients={awardGradients}
          titles={awardTitles}
          landmarks={["🏆", "📖", "✒️", "🥇", "🎭", "🌟", "📚", "🏅", "🎨", "💡", "🔮", "⚡"]}
          speed={50}
        />
        <div className="absolute inset-0 bg-black/15 z-[5]" />
        <div className="relative z-10 mx-auto max-w-5xl px-5 py-16 sm:py-24">
          <Link
            href="/awards"
            className="inline-flex items-center gap-1.5 rounded-full bg-white/8 px-4 py-1.5 font-[system-ui] text-sm text-white/70 backdrop-blur-sm transition-all hover:bg-white/15 hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6" />
            </svg>
            返回奖项总览
          </Link>

          <div className="mt-8 flex items-center gap-5">
            <span className="text-5xl">{award.icon}</span>
            <div>
              <h1 className="font-heading-cn text-4xl font-black text-white sm:text-5xl">
                {award.name}
              </h1>
              <p className="mt-1 font-heading-en text-xl italic text-white/50">{award.nameEn}</p>
            </div>
          </div>

          {/* 元数据标签 */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/10 px-4 py-1.5 font-[system-ui] text-sm text-white/80 backdrop-blur-sm">
              {award.flag} {award.country}
            </span>
            <span className="rounded-full bg-white/10 px-4 py-1.5 font-[system-ui] text-sm text-white/80 backdrop-blur-sm">
              {award.established}年创立
            </span>
            <span className="rounded-full bg-white/10 px-4 py-1.5 font-[system-ui] text-sm text-white/80 backdrop-blur-sm">
              {award.frequency}
            </span>
            <span className="rounded-full bg-white/10 px-4 py-1.5 font-[system-ui] text-sm text-white/80 backdrop-blur-sm">
              收录 {winnerWorks.length} 部获奖作品
            </span>
          </div>
        </div>
        <div className="relative z-10 h-12">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 64" preserveAspectRatio="none">
            <path d="M0,48 C480,16 960,64 1440,48 L1440,64 L0,64 Z" fill="var(--color-cream)" opacity="0.2" />
          </svg>
        </div>
      </section>

      {/* 奖项简介 */}
      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-dark text-white shadow-lg">
              <span className="text-lg">📖</span>
            </div>
            <h2 className="font-heading-cn text-2xl font-bold text-umber">奖项简介</h2>
          </div>
          <div className="rounded-2xl bg-book-page p-6 shadow-sm sm:p-8">
            {award.introduction.split("\n\n").filter(Boolean).map((para, i) => (
              <p key={i} className={`font-[system-ui] text-lg leading-relaxed text-umber-light ${i > 0 ? "mt-4" : ""}`}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 获奖作品列表 */}
      <section className="bg-parchment/35 py-10 sm:py-16">
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta text-white shadow-lg">
              <span className="text-lg">🏅</span>
            </div>
            <h2 className="font-heading-cn text-2xl font-bold text-umber">
              收录获奖作品
              <span className="ml-3 font-[system-ui] text-base font-normal text-umber-light/40">
                ({winnerWorks.length} 部)
              </span>
            </h2>
          </div>

          {winnerWorks.length === 0 ? (
            <div className="rounded-2xl border border-sand/20 bg-warm-white/60 p-12 text-center">
              <p className="font-[system-ui] text-base text-umber-light/40">
                该奖项的收录作品正在建设中，敬请期待。
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {winnerWorks.map(({ winner, work }) => (
                <Link
                  key={`${winner.workId}-${winner.year}`}
                  href={`/works/${winner.workId}`}
                  className="group block rounded-2xl border border-sand/20 bg-warm-white/80 p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* 获奖年份徽章 */}
                  <div className="mb-3 flex items-center gap-3">
                    <span className={`shrink-0 rounded-full bg-gradient-to-r ${award.gradient} px-3 py-1 font-heading-en text-xs font-bold text-white shadow-sm`}>
                      {winner.year}
                    </span>
                    {winner.category && (
                      <span className="font-[system-ui] text-xs text-umber-light/40 truncate">
                        {winner.category}
                      </span>
                    )}
                  </div>

                  {/* 书名 */}
                  <h3 className="font-heading-cn text-lg font-bold text-umber group-hover:text-terracotta transition-colors">
                    {work!.title}
                  </h3>
                  {work!.titleEn && (
                    <p className="mt-0.5 font-heading-en text-sm italic text-umber-light/30 truncate">
                      {work!.titleEn}
                    </p>
                  )}

                  {/* 作者 + 标签 */}
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="font-[system-ui] text-sm text-umber-light/50">
                      {work!.flag} {work!.author}
                    </span>
                    <span className="text-umber-light/20">·</span>
                    <span className="font-[system-ui] text-sm text-umber-light/40">{work!.era.replace(" (—", " — ").replace(")", "")}</span>
                  </div>

                  {/* 渐变指示条 */}
                  <div className={`mt-3 h-0.5 w-0 rounded-full bg-gradient-to-r ${award.gradient} transition-all duration-500 group-hover:w-full`} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
