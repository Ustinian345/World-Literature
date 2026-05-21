"use client";

import { useSession, signOut } from "next-auth/react";
import { useState, useRef, useEffect } from "react";

export default function UserMenu() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (status === "loading") {
    return (
      <div className="h-9 w-9 animate-pulse rounded-full bg-stone-200" />
    );
  }

  if (!session) {
    return (
      <a
        href="/login"
        className="rounded-md px-3 py-2 font-heading-cn text-sm font-medium text-umber-light transition-colors hover:bg-sand/50 hover:text-umber"
      >
        登录
      </a>
    );
  }

  const user = session.user!;
  const initial = (user.name || user.email || "?").charAt(0).toUpperCase();

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-amber text-white text-sm font-bold shadow transition-transform hover:scale-105"
        title={user.name || (user.email ?? "")}
      >
        {user.image ? (
          <img src={user.image} alt="" className="h-9 w-9 rounded-full object-cover" />
        ) : (
          initial
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-stone-200 bg-white py-2 shadow-lg">
          {/* 用户信息 */}
          <div className="border-b border-stone-100 px-4 pb-3 pt-2">
            <p className="font-heading-cn text-sm font-semibold text-umber truncate">
              {user.name || "用户"}
            </p>
            <p className="mt-0.5 truncate text-xs text-stone-400">
              {user.email}
            </p>
          </div>

          {/* 菜单项 */}
          <div className="py-1">
            <a
              href="/profile"
              className="block px-4 py-2 font-heading-cn text-sm text-umber-light transition-colors hover:bg-stone-50"
            >
              📖 我的书架
            </a>
            <a
              href="/bookmarks"
              className="block px-4 py-2 font-heading-cn text-sm text-umber-light transition-colors hover:bg-stone-50"
            >
              🔖 收藏列表
            </a>
          </div>

          {/* 退出 */}
          <div className="border-t border-stone-100 pt-1">
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="w-full px-4 py-2 text-left font-heading-cn text-sm text-stone-500 transition-colors hover:bg-stone-50"
            >
              🚪 退出登录
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
