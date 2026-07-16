// ================================================================
// 单个文学奖详情页 — 奖项介绍 + 获奖作品列表
// ================================================================

import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { HeroMosaic } from "@/components/HeroMosaic";

export async function generateStaticParams() {
  const awards = await prisma.award.findMany({ select: { slug: true } });
  return awards.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const award = await prisma.award.findUnique({ where: { slug } });
  if (!award) return { title: "未找到" };
  return { title: `${award.name} — 世界文学总站`, description: award.description };
}

export default async function AwardPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const [award, winners, coverUrls] = await Promise.all([
    prisma.award.findUnique({ where: { slug } }),
    prisma.awardWinner.findMany({
      where: { awardSlug: slug },
      include: { work: true },
      orderBy: { year: "asc" },
    }),
    prisma.bgImage.findMany({
      where: { status: "completed", url: { not: "" } },
      select: { url: true },
      take: 50,
    }).then((imgs) =>
      imgs.map((b) => {
        const photoId = (b.url as string).match(/photo-([^?]+)/)?.[1];
        return photoId ? `https://images.unsplash.com/photo-${photoId}?w=400&q=75&fit=crop` : (b.url as string);
      })
    ),
  ]);

  if (!award) notFound();

  return (
    <>
      {/* 头部 */}
      <section className={`relative mt-16 overflow-hidden bg-gradient-to-br ${award.gradient}`}>
        <HeroMosaic bookImages={coverUrls} speed={50} />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:py-24 text-center">
          <Link href="/#awards" className="inline-flex items-center gap-1.5 font-[system-ui] text-sm text-white/70 transition-colors hover:text-white">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
            返回首页
          </Link>
          <div className="mt-6 flex flex-col items-center text-center">
            <span className="text-6xl">{award.icon}</span>
            <span className="mt-4 font-[system-ui] text-sm font-medium uppercase tracking-[0.25em] text-amber-light/90">{award.nameEn}</span>
            <h1 className="mt-3 font-heading-cn text-4xl font-black text-white sm:text-5xl">{award.name}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cream/85">{award.description}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 font-[system-ui] text-sm text-cream/70">
              <span>{award.flag} {award.country}</span>
              <span>·</span>
              <span>{award.established} 年创立</span>
              <span>·</span>
              <span>{award.frequency}</span>
              {award.website && <><span>·</span><a href={award.website} target="_blank" rel="noopener" className="underline hover:text-white">官网</a></>}
            </div>
          </div>
        </div>
      </section>

      {/* 奖项介绍 */}
      <section className="bg-cream py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-umber text-white shadow-lg"><span className="text-xl">📖</span></div>
            <div>
              <h2 className="font-heading-cn text-3xl font-bold text-umber">奖项介绍</h2>
              <div className="mt-1 h-0.5 w-16 bg-gradient-to-r from-umber to-transparent" />
            </div>
          </div>
          <div className="rounded-2xl bg-warm-white p-6 shadow-card sm:p-10">
            {award.introduction.split("\n\n").map((p, i) => (
              <p key={i} className={`font-body text-base leading-relaxed text-umber-light ${i > 0 ? "mt-4" : ""}`}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 获奖作品列表 */}
      <section className="bg-parchment py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-dark text-white shadow-lg"><span className="text-xl">🏅</span></div>
            <div>
              <h2 className="font-heading-cn text-3xl font-bold text-umber">获奖作品</h2>
              <p className="mt-1 text-sm text-stone-500">{winners.length} 部作品</p>
              <div className="mt-1 h-0.5 w-16 bg-gradient-to-r from-amber-dark to-transparent" />
            </div>
          </div>

          {winners.length === 0 ? (
            <div className="py-16 text-center"><p className="font-heading-cn text-xl text-umber-light">暂无获奖作品数据</p></div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {winners.map(({ work, year, category }) => (
                <Link key={`${work.id}-${year}`} href={`/works/${work.id}`} className="group flex flex-col overflow-hidden rounded-xl border border-sand/50 bg-warm-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className={`flex h-32 items-center justify-center bg-gradient-to-br ${work.gradient}`}>
                    <span className="font-heading-cn text-xl font-bold text-white/85">{work.title}</span>
                    {work.titleEn && <span className="absolute bottom-2 right-3 font-heading-en text-[10px] italic text-white/50">{work.titleEn}</span>}
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-base">{work.flag}</span>
                      <span className="font-[system-ui] text-[11px] font-medium text-amber-dark">{work.country}</span>
                    </div>
                    <h3 className="mt-1.5 font-heading-cn text-lg font-bold text-umber">{work.title}</h3>
                    <p className="mt-0.5 font-body text-sm italic text-umber-light">{work.author}</p>
                    <div className="mt-3 flex items-center gap-3 border-t border-sand/40 pt-2.5">
                      <span className="rounded-full bg-amber/10 px-2 py-0.5 font-[system-ui] text-[10px] font-medium text-amber-dark">{year}</span>
                      {category && <span className="font-[system-ui] text-[10px] text-umber-light/60">{category}</span>}
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
