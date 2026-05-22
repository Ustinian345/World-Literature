"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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

export function NewWorksClient({ articles, loggedIn }: { articles: Article[]; loggedIn: boolean }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} loggedIn={loggedIn} />
      ))}
    </div>
  );
}

function ArticleCard({ article, loggedIn }: { article: Article; loggedIn: boolean }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const [faved, setFaved] = useState(false);
  const [favLoading, setFavLoading] = useState(false);

  async function toggleFav() {
    if (!session) { router.push("/login"); return; }
    setFavLoading(true);
    try {
      if (faved) {
        await fetch("/api/favorites/article", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ articleId: article.id }),
        });
        setFaved(false);
      } else {
        await fetch("/api/favorites/article", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            articleId: article.id, articleTitle: article.title,
            articleSource: article.source, articleDate: article.publishedAt,
            excerpt: article.excerpt.slice(0, 200),
          }),
        });
        setFaved(true);
      }
    } catch { /* ignore */ }
    setFavLoading(false);
  }

  const langLabel: Record<string, string> = { zh: "中文", en: "EN", ja: "日", ko: "韩", other: "其他" };
  const langColor: Record<string, string> = { zh: "bg-red-50 text-red-700", en: "bg-blue-50 text-blue-700", ja: "bg-pink-50 text-pink-700", ko: "bg-green-50 text-green-700", other: "bg-purple-50 text-purple-700" };
  const typeLabels: Record<string, string> = { fiction: "小说", essay: "散文", poetry: "诗歌", criticism: "评论", interview: "访谈", translation: "译介", play: "戏剧", nonfiction: "非虚构" };

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <h3 className="font-heading-cn text-sm font-semibold text-umber leading-snug line-clamp-2">
            {article.title}
          </h3>
          <div className="mt-1.5 flex flex-wrap items-center gap-2">
            <span className="text-xs text-stone-500">{article.author}</span>
            <span className="rounded bg-stone-100 px-1.5 py-0.5 text-xs text-stone-600">{article.source}</span>
            <span className={`rounded px-1.5 py-0.5 text-xs ${langColor[article.language] || "bg-stone-100 text-stone-600"}`}>{langLabel[article.language] || article.language}</span>
            {(article as any).type && (
              <span className="rounded bg-amber/10 px-1.5 py-0.5 text-xs text-amber-dark">{typeLabels[(article as any).type] || (article as any).type}</span>
            )}
          </div>
        </div>
        <button
          onClick={toggleFav}
          disabled={favLoading}
          className={`shrink-0 text-lg transition-colors ${faved ? "text-red-500" : "text-stone-300 hover:text-red-400"}`}
          title={session ? (faved ? "取消收藏" : "收藏") : "请先登录"}
        >
          {faved ? "❤️" : "🤍"}
        </button>
      </div>

      {article.excerpt && (
        <div className="mt-2">
          <p className={`font-heading-cn text-xs leading-relaxed text-stone-600 ${expanded ? "" : "line-clamp-3"}`}>
            {article.excerpt}
          </p>
          {article.excerpt.length > 200 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-1 text-xs text-terracotta hover:underline"
            >
              {expanded ? "收起" : "展开全文"}
            </button>
          )}
        </div>
      )}

      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        {article.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="rounded-full bg-amber/10 px-2 py-0.5 text-xs text-amber-dark">{tag}</span>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-between">
        <span className="text-xs text-stone-400">{article.publishedAt?.slice(0, 10)}</span>
        {article.sourceUrl && (
          <a
            href={article.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-terracotta hover:underline"
          >
            查看原文 ↗
          </a>
        )}
      </div>
    </div>
  );
}

/** Also exported for archive page use */
export { ArticleCard };
