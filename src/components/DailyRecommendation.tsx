import Link from "next/link";
import { auth } from "@/lib/auth";

interface BookRec {
  id: string;
  title: string;
  author: string;
  tags: string[];
  cover: string;
  summary: string;
  slug: string;
}

interface DailyRec {
  date: string;
  book: BookRec;
}

async function getRecommendation(): Promise<DailyRec | null> {
  try {
    const { readFile } = await import("fs/promises");
    const path = await import("path");
    const file = path.join(process.cwd(), "data", "daily-recommendation.json");
    const raw = await readFile(file, "utf-8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export default async function DailyRecommendation() {
  const data = await getRecommendation();
  const session = await auth();
  const hasPreferences = session?.user?.preferences && session.user.preferences.length > 0;

  if (!data || !data.book) {
    return (
      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-5">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta/20 text-xl">📖</div>
            <div>
              <h2 className="font-heading-cn text-2xl font-bold text-umber">今日推荐</h2>
              <p className="font-heading-cn text-sm text-stone-400">推荐加载中，明日再来</p>
            </div>
          </div>
          <div className="animate-pulse rounded-2xl border border-stone-200 bg-stone-50 p-10 text-center">
            <div className="mx-auto mb-4 h-32 w-24 rounded-lg bg-stone-200" />
            <div className="mx-auto mb-2 h-5 w-48 rounded bg-stone-200" />
            <div className="mx-auto h-4 w-32 rounded bg-stone-200" />
          </div>
        </div>
      </section>
    );
  }

  const today = new Date().toISOString().slice(0, 10);
  if (data.date !== today) {
    return (
      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-5">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta/20 text-xl">📖</div>
            <div>
              <h2 className="font-heading-cn text-2xl font-bold text-umber">今日推荐</h2>
              <p className="font-heading-cn text-sm text-stone-400">今日推荐加载中...</p>
            </div>
          </div>
          <div className="animate-pulse rounded-2xl border border-stone-200 bg-stone-50 p-10 text-center">
            <div className="mx-auto mb-4 h-32 w-24 rounded-lg bg-stone-200" />
            <div className="mx-auto mb-2 h-5 w-48 rounded bg-stone-200" />
            <div className="mx-auto h-4 w-32 rounded bg-stone-200" />
          </div>
        </div>
      </section>
    );
  }

  const { book } = data;

  return (
    <section className="bg-cream py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-5">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-terracotta to-amber text-white text-xl shadow-md">
            📖
          </div>
          <div>
            <h2 className="font-heading-cn text-2xl font-bold text-umber">今日推荐</h2>
            <p className="font-heading-cn text-sm text-stone-500">
              {hasPreferences ? "根据你的偏好为你精选" : "每日精选，值得一读"}
            </p>
          </div>
        </div>

        <Link
          href={`/works/${book.slug}`}
          className="group block rounded-2xl border border-stone-200 bg-warm-white p-6 shadow-md transition-all hover:shadow-xl hover:-translate-y-0.5"
        >
          <div className="flex flex-col sm:flex-row gap-6">
            {/* 封面占位 */}
            <div
              className={`flex h-40 w-28 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${book.cover} shadow-md`}
            >
              <span className="font-heading-cn text-base font-bold text-white/80 text-center leading-tight px-1">
                {book.title}
              </span>
            </div>

            <div className="flex flex-col justify-center min-w-0">
              <h3 className="font-heading-cn text-xl font-bold text-umber group-hover:text-terracotta transition-colors">
                {book.title}
              </h3>
              <p className="mt-1 font-body text-sm italic text-umber-light">{book.author}</p>

              {/* 标签 */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {book.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-amber/10 px-2.5 py-0.5 font-heading-cn text-xs text-amber-dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 推荐理由 */}
              <p className="mt-3 font-heading-cn text-sm leading-relaxed text-stone-600">
                {book.summary}
              </p>

              {/* 个性化标签 */}
              {hasPreferences && (
                <span className="mt-3 inline-flex items-center gap-1 self-start rounded-full bg-terracotta/10 px-3 py-1 font-heading-cn text-xs text-terracotta">
                  根据你的偏好推荐
                </span>
              )}

              <span className="mt-4 inline-flex items-center gap-1 font-heading-cn text-sm font-medium text-terracotta group-hover:underline">
                查看详情
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
