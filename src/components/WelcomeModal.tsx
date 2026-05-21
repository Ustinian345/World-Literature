"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const GREETINGS = [
  "世界文学的星空因你的加入而更加璀璨。从荷马史诗到马尔克斯的魔幻，从李白的诗篇到阿契贝的非洲故事——愿你在跨越时空的文字中找到属于自己的共鸣。",
  "书页翻动的声音是跨越千年的回响。欢迎来到世界文学总站，这里收藏着人类最深刻的思想与最动人的故事，而今天，你也成为了这段旅程的一部分。",
  "每一位读者都是一本书的开篇。从今天起，你可以在这座文学殿堂中记录你的阅读足迹，收藏你心仪的作品，与世界各地的读者一同探索。",
];

export default function WelcomeModal() {
  const { data: session } = useSession();
  const [visible, setVisible] = useState(false);
  const [userNumber, setUserNumber] = useState(0);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const u = session?.user as unknown as Record<string, unknown> | undefined;
    const email = session?.user?.email || "";

    // 三个条件同时满足才弹窗：
    // 1. 是新注册用户（isNewUser = true）
    // 2. 用户编号有效
    // 3. 该邮箱从未弹过窗（localStorage）
    if (u?.isNewUser && u?.userNumber && email) {
      const key = `wl-welcome-shown-${email}`;
      if (localStorage.getItem(key)) return;

      setUserNumber(u.userNumber as number);
      setGreeting(GREETINGS[(u.userNumber as number) % GREETINGS.length]);
      setVisible(true);
    }
  }, [session]);

  function handleDismiss() {
    const email = session?.user?.email || "";
    if (email) {
      localStorage.setItem(`wl-welcome-shown-${email}`, "1");
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-5 backdrop-blur-sm">
      <div className="relative w-full max-w-lg animate-[fadeIn_0.5s_ease-out] overflow-hidden rounded-3xl bg-cream shadow-2xl">
        {/* 顶部装饰 */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-amber/20 to-transparent" />
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-amber/10" />
        <div className="absolute -right-8 top-20 h-24 w-24 rounded-full bg-terracotta/10" />

        <div className="relative px-8 pb-8 pt-12 text-center">
          {/* 用户编号徽标 */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber to-terracotta text-3xl font-bold text-white shadow-xl">
            {userNumber}
          </div>

          <p className="mb-1 font-heading-cn text-xs font-semibold tracking-[0.2em] text-amber-dark uppercase">
            第 {userNumber} 位读者
          </p>
          <h2 className="mb-2 font-heading-cn text-2xl font-bold text-umber">
            欢迎加入世界文学总站
          </h2>
          <p className="mb-6 font-heading-cn text-sm leading-relaxed text-stone-500 italic">
            &ldquo;{greeting}&rdquo;
          </p>

          {/* 装饰分隔线 */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber/40" />
            <span className="font-heading-cn text-xs text-amber-dark">&#9998;</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber/40" />
          </div>

          <button
            onClick={handleDismiss}
            className="rounded-xl bg-umber px-8 py-3 font-heading-cn text-sm font-medium text-cream shadow-lg transition-all hover:bg-umber/90 hover:shadow-xl active:scale-95"
          >
            开始探索
          </button>
        </div>
      </div>
    </div>
  );
}

const fadeInKeyframes = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
`;

// Inject keyframes once
if (typeof document !== "undefined") {
  const existing = document.getElementById("welcome-modal-styles");
  if (!existing) {
    const style = document.createElement("style");
    style.id = "welcome-modal-styles";
    style.textContent = fadeInKeyframes;
    document.head.appendChild(style);
  }
}
