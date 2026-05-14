import Link from "next/link";
import { notFound } from "next/navigation";
import { continents } from "@/lib/data";

export function generateStaticParams() {
  return continents.map((c) => ({ slug: c.slug }));
}

export default function ContinentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <ContinentContent params={params} />;
}

async function ContinentContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const continent = continents.find((c) => c.slug === slug);

  if (!continent) {
    notFound();
  }

  // 找到相邻大洲用于底部导航
  const currentIndex = continents.findIndex((c) => c.slug === slug);
  const prev = continents[(currentIndex - 1 + continents.length) % continents.length];
  const next = continents[(currentIndex + 1) % continents.length];

  return (
    <>
      {/* ===== 顶部返回栏 ===== */}
      <div className="mt-16 bg-warm-white border-b border-sand/40">
        <div className="mx-auto max-w-6xl px-5 py-3">
          <Link
            href="/#continents"
            className="inline-flex items-center gap-1.5 font-[system-ui] text-sm text-umber-light transition-colors hover:text-terracotta"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6" />
            </svg>
            返回首页 / Back to Home
          </Link>
        </div>
      </div>

      {/* ===== 大洲头部 ===== */}
      <section className={`bg-gradient-to-br ${continent.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <div className="flex flex-col items-center text-center">
            <span className="text-6xl">{continent.icon}</span>
            <span className="mt-4 font-[system-ui] text-sm font-medium uppercase tracking-[0.25em] text-amber-light/90">
              {continent.nameEn}
            </span>
            <h1 className="mt-3 font-heading-cn text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              {continent.name}
              <span className="text-amber-light">文学</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/85">
              {continent.description}
            </p>

            {/* 统计 */}
            <div className="mt-8 flex gap-8 divide-x divide-cream/20">
              {Object.entries(continent.stats).map(([key, val]) => (
                <div key={key} className="px-4 text-center">
                  <div className="font-heading-en text-3xl font-black text-amber-light">
                    {val}
                  </div>
                  <div className="mt-1 font-[system-ui] text-xs text-cream/60">
                    {key === "works" ? "作品" : key === "countries" ? "国家" : "语言"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 代表作品 ===== */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-10">
            <span className="font-[system-ui] text-xs font-medium uppercase tracking-[0.2em] text-amber-dark">
              Representative Works
            </span>
            <h2 className="mt-2 font-heading-cn text-3xl font-bold text-umber">
              代表作品
            </h2>
            <p className="mt-2 text-umber-light">
              {continent.name}文学中具有代表性的经典作品
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {continent.works.map((work) => (
              <article
                key={work.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-sand/50 bg-warm-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:flex-row"
              >
                {/* 作品封面 */}
                <div
                  className={`flex w-full items-center justify-center bg-gradient-to-br ${work.gradient} p-8 sm:w-44 sm:shrink-0`}
                >
                  <div className="text-center">
                    <span className="font-heading-cn text-xl font-bold text-white/90">
                      {work.title}
                    </span>
                    {work.titleEn && (
                      <p className="mt-1 font-heading-en text-xs italic text-white/60">
                        {work.titleEn}
                      </p>
                    )}
                  </div>
                </div>

                {/* 作品信息 */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{work.flag}</span>
                    <span className="font-[system-ui] text-xs font-medium text-amber-dark">
                      {work.country}
                    </span>
                    {work.era && (
                      <span className="font-[system-ui] text-xs text-umber-light/50">
                        · {work.era}
                      </span>
                    )}
                    {work.genre && (
                      <span className="rounded bg-parchment px-1.5 py-0.5 font-[system-ui] text-[10px] text-umber-light/70">
                        {work.genre}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2 font-heading-cn text-xl font-bold text-umber">
                    {work.title}
                  </h3>
                  <p className="mt-0.5 font-body text-sm italic text-umber-light">
                    {work.author}
                  </p>

                  <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-umber-light/80">
                    {work.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 底部导航：切换大洲 ===== */}
      <section className="bg-parchment py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-8 text-center">
            <span className="font-[system-ui] text-xs font-medium uppercase tracking-[0.2em] text-amber-dark">
              Continue Exploring
            </span>
            <h2 className="mt-2 font-heading-cn text-2xl font-bold text-umber">
              继续探索其他大洲
            </h2>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Link
              href={`/continents/${prev.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-sand/50 bg-warm-white px-5 py-2.5 font-[system-ui] text-sm text-umber-light shadow-sm transition-all hover:border-amber/30 hover:text-umber"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="m15 18-6-6 6-6" />
              </svg>
              {prev.icon} {prev.name}
            </Link>

            <Link
              href={`/continents/${next.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-sand/50 bg-warm-white px-5 py-2.5 font-[system-ui] text-sm text-umber-light shadow-sm transition-all hover:border-amber/30 hover:text-umber"
            >
              {next.name} {next.icon}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
