import Link from "next/link";

interface Topic {
  title: string;
  background: string;
  perspectives: string;
  insight: string;
  source_links: string[];
}

interface DailyTrends {
  _meta: { generatedAt: string; llmUsed: boolean };
  topics: Topic[];
}

async function getTrends(): Promise<DailyTrends | null> {
  try {
    const { readFile } = await import("fs/promises");
    const path = await import("path");
    const file = path.join(process.cwd(), "data", "daily-trends.json");
    const raw = await readFile(file, "utf-8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export default async function TrendingTopics() {
  const data = await getTrends();

  if (!data || !data.topics || data.topics.length === 0) {
    return (
      <section className="bg-gradient-to-b from-cream to-parchment py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber/20 text-2xl">🔥</div>
            <div>
              <h2 className="font-heading-cn text-3xl font-bold text-umber">今日文学焦点</h2>
              <p className="mt-1 font-heading-cn text-sm text-stone-500">
                数据收集中，请稍后再来查看
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const topics = data.topics;

  return (
    <section className="bg-gradient-to-b from-cream to-parchment py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber to-terracotta text-2xl text-white shadow-lg">
            🔥
          </div>
          <div>
            <h2 className="font-heading-cn text-3xl font-bold text-umber">今日文学焦点</h2>
            <p className="mt-1 font-heading-cn text-sm text-stone-500">
              {data._meta.llmUsed ? "AI 深度分析" : "社区精选"} · 每日更新
            </p>
          </div>
        </div>

        {/* 话题卡片网格 */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, i) => (
            <Link
              key={i}
              href={`/trends/${i}`}
              className="group flex flex-col rounded-2xl border border-stone-200 bg-warm-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              {/* 编号 */}
              <span className="mb-3 font-heading-en text-xs font-bold text-amber-dark opacity-50">
                TRENDING #{i + 1}
              </span>

              {/* 标题 */}
              <h3 className="mb-3 font-heading-cn text-lg font-bold leading-snug text-umber group-hover:text-terracotta transition-colors line-clamp-2">
                {topic.title}
              </h3>

              {/* 摘要 */}
              <p className="mb-4 flex-1 font-heading-cn text-sm leading-relaxed text-stone-500 line-clamp-3">
                {topic.background}
              </p>

              {/* 来源计数 */}
              <div className="flex items-center gap-2 text-xs text-stone-400">
                <span>📎 {topic.source_links.length} sources</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* 底部提示 */}
        <p className="mt-6 text-center font-heading-cn text-xs text-stone-400">
          📡 数据来自 Reddit r/books, r/literature, Hacker News, LitHub RSS
        </p>
      </div>
    </section>
  );
}
