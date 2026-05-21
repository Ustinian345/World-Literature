import Link from "next/link";
import { notFound } from "next/navigation";
import { allWorks, continents } from "@/lib/data";
import { bookDetails } from "@/lib/book-data";
import { allCharacters } from "@/lib/character-data";
import { generateWorkDetail } from "@/lib/analysis-generator";
import { BookCover } from "@/components/BookCover";
import { RealPageBackground } from "@/components/RealPageBackground";
import { HeroParticles } from "@/components/HeroParticles";
import { ScrollProgress } from "@/components/ScrollProgress";
import { PlotTimeline } from "@/components/PlotTimeline";
import { FlipCharacters } from "@/components/FlipCharacters";
import { SectionReveal } from "@/components/SectionReveal";
import { BackToTop } from "@/components/BackToTop";
import { ReadingControls } from "@/components/ReadingControls";
import { RelatedWorks } from "@/components/RelatedWorks";
import ContentSources from "@/components/ContentSources";
import { CulturalPattern } from "@/components/CulturalPattern";
import { SceneIllustration } from "@/components/SceneIllustration";
import { QuoteCopy } from "@/components/QuoteCopy";
import { BookmarkButton, BookmarkStar } from "@/components/BookmarkButton";
import { ShareButton } from "@/components/ShareButton";
import { getAwardsByWork, getAward } from "@/lib/award-data";

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
  let detail = custom ? ({ ...generated, ...custom } as typeof generated) : generated;
  if (realCharacters) {
    detail = { ...detail, characters: realCharacters };
  }
  const continent = continents.find((c) => c.slug === work.continent);
  const readTime = Math.max(3, Math.ceil(
    (detail.plotSummary.length + detail.themeAnalysis.length + detail.techniques.length + detail.insights.length) / 800
  ));
  const workAwards = getAwardsByWork(id);

  // Pick a random wave shape for the hero bottom transition
  const waveShapes = [
    "M0,32 C240,64 480,0 720,32 C960,64 1200,16 1440,32 L1440,64 L0,64 Z",
    "M0,48 C360,0 720,64 1080,16 C1260,-8 1380,32 1440,24 L1440,64 L0,64 Z",
    "M0,16 C180,48 360,0 540,32 C720,64 900,16 1080,48 C1260,72 1380,32 1440,40 L1440,64 L0,64 Z",
  ];
  const wavePath = waveShapes[work.title.length % waveShapes.length];
  const heroGradient = work.gradient
    .replace(/(from-\S+)/, "$1/55")
    .replace(/(via-\S+)/, "$1/45")
    .replace(/(to-\S+)/, "$1/45");

  return (
    <>
      <ScrollProgress />
      <BookmarkButton workId={id} />
      <RealPageBackground
        workId={id}
        title={work.title}
        gradient={work.gradient}
      />

      <div className="relative z-10">
      {/* ===== Hero 头部 — 渐变 + 文化图案 + 粒子 ===== */}
      <section className={`relative mt-16 overflow-hidden bg-gradient-to-br ${heroGradient}`}>
        {/* 文化图案纹理 */}
        <CulturalPattern continent={work.continent} opacity={0.05} />

        {/* 动态粒子 */}
        <HeroParticles gradient={work.gradient} />

        {/* 暗色叠加 + 呼吸动效 */}
        <div className="absolute inset-0 bg-black/10 hero-gradient-overlay" />

        <div className="relative z-20 mx-auto max-w-6xl px-5 py-14 sm:py-24">
          {/* 面包屑导航 */}
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href={`/continents/${work.continent}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/8 px-3 py-1 font-[system-ui] text-xs text-white/70 backdrop-blur-sm transition-all hover:bg-white/15 hover:text-white"
            >
              {continent?.icon} {continent?.name}文学
            </Link>
            <span className="text-white/20 text-xs">›</span>
            <Link
              href="/browse"
              className="inline-flex items-center gap-1 rounded-full bg-white/8 px-2.5 py-1 font-[system-ui] text-xs text-white/50 backdrop-blur-sm transition-all hover:bg-white/12 hover:text-white/80"
            >
              {work.flag} {work.country}
            </Link>
            {workAwards.length > 0 && workAwards.map((aw) => {
              const awardDef = getAward(aw.awardSlug);
              if (!awardDef) return null;
              return (
                <Link
                  key={`${aw.awardSlug}-${aw.year}`}
                  href={`/awards/${aw.awardSlug}`}
                  className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${awardDef.gradient} px-2.5 py-1 font-[system-ui] text-xs text-white/90 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-md`}
                >
                  {awardDef.icon} {awardDef.name} {aw.year}
                </Link>
              );
            })}
          </div>

          {/* 分享按钮 — 右上角 */}
          <div className="absolute right-5 top-14 sm:right-auto sm:left-auto sm:top-14 md:right-5">
            <ShareButton title={work.title} author={work.author} />
          </div>

          {/* 书名 + 3D封面 */}
          <div className="mt-10 flex flex-col items-center gap-10 sm:flex-row sm:items-start">
            {/* 3D书本封面 — 加阴影深度 */}
            <div className="shrink-0 -rotate-2 transition-all duration-500 hover:rotate-0 hover:scale-105 hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5)]">
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
                  <span key={g} className="rounded-full border border-white/25 bg-white/8 px-3 py-0.5 font-[system-ui] text-xs text-white/85 backdrop-blur-sm">
                    {g}
                  </span>
                ))}
              </div>

              <h1 className="font-heading-cn text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                {work.title}
              </h1>

              {work.titleEn && (
                <p className="mt-2 font-heading-en text-xl italic text-white/50">
                  {work.titleEn} <BookmarkStar workId={id} className="text-2xl" />
                </p>
              )}

              <div className="mt-4 flex flex-wrap items-center gap-3 font-[system-ui] text-base text-white/70">
                <span className="text-2xl">{work.flag}</span>
                <span className="font-medium">{work.country}</span>
                <span className="text-white/30">·</span>
                <span className="font-body text-lg italic">{work.author}</span>
                {work.year && (
                  <>
                    <span className="text-white/30">·</span>
                    <span>{work.year > 0 ? `${work.year}年` : `公元前${-work.year}年`}</span>
                  </>
                )}
              </div>

              {/* 元数据标签 */}
              <div className="mt-5 flex flex-wrap items-center gap-3 font-[system-ui] text-sm text-white/55">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/8 px-3 py-1 backdrop-blur-sm">
                  📖 约{readTime}分钟阅读
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/8 px-3 py-1 backdrop-blur-sm">
                  🏷️ {work.era.replace(" (—", " — ").replace(")", "")}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/8 px-3 py-1 backdrop-blur-sm">
                  🎨 {work.themes.slice(0, 3).join(" · ")}
                </span>
              </div>

              {/* 获奖徽章 */}
              {workAwards.length > 0 && (
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {workAwards.map((aw) => {
                    const awardDef = getAward(aw.awardSlug);
                    if (!awardDef) return null;
                    return (
                      <Link
                        key={`${aw.awardSlug}-${aw.year}`}
                        href={`/awards/${aw.awardSlug}`}
                        className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${awardDef.gradient} px-3 py-1 font-[system-ui] text-xs font-medium text-white shadow-sm backdrop-blur-sm transition-all hover:scale-105 hover:shadow-md`}
                      >
                        {awardDef.icon} {awardDef.name} {aw.year}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 底部过渡曲线 — 随机波形 */}
        <div className="relative z-20 h-16">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 64" preserveAspectRatio="none">
            <path d={wavePath} fill="var(--color-cream)" opacity="0.12" />
            <path d="M0,48 C480,16 960,64 1440,48 L1440,64 L0,64 Z" fill="var(--color-cream)" opacity="0.2" />
          </svg>
        </div>
      </section>

      {/* ===== 作品简介 — 杂志式双栏布局 ===== */}
      <section id="section-intro" className="bg-cream/35 py-14 sm:py-20">
        <SectionReveal>
        <div className="mx-auto max-w-5xl px-5">
          {/* 区块标题 — 装饰性 */}
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta text-white shadow-lg">
              <span className="text-xl">📖</span>
            </div>
            <div>
              <h2 className="font-heading-cn text-3xl font-bold text-umber">作品简介</h2>
              <div className="mt-1 h-0.5 w-16 bg-gradient-to-r from-terracotta to-transparent" />
            </div>
          </div>

          {/* 杂志式双栏 */}
          <div className="gap-10 lg:flex">
            {/* 主体 — 首字下沉 */}
            <div className="flex-1">
              <div className="rounded-2xl bg-book-page p-6 shadow-card sm:p-8">
                <p className="drop-cap reader-content text-lg leading-relaxed text-umber-light">
                  {work.excerpt}
                </p>
                <p className="reader-content mt-6 text-lg leading-relaxed text-umber-light">
                  {detail.plotSummary}
                </p>
              </div>
            </div>

            {/* 侧边栏 — 信息卡片 */}
            <div className="mt-8 shrink-0 lg:mt-0 lg:w-64">
              <div className="sticky top-24 space-y-3 rounded-2xl border border-sand/30 bg-warm-white/80 p-5 shadow-card">
                <h3 className="font-heading-cn text-sm font-bold text-umber/50 uppercase tracking-wider">作品档案</h3>
                <div className="h-px bg-sand/50" />
                {[
                  { label: "地区", value: `${work.flag} ${work.country}` },
                  { label: "作者", value: work.author },
                  { label: "年代", value: work.era.replace(" (—", " — ").replace(")", "") },
                  { label: "体裁", value: work.genre.join(" · ") },
                  { label: "题材", value: work.themes.join(" · ") },
                  { label: "篇幅", value: `${readTime} 分钟阅读` },
                ].map((info) => (
                  <div key={info.label} className="flex items-baseline justify-between gap-2">
                    <span className="font-[system-ui] text-xs text-umber-light/40 shrink-0">{info.label}</span>
                    <span className="font-[system-ui] text-xs font-medium text-umber text-right">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 经典场景插画 */}
          <SceneIllustration
            title={work.title}
            titleEn={work.titleEn}
            author={work.author}
            gradient={work.gradient}
            characters={detail.characters}
            plotNodes={detail.plotNodes.map(n => ({ label: n.label, description: n.description }))}
          />
        </div>
        </SectionReveal>
      </section>

      {/* ===== 人物介绍 — 剧场聚光灯风格 ===== */}
      {detail.characters.length > 0 && (
        <section id="section-characters" className="bg-gradient-to-b from-parchment/35 via-cream/35 to-parchment/35 py-14 sm:py-20 relative overflow-hidden">
          {/* 剧场幕布装饰 */}
          <div className="pointer-events-none absolute left-0 right-0 top-0 z-0 h-32 bg-gradient-to-b from-umber/5 to-transparent" />

          <SectionReveal>
          <div className="relative z-10 mx-auto max-w-5xl px-5">
            <div className="mb-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-dark text-white shadow-lg">
                <span className="text-xl">🎭</span>
              </div>
              <div>
                <h2 className="font-heading-cn text-3xl font-bold text-umber">人物介绍</h2>
                <div className="mt-1 h-0.5 w-16 bg-gradient-to-r from-amber-dark to-transparent" />
              </div>
              <span className="ml-auto rounded-full border border-amber/20 bg-amber/5 px-4 py-1.5 font-[system-ui] text-xs text-amber-dark">
                {detail.characters.length} 位角色 · 点击卡片翻转
              </span>
            </div>
            <FlipCharacters characters={detail.characters} />
          </div>
          </SectionReveal>
        </section>
      )}

      {/* ===== 情节脉络 — 电影式时间线 ===== */}
      {detail.plotNodes.length > 0 && (
        <section id="section-plot" className="bg-warm-white/35 py-14 sm:py-20">
          <SectionReveal>
          <div className="mx-auto max-w-5xl px-5">
            <div className="mb-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta text-white shadow-lg">
                <span className="text-xl">🕐</span>
              </div>
              <div>
                <h2 className="font-heading-cn text-3xl font-bold text-umber">情节脉络</h2>
                <div className="mt-1 h-0.5 w-16 bg-gradient-to-r from-terracotta to-transparent" />
              </div>
              <span className="ml-auto rounded-full bg-parchment px-4 py-1.5 font-[system-ui] text-xs text-umber-light/50">
                {detail.plotNodes.length} 个关键节点
              </span>
            </div>
            <PlotTimeline nodes={detail.plotNodes} gradient={work.gradient} />
          </div>
          </SectionReveal>
        </section>
      )}

      {/* ===== 主题分析 — 画廊式网格 ===== */}
      <section id="section-themes" className="bg-cream/35 py-14 sm:py-20">
        <SectionReveal>
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-umber text-white shadow-lg">
              <span className="text-xl">💡</span>
            </div>
            <div>
              <h2 className="font-heading-cn text-3xl font-bold text-umber">主题分析</h2>
              <div className="mt-1 h-0.5 w-16 bg-gradient-to-r from-umber to-transparent" />
            </div>
          </div>
          <div className="gap-5 space-y-5 md:columns-2 md:space-y-5 lg:columns-3 [&>*]:break-inside-avoid">
            {detail.themeAnalysis.split(/\n\n/).filter(Boolean).map((paragraph, i) => {
              // Pick icon based on content and position
              const icons = ["🔍", "🎯", "🌟", "📐", "🔮", "⚡"];
              const icon = icons[i % icons.length];
              return (
                <div
                  key={i}
                  className="group rounded-2xl border border-sand/30 bg-warm-white/80 p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-7"
                >
                  {/* 顶部色条 */}
                  <div
                    className="mb-4 h-1 w-12 rounded-full transition-all duration-500 group-hover:w-20"
                    style={{
                      background: `linear-gradient(to right, var(--color-amber), var(--color-terracotta))`,
                    }}
                  />
                  {/* 图标编号 */}
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-2xl">{icon}</span>
                    <span className="font-heading-en text-xl font-bold text-amber-dark">{i + 1}</span>
                  </div>
                  <p className="reader-content font-body text-base leading-relaxed text-umber-light">{paragraph}</p>
                </div>
              );
            })}
          </div>
        </div>
        </SectionReveal>
      </section>

      {/* ===== 写作手法 — 笔记本手写风格 ===== */}
      <section id="section-techniques" className="bg-gradient-to-b from-parchment/35 to-cream/35 py-14 sm:py-20">
        <SectionReveal>
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-dark text-white shadow-lg">
              <span className="text-xl">✍️</span>
            </div>
            <div>
              <h2 className="font-heading-cn text-3xl font-bold text-umber">手法与语言分析</h2>
              <div className="mt-1 h-0.5 w-16 bg-gradient-to-r from-amber-dark to-transparent" />
            </div>
          </div>
          <div className="rounded-2xl bg-old-paper p-6 shadow-card sm:p-10">
            <div className="space-y-8">
              {detail.techniques.split(/\n\n/).filter(Boolean).map((paragraph, i) => (
                <div
                  key={i}
                  className="group relative pl-6 transition-all duration-500 hover:translate-x-2"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  {/* 手写边注线 */}
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-amber/30 via-amber/15 to-transparent rounded-full transition-all duration-300 group-hover:from-amber/60" />
                  {/* 不规则分隔线（段落间） */}
                  {i > 0 && (
                    <div className="mb-8 -mt-4 h-px bg-gradient-to-r from-transparent via-amber/10 to-transparent" />
                  )}
                  <p className="reader-content font-body text-base leading-relaxed text-umber-light">{paragraph}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </SectionReveal>
      </section>

      {/* ===== 经典摘抄 — 打字机复古纸张风格 ===== */}
      {detail.excerpts.length > 0 && (
        <section id="section-excerpts" className="bg-umber py-14 sm:py-20 relative overflow-hidden">
          {/* 背景装饰 */}
          <div className="pointer-events-none absolute inset-0 opacity-3">
            <div className="absolute -top-20 -right-20 text-[20rem] font-heading-en text-white/3 select-none">&ldquo;</div>
            <div className="absolute -bottom-20 -left-20 text-[20rem] font-heading-en text-white/3 select-none">&rdquo;</div>
          </div>

          <SectionReveal>
          <div className="relative z-10 mx-auto max-w-5xl px-5">
            <div className="mb-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-light/20 text-white shadow-lg backdrop-blur-sm">
                <span className="text-xl">📝</span>
              </div>
              <div>
                <h2 className="font-heading-cn text-3xl font-bold text-cream">经典摘抄</h2>
                <div className="mt-1 h-0.5 w-16 bg-gradient-to-r from-amber-light/40 to-transparent" />
              </div>
            </div>
            <div className="space-y-10">
              {detail.excerpts.map((ex, i) => (
                <div key={i} className="group relative">
                  <blockquote className="relative rounded-2xl border border-cream/8 bg-vintage-paper p-8 backdrop-blur-sm transition-all duration-500 hover:border-cream/15 sm:p-10">
                    {/* 引用标记 */}
                    <svg className="absolute -top-4 -left-4 h-10 w-10 text-amber/20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                    </svg>

                    {/* 文字 + 打字机光标 */}
                    <p className="reader-content font-heading-cn text-2xl leading-relaxed text-umber sm:text-3xl">
                      「{ex.quote}」
                      <span className="typewriter-cursor" />
                    </p>

                    <footer className="mt-6 flex items-center gap-4 border-t border-amber/10 pt-5">
                      <div className="h-px flex-1 bg-amber/8" />
                      <span className="font-body text-sm italic text-umber-light/50">{ex.context}</span>
                      <div className="h-px flex-1 bg-amber/8" />
                    </footer>
                  </blockquote>

                  {/* 复制按钮 — 悬浮在卡片右上角 */}
                  <div className="absolute right-5 top-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <QuoteCopy text={ex.quote} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          </SectionReveal>
        </section>
      )}

      {/* ===== 阅读启发 — 书信风格 ===== */}
      <section id="section-insights" className="bg-cream/35 py-14 sm:py-20">
        <SectionReveal>
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber to-terracotta text-white shadow-lg">
              <span className="text-xl">🌟</span>
            </div>
            <div>
              <h2 className="font-heading-cn text-3xl font-bold text-umber">阅读启发</h2>
              <div className="mt-1 h-0.5 w-16 bg-gradient-to-r from-amber to-transparent" />
            </div>
          </div>

          {/* 信封式卡片 */}
          <div className="relative rounded-2xl border border-sand/30 bg-letter-paper p-8 shadow-card sm:p-12">
            {/* 信封三角盖 */}
            <div
              className="absolute -top-px left-8 right-8 h-10 rounded-t-lg border border-b-0 border-sand/30 bg-warm-white"
              style={{ clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)" }}
            />

            {/* 火漆印章 */}
            <div className="absolute right-12 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-terracotta to-red-700 shadow-lg">
              <span className="text-white text-lg">S</span>
            </div>

            <div className="relative mt-8">
              <div className="flex items-start gap-4">
                <span className="text-4xl">💭</span>
                <div>
                  <p className="reader-content font-body text-lg leading-relaxed text-umber-light">
                    {detail.insights}
                  </p>
                  {/* 手写签名 */}
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-px w-12 bg-amber/30" />
                    <span className="font-heading-en text-sm italic text-umber-light/30">
                      — {work.author}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </SectionReveal>
      </section>

      {/* ===== 内容来源 — 透明度与可验证性 ===== */}
      <section className="bg-warm-white/35 py-14 sm:py-20">
        <SectionReveal>
          <div className="mx-auto max-w-5xl px-5">
            <div className="mb-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-umber/80 text-white shadow-lg">
                <span className="text-xl">📖</span>
              </div>
              <div>
                <h2 className="font-heading-cn text-3xl font-bold text-umber">内容来源</h2>
                <p className="mt-1 text-sm text-stone-500">数据溯源 · 可靠性评估 · 可验证性</p>
                <div className="mt-1 h-0.5 w-16 bg-gradient-to-r from-umber/60 to-transparent" />
              </div>
            </div>
            <ContentSources
              attribution={detail.sourceAttribution}
              workTitle={work.title}
              workTitleEn={work.titleEn}
              workAuthor={work.author}
            />
          </div>
        </SectionReveal>
      </section>

      {/* ===== 相关推荐 — 书架风格 ===== */}
      <section className="bg-gradient-to-b from-parchment/35 via-parchment/35 to-cream/35 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-dark text-white shadow-lg">
              <span className="text-xl">📚</span>
            </div>
            <div>
              <h2 className="font-heading-cn text-3xl font-bold text-umber">相关推荐</h2>
              <div className="mt-1 h-0.5 w-16 bg-gradient-to-r from-amber-dark to-transparent" />
            </div>
          </div>
        </div>
        <RelatedWorks currentId={id} allWorks={allWorks} />
      </section>

      {/* ===== 底部导航 ===== */}
      <section className="bg-umber py-14">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <p className="mb-6 font-heading-cn text-lg text-cream/40">
            继续探索世界文学
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={`/continents/${work.continent}`}
              className="inline-flex items-center gap-2 rounded-full border border-cream/10 bg-white/5 px-6 py-3 font-[system-ui] text-sm text-cream/70 backdrop-blur-sm transition-all hover:border-cream/20 hover:bg-white/10 hover:text-cream"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
              返回{continent?.name}文学
            </Link>
            <Link
              href="/browse"
              className="inline-flex items-center gap-2 rounded-full bg-cream/90 px-6 py-3 font-[system-ui] text-sm font-medium text-umber shadow-lg transition-all hover:bg-cream hover:shadow-xl"
            >
              浏览全部作品
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
            </Link>
          </div>
        </div>
      </section>

      </div>

      <BackToTop />
      <ReadingControls />
    </>
  );
}
