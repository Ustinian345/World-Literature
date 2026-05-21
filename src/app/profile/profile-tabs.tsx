"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { allWorks } from "@/lib/data";

type Tab = "bookshelf" | "settings";

export function ProfileTabs({ user: initialUser }: { user: { name?: string | null; email?: string | null; image?: string | null } }) {
  const { data: session, update: updateSession } = useSession();
  const user = session?.user || initialUser;
  const [tab, setTab] = useState<Tab>("bookshelf");
  const router = useRouter();

  return (
    <div className="min-h-[80vh] bg-cream">
      {/* 顶部用户信息 */}
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

      {/* Tab 导航 */}
      <div className="mx-auto -mt-8 max-w-2xl px-5">
        <div className="flex gap-1 rounded-2xl bg-white p-1 shadow-lg">
          {([
            ["bookshelf", "📚", "我的书架"],
            ["settings", "⚙️", "设置"],
          ] as [Tab, string, string][]).map(([key, icon, label]) => (
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

      {/* Tab 内容 */}
      <div className="mx-auto max-w-2xl px-5 py-10">
        {tab === "bookshelf" && <BookshelfTab />}
        {tab === "settings" && <SettingsTab user={user} updateSession={updateSession} />}
      </div>
    </div>
  );
}

function BookshelfTab() {
  const [bookmarkIds, setBookmarkIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBookmarks = () => {
    fetch("/api/bookmarks")
      .then((r) => r.json())
      .then((d) => setBookmarkIds(d.bookmarks || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchBookmarks(); }, []);

  if (loading) return <div className="animate-pulse py-16 text-center text-stone-400">加载中...</div>;

  if (bookmarkIds.length === 0) {
    return (
      <div className="py-16 text-center">
        <div className="text-5xl">📭</div>
        <p className="mt-4 font-heading-cn text-stone-500">书架空空如也</p>
        <p className="mt-1 text-xs text-stone-400">去书籍详情页点击 ❤️ 收藏按钮</p>
        <Link href="/browse" className="mt-4 inline-block font-heading-cn text-sm text-terracotta underline">
          去浏览全部书籍
        </Link>
      </div>
    );
  }

  const books = bookmarkIds.map((id) => allWorks.find((w) => w.id === id)).filter(Boolean);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="font-heading-cn text-sm text-stone-400">共 {bookmarkIds.length} 本</p>
        <button onClick={fetchBookmarks} className="text-xs text-terracotta underline">刷新</button>
      </div>
      {books.map((book) => book && (
        <Link
          key={book.id}
          href={`/works/${book.id}`}
          className="flex items-center gap-4 rounded-xl border border-stone-200 bg-white p-4 transition-shadow hover:shadow-md"
        >
          <div className={`flex h-14 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${book.gradient} text-white text-lg`}>
            ★
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate font-heading-cn font-semibold text-umber">{book.title}</p>
            <p className="truncate text-xs text-stone-400">{book.author} · {book.country}</p>
          </div>
          <span className="text-xs text-stone-300">→</span>
        </Link>
      ))}
    </div>
  );
}

function SettingsTab({ user, updateSession }: { user: { name?: string | null; email?: string | null; image?: string | null }; updateSession: () => Promise<unknown> }) {
  const [name, setName] = useState((user.name as string) || "");
  const [avatar, setAvatar] = useState<string>(user.image || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [saving, setSaving] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  // 头像上传：转 base64
  function handleAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 500 * 1024) {
      setMessage({ type: "error", text: "头像文件不能超过 500KB" });
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setAvatar(reader.result as string);
      setMessage(null);
    };
    reader.readAsDataURL(file);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    setSaving(true);

    try {
      // 1. 更新昵称/头像
      const res1 = await fetch("/api/user/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), avatar: avatar || undefined }),
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
        setCurrentPassword("");
        setNewPassword("");
      }

      // 3. 刷新 NextAuth session
      await updateSession();
      setMessage({ type: "success", text: "保存成功" });
    } catch {
      setMessage({ type: "error", text: "网络错误" });
    }
    setSaving(false);
  }

  return (
    <form onSubmit={handleSave} className="space-y-6">
      {/* 头像 */}
      <div className="text-center">
        <div
          className="mx-auto flex h-24 w-24 cursor-pointer items-center justify-center rounded-full bg-stone-100 text-4xl font-bold shadow overflow-hidden hover:ring-2 ring-terracotta transition-all"
          onClick={() => fileRef.current?.click()}
          title="点击更换头像"
        >
          {avatar ? (
            <img src={avatar} alt="" className="h-full w-full object-cover" />
          ) : (
            (name || user.email || "?").charAt(0).toUpperCase()
          )}
        </div>
        <input ref={fileRef} type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
        <p className="mt-2 font-heading-cn text-xs text-stone-400">点击头像更换（≤500KB）</p>
      </div>

      {/* 昵称 */}
      <div>
        <label className="mb-2 block font-heading-cn text-sm font-medium text-umber">昵称</label>
        <input
          type="text" value={name} onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 font-heading-cn text-umber focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
        />
      </div>

      {/* 修改密码 */}
      <div className="rounded-xl border border-stone-200 bg-stone-50 p-5">
        <p className="mb-4 font-heading-cn text-sm font-semibold text-umber">修改密码</p>
        <div className="space-y-4">
          <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="当前密码"
            className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 font-heading-cn text-umber placeholder:text-stone-400 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
          />
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
            placeholder="新密码（至少 6 位）"
            className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 font-heading-cn text-umber placeholder:text-stone-400 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
          />
        </div>
      </div>

      {message && (
        <div className={`rounded-lg p-4 text-sm ${message.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
          {message.text}
        </div>
      )}

      <button type="submit" disabled={saving}
        className="w-full rounded-lg bg-umber py-3 font-heading-cn text-white transition-colors hover:bg-umber/90 disabled:opacity-50"
      >
        {saving ? "保存中..." : "保存设置"}
      </button>

      <div className="border-t border-stone-200 pt-6">
        <button type="button" onClick={() => signOut({ callbackUrl: "/" })}
          className="w-full rounded-lg border border-red-200 py-3 font-heading-cn text-sm text-red-600 transition-colors hover:bg-red-50"
        >
          退出登录
        </button>
      </div>
    </form>
  );
}
