import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-5 py-20">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber text-3xl font-bold text-white shadow-lg">
          {(session.user.name || "?").charAt(0).toUpperCase()}
        </div>
        <h1 className="font-heading-cn text-2xl font-bold text-umber">
          {session.user.name || "读者"}
        </h1>
        <p className="mt-2 text-stone-500">{session.user.email}</p>
        <div className="mt-8 rounded-xl border border-stone-200 bg-warm-white p-6 text-left">
          <p className="font-heading-cn text-sm text-umber">📖 我的书架（即将开放）</p>
          <p className="mt-2 text-xs text-stone-400">在这里管理你的阅读记录、书签和笔记。</p>
        </div>
        <a href="/" className="mt-6 inline-block font-heading-cn text-sm text-terracotta underline">
          返回首页
        </a>
      </div>
    </div>
  );
}
