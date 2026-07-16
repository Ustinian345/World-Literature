"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
// 不再导入 allWorks — 通过 /api/works/batch 按需获取

type MainTab = "bookshelf" | "settings";
type BookshelfSubTab = "books" | "trends" | "articles";

export function ProfileTabs({ user: initialUser }: { user: { name?: string | null; email?: string | null; image?: string | null } }) {
  const { data: session, update: updateSession } = useSession();
  const user = session?.user || initialUser;
  const [tab, setTab] = useState<MainTab>("bookshelf");

  return (
    <div className="min-h-[80vh] bg-cream">
      <div className="bg-gradient-to-b from-umber to-umber/90 px-5 py-16 text-center text-white">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-amber text-4xl font-bold shadow-xl overflow-hidden">
          {user.image ? (
            <img src={user.image} alt="" className="h-full w-full object-cover" />
          ) : (
            (user.name || user.email || "?").charAt(0).toUpperCase()
          )}
        </div>
        <h1 className="mt-4 font-heading-cn text-2xl font-bold">{user.name || "读者"}</h1>
        <p className="mt-1 font-heading-cn text-sm text-white/60">{user.email}</p>
      </div>

      <div className="mx-auto -mt-8 max-w-2xl px-5">
        <div className="flex gap-1 rounded-2xl bg-white p-1 shadow-lg">
          {([
            ["bookshelf", "📚", "我的书架"],
            ["settings", "⚙️", "设置"],
          ] as [MainTab, string, string][]).map(([key, icon, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`flex-1 rounded-xl py-3 font-heading-cn text-sm font-medium transition-all ${
                tab === key ? "bg-umber text-white shadow" : "text-stone-500 hover:bg-stone-50"
              }`}
            >
              {icon} {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-5 py-10">
        {tab === "bookshelf" && <BookshelfTabs />}
        {tab === "settings" && <SettingsTab user={user} updateSession={updateSession} />}
      </div>
    </div>
  );
}

/* ================================================================
   书架三 Tab：书籍 · 每日焦点 · 今日新文
   ================================================================ */

function BookshelfTabs() {
  const [subTab, setSubTab] = useState<BookshelfSubTab>("books");

  return (
    <div>
      <div className="mb-6 flex gap-1 rounded-xl bg-stone-100 p-1">
        {([
          ["books", "📖", "收藏书籍"],
          ["trends", "🔥", "每日焦点"],
          ["articles", "📰", "今日新文"],
        ] as [BookshelfSubTab, string, string][]).map(([key, icon, label]) => (
          <button
            key={key}
            onClick={() => setSubTab(key)}
            className={`flex-1 rounded-lg py-2 font-heading-cn text-xs font-medium transition-all ${
              subTab === key ? "bg-white text-umber shadow-sm" : "text-stone-500 hover:text-stone-700"
            }`}
          >
            {icon} {label}
          </button>
        ))}
      </div>

      {subTab === "books" && <SavedBooksTab />}
      {subTab === "trends" && <SavedTrendsTab />}
      {subTab === "articles" && <SavedArticlesTab />}
    </div>
  );
}

/* ---------- Tab 1: 收藏书籍 ---------- */

function SavedBooksTab() {
  const [bookmarkIds, setBookmarkIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const [books, setBooks] = useState<any[]>([]);

  const fetchBookmarks = () => {
    setLoading(true);
    fetch("/api/bookmarks")
      .then((r) => r.json())
      .then((d) => {
        const ids: string[] = d.bookmarks || [];
        setBookmarkIds(ids);
        if (ids.length > 0) {
          return fetch("/api/works/batch", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ids }),
          }).then((r) => r.json()).then((data) => setBooks(data.works || []));
        } else {
          setBooks([]);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchBookmarks(); }, []);

  if (loading) return <div className="animate-pulse py-10 text-center text-stone-400">加载中...</div>;

  if (bookmarkIds.length === 0) {
    return (
      <div className="py-12 text-center">
        <div className="text-5xl">📭</div>
        <p className="mt-4 font-heading-cn text-stone-500">书架空空如也</p>
        <Link href="/browse" className="mt-4 inline-block font-heading-cn text-sm text-terracotta underline">
          去浏览全部书籍
        </Link>
      </div>
    );
  }

  // books 已通过 /api/works/batch 获取

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="font-heading-cn text-sm text-stone-400">共 {bookmarkIds.length} 本</p>
        <button onClick={fetchBookmarks} className="text-xs text-terracotta underline">刷新</button>
      </div>
      {books.map((book) => book && <BookCard key={book.id} book={book} onRefresh={fetchBookmarks} />)}
    </div>
  );
}

function BookCard({ book, onRefresh }: { book: { id: string; title: string; author: string; country: string; gradient: string }; onRefresh: () => void }) {
  const [removing, setRemoving] = useState(false);

  async function remove() {
    setRemoving(true);
    await fetch("/api/bookmarks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ workId: book.id, action: "remove" }),
    });
    onRefresh();
  }

  return (
    <div className="flex items-center gap-4 rounded-xl border border-stone-200 bg-white p-4">
      <div className={`flex h-14 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${book.gradient} text-white text-lg`}>★</div>
      <div className="min-w-0 flex-1">
        <Link href={`/works/${book.id}`} className="font-heading-cn font-semibold text-umber hover:text-terracotta">{book.title}</Link>
        <p className="text-xs text-stone-400">{book.author} · {book.country}</p>
      </div>
      <button onClick={remove} disabled={removing}
        className="text-xs text-red-400 hover:text-red-600 disabled:opacity-50">
        {removing ? "..." : "取消收藏"}
      </button>
    </div>
  );
}

/* ---------- Tab 2: 每日焦点 ---------- */

function SavedTrendsTab() {
  const [trends, setTrends] = useState<Array<{ id: string; trendId: string; trendDate: string; trendTitle: string; savedAt: string }>>([]);
  const [loading, setLoading] = useState(true);

  const fetchTrends = () => {
    fetch("/api/favorites/trend")
      .then((r) => r.json())
      .then((d) => setTrends(d.trends || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchTrends(); }, []);

  if (loading) return <div className="animate-pulse py-10 text-center text-stone-400">加载中...</div>;

  if (trends.length === 0) {
    return (
      <div className="py-12 text-center">
        <div className="text-5xl">🔥</div>
        <p className="mt-4 font-heading-cn text-stone-500">暂无收藏的每日焦点</p>
        <Link href="/" className="mt-4 inline-block font-heading-cn text-sm text-terracotta underline">去首页浏览</Link>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="font-heading-cn text-sm text-stone-400">共 {trends.length} 条</p>
        <button onClick={fetchTrends} className="text-xs text-terracotta underline">刷新</button>
      </div>
      {trends.map((t) => (
        <TrendCard key={t.id} trend={t} onRefresh={fetchTrends} />
      ))}
    </div>
  );
}

function TrendCard({ trend, onRefresh }: { trend: { id: string; trendId: string; trendDate: string; trendTitle: string; savedAt: string }; onRefresh: () => void }) {
  const [removing, setRemoving] = useState(false);

  async function remove() {
    setRemoving(true);
    await fetch("/api/favorites/trend", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ trendId: trend.trendId }),
    });
    onRefresh();
  }

  return (
    <div className="flex items-center gap-4 rounded-xl border border-stone-200 bg-white p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber/20 text-lg">🔥</div>
      <div className="min-w-0 flex-1">
        <Link href={`/trends/${trend.trendId}`} className="font-heading-cn text-sm font-semibold text-umber hover:text-terracotta line-clamp-2">
          {trend.trendTitle}
        </Link>
        <p className="text-xs text-stone-400">{trend.trendDate} · 收藏于 {trend.savedAt.slice(0, 10)}</p>
      </div>
      <button onClick={remove} disabled={removing}
        className="text-xs text-red-400 hover:text-red-600 disabled:opacity-50">
        {removing ? "..." : "取消收藏"}
      </button>
    </div>
  );
}

/* ---------- Tab 3: 今日新文 ---------- */

function SavedArticlesTab() {
  const [articles, setArticles] = useState<Array<{ id: string; articleId: string; articleTitle: string; articleSource: string; articleDate: string; excerpt: string | null; savedAt: string }>>([]);
  const [loading, setLoading] = useState(true);

  const fetchArticles = () => {
    fetch("/api/favorites/article")
      .then((r) => r.json())
      .then((d) => setArticles(d.articles || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchArticles(); }, []);

  if (loading) return <div className="animate-pulse py-10 text-center text-stone-400">加载中...</div>;

  if (articles.length === 0) {
    return (
      <div className="py-12 text-center">
        <div className="text-5xl">📰</div>
        <p className="mt-4 font-heading-cn text-stone-500">暂无收藏的新文</p>
        <Link href="/new-works" className="mt-4 inline-block font-heading-cn text-sm text-terracotta underline">去浏览新文</Link>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="font-heading-cn text-sm text-stone-400">共 {articles.length} 篇</p>
        <button onClick={fetchArticles} className="text-xs text-terracotta underline">刷新</button>
      </div>
      {articles.map((a) => (
        <ArticleCard key={a.id} article={a} onRefresh={fetchArticles} />
      ))}
    </div>
  );
}

function ArticleCard({ article, onRefresh }: { article: { id: string; articleId: string; articleTitle: string; articleSource: string; articleDate: string; excerpt: string | null; savedAt: string }; onRefresh: () => void }) {
  const [removing, setRemoving] = useState(false);
  const [expanded, setExpanded] = useState(false);

  async function remove() {
    setRemoving(true);
    await fetch("/api/favorites/article", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ articleId: article.articleId }),
    });
    onRefresh();
  }

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="font-heading-cn text-sm font-semibold text-umber">{article.articleTitle}</h3>
          <div className="mt-1 flex items-center gap-2 text-xs text-stone-400">
            <span>{article.articleSource}</span>
            <span>·</span>
            <span>{article.articleDate?.slice(0, 10)}</span>
            <span>·</span>
            <span>收藏于 {article.savedAt.slice(0, 10)}</span>
          </div>
        </div>
        <button onClick={remove} disabled={removing}
          className="shrink-0 text-xs text-red-400 hover:text-red-600 disabled:opacity-50">
          {removing ? "..." : "取消收藏"}
        </button>
      </div>
      {article.excerpt && (
        <div className="mt-2">
          <p className={`text-xs leading-relaxed text-stone-500 ${expanded ? "" : "line-clamp-3"}`}>{article.excerpt}</p>
          {article.excerpt.length > 200 && (
            <button onClick={() => setExpanded(!expanded)} className="mt-1 text-xs text-terracotta hover:underline">
              {expanded ? "收起" : "展开全文"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

/* ================================================================
   设置 Tab
   ================================================================ */

function SettingsTab({ user, updateSession }: { user: { name?: string | null; email?: string | null; image?: string | null }; updateSession: (data?: Record<string, unknown>) => Promise<unknown> }) {
  const { data: session } = useSession();
  const [name, setName] = useState((user.name as string) || "");
  const [avatarUrl, setAvatarUrl] = useState<string>(user.image || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [saving, setSaving] = useState(false);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    setSaving(true);

    const finalName = name.trim();
    const finalAvatar = avatarUrl.trim() || undefined;

    if (!finalName) {
      setMessage({ type: "error", text: "昵称不能为空" });
      setSaving(false);
      return;
    }

    try {
      // 1. 写入数据库
      const res1 = await fetch("/api/user/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: finalName, avatar: finalAvatar }),
      });
      const d1 = await res1.json();
      if (!res1.ok) { setMessage({ type: "error", text: d1.error || "保存失败" }); setSaving(false); return; }

      // 2. 修改密码（如填写）
      if (currentPassword && newPassword) {
        const res2 = await fetch("/api/user/change-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ currentPassword, newPassword }),
        });
        const d2 = await res2.json();
        if (!res2.ok) { setMessage({ type: "error", text: d2.error || "密码修改失败" }); setSaving(false); return; }
        setCurrentPassword(""); setNewPassword("");
      }

      // 3. 立即刷新客户端 session — 所有 useSession() 组件同步更新
      await updateSession({ name: finalName, image: finalAvatar });

      setMessage({ type: "success", text: "保存成功" });
    } catch { setMessage({ type: "error", text: "网络错误" }); }
    setSaving(false);
  }

  const displayAvatar = avatarUrl || session?.user?.image || user.image;
  const showImage = !!displayAvatar && displayAvatar.startsWith("http");

  return (
    <form onSubmit={handleSave} className="space-y-6">
      <div className="text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-stone-100 text-4xl font-bold shadow overflow-hidden">
          {showImage ? (
            <img src={displayAvatar!} alt="" className="h-full w-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          ) : (
            (name || user.email || "?").charAt(0).toUpperCase()
          )}
        </div>
      </div>

      {/* 头像 URL */}
      <div>
        <label className="mb-2 block font-heading-cn text-sm font-medium text-umber">头像 URL</label>
        <input
          type="url"
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
          placeholder="https://example.com/avatar.jpg"
          className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 font-heading-cn text-sm text-umber placeholder:text-stone-400 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
        />
        <p className="mt-1 font-heading-cn text-xs text-stone-400">输入图片 URL 作为头像（可选）</p>
      </div>

      {/* 昵称 */}
      <div>
        <label className="mb-2 block font-heading-cn text-sm font-medium text-umber">昵称</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 font-heading-cn text-umber focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20" />
      </div>
      <div className="rounded-xl border border-stone-200 bg-stone-50 p-5">
        <p className="mb-4 font-heading-cn text-sm font-semibold text-umber">修改密码</p>
        <div className="space-y-4">
          <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder="当前密码"
            className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 font-heading-cn text-umber placeholder:text-stone-400 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20" />
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="新密码（至少 6 位）"
            className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 font-heading-cn text-umber placeholder:text-stone-400 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20" />
        </div>
      </div>
      <PreferencesSection user={user} />
      {message && (
        <div className={`rounded-lg p-4 text-sm ${message.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>{message.text}</div>
      )}
      <button type="submit" disabled={saving}
        className="w-full rounded-lg bg-umber py-3 font-heading-cn text-white transition-colors hover:bg-umber/90 disabled:opacity-50">
        {saving ? "保存中..." : "保存设置"}
      </button>
      <div className="border-t border-stone-200 pt-6">
        <button type="button" onClick={() => signOut({ callbackUrl: "/" })}
          className="w-full rounded-lg border border-red-200 py-3 font-heading-cn text-sm text-red-600 transition-colors hover:bg-red-50">退出登录</button>
      </div>
    </form>
  );
}

function PreferencesSection({ user: _user }: { user: { name?: string | null; email?: string | null; image?: string | null } }) {
  const { data: session } = useSession();
  const [prefs, setPrefs] = useState<string[] | null>(null);
  const [loadingPrefs, setLoadingPrefs] = useState(true);

  useEffect(() => {
    // 从 API 实时读取数据库最新值，而非依赖 session 快照
    fetch("/api/user/me")
      .then((r) => r.json())
      .then((d) => setPrefs(d.preferences || null))
      .catch(() => setPrefs(session?.user?.preferences || null))
      .finally(() => setLoadingPrefs(false));
  }, [session?.user?.email]);

  return (
    <div className="rounded-xl border border-stone-200 bg-stone-50 p-5">
      <p className="mb-4 font-heading-cn text-sm font-semibold text-umber">文学偏好</p>
      <p className="mb-3 font-heading-cn text-xs text-stone-500">
        当前偏好：{loadingPrefs ? "加载中..." : (prefs && prefs.length > 0 ? prefs.join(" · ") : "未设置")}
      </p>
      <button type="button"
        onClick={() => { sessionStorage.setItem("wl-show-preference", "true"); sessionStorage.setItem("wl-reset-preferences", "1"); window.location.reload(); }}
        className="rounded-lg border border-amber/40 bg-amber/5 px-4 py-2 font-heading-cn text-sm text-amber-dark transition-colors hover:bg-amber/10">
        修改偏好
      </button>
    </div>
  );
}
