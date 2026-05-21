import Link from "next/link";
import { Suspense } from "react";
import { continents, featuredWorks, hotTopics, allWorks } from "@/lib/data";
import { awards, getAwardStats } from "@/lib/award-data";
import { textbookLevels, getTextbookStats } from "@/lib/textbook-data";
import { HeroMosaic } from "@/components/HeroMosaic";
import { getBookCoverImages } from "@/lib/mosaic-images";
import TrendingTopics from "@/components/TrendingTopics";

export default function Home() {
  const countrySet = new Set(allWorks.map(w => w.country));
  const totalCountries = countrySet.size;

  const bookImages = getBookCoverImages();

  return (
    <>
      {/* ===== 英雄区 ===== */}
      <section
        id="home"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 text-center"
      >
        <HeroMosaic bookImages={bookImages} speed={60} />

        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="inline-block rounded-full border border-amber/40 px-4 py-1.5 font-[system-ui] text-xs font-medium uppercase tracking-[0.2em] text-amber-light">
            World Literature Hub
          </span>

          <h1 className="mt-6 font-heading-cn text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            世界文学
            <br />
            <span className="text-amber">总站</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/80 sm:text-xl">
            收录全球六大洲、各语种的经典文学作品。
            <br className="hidden sm:block" />
            从亚洲的古老经卷到非洲的口述史诗，每一页都是一次跨越时空的对话。
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="#continents"
              className="inline-flex h-12 items-center rounded-full bg-terracotta px-8 font-[system-ui] text-sm font-medium text-white transition-colors hover:bg-terracotta-dark"
            >
              探索六大洲
            </Link>
            <Link
              href="#featured"
              className="inline-flex h-12 items-center rounded-full border border-cream/30 px-8 font-[system-ui] text-sm font-medium text-cream transition-colors hover:border-cream/60 hover:bg-cream/5"
            >
              精选推荐
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 animate-bounce text-cream/50">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </section>

      {/* ===== 数据统计栏 ===== */}
      <section className="relative -mt-1 bg-umber py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-3 divide-x divide-cream/10 px-5">
          {[
            { value: "6", label: "大洲 Continents" },
            { value: totalCountries + "+", label: "国家 Countries" },
            { value: allWorks.length + "+", label: "作品 Works" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-heading-en text-4xl font-black text-amber sm:text-5xl">
                {stat.value}
              </span>
              <span className="font-[system-ui] text-xs text-cream/50 sm:text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 今日文学焦点 ===== */}
      <Suspense fallback={<div className="py-10 text-center text-stone-400">加载中...</div>}>
        <TrendingTopics />
      </Suspense>

      {/* ===== 探索六大洲 ===== */}
      <section id="continents" className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 text-center">
            <span className="font-[system-ui] text-xs font-medium uppercase tracking-[0.2em] text-amber-dark">
              Explore the World
            </span>
            <h2 className="mt-3 font-heading-cn text-3xl font-bold text-umber sm:text-4xl">
              探索六大洲
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-umber-light">
              选择一个大洲，开启你的世界文学之旅。每个大洲都有独特的文学传统与经典等待你去发现。
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {continents.map((continent) => (
              <Link
                key={continent.slug}
                href={`/continents/${continent.slug}`}
                className="group relative overflow-hidden rounded-xl border border-sand/60 bg-warm-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                {/* 大洲渐变色块 */}
                <div
                  className={`flex h-36 items-center justify-center bg-gradient-to-br ${continent.gradient} relative overflow-hidden`}
                >
                  <span className="text-5xl transition-transform duration-300 group-hover:scale-110">
                    {continent.icon}
                  </span>
                  {/* 覆盖层：hover 时展示 */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full border-2 border-white/80 px-5 py-2 font-[system-ui] text-sm font-medium text-white">
                      探索 →
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-[system-ui] text-xs font-medium uppercase tracking-[0.15em] text-amber-dark">
                        {continent.nameEn}
                      </span>
                      <h3 className="mt-1 font-heading-cn text-xl font-bold text-umber">
                        {continent.name}
                      </h3>
                    </div>
                    <svg
                      className="h-5 w-5 text-amber-dark/40 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>

                  <p className="mt-3 line-clamp-2 font-body text-sm leading-relaxed text-umber-light">
                    {continent.description}
                  </p>

                  <div className="mt-4 flex gap-4 border-t border-sand/50 pt-3 font-[system-ui] text-xs text-umber-light/70">
                    <span>{continent.stats.countries} 个国家</span>
                    <span>{continent.stats.works} 作品</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 文学奖项 ===== */}
      <section id="awards" className="bg-parchment py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 text-center">
            <span className="font-[system-ui] text-xs font-medium uppercase tracking-[0.2em] text-amber-dark">
              Literary Awards
            </span>
            <h2 className="mt-3 font-heading-cn text-3xl font-bold text-umber sm:text-4xl">
              文学奖项
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-umber-light">
              从诺贝尔文学奖到茅盾文学奖，通过奖项发现被历史铭记的杰作
            </p>
          </div>

          <AwardsGrid />
        </div>
      </section>

      {/* ===== 教材文学 ===== */}
      <section id="textbook" className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 text-center">
            <span className="font-[system-ui] text-xs font-medium uppercase tracking-[0.2em] text-emerald-700">Textbook Literature</span>
            <h2 className="mt-3 font-heading-cn text-3xl font-bold text-umber sm:text-4xl">教材文学</h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-umber-light">
              那些印在语文课本里的文字，构成了我们共同的文学记忆——从小学到高中，从古诗到世界名著
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {textbookLevels.map((level) => (
              <Link
                key={level.slug}
                href={`/textbook/${level.slug}`}
                className="group relative overflow-hidden rounded-xl border border-sand/60 bg-warm-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <div className={`flex h-36 items-center justify-center bg-gradient-to-br ${level.gradient} relative overflow-hidden`}>
                  <span className="text-5xl transition-transform duration-300 group-hover:scale-110">{level.icon}</span>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full border-2 border-white/80 px-5 py-2 font-[system-ui] text-sm font-medium text-white">探索 →</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-[system-ui] text-xs font-medium uppercase tracking-[0.15em] text-amber-dark">{level.grades}</span>
                      <h3 className="mt-1 font-heading-cn text-xl font-bold text-umber">{level.name}</h3>
                    </div>
                    <svg className="h-5 w-5 text-amber-dark/40 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
                  </div>
                  <p className="mt-3 line-clamp-2 font-body text-sm leading-relaxed text-umber-light">{level.description}</p>
                  <div className="mt-4 flex gap-4 border-t border-sand/50 pt-3 font-[system-ui] text-xs text-umber-light/70">
                    <span>{level.stats}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 精选推荐 ===== */}
      <section id="featured" className="bg-parchment py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 text-center">
            <span className="font-[system-ui] text-xs font-medium uppercase tracking-[0.2em] text-amber-dark">
              Curator&apos;s Picks
            </span>
            <h2 className="mt-3 font-heading-cn text-3xl font-bold text-umber sm:text-4xl">
              精选推荐
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-umber-light">
              从六大洲文学传统中精心挑选，跨越时空的经典之作
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredWorks.map((work) => (
              <Link
                key={work.title}
                href={`/works/${work.id}`}
                className="group flex flex-col overflow-hidden rounded-lg border border-sand bg-warm-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div
                  className={`flex h-40 items-center justify-center bg-gradient-to-br ${work.gradient}`}
                >
                  <span className="font-heading-cn text-xl font-bold text-white/80">
                    {work.title}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="font-[system-ui] text-xs font-medium text-amber-dark">
                    {work.flag} {work.country}
                  </span>
                  <h3 className="mt-1 font-heading-cn text-lg font-bold text-umber">
                    {work.title}
                  </h3>
                  <p className="mt-0.5 font-body text-sm italic text-umber-light">
                    {work.author}
                  </p>
                  <p className="mt-3 line-clamp-3 flex-1 font-body text-sm leading-relaxed text-umber-light/80">
                    {work.excerpt}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 font-[system-ui] text-xs font-medium text-terracotta">
                    查看详情
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 热门话题 ===== */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <span className="font-[system-ui] text-xs font-medium uppercase tracking-[0.2em] text-amber-dark">
            Hot Topics
          </span>
          <h2 className="mt-3 font-heading-cn text-3xl font-bold text-umber sm:text-4xl">
            热门话题
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-umber-light">
            探索当下最受关注的文学主题，发现新的阅读兴趣
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {hotTopics.map((topic) => (
              <Link
                key={topic.tag}
                href={topic.href}
                className="inline-flex items-center gap-2 rounded-full border border-sand/60 bg-warm-white px-5 py-2.5 font-[system-ui] text-sm text-umber-light shadow-sm transition-all hover:border-amber/40 hover:text-umber hover:shadow-md"
              >
                {topic.tag}
                <span className="rounded-full bg-parchment px-1.5 py-0.5 text-xs text-amber-dark">
                  {topic.count}
                </span>
              </Link>
            ))}
            <Link
              href="/awards"
              className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-gradient-to-r from-amber-700/10 to-yellow-600/10 px-5 py-2.5 font-[system-ui] text-sm font-medium text-amber-dark shadow-sm transition-all hover:border-amber/60 hover:shadow-md"
            >
              🏆 文学奖项
              <span className="rounded-full bg-amber/10 px-1.5 py-0.5 text-xs text-amber-dark">12</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-umber py-20 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="font-heading-cn text-3xl font-bold text-cream sm:text-4xl">
            开启你的文学之旅
          </h2>
          <p className="mt-4 text-lg text-cream/60">
            探索六大洲、100+ 个国家的经典作品，发现跨越时空的智慧与美
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="#continents"
              className="inline-flex h-12 items-center rounded-full bg-terracotta px-8 font-[system-ui] text-sm font-medium text-white transition-colors hover:bg-terracotta-dark"
            >
              立即探索
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function AwardsGrid() {
  const stats = getAwardStats();
  const showcase = [
    awards.find((a) => a.slug === "nobel-literature")!,
    awards.find((a) => a.slug === "booker-prize")!,
    awards.find((a) => a.slug === "pulitzer-fiction")!,
    awards.find((a) => a.slug === "maodun-prize")!,
    awards.find((a) => a.slug === "luxun-prize")!,
    awards.find((a) => a.slug === "hugo-award")!,
  ].filter(Boolean);

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {showcase.map((award) => (
        <Link
          key={award.slug}
          href={`/awards/${award.slug}`}
          className="group relative overflow-hidden rounded-xl border border-sand/60 bg-warm-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
        >
          <div
            className={`flex h-36 items-center justify-center bg-gradient-to-br ${award.gradient} relative overflow-hidden`}
          >
            <span className="text-5xl transition-transform duration-300 group-hover:scale-110">
              {award.icon}
            </span>
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="rounded-full border-2 border-white/80 px-5 py-2 font-[system-ui] text-sm font-medium text-white">
                探索 →
              </span>
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-[system-ui] text-xs font-medium uppercase tracking-[0.15em] text-amber-dark">
                  {award.nameEn}
                </span>
                <h3 className="mt-1 font-heading-cn text-xl font-bold text-umber">
                  {award.name}
                </h3>
              </div>
              <svg
                className="h-5 w-5 text-amber-dark/40 transition-transform duration-300 group-hover:translate-x-1"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
            <p className="mt-3 line-clamp-2 font-body text-sm leading-relaxed text-umber-light">
              {award.description}
            </p>
            <div className="mt-4 flex gap-4 border-t border-sand/50 pt-3 font-[system-ui] text-xs text-umber-light/70">
              <span>{award.flag} {award.country}</span>
              <span>{award.established}年创立</span>
              {(stats[award.slug] || 0) > 0 && (
                <span className="font-medium text-amber-dark">{stats[award.slug]} 部收录</span>
              )}
            </div>
          </div>
        </Link>
      ))}
      <Link
        href="/awards"
        className="group relative overflow-hidden rounded-xl border-2 border-dashed border-sand/50 bg-warm-white/40 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-amber/30 hover:shadow-card-hover"
      >
        <div className="flex h-full min-h-[260px] flex-col items-center justify-center p-8 text-center">
          <span className="text-4xl transition-transform duration-300 group-hover:scale-110">🏆</span>
          <h3 className="mt-4 font-heading-cn text-xl font-bold text-umber">查看全部奖项</h3>
          <p className="mt-2 font-body text-sm leading-relaxed text-umber-light/60">
            探索全部 12 个中外重要文学奖项
          </p>
          <span className="mt-4 rounded-full border border-amber/40 px-4 py-1.5 font-[system-ui] text-sm text-amber-dark transition-colors group-hover:bg-amber/10">
            全部奖项 →
          </span>
        </div>
      </Link>
    </div>

  );
}
