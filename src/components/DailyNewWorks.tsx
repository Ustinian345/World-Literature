import Link from "next/link";
import { auth } from "@/lib/auth";
import { NewWorksClient } from "./NewWorksClient";

interface Article {
  id: string;
  title: string;
  author: string;
  source: string;
  sourceUrl: string;
  excerpt: string;
  criticism: string;
  language: string;
  tags: string[];
  publishedAt: string;
  collectedAt: string;
}

async function getTodayWorks(): Promise<Article[]> {
  try {
    const { readFile } = await import("fs/promises");
    const path = await import("path");
    const today = new Date().toISOString().slice(0, 10);
    const file = path.join(process.cwd(), "data", "new-works-archive", `${today}.json`);
    const raw = await readFile(file, "utf-8");
    const data = JSON.parse(raw);
    return data.articles || [];
  } catch {
    // fallback to daily-new-works.json
    try {
      const { readFile } = await import("fs/promises");
      const path = await import("path");
      const file = path.join(process.cwd(), "data", "daily-new-works.json");
      const raw = await readFile(file, "utf-8");
      const data = JSON.parse(raw);
      return data.articles || [];
    } catch { return []; }
  }
}

export default async function DailyNewWorks() {
  const articles = await getTodayWorks();
  const session = await auth();
  const loggedIn = !!session?.user?.id;

  if (articles.length === 0) {
    return (
      <section className="bg-parchment py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-5">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600/20 text-xl">📰</div>
            <div>
              <h2 className="font-heading-cn text-2xl font-bold text-umber">今日新文</h2>
              <p className="font-heading-cn text-sm text-stone-400">数据采集中，明日再来</p>
            </div>
          </div>
          <div className="animate-pulse rounded-2xl border border-stone-200 bg-stone-50 p-10 text-center">
            <div className="mx-auto mb-2 h-5 w-48 rounded bg-stone-200" />
            <div className="mx-auto h-4 w-32 rounded bg-stone-200" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-parchment py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-5">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-teal-500 text-white text-xl shadow-md">📰</div>
            <div>
              <h2 className="font-heading-cn text-2xl font-bold text-umber">今日新文</h2>
              <p className="font-heading-cn text-sm text-stone-500">全球文学最新动态</p>
            </div>
          </div>
          <Link href="/new-works" className="font-heading-cn text-sm text-terracotta hover:underline">
            查看全部 →
          </Link>
        </div>

        <NewWorksClient articles={articles.slice(0, 8)} loggedIn={loggedIn} />

        <div className="mt-6 text-center">
          <Link
            href="/new-works"
            className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/5 px-6 py-2.5 font-heading-cn text-sm text-amber-dark transition-colors hover:bg-amber/10"
          >
            查看全部文章 →
          </Link>
        </div>
      </div>
    </section>
  );
}
