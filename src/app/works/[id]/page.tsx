import Link from "next/link";
import { notFound } from "next/navigation";
import { allWorks, continents } from "@/lib/data";
import { bookDetails } from "@/lib/book-data";
import { allCharacters } from "@/lib/character-data";
import { generateWorkDetail } from "@/lib/analysis-generator";
import { BookCover } from "@/components/BookCover";
import { HeroParticles } from "@/components/HeroParticles";
import { ScrollProgress } from "@/components/ScrollProgress";
import { PlotTimeline } from "@/components/PlotTimeline";
import { FlipCharacters } from "@/components/FlipCharacters";
import { SectionReveal } from "@/components/SectionReveal";
import { BackToTop } from "@/components/BackToTop";
import { ReadingControls } from "@/components/ReadingControls";
import { RelatedWorks } from "@/components/RelatedWorks";

export function generateStaticParams() {
  return allWorks.map((w) => ({ id: w.id }));
}

export default function WorkPage({ params }: { params: Promise<{ id: string }> }) {
  return <WorkContent params={params} />;
}

async function WorkContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const work = allWorks.find((w) => w.id === id);
  if (!work) notFound();

  const realCharacters = allCharacters[id];
  const generated = generateWorkDetail(work, realCharacters);
  const custom = bookDetails[id];
  // Start with generated content (plot, themes, techniques)
  // Overlay custom book details if they exist
  let detail = custom ? ({ ...generated, ...custom } as typeof generated) : generated;
  // Characters ALWAYS from character-data.ts if available (single source of truth)
  if (realCharacters) {
    detail = { ...detail, characters: realCharacters };
  }
  const continent = continents.find((c) => c.slug === work.continent);
  const readTime = Math.max(3, Math.ceil(
    (detail.plotSummary.length + detail.themeAnalysis.length + detail.techniques.length + detail.insights.length) / 800
  ));

  return (
    <>
      <ScrollProgress />
      {/* ===== Hero 头部 — 视差+粒子+3D封面 ===== */}
      <section className={`relative mt-16 overflow-hidden bg-gradient-to-br ${work.gradient}`}>
        <HeroParticles gradient={work.gradient} />
        <div className="absolute inset-0 bg-black/25 hero-gradient-overlay" />

        <div className="relative z-10 mx-auto max-w-6xl px-5 py-12 sm:py-20">
          {/* 面包屑 */}
          <Link
            href={`/continents/${work.continent}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 font-[system-ui] text-sm text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6" />
            </svg>
            {continent?.icon} {continent?.name}文学
          </Link>

          {/* 书名 + 3D封面 */}
          <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:items-start">
            {/* 3D书本封面 */}
            <div className="shrink-0 -rotate-2 transition-transform duration-500 hover:rotate-0 hover:scale-105">
              <BookCover
                title={work.title}
                author={work.author}
                gradient={work.gradient}
              />
            </div>

            {/* 文字区域 */}
            <div className="flex flex-col text-center sm:text-left">
              <div className="mb-3 flex flex-wrap justify-center gap-1.5 sm:justify-start">
                {work.genre.map((g) => (
                  <span key={g} className="rounded-full border border-white/30 bg-white/10 px-3 py-0.5 font-[system-ui] text-xs text-white/90 backdrop-blur-sm">
                    {g}
                  </span>
                ))}
              </div>

              <h1 className="font-heading-cn text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                {work.title}
              </h1>

              {work.titleEn && (
                <p className="mt-2 font-heading-en text-xl italic text-white/55">
                  {work.titleEn}
                </p>
              )}

              <div className="mt-4 flex flex-wrap items-center gap-3 font-[system-ui] text-base text-white/75">
                <span className="text-2xl">{work.flag}</span>
                <span className="font-medium">{work.country}</span>
                <span className="text-white/40">·</span>
                <span className="font-body text-lg italic">{work.author}</span>
                {work.year && (
                  <>
                    <span className="text-white/40">·</span>
                    <span>{work.year > 0 ? `${work.year}年` : `公元前${-work.year}年`}</span>
                  </>
                )}
              </div>

              {/* 元数据标签 */}
              <div className="mt-4 flex flex-wrap items-center gap-3 font-[system-ui] text-sm text-white/60">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
                  📖 约{readTime}分钟阅读
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
                  🏷️ {work.era.replace(" (—", " — ").replace(")", "")}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
                  🎨 {work.themes.slice(0, 3).join(" · ")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 底部渐变波浪 */}
        <div className="relative z-10 h-16">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 64" preserveAspectRatio="none">
            <path d="M0,32 C360,64 720,0 1080,32 C1260,48 1380,16 1440,16 L1440,64 L0,64 Z" fill="var(--color-cream)" opacity="0.15" />
            <path d="M0,48 C480,16 960,64 1440,48 L1440,64 L0,64 Z" fill="var(--color-cream)" opacity="0.25" />
          </svg>
        </div>
      </section>

      {/* ===== 简介 — 首字下沉 ===== */}
      <section className="bg-cream py-12 sm:py-16">
        <SectionReveal>
        <div className="mx-auto max-w-4xl px-5">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-terracotta text-xl shadow-md">📖</span>
            <h2 className="font-heading-cn text-2xl font-bold text-umber">作品简介</h2>
          </div>

          <div className="rounded-2xl border border-sand/40 bg-warm-white p-6 shadow-card sm:p-8">
            <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: "地区", value: `${work.flag} ${work.country}` },
                { label: "作者", value: work.author },
                { label: "年代", value: work.era.replace(" (—", " — ").replace(")", "") },
                { label: "体裁", value: work.genre[0] },
              ].map((info) => (
                <div key={info.label} className="rounded-xl bg-cream px-3 py-2.5 text-center">
                  <div className="font-[system-ui] text-[10px] uppercase tracking-wider text-umber-light/50">{info.label}</div>
                  <div className="mt-0.5 font-[system-ui] text-xs font-medium text-umber">{info.value}</div>
                </div>
              ))}
            </div>

            <p className="reader-content text-lg leading-relaxed text-umber-light first-line:font-bold first-line:text-umber">
              {work.excerpt}
            </p>
            <p className="reader-content mt-4 text-lg leading-relaxed text-umber-light">
              {detail.plotSummary}
            </p>
          </div>
        </div>
        </SectionReveal>
      </section>

      {/* ===== 人物介绍 — 翻转卡片 ===== */}
      {detail.characters.length > 0 && (
        <section className="bg-gradient-to-b from-cream to-parchment py-12 sm:py-16">
          <SectionReveal>
          <div className="mx-auto max-w-4xl px-5">
            <div className="flex items-center gap-3 mb-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-dark text-xl shadow-md">🎭</span>
              <h2 className="font-heading-cn text-2xl font-bold text-umber">人物介绍</h2>
            </div>
            <FlipCharacters characters={detail.characters} />
          </div>
          </SectionReveal>
        </section>
      )}

      {/* ===== 情节脉络 — SVG动画时间线 ===== */}
      {detail.plotNodes.length > 0 && (
        <section className="bg-warm-white py-12 sm:py-16">
          <SectionReveal>
          <div className="mx-auto max-w-4xl px-5">
            <div className="flex items-center gap-3 mb-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-terracotta text-xl shadow-md">🕐</span>
              <h2 className="font-heading-cn text-2xl font-bold text-umber">情节脉络</h2>
              <span className="ml-auto rounded-full bg-parchment px-3 py-1 font-[system-ui] text-xs text-umber-light/60">
                {detail.plotNodes.length} 个关键节点
              </span>
            </div>
            <PlotTimeline nodes={detail.plotNodes} gradient={work.gradient} />
          </div>
          </SectionReveal>
        </section>
      )}

      {/* ===== 主题分析 — 彩色卡片 ===== */}
      <section className="bg-cream py-12 sm:py-16">
        <SectionReveal>
        <div className="mx-auto max-w-4xl px-5">
          <div className="flex items-center gap-3 mb-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-umber text-xl shadow-md">💡</span>
            <h2 className="font-heading-cn text-2xl font-bold text-umber">主题分析</h2>
          </div>
          <div className="space-y-5">
            {detail.themeAnalysis.split(/\n\n/).filter(Boolean).map((paragraph, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-sand/40 bg-warm-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber/20 to-terracotta/20 font-heading-en text-sm font-bold text-terracotta">
                    {i + 1}
                  </span>
                  <p className="reader-content font-body text-base leading-relaxed text-umber-light">{paragraph}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </SectionReveal>
      </section>

      {/* ===== 写作手法 — 卡片网格 ===== */}
      <section className="bg-gradient-to-b from-cream to-parchment py-12 sm:py-16">
        <SectionReveal>
        <div className="mx-auto max-w-4xl px-5">
          <div className="flex items-center gap-3 mb-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-dark text-xl shadow-md">✍️</span>
            <h2 className="font-heading-cn text-2xl font-bold text-umber">手法与语言分析</h2>
          </div>
          <div className="space-y-5">
            {detail.techniques.split(/\n\n/).filter(Boolean).map((paragraph, i) => (
              <div
                key={i}
                className="rounded-2xl border-l-4 border-amber bg-white p-5 shadow-sm transition-all duration-300 hover:border-l-[6px] hover:shadow-card sm:p-6"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <p className="reader-content font-body text-base leading-relaxed text-umber-light">{paragraph}</p>
              </div>
            ))}
          </div>
        </div>
        </SectionReveal>
      </section>

      {/* ===== 经典摘抄 — 打字机风格 ===== */}
      {detail.excerpts.length > 0 && (
        <section className="bg-umber py-12 sm:py-16 relative overflow-hidden">
          {/* 背景装饰 */}
          <div className="pointer-events-none absolute inset-0 opacity-5">
            <div className="absolute -top-20 -right-20 text-[20rem] font-heading-en text-white select-none">&ldquo;</div>
            <div className="absolute -bottom-20 -left-20 text-[20rem] font-heading-en text-white select-none">&rdquo;</div>
          </div>

          <SectionReveal>
          <div className="relative z-10 mx-auto max-w-4xl px-5">
            <div className="flex items-center gap-3 mb-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-light/20 text-xl shadow-md">📝</span>
              <h2 className="font-heading-cn text-2xl font-bold text-cream">经典摘抄</h2>
            </div>
            <div className="space-y-8">
              {detail.excerpts.map((ex, i) => (
                <blockquote key={i} className="group relative rounded-2xl border border-cream/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/8 sm:p-8">
                  {/* 引用标记 */}
                  <svg className="absolute -top-3 -left-3 h-8 w-8 text-amber-light/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                  </svg>

                  <p className="reader-content font-heading-cn text-xl leading-relaxed text-amber-light sm:text-2xl">
                    「{ex.quote}」
                  </p>
                  <footer className="mt-4 flex items-center gap-3 border-t border-cream/10 pt-4">
                    <div className="h-px flex-1 bg-cream/10" />
                    <span className="font-body text-sm italic text-cream/45">{ex.context}</span>
                    <div className="h-px flex-1 bg-cream/10" />
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
          </SectionReveal>
        </section>
      )}

      {/* ===== 阅读启发 ===== */}
      <section className="bg-cream py-12 sm:py-16">
        <SectionReveal>
        <div className="mx-auto max-w-4xl px-5">
          <div className="flex items-center gap-3 mb-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber to-terracotta text-xl shadow-md">🌟</span>
            <h2 className="font-heading-cn text-2xl font-bold text-umber">阅读启发</h2>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber/5 via-cream to-terracotta/5 p-6 sm:p-8">
            {/* 装饰元素 */}
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-amber/5 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-terracotta/5 blur-3xl" />
            <div className="relative">
              <div className="flex items-start gap-3">
                <span className="text-3xl">💭</span>
                <p className="reader-content font-body text-lg leading-relaxed text-umber-light">
                  {detail.insights}
                </p>
              </div>
            </div>
          </div>
        </div>
        </SectionReveal>
      </section>

      {/* ===== 相关推荐 ===== */}
      <RelatedWorks currentId={id} allWorks={allWorks} />

      {/* ===== 底部导航 ===== */}
      <section className="bg-parchment py-12">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={`/continents/${work.continent}`}
              className="inline-flex items-center gap-2 rounded-full border border-sand/50 bg-warm-white px-5 py-2.5 font-[system-ui] text-sm text-umber-light shadow-sm transition-all hover:border-amber/30 hover:text-umber hover:shadow-card"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
              返回{continent?.name}文学
            </Link>
            <Link
              href="/browse"
              className="inline-flex items-center gap-2 rounded-full bg-umber px-5 py-2.5 font-[system-ui] text-sm text-cream shadow-sm transition-all hover:bg-umber-light"
            >
              浏览全部作品
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <BackToTop />
      <ReadingControls />
    </>
  );
}
