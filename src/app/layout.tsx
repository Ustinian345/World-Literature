import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display, Noto_Serif_SC, EB_Garamond } from "next/font/google";
import SessionProvider from "@/components/SessionProvider";
import UserMenu from "@/components/UserMenu";
import WelcomeModal from "@/components/WelcomeModal";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading-en",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const notoSerif = Noto_Serif_SC({
  variable: "--font-heading-cn",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "世界文学总站 — World Literature Hub",
    template: "%s | 世界文学总站",
  },
  description:
    "收录全球六大洲、各语种的经典文学作品。从亚洲的古老经卷到非洲的口述史诗，每一页都是一次跨越时空的对话。",
  keywords: ["世界文学", "经典文学", "诗歌", "小说", "戏剧", "world literature"],
  openGraph: {
    title: "世界文学总站 — World Literature Hub",
    description: "从亚洲的古老经卷到非洲的口述史诗，探索世界文学的无限疆域。",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${playfair.variable} ${notoSerif.variable} ${ebGaramond.variable} scroll-smooth`}
    >
      <body className="flex min-h-full flex-col bg-cream text-umber antialiased">
        <SessionProvider>
        {/* 跳过导航 */}
        <a href="#main-content" className="skip-link">
          跳到主要内容 / Skip to Content
        </a>

        {/* 导航栏 */}
        <header className="fixed top-0 z-50 flex h-16 w-full items-center border-b border-sand/40 bg-cream/90 backdrop-blur-sm transition-shadow">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 font-heading-cn text-xl font-bold text-umber no-underline"
              aria-label="世界文学总站 — 回到首页"
            >
              <span aria-hidden="true">&#9998;</span>
              <span className="hidden sm:inline">世界文学</span>
            </Link>

            {/* 导航链接 */}
            <nav className="hidden items-center gap-1 md:flex" aria-label="主导航">
              <Link
                href="/"
                className="rounded-md px-3 py-2 font-[system-ui] text-sm font-medium text-umber-light transition-colors hover:bg-sand/50 hover:text-umber"
              >
                首页
              </Link>
              <Link
                href="/browse"
                className="rounded-md px-3 py-2 font-[system-ui] text-sm font-medium text-umber-light transition-colors hover:bg-sand/50 hover:text-umber"
              >
                浏览全部
              </Link>
              <Link
                href="/awards"
                className="rounded-md px-3 py-2 font-[system-ui] text-sm font-medium text-umber-light transition-colors hover:bg-sand/50 hover:text-umber"
              >
                文学奖项
              </Link>
              <Link
                href="/textbook"
                className="rounded-md px-3 py-2 font-[system-ui] text-sm font-medium text-umber-light transition-colors hover:bg-sand/50 hover:text-umber"
              >
                教材文学
              </Link>
              {[
                { href: "/continents/asia", label: "亚洲" },
                { href: "/continents/europe", label: "欧洲" },
                { href: "/continents/africa", label: "非洲" },
                { href: "/continents/americas", label: "美洲" },
                { href: "/continents/oceania", label: "大洋洲" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 font-[system-ui] text-sm font-medium text-umber-light transition-colors hover:bg-sand/50 hover:text-umber"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* 右侧操作区 */}
            <div className="flex items-center gap-2">
              <UserMenu />

              {/* 搜索按钮 */}
              <button
                className="flex h-9 w-9 items-center justify-center rounded-md font-[system-ui] text-umber-light transition-colors hover:bg-sand/50"
                aria-label="搜索"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>

              {/* 语言切换 */}
              <button
                className="rounded-md px-2 py-1.5 font-[system-ui] text-xs font-medium text-umber-light transition-colors hover:bg-sand/50"
                aria-label="Switch language"
              >
                中
              </button>

              {/* 移动端菜单按钮 */}
              <button
                className="flex h-9 w-9 items-center justify-center rounded-md font-[system-ui] text-umber-light md:hidden"
                aria-label="打开菜单"
                aria-expanded="false"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* 主内容 */}
        <main id="main-content">{children}</main>

        {/* 页脚 */}
        <footer className="bg-umber text-cream/70" role="contentinfo">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {/* 品牌 */}
              <div>
                <p className="font-heading-cn text-lg font-bold text-cream">
                  世界文学
                </p>
                <p className="mt-3 font-[system-ui] text-sm leading-relaxed">
                  汇聚全球经典，跨越时空与文明对话。
                  <br />
                  A hub for the world&apos;s literary treasures.
                </p>
              </div>

              {/* 探索 */}
              <div>
                <h4 className="mb-4 font-[system-ui] text-xs font-semibold uppercase tracking-[0.15em] text-amber">
                  探索 / Explore
                </h4>
                <ul className="space-y-2 font-[system-ui] text-sm">
                  {["亚洲", "欧洲", "非洲", "美洲", "大洋洲"].map((r) => (
                    <li key={r}>
                      <a href={`#${r}`} className="transition-colors hover:text-cream">
                        {r}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 精选 */}
              <div>
                <h4 className="mb-4 font-[system-ui] text-xs font-semibold uppercase tracking-[0.15em] text-amber">
                  精选 / Featured
                </h4>
                <ul className="space-y-2 font-[system-ui] text-sm">
                  {["诺贝尔文学奖", "女性作家", "诗歌殿堂", "文学运动"].map((f) => (
                    <li key={f}>
                      <a href="#" className="transition-colors hover:text-cream">
                        {f}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 关于 */}
              <div>
                <h4 className="mb-4 font-[system-ui] text-xs font-semibold uppercase tracking-[0.15em] text-amber">
                  关于 / About
                </h4>
                <ul className="space-y-2 font-[system-ui] text-sm">
                  {["关于本站", "贡献者", "资料来源", "联系我们"].map((a) => (
                    <li key={a}>
                      <a href="#" className="transition-colors hover:text-cream">
                        {a}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 底栏 */}
            <div className="mt-12 border-t border-cream/10 pt-6 text-center font-[system-ui] text-xs text-cream/40">
              <p>&copy; {new Date().getFullYear()} 世界文学总站 — World Literature Hub</p>
              <p className="mt-1 hidden italic sm:block">
                &ldquo;文学是人类精神的共同财富。&rdquo;
              </p>
            </div>
          </div>
        </footer>
        <WelcomeModal />
        </SessionProvider>
      </body>
    </html>
  );
}
