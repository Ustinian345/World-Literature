import Link from "next/link";
import { notFound } from "next/navigation";
import { works, continents } from "@/lib/data";
import { bookDetails } from "@/lib/book-data";

export function generateStaticParams() {
  return works.map((w) => ({ id: w.id }));
}

export default function WorkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <WorkContent params={params} />;
}

async function WorkContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const work = works.find((w) => w.id === id);
  if (!work) notFound();

  const detail = bookDetails[id];
  const continent = continents.find((c) => c.slug === work.continent);

  return (
    <>
      {/* ===== Hero 头部 ===== */}
      <section className={`mt-16 bg-gradient-to-br ${work.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 py-16 sm:py-24">
          <Link
            href={`/continents/${work.continent}`}
            className="inline-flex items-center gap-1.5 font-[system-ui] text-sm text-white/70 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6" />
            </svg>
            {continent?.icon} {continent?.name}文学
          </Link>

          <div className="mt-6">
            <h1 className="font-heading-cn text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              {work.title}
            </h1>
            {work.titleEn && (
              <p className="mt-2 font-heading-en text-xl italic text-white/60">
                {work.titleEn}
              </p>
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 font-[system-ui] text-sm text-white/75">
            <span className="text-xl">{work.flag}</span>
            <span>{work.country}</span>
            <span>· {work.author}</span>
            {work.year && (
              <span>· {work.year > 0 ? `${work.year}年` : `公元前${-work.year}年`}</span>
            )}
            <span>· {work.era.replace(" (—", " — ").replace(")", "")}</span>
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {work.genre.map((g) => (
              <span key={g} className="rounded-full border border-white/30 px-3 py-0.5 font-[system-ui] text-xs text-white/80">
                {g}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 简介 ===== */}
      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="flex items-center gap-3 font-heading-cn text-2xl font-bold text-umber">
            <span className="text-3xl">📖</span> 作品简介
          </h2>
          <p className="mt-4 font-body text-lg leading-relaxed text-umber-light">
            {work.excerpt}
          </p>
          {detail && (
            <p className="mt-4 font-body text-lg leading-relaxed text-umber-light">
              {detail.plotSummary}
            </p>
          )}
        </div>
      </section>

      {/* ===== 人物介绍 ===== */}
      {detail && (
        <section className="bg-warm-white py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-5">
            <h2 className="flex items-center gap-3 font-heading-cn text-2xl font-bold text-umber">
              <span className="text-3xl">🎭</span> 人物介绍
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {detail.characters.map((ch) => (
                <div
                  key={ch.name}
                  className="rounded-xl border border-sand/50 bg-cream p-5 transition-shadow hover:shadow-card"
                >
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-heading-cn text-lg font-bold text-umber">
                      {ch.name}
                    </h3>
                    <span className="rounded bg-amber/15 px-2 py-0.5 font-[system-ui] text-xs text-amber-dark">
                      {ch.role}
                    </span>
                  </div>
                  <p className="mt-2 font-body text-sm leading-relaxed text-umber-light">
                    {ch.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== 情节脉络 (CSS 时间线) ===== */}
      {detail && detail.plotNodes.length > 0 && (
        <section className="bg-cream py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-5">
            <h2 className="flex items-center gap-3 font-heading-cn text-2xl font-bold text-umber">
              <span className="text-3xl">🕐</span> 情节脉络
            </h2>

            <div className="relative mt-8">
              {/* 时间线竖线 */}
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-terracotta via-amber to-terracotta-light sm:left-1/2 sm:-translate-x-px" />

              <div className="space-y-8">
                {detail.plotNodes.map((node, i) => (
                  <div
                    key={i}
                    className={`relative flex items-start gap-6 sm:gap-10 ${
                      i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* 时间线圆点 */}
                    <div className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-cream bg-terracotta sm:left-1/2">
                      <span className="font-[system-ui] text-[10px] font-bold text-white">{i + 1}</span>
                    </div>

                    {/* 内容卡片 */}
                    <div className={`ml-12 flex-1 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:pl-10"}`}>
                      <div className="rounded-xl border border-sand/50 bg-warm-white p-5 shadow-sm transition-shadow hover:shadow-card">
                        <h4 className="font-heading-cn text-base font-bold text-umber">{node.label}</h4>
                        <p className="mt-1.5 font-body text-sm leading-relaxed text-umber-light">{node.description}</p>
                      </div>
                    </div>

                    {/* 右侧空白占位 */}
                    <div className="hidden flex-1 sm:block sm:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== 主题分析 ===== */}
      {detail && (
        <section className="bg-warm-white py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-5">
            <h2 className="flex items-center gap-3 font-heading-cn text-2xl font-bold text-umber">
              <span className="text-3xl">💡</span> 主题分析
            </h2>
            <div className="mt-4 space-y-4 font-body text-lg leading-relaxed text-umber-light">
              {detail.themeAnalysis.split(/。\s*/).filter(Boolean).map((s, i) => (
                <p key={i} className="rounded-lg border-l-4 border-terracotta-light bg-cream p-4 pl-5">
                  {s.trim()}。
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== 写作手法 ===== */}
      {detail && (
        <section className="bg-cream py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-5">
            <h2 className="flex items-center gap-3 font-heading-cn text-2xl font-bold text-umber">
              <span className="text-3xl">✍️</span> 手法与语言分析
            </h2>
            <div className="mt-4 space-y-4 font-body text-lg leading-relaxed text-umber-light">
              {detail.techniques.split(/。\s*/).filter(Boolean).map((s, i) => (
                <p key={i} className="rounded-lg border-l-4 border-amber bg-parchment p-4 pl-5">
                  {s.trim()}。
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== 经典摘抄 ===== */}
      {detail && detail.excerpts.length > 0 && (
        <section className="bg-umber py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-5">
            <h2 className="flex items-center gap-3 font-heading-cn text-2xl font-bold text-cream">
              <span className="text-3xl">📝</span> 经典摘抄
            </h2>
            <div className="mt-6 space-y-6">
              {detail.excerpts.map((ex, i) => (
                <blockquote key={i} className="rounded-xl border border-cream/10 bg-white/5 p-6">
                  <p className="font-heading-cn text-xl leading-relaxed text-amber-light">
                    「{ex.quote}」
                  </p>
                  <footer className="mt-3 border-t border-cream/10 pt-3 font-body text-sm italic text-cream/50">
                    {ex.context}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== 阅读启发 ===== */}
      {detail && (
        <section className="bg-cream py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-5">
            <h2 className="flex items-center gap-3 font-heading-cn text-2xl font-bold text-umber">
              <span className="text-3xl">🌟</span> 阅读启发
            </h2>
            <div className="mt-4 rounded-xl border border-amber/30 bg-gradient-to-br from-amber/5 to-terracotta/5 p-6">
              <p className="font-body text-lg leading-relaxed text-umber-light">
                {detail.insights}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 暂无详细分析的回退 */}
      {!detail && (
        <section className="bg-cream py-20 text-center">
          <div className="mx-auto max-w-lg px-5">
            <span className="text-5xl">📚</span>
            <h2 className="mt-4 font-heading-cn text-2xl font-bold text-umber">
              详细分析正在撰写中
            </h2>
            <p className="mt-3 font-body text-umber-light">
              本书的深度文学分析（人物、情节脉络、主题、写作手法、摘抄及启发）即将上线，敬请期待。
            </p>
            <Link
              href={`/continents/${work.continent}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-2.5 font-[system-ui] text-sm text-white hover:bg-terracotta-dark"
            >
              浏览{continent?.name}其他作品
            </Link>
          </div>
        </section>
      )}

      {/* ===== 底部导航 ===== */}
      <section className="bg-parchment py-12">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={`/continents/${work.continent}`}
              className="rounded-full border border-sand/50 bg-warm-white px-5 py-2 font-[system-ui] text-sm text-umber-light shadow-sm transition-all hover:border-amber/30 hover:text-umber"
            >
              ← 返回{continent?.name}文学
            </Link>
            <Link
              href="/browse"
              className="rounded-full border border-sand/50 bg-warm-white px-5 py-2 font-[system-ui] text-sm text-umber-light shadow-sm transition-all hover:border-amber/30 hover:text-umber"
            >
              浏览全部作品 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
