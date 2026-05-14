export default function Home() {
  return (
    <>
      {/* ===== 英雄区 ===== */}
      <section
        id="home"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 text-center"
      >
        {/* 背景渐变 */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-umber/90 via-umber/75 to-umber-light/60" />

        <div className="relative z-10 mx-auto max-w-3xl">
          {/* 标签 */}
          <span className="inline-block rounded-full border border-amber/40 px-4 py-1.5 font-[system-ui] text-xs font-medium uppercase tracking-[0.2em] text-amber-light">
            World Literature Hub
          </span>

          {/* 主标题 */}
          <h1 className="mt-6 font-heading-cn text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            世界文学
            <br />
            <span className="text-amber">总站</span>
          </h1>

          {/* 副标题 */}
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/80 sm:text-xl">
            收录全球六大洲、各语种的经典文学作品。
            <br className="hidden sm:block" />
            从亚洲的古老经卷到非洲的口述史诗，每一页都是一次跨越时空的对话。
          </p>

          {/* CTA 按钮 */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#asia"
              className="inline-flex h-12 items-center rounded-full bg-terracotta px-8 font-[system-ui] text-sm font-medium text-white transition-colors hover:bg-terracotta-dark"
            >
              开始探索
            </a>
            <a
              href="#featured"
              className="inline-flex h-12 items-center rounded-full border border-cream/30 px-8 font-[system-ui] text-sm font-medium text-cream transition-colors hover:border-cream/60 hover:bg-cream/5"
            >
              精选推荐
            </a>
          </div>
        </div>

        {/* 滚动指示器 */}
        <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 animate-bounce text-cream/50">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </section>

      {/* ===== 数据统计栏 ===== */}
      <section className="relative -mt-1 bg-umber py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-3 divide-x divide-cream/10 px-5">
          {[
            { value: "6", label: "大洲 / Continents" },
            { value: "100+", label: "国家 / Countries" },
            { value: "3,000+", label: "作品 / Works" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-heading-en text-4xl font-black text-amber sm:text-5xl">
                {stat.value}
              </span>
              <span className="font-[system-ui] text-xs text-cream/50 sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 精选推荐 ===== */}
      <section id="featured" className="bg-parchment py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 text-center">
            <span className="font-[system-ui] text-xs font-medium uppercase tracking-[0.2em] text-amber-dark">
              Curator&apos;s Picks
            </span>
            <h2 className="mt-3 font-heading-cn text-3xl font-bold text-umber sm:text-4xl">
              精选推荐
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-umber-light">
              从各大洲文学传统中精心挑选，跨越时空的经典之作
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                country: "哥伦比亚",
                title: "百年孤独",
                author: "加西亚·马尔克斯",
                excerpt: "多年以后，面对行刑队，奥雷里亚诺·布恩迪亚上校将会回想起父亲带他去见识冰块的那个遥远的下午。",
                gradient: "from-emerald-800 via-emerald-700 to-yellow-600",
              },
              {
                country: "日本",
                title: "源氏物语",
                author: "紫式部",
                excerpt: "逝去之梦的踪迹，于今何在？",
                gradient: "from-indigo-800 via-purple-700 to-pink-400",
              },
              {
                country: "尼日利亚",
                title: "瓦解",
                author: "钦努阿·阿契贝",
                excerpt: "当一个人对他所生活的世界感到不满时，他必须面对改变。",
                gradient: "from-green-800 via-emerald-700 to-amber-500",
              },
            ].map((work) => (
              <article
                key={work.title}
                className="group overflow-hidden rounded-lg border border-sand bg-warm-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                {/* 作品封面渐变 */}
                <div
                  className={`flex h-48 items-center justify-center bg-gradient-to-br ${work.gradient}`}
                >
                  <span className="font-heading-cn text-2xl font-bold text-white/80">
                    {work.title}
                  </span>
                </div>

                <div className="p-5">
                  <span className="font-[system-ui] text-xs font-medium text-amber-dark">
                    {work.country}
                  </span>
                  <h3 className="mt-1 font-heading-cn text-xl font-bold text-umber">
                    {work.title}
                  </h3>
                  <p className="mt-0.5 font-body text-base italic text-umber-light">
                    {work.author}
                  </p>
                  <blockquote className="mt-3 border-l-2 border-terracotta-light pl-3 font-body text-sm leading-relaxed text-umber-light/80">
                    {work.excerpt}
                  </blockquote>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 大洲分区 ===== */}
      {[
        {
          id: "asia",
          title: "亚洲",
          subtitle: "Asia",
          desc: "从中国的四大名著到日本的《源氏物语》，从印度的史诗到波斯的鲁拜集——亚洲文学传统绵延数千年，文字间流淌着禅意与智慧。",
          countries: [
            { name: "中国", flag: "🇨🇳", work: "红楼梦" },
            { name: "日本", flag: "🇯🇵", work: "源氏物语" },
            { name: "印度", flag: "🇮🇳", work: "摩诃婆罗多" },
            { name: "波斯", flag: "🇮🇷", work: "鲁拜集" },
          ],
        },
        {
          id: "europe",
          title: "欧洲",
          subtitle: "Europe",
          desc: "从荷马史诗到托尔斯泰的巨著，从但丁的神曲到卡夫卡的变形记——欧洲文学塑造了现代小说、戏剧与诗歌的基本面貌。",
          countries: [
            { name: "英国", flag: "🇬🇧", work: "哈姆雷特" },
            { name: "法国", flag: "🇫🇷", work: "追忆似水年华" },
            { name: "俄国", flag: "🇷🇺", work: "战争与和平" },
            { name: "德国", flag: "🇩🇪", work: "浮士德" },
          ],
        },
        {
          id: "africa",
          title: "非洲",
          subtitle: "Africa",
          desc: "从尼罗河畔的古老神话到撒哈拉以南的口述史诗，非洲文学以其独特的节奏感和深沉的历史感，为世界文学注入不可替代的声音。",
          countries: [
            { name: "尼日利亚", flag: "🇳🇬", work: "瓦解" },
            { name: "埃及", flag: "🇪🇬", work: "一千零一夜" },
            { name: "南非", flag: "🇿🇦", work: "耻" },
            { name: "肯尼亚", flag: "🇰🇪", work: "一粒麦种" },
          ],
        },
        {
          id: "americas",
          title: "美洲",
          subtitle: "Americas",
          desc: "从北美现代主义到拉美魔幻现实主义，美洲文学以其大胆的叙事实验和独特的文化融合，不断突破文学的边界。",
          countries: [
            { name: "美国", flag: "🇺🇸", work: "白鲸" },
            { name: "哥伦比亚", flag: "🇨🇴", work: "百年孤独" },
            { name: "阿根廷", flag: "🇦🇷", work: "小径分岔的花园" },
            { name: "智利", flag: "🇨🇱", work: "诗歌总集" },
          ],
        },
        {
          id: "oceania",
          title: "大洋洲",
          subtitle: "Oceania",
          desc: "从澳洲原住民的口述传统到新西兰毛利文学，大洋洲文学承载着南太平洋独特的自然灵性与殖民历史记忆。",
          countries: [
            { name: "澳大利亚", flag: "🇦🇺", work: "沃斯" },
            { name: "新西兰", flag: "🇳🇿", work: "骨头人" },
          ],
        },
      ].map((continent, i) => (
        <section
          key={continent.id}
          id={continent.id}
          className={`py-20 sm:py-28 ${i % 2 === 0 ? "bg-cream" : "bg-warm-white"}`}
        >
          <div className="mx-auto max-w-6xl px-5">
            {/* 章节标题 */}
            <div className="mb-10 text-center">
              <span className="font-[system-ui] text-xs font-medium uppercase tracking-[0.2em] text-amber-dark">
                {continent.subtitle}
              </span>
              <h2 className="mt-2 font-heading-cn text-3xl font-bold text-umber sm:text-4xl">
                {continent.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-umber-light">
                {continent.desc}
              </p>
            </div>

            {/* 作品卡片网格 */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {continent.countries.map((c) => (
                <article
                  key={c.name}
                  className="group cursor-pointer overflow-hidden rounded-lg border border-sand bg-warm-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  {/* 卡片顶部色块 */}
                  <div className="flex h-32 items-center justify-center bg-gradient-to-br from-amber-100 to-terracotta-light/30 text-4xl">
                    {c.flag}
                  </div>

                  <div className="p-4">
                    <span className="font-[system-ui] text-xs font-medium text-amber-dark">
                      {c.name}
                    </span>
                    <h3 className="mt-1 font-heading-cn text-lg font-bold text-umber">
                      {c.work}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ===== 底部 CTA ===== */}
      <section className="bg-umber py-20 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="font-heading-cn text-3xl font-bold text-cream sm:text-4xl">
            开启你的文学之旅
          </h2>
          <p className="mt-4 text-lg text-cream/60">
            探索 100+ 个国家的经典作品，发现跨越时空的智慧与美
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#asia"
              className="inline-flex h-12 items-center rounded-full bg-terracotta px-8 font-[system-ui] text-sm font-medium text-white transition-colors hover:bg-terracotta-dark"
            >
              立即探索
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
