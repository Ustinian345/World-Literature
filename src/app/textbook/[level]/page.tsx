// ================================================================
// 教材文学 — 单个学段详情页 (小学/初中/高中)
// ================================================================

import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getTextbookWorksByLevel, getTextbookLevelInfo, textbookLevels } from "@/lib/textbook-data";
import type { TextbookLevel } from "@/lib/textbook-data";

export function generateStaticParams() {
  return textbookLevels.map((l) => ({ level: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ level: string }> }) {
  const { level } = await params;
  const info = getTextbookLevelInfo(level as TextbookLevel);
  if (!info) return { title: "未找到" };
  return { title: `${info.name}教材文学 — 世界文学总站`, description: info.description };
}

export default async function TextbookLevelPage({ params }: { params: Promise<{ level: string }> }) {
  const { level } = await params;
  const info = getTextbookLevelInfo(level as TextbookLevel);
  if (!info) notFound();

  const works = getTextbookWorksByLevel(level as TextbookLevel);

  // 批量查询系统作品映射
  const workIds = [...new Set(works.map((tw) => tw.workId).filter(Boolean))];
  const sysWorks = workIds.length > 0
    ? await prisma.work.findMany({ where: { id: { in: workIds as string[] } } })
    : [];
  const sysWorkMap = new Map(sysWorks.map((w) => [w.id, w]));

  return (
    <div className="min-h-screen bg-cream">
      <section className={`relative mt-16 overflow-hidden bg-gradient-to-br ${info.gradient}`}>
        <div className="absolute inset-0 bg-black/15" />
        <div className="relative z-10 mx-auto max-w-5xl px-5 py-16 sm:py-24">
          <Link
            href="/textbook"
            className="inline-flex items-center gap-1.5 rounded-full bg-white/8 px-4 py-1.5 font-[system-ui] text-sm text-white/70 backdrop-blur-sm transition-all hover:bg-white/15 hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
            返回教材总览
          </Link>
          <div className="mt-8 flex items-center gap-5">
            <span className="text-6xl">{info.icon}</span>
            <div>
              <h1 className="font-heading-cn text-4xl font-black text-white sm:text-5xl">{info.name}语文教材</h1>
              <p className="mt-2 font-[system-ui] text-lg text-white/70">{info.grades} · {works.length} 篇经典作品</p>
            </div>
          </div>
        </div>
        <div className="relative z-10 h-12">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 64" preserveAspectRatio="none">
            <path d="M0,48 C480,16 960,64 1440,48 L1440,64 L0,64 Z" fill="var(--color-cream)" opacity="0.2" />
          </svg>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-5xl px-5">
          <p className="mb-8 font-[system-ui] text-lg leading-relaxed text-umber-light">{info.description}</p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((tw) => {
              const sysWork = tw.workId ? sysWorkMap.get(tw.workId) : null;
              const href = sysWork ? `/works/${sysWork.id}` : "#";
              const hasDetail = !!sysWork;

              return (
                <div
                  key={`${tw.title}-${tw.grade}`}
                  className={`group rounded-2xl border border-sand/20 bg-warm-white/80 p-5 shadow-sm transition-all duration-500 ${
                    hasDetail ? "hover:-translate-y-1 hover:shadow-lg" : ""
                  }`}
                >
                  {/* 年级标签 */}
                  <div className="mb-3 flex items-center gap-2">
                    <span className={`shrink-0 rounded-full bg-gradient-to-r ${info.gradient} px-3 py-1 font-[system-ui] text-xs font-bold text-white shadow-sm`}>
                      {tw.grade}
                    </span>
                    <span className="rounded-full bg-parchment px-2 py-0.5 font-[system-ui] text-xs text-umber-light/50">
                      {tw.type}
                    </span>
                  </div>

                  {/* 书名 */}
                  {hasDetail ? (
                    <Link href={href} className="block">
                      <h3 className="font-heading-cn text-lg font-bold text-umber group-hover:text-terracotta transition-colors">
                        {tw.title}
                      </h3>
                    </Link>
                  ) : (
                    <h3 className="font-heading-cn text-lg font-bold text-umber">{tw.title}</h3>
                  )}

                  {/* 作者 + 选段 */}
                  <div className="mt-1 flex flex-wrap items-center gap-x-2 font-[system-ui] text-sm text-umber-light/50">
                    <span>{tw.author}</span>
                    {tw.excerpt && <span className="text-umber-light/30">· {tw.excerpt}</span>}
                  </div>

                  {/* 描述 */}
                  <p className="mt-3 line-clamp-3 font-[system-ui] text-sm leading-relaxed text-umber-light/60">
                    {tw.description}
                  </p>

                  {/* 链接到详情页 */}
                  {hasDetail && (
                    <div className={`mt-3 h-0.5 w-0 rounded-full bg-gradient-to-r ${info.gradient} transition-all duration-500 group-hover:w-full`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
