"use client";

import { useEffect, useState, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Article {
  id: string;
  title: string;
  author: string;
  source: string;
  sourceUrl: string;
  excerpt: string;
  language: string;
  tags: string[];
  publishedAt: string;
  collectedAt: string;
}

export function NewWorksArchiveClient() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [langFilter, setLangFilter] = useState("");
  const [sourceFilter, setSourceFilter] = useState("");
  const limit = 20;

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(page), limit: String(limit) });
    if (langFilter) params.set("lang", langFilter);
    if (sourceFilter) params.set("source", sourceFilter);
    const res = await fetch(`/api/new-works?${params}`);
    const data = await res.json();
    setArticles(data.articles || []);
    setTotal(data.total || 0);
    setLoading(false);
  }, [page, langFilter, sourceFilter]);

  useEffect(() => { fetchArticles(); }, [fetchArticles]);

  const totalPages = Math.ceil(total / limit);
  const langLabel: Record<string, string> = { zh: "中文", en: "EN", ja: "日", ko: "韩", other: "其他" };
  const langColor: Record<string, string> = { zh: "bg-red-50 text-red-700", en: "bg-blue-50 text-blue-700", ja: "bg-pink-50 text-pink-700", ko: "bg-green-50 text-green-700", other: "bg-purple-50 text-purple-700" };

  return (
    <div>
      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-3">
        <select value={langFilter} onChange={(e) => { setLangFilter(e.target.value); setPage(1); }}
          className="rounded-lg border border-stone-300 bg-white px-3 py-2 font-heading-cn text-sm">
          <option value="">全部语言</option>
          <option value="en">English</option>
          <option value="zh">中文</option>
          <option value="ja">日本語</option>
          <option value="ko">한국어</option>
        </select>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[1,2,3,4].map((i) => (
            <div key={i} className="animate-pulse rounded-xl border border-stone-200 bg-white p-5">
              <div className="h-5 w-3/4 rounded bg-stone-200 mb-2" />
              <div className="h-4 w-1/2 rounded bg-stone-200" />
            </div>
          ))}
        </div>
      ) : articles.length === 0 ? (
        <div className="py-16 text-center">
          <p className="font-heading-cn text-stone-500">暂无文章</p>
        </div>
      ) : (
        <div className="space-y-4">
          {articles.map((article) => (
            <ArticleRow key={article.id} article={article} langLabel={langLabel} langColor={langColor} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1}
            className="rounded-lg border border-stone-300 px-4 py-2 font-heading-cn text-sm disabled:opacity-30"
          >上一页</button>
          <span className="font-heading-cn text-sm text-stone-500">{page} / {totalPages}</span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page >= totalPages}
            className="rounded-lg border border-stone-300 px-4 py-2 font-heading-cn text-sm disabled:opacity-30"
          >下一页</button>
        </div>
      )}
    </div>
  );
}

function ArticleRow({ article, langLabel, langColor }: { article: Article; langLabel: Record<string, string>; langColor: Record<string, string> }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [faved, setFaved] = useState(false);
  const [expanded, setExpanded] = useState(false);

  async function toggleFav() {
    if (!session) { router.push("/login"); return; }
    try {
      if (faved) {
        await fetch("/api/favorites/article", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ articleId: article.id }),
        });
      } else {
        await fetch("/api/favorites/article", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            articleId: article.id, articleTitle: article.title,
            articleSource: article.source, articleDate: article.publishedAt,
            excerpt: article.excerpt?.slice(0, 200),
          }),
        });
      }
      setFaved(!faved);
    } catch { /* ignore */ }
  }

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="font-heading-cn font-semibold text-umber">{article.title}</h3>
          <div className="mt-1.5 flex flex-wrap items-center gap-2">
            <span className="text-xs text-stone-500">{article.author}</span>
            <span className="rounded bg-stone-100 px-1.5 py-0.5 text-xs text-stone-600">{article.source}</span>
            <span className={`rounded px-1.5 py-0.5 text-xs ${langColor[article.language] || "bg-stone-100 text-stone-600"}`}>{langLabel[article.language] || article.language}</span>
            <span className="text-xs text-stone-400">{article.publishedAt?.slice(0, 10)}</span>
          </div>
        </div>
        <button onClick={toggleFav} className="shrink-0 text-lg" title="收藏">
          {faved ? "❤️" : "🤍"}
        </button>
      </div>
      {article.excerpt && (
        <div className="mt-2">
          <p className={`text-xs leading-relaxed text-stone-600 ${expanded ? "" : "line-clamp-3"}`}>{article.excerpt}</p>
          {article.excerpt.length > 200 && (
            <button onClick={() => setExpanded(!expanded)} className="mt-1 text-xs text-terracotta hover:underline">
              {expanded ? "收起" : "展开全文"}
            </button>
          )}
        </div>
      )}
      <div className="mt-2 flex flex-wrap gap-1.5">
        {article.tags?.slice(0, 3).map((tag) => (
          <span key={tag} className="rounded-full bg-amber/10 px-2 py-0.5 text-xs text-amber-dark">{tag}</span>
        ))}
      </div>
      {article.sourceUrl && (
        <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer"
          className="mt-2 inline-block text-xs text-terracotta hover:underline">查看原文 ↗</a>
      )}
    </div>
  );
}
