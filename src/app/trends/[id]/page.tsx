import { notFound } from "next/navigation";
import Link from "next/link";
import { readFile } from "fs/promises";
import path from "path";

interface Topic {
  title: string;
  background: string;
  perspectives: string;
  insight: string;
  source_links: string[];
  source_type?: string;
}

interface DailyTrends {
  _meta: { generatedAt: string; llmUsed: boolean; totalPostsAnalyzed: number };
  topics: Topic[];
}

async function getTrends(): Promise<DailyTrends | null> {
  try {
    const file = path.join(process.cwd(), "data", "daily-trends.json");
    const raw = await readFile(file, "utf-8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export default async function TrendDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const index = parseInt(id);
  if (isNaN(index)) notFound();

  const data = await getTrends();
  if (!data || !data.topics[index]) notFound();

  const topic = data.topics[index];
  const allTopics = data.topics;

  return (
    <div className="min-h-[80vh] bg-cream">
      {/* Hero */}
      <div className="bg-gradient-to-b from-umber to-umber/90 px-5 py-20 text-white">
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 font-heading-en text-xs font-bold tracking-[0.2em] text-amber/70 uppercase">
            Trending · #{index + 1} of {allTopics.length}
          </p>
          <h1 className="font-heading-cn text-3xl font-black leading-tight sm:text-4xl">
            {topic.title}
          </h1>
          <p className="mt-3 font-heading-cn text-sm text-white/50">
            生成时间: {data._meta.generatedAt.slice(0, 10)} · {data._meta.llmUsed ? "AI 深度分析" : "社区聚合"}
            {topic.source_type && (
              <span className={`ml-3 inline-block rounded-full px-3 py-0.5 text-xs ${topic.source_type === "编辑推荐话题" ? "bg-amber/20 text-amber" : "bg-emerald-600/20 text-emerald-300"}`}>
                {topic.source_type}
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-5 py-12">
        {/* 议题背景 */}
        <section className="mb-10">
          <h2 className="mb-4 flex items-center gap-2 font-heading-cn text-lg font-bold text-umber">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber/20 text-sm">📋</span>
            议题背景
          </h2>
          <div className="rounded-xl border border-stone-200 bg-warm-white p-6">
            <p className="font-heading-cn leading-relaxed text-umber-light">{topic.background}</p>
          </div>
        </section>

        {/* 各方观点 */}
        <section className="mb-10">
          <h2 className="mb-4 flex items-center gap-2 font-heading-cn text-lg font-bold text-umber">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-sm">💬</span>
            各方观点
          </h2>
          <div className="rounded-xl border border-stone-200 bg-warm-white p-6">
            <p className="font-heading-cn leading-relaxed text-umber-light">{topic.perspectives}</p>
          </div>
        </section>

        {/* 深度延展 */}
        <section className="mb-10">
          <h2 className="mb-4 flex items-center gap-2 font-heading-cn text-lg font-bold text-umber">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-terracotta/10 text-sm">💡</span>
            深度延展
          </h2>
          <div className="rounded-xl border border-terracotta/20 bg-gradient-to-br from-terracotta/5 to-amber/5 p-6">
            <p className="font-heading-cn leading-relaxed text-umber-light">{topic.insight}</p>
          </div>
        </section>

        {/* 来源链接 */}
        <section className="mb-10">
          <h2 className="mb-4 flex items-center gap-2 font-heading-cn text-lg font-bold text-umber">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-sm">🔗</span>
            原始讨论
          </h2>
          <div className="space-y-2">
            {topic.source_links.map((url, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-stone-200 bg-white px-4 py-3 font-heading-cn text-sm text-umber-light transition-colors hover:border-amber/30 hover:bg-amber/5"
              >
                <span className="text-stone-400">↗</span>
                <span className="truncate">{url}</span>
              </a>
            ))}
          </div>
        </section>

        {/* 导航 */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-stone-200 pt-8">
          <Link href="/" className="font-heading-cn text-sm text-terracotta underline">
            ← 返回首页
          </Link>
          <div className="flex gap-3">
            {index > 0 && (
              <Link href={`/trends/${index - 1}`} className="rounded-lg border border-stone-300 px-4 py-2 font-heading-cn text-sm text-umber-light transition-colors hover:bg-stone-50">
                ← 上一个话题
              </Link>
            )}
            {index < allTopics.length - 1 && (
              <Link href={`/trends/${index + 1}`} className="rounded-lg border border-stone-300 px-4 py-2 font-heading-cn text-sm text-umber-light transition-colors hover:bg-stone-50">
                下一个话题 →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
