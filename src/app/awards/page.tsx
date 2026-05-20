// ================================================================
// 文学奖总览页 — 国际奖项 + 中国奖项
// ================================================================

import Link from "next/link";
import { awards, getAwardStats } from "@/lib/award-data";

export const metadata = {
  title: "文学奖项 — 世界文学总站",
  description: "探索诺贝尔文学奖、布克奖、普利策奖、茅盾文学奖、鲁迅文学奖等中外重要文学奖项及其获奖作品。",
};

export default function AwardsPage() {
  return <AwardsContent />;
}

function AwardsContent() {
  const stats = getAwardStats();
  const international = awards.filter((a) => a.category === "international");
  const chinese = awards.filter((a) => a.category === "chinese");

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative mt-16 overflow-hidden bg-gradient-to-br from-amber-800 via-yellow-700 to-gold-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 mx-auto max-w-5xl px-5 py-16 sm:py-24">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full bg-white/8 px-4 py-1.5 font-[system-ui] text-sm text-white/70 backdrop-blur-sm transition-all hover:bg-white/15 hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6" />
            </svg>
            返回首页
          </Link>
          <h1 className="mt-8 font-heading-cn text-4xl font-black text-white sm:text-5xl lg:text-6xl">
            文学奖项
          </h1>
          <p className="mt-4 max-w-2xl font-heading-en text-xl italic text-white/50">
            Literary Awards
          </p>
          <p className="mt-4 max-w-2xl font-[system-ui] text-base leading-relaxed text-white/70">
            文学奖不仅是荣誉的授予，更是文学史的凝结点。在这里，我们梳理了中外重要文学奖项及其获奖作品，让奖项成为你探索世界文学的另一条路径。
          </p>
        </div>
        <div className="relative z-10 h-12">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 64" preserveAspectRatio="none">
            <path d="M0,32 C240,64 480,0 720,32 C960,64 1200,16 1440,32 L1440,64 L0,64 Z" fill="var(--color-cream)" opacity="0.12" />
            <path d="M0,48 C480,16 960,64 1440,48 L1440,64 L0,64 Z" fill="var(--color-cream)" opacity="0.2" />
          </svg>
        </div>
      </section>

      {/* 国际奖项 */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-dark text-white shadow-lg">
              <span className="text-xl">🌍</span>
            </div>
            <div>
              <h2 className="font-heading-cn text-3xl font-bold text-umber">国际文学奖</h2>
              <div className="mt-1 h-0.5 w-16 bg-gradient-to-r from-amber-dark to-transparent" />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {international.map((award) => (
              <AwardCard key={award.slug} award={award} winnerCount={stats[award.slug] || 0} />
            ))}
          </div>
        </div>
      </section>

      {/* 中国奖项 */}
      <section className="bg-parchment/35 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-700 text-white shadow-lg">
              <span className="text-xl">🇨🇳</span>
            </div>
            <div>
              <h2 className="font-heading-cn text-3xl font-bold text-umber">中国文学奖</h2>
              <div className="mt-1 h-0.5 w-16 bg-gradient-to-r from-red-700 to-transparent" />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {chinese.map((award) => (
              <AwardCard key={award.slug} award={award} winnerCount={stats[award.slug] || 0} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function AwardCard({ award, winnerCount }: { award: (typeof awards)[number]; winnerCount: number }) {
  return (
    <Link
      href={`/awards/${award.slug}`}
      className="group block rounded-2xl border border-sand/30 bg-warm-white/80 p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* 色条 */}
      <div
        className={`mb-4 h-1.5 w-12 rounded-full transition-all duration-500 group-hover:w-20 bg-gradient-to-r ${award.gradient}`}
      />
      {/* 图标 + 标题 */}
      <div className="mb-2 flex items-center gap-3">
        <span className="text-2xl">{award.icon}</span>
        <h3 className="font-heading-cn text-xl font-bold text-umber group-hover:text-terracotta transition-colors">
          {award.name}
        </h3>
      </div>
      <p className="mb-3 font-heading-en text-sm italic text-umber-light/40">{award.nameEn}</p>
      <p className="line-clamp-3 font-[system-ui] text-sm leading-relaxed text-umber-light/60">
        {award.description}
      </p>
      {/* 元数据 */}
      <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-sand/20 pt-3">
        <span className="rounded-full bg-cream px-2.5 py-0.5 font-[system-ui] text-xs text-umber-light/50">
          {award.flag} {award.country}
        </span>
        <span className="rounded-full bg-cream px-2.5 py-0.5 font-[system-ui] text-xs text-umber-light/50">
          {award.established}年创立
        </span>
        {winnerCount > 0 && (
          <span className="rounded-full bg-amber/8 px-2.5 py-0.5 font-[system-ui] text-xs font-medium text-amber-dark">
            {winnerCount} 部收录
          </span>
        )}
      </div>
    </Link>
  );
}
