"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface RecBook {
  id: string;
  title: string;
  titleEn: string;
  author: string;
  country: string;
  flag: string;
  gradient: string;
  genres: unknown;
  themes: unknown;
  continent: string;
  era: string;
  excerpt: string;
}

export default function DailyRecommendation() {
  const { data: session } = useSession();
  const router = useRouter();
  const prefs = session?.user?.preferences;
  const hasPrefs = prefs && (prefs as unknown[]).length > 0;

  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [rec, setRec] = useState<{ bookId: string; date: string; reason: string; book?: RecBook } | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!session?.user?.id) { setLoading(false); return; }
    if (!hasPrefs) { setLoading(false); return; }

    setLoading(true);
    fetch("/api/recommendation/daily")
      .then((r) => r.json())
      .then((d) => {
        if (d.recommendation) {
          setRec(d.recommendation);
          setLoading(false);
        } else {
          setGenerating(true);
          return fetch("/api/recommendation/daily/generate", { method: "POST" });
        }
      })
      .then((r) => r?.json())
      .then((d) => {
        if (d?.recommendation) { setRec(d.recommendation); }
        else if (d?.error) { setError(d.error); }
      })
      .catch(() => setError("加载失败"))
      .finally(() => { setLoading(false); setGenerating(false); });
  }, [session?.user?.id, hasPrefs]);

  const book = rec?.book ?? null;
  const matchedTags = book && prefs ? computeTags(book).filter((t) => (prefs as string[]).includes(t)) : [];

  return (
    <section className="bg-cream py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-5">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-terracotta to-amber text-white text-xl shadow-md">📖</div>
          <div>
            <h2 className="font-heading-cn text-2xl font-bold text-umber">今日推荐</h2>
            <p className="font-heading-cn text-sm text-stone-500">
              {hasPrefs ? "根据你的偏好为你精选" : "设置偏好，获取专属推荐"}
            </p>
          </div>
        </div>

        {/* 未登录 / 未设置偏好 */}
        {(!session || !hasPrefs) && !loading && (
          <div className="rounded-2xl border border-dashed border-amber/30 bg-amber/5 p-10 text-center">
            <div className="text-4xl mb-4">📚</div>
            <p className="font-heading-cn text-stone-600 mb-2">根据你的阅读偏好，我们将为你每日精选一本书</p>
            <p className="font-heading-cn text-xs text-stone-400 mb-6">选出你感兴趣的文学类型，开启个性化推荐</p>
            <button
              onClick={() => {
                if (!session) { router.push("/login"); return; }
                sessionStorage.setItem("wl-show-preference", "true");
                window.location.reload();
              }}
              className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-2.5 font-heading-cn text-sm text-white shadow-md transition-all hover:bg-terracotta-dark active:scale-95"
            >
              选择我的偏好 →
            </button>
          </div>
        )}

        {/* 加载中 */}
        {(loading || generating) && (
          <div className="animate-pulse rounded-2xl border border-stone-200 bg-stone-50 p-10">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="mx-auto h-40 w-28 rounded-xl bg-stone-200 sm:mx-0" />
              <div className="flex-1 space-y-3">
                <div className="h-6 w-48 rounded bg-stone-200" />
                <div className="h-4 w-32 rounded bg-stone-200" />
                <div className="h-4 w-full rounded bg-stone-200" />
                <div className="h-4 w-3/4 rounded bg-stone-200" />
              </div>
            </div>
          </div>
        )}

        {/* 错误 */}
        {error && !loading && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
            <p className="font-heading-cn text-sm text-red-600">{error}</p>
          </div>
        )}

        {/* 推荐卡片 */}
        {rec && book && !loading && (
          <Link
            href={`/works/${book.id}`}
            className="group block rounded-2xl border border-stone-200 bg-warm-white p-6 shadow-md transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <div className={`flex h-40 w-28 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${book.gradient} shadow-md mx-auto sm:mx-0`}>
                <span className="font-heading-cn text-base font-bold text-white/80 text-center leading-tight px-1">{book.title}</span>
              </div>

              <div className="flex flex-col justify-center min-w-0">
                <h3 className="font-heading-cn text-xl font-bold text-umber group-hover:text-terracotta transition-colors">{book.title}</h3>
                <p className="mt-1 font-body text-sm italic text-umber-light">{book.author} · {book.country}</p>

                {matchedTags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {matchedTags.map((tag) => (
                      <span key={tag} className="rounded-full bg-terracotta/15 px-2.5 py-0.5 font-heading-cn text-xs text-terracotta font-medium">{tag}</span>
                    ))}
                  </div>
                )}

                <p className="mt-3 font-heading-cn text-sm leading-relaxed text-stone-600">{rec.reason}</p>

                <span className="mt-3 inline-flex items-center gap-1 self-start rounded-full bg-terracotta/10 px-3 py-1 font-heading-cn text-xs text-terracotta">根据你的偏好推荐</span>

                <span className="mt-4 inline-flex items-center gap-1 font-heading-cn text-sm font-medium text-terracotta group-hover:underline">
                  查看详情
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6" /></svg>
                </span>
              </div>
            </div>
          </Link>
        )}
      </div>
    </section>
  );
}

function computeTags(w: RecBook): string[] {
  const genres = (w.genres as string[]) ?? [];
  const themes = (w.themes as string[]) ?? [];
  const tags: string[] = [];
  for (const g of genres) {
    if (g === "诗歌") tags.push("诗歌散文");
    if (g === "小说") tags.push("古典文学");
    if (g === "戏剧") tags.push("古典文学");
    if (g === "史诗") tags.push("古典文学");
    if (g === "散文/随笔") tags.push("诗歌散文");
    if (g === "哲学") tags.push("哲学文学");
  }
  for (const t of themes) {
    if (t === "爱情") tags.push("爱情小说");
    if (t === "战争") tags.push("战争文学");
    if (t === "历史") tags.push("历史小说");
    if (t === "魔幻") tags.push("魔幻现实主义");
    if (t === "哲学") tags.push("哲学文学");
  }
  if (w.country.includes("俄")) tags.push("俄国文学");
  if (/日本|韩国|朝鲜/.test(w.country)) tags.push("东亚文学");
  if (/巴西|阿根廷|墨西哥|哥伦比亚|智利|秘鲁/.test(w.country)) tags.push("拉美文学");
  if (/尼日利亚|肯尼亚|南非|埃及/.test(w.country)) tags.push("非洲文学");
  if (/挪威|瑞典|丹麦|芬兰|冰岛/.test(w.country)) tags.push("北欧文学");
  if (w.continent === "asia") tags.push("东亚文学");
  if (w.continent === "africa") tags.push("非洲文学");
  if (w.continent === "americas") tags.push("拉美文学");
  if (w.era?.includes("古代") || w.era?.includes("中世纪")) tags.push("古典文学");
  if (w.era?.includes("近代") || w.era?.includes("现代") || w.era?.includes("当代")) tags.push("现代文学");
  const NOBEL = ["海明威","泰戈尔","川端康成","马尔克斯","库切","莫里森","格拉斯","石黑一雄","帕慕克","加缪","萨特","福克纳","海塞","肖洛霍夫","帕斯捷尔纳克","索尔仁尼琴","莫言","略萨","托卡尔丘克","汉德克","格丽克","古尔纳","福瑟","韩江"];
  if (NOBEL.some((n) => w.author.includes(n))) tags.push("诺贝尔奖作品");
  return [...new Set(tags)];
}
