// ================================================================
// 教材文学 — 小学/初中/高中 人教版经典作品总览
// ================================================================

import Link from "next/link";
import { textbookLevels, getTextbookStats } from "@/lib/textbook-data";

export const metadata = {
  title: "教材文学 — 世界文学总站",
  description: "收录人教版小学、初中、高中语文教材中的所有经典文学作品。每一个中国人共同的文学记忆。",
};

export default function TextbookPage() {
  const stats = getTextbookStats();

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative mt-16 overflow-hidden bg-gradient-to-br from-emerald-700 via-teal-600 to-blue-500">
        <div className="absolute inset-0 bg-black/15" />
        <div className="relative z-10 mx-auto max-w-5xl px-5 py-16 sm:py-24">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full bg-white/8 px-4 py-1.5 font-[system-ui] text-sm text-white/70 backdrop-blur-sm transition-all hover:bg-white/15 hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
            返回首页
          </Link>
          <h1 className="mt-8 font-heading-cn text-4xl font-black text-white sm:text-5xl lg:text-6xl">教材文学</h1>
          <p className="mt-4 max-w-2xl font-heading-en text-xl italic text-white/50">Textbook Literature</p>
          <p className="mt-4 max-w-2xl font-[system-ui] text-base leading-relaxed text-white/70">
            那些印在语文课本里的文字，构成了每一个中国人最初的文学记忆。从《静夜思》到《红楼梦》，从安徒生到马尔克斯——我们收录了人教版语文教材中的经典篇目，让课本成为通向世界文学的桥梁。
          </p>
        </div>
        <div className="relative z-10 h-12">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 64" preserveAspectRatio="none">
            <path d="M0,48 C480,16 960,64 1440,48 L1440,64 L0,64 Z" fill="var(--color-cream)" opacity="0.2" />
          </svg>
        </div>
      </section>

      {/* 学段卡片 */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid gap-6 sm:grid-cols-3">
            {textbookLevels.map((level) => (
              <Link
                key={level.slug}
                href={`/textbook/${level.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-sand/60 bg-warm-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className={`flex h-40 items-center justify-center bg-gradient-to-br ${level.gradient} relative overflow-hidden`}>
                  <span className="text-6xl transition-transform duration-300 group-hover:scale-110">{level.icon}</span>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full border-2 border-white/80 px-5 py-2 font-[system-ui] text-sm font-medium text-white">探索 →</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-[system-ui] text-xs font-medium uppercase tracking-[0.15em] text-amber-dark">{level.grades}</span>
                      <h3 className="mt-1 font-heading-cn text-2xl font-bold text-umber">{level.name}</h3>
                    </div>
                    <svg className="h-5 w-5 text-amber-dark/40 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
                  </div>
                  <p className="mt-3 line-clamp-3 font-body text-sm leading-relaxed text-umber-light">{level.description}</p>
                  <div className="mt-4 flex gap-4 border-t border-sand/50 pt-3 font-[system-ui] text-xs text-umber-light/70">
                    <span>{level.stats}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-book-page p-8 text-center">
            <p className="font-[system-ui] text-base leading-relaxed text-umber-light">
              共收录 <span className="font-bold text-amber-dark">{stats.total}</span> 部教材经典作品，涵盖古今中外。
              数据来源：部编人教版（统编版）语文教材 1-12 年级全部篇目。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
