"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import type { User } from "next-auth";
import Link from "next/link";
import { allWorks } from "@/lib/data";

type Tab = "collections" | "settings";

export function ProfileTabs({ user }: { user: User }) {
  const [tab, setTab] = useState<Tab>("collections");
  const router = useRouter();

  return (
    <div className="min-h-[80vh] bg-cream">
      {/* 顶部用户信息 */}
      <div className="bg-gradient-to-b from-umber to-umber/90 px-5 py-16 text-center text-white">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-amber text-4xl font-bold shadow-xl">
          {(user.name || user.email || "?").charAt(0).toUpperCase()}
        </div>
        <h1 className="mt-4 font-heading-cn text-2xl font-bold">{user.name || "读者"}</h1>
        <p className="mt-1 font-heading-cn text-sm text-white/60">{user.email}</p>
      </div>

      {/* Tab 导航 */}
      <div className="mx-auto -mt-8 max-w-2xl px-5">
        <div className="flex gap-1 rounded-2xl bg-white p-1 shadow-lg">
          {([
            ["collections", "📚", "我的收藏"],
            ["settings", "⚙️", "设置"],
          ] as [Tab, string, string][]).map(([key, icon, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`flex-1 rounded-xl py-3 font-heading-cn text-sm font-medium transition-all ${
                tab === key
                  ? "bg-umber text-white shadow"
                  : "text-stone-500 hover:bg-stone-50"
              }`}
            >
              {icon} {label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab 内容 */}
      <div className="mx-auto max-w-2xl px-5 py-10">
        {tab === "collections" && <CollectionsTab />}
        {tab === "settings" && <SettingsTab user={user} onSaved={() => router.refresh()} />}
      </div>
    </div>
  );
}

function CollectionsTab() {
  const [bookmarkIds, setBookmarkIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/bookmarks")
      .then((r) => r.json())
      .then((d) => setBookmarkIds(d.bookmarks || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="animate-pulse text-center text-stone-400">加载中...</div>;
  }

  if (bookmarkIds.length === 0) {
    return (
      <div className="py-16 text-center">
        <div className="text-5xl">📭</div>
        <p className="mt-4 font-heading-cn text-stone-500">收藏列表为空</p>
        <Link href="/browse" className="mt-4 inline-block font-heading-cn text-sm text-terracotta underline">
          去浏览全部书籍
        </Link>
      </div>
    );
  }

  const books = bookmarkIds
    .map((id) => allWorks.find((w) => w.id === id))
    .filter(Boolean);

  return (
    <div className="space-y-3">
      <p className="font-heading-cn text-sm text-stone-400">
        共收藏 {bookmarkIds.length} 本书
      </p>
      {books.map((book) => book && (
        <Link
          key={book.id}
          href={`/works/${book.id}`}
          className="flex items-center gap-4 rounded-xl border border-stone-200 bg-white p-4 transition-shadow hover:shadow-md"
        >
          <div className={`flex h-14 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${book.gradient} text-white text-xs font-bold`}>
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

function SettingsTab({ user, onSaved }: { user: User; onSaved: () => void }) {
  const [name, setName] = useState((user.name as string) || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [saving, setSaving] = useState(false);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    setSaving(true);

    try {
      const res = await fetch("/api/profile/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, currentPassword, newPassword }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage({ type: "error", text: data.error || "保存失败" });
      } else {
        setMessage({ type: "success", text: "保存成功" });
        setCurrentPassword("");
        setNewPassword("");
        onSaved();
      }
    } catch {
      setMessage({ type: "error", text: "网络错误" });
    }
    setSaving(false);
  }

  return (
    <form onSubmit={handleSave} className="space-y-6">
      {/* 昵称 */}
      <div>
        <label className="mb-2 block font-heading-cn text-sm font-medium text-umber">昵称</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 font-heading-cn text-umber focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
        />
      </div>

      {/* 修改密码 */}
      <div className="rounded-xl border border-stone-200 bg-stone-50 p-5">
        <p className="mb-4 font-heading-cn text-sm font-semibold text-umber">修改密码</p>
        <div className="space-y-4">
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="当前密码"
            className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 font-heading-cn text-umber placeholder:text-stone-400 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
          />
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="新密码（至少 6 位）"
            className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 font-heading-cn text-umber placeholder:text-stone-400 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
          />
        </div>
      </div>

      {message && (
        <div className={`rounded-lg p-4 text-sm ${
          message.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
        }`}>
          {message.text}
        </div>
      )}

      <button
        type="submit"
        disabled={saving}
        className="w-full rounded-lg bg-umber py-3 font-heading-cn text-white transition-colors hover:bg-umber/90 disabled:opacity-50"
      >
        {saving ? "保存中..." : "保存设置"}
      </button>

      <div className="border-t border-stone-200 pt-6">
        <button
          type="button"
          onClick={() => signOut({ callbackUrl: "/" })}
          className="w-full rounded-lg border border-red-200 py-3 font-heading-cn text-sm text-red-600 transition-colors hover:bg-red-50"
        >
          退出登录
        </button>
      </div>
    </form>
  );
}
