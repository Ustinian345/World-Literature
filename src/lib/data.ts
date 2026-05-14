export interface Work {
  title: string;
  titleEn?: string;
  author: string;
  country: string;
  flag: string;
  era?: string;
  genre?: string;
  excerpt: string;
  gradient: string;
}

export interface Continent {
  slug: string;
  name: string;
  nameEn: string;
  description: string;
  gradient: string;
  icon: string;
  stats: { works: string; countries: string; languages: string };
  works: Work[];
}

export const continents: Continent[] = [
  {
    slug: "asia",
    name: "亚洲",
    nameEn: "Asia",
    description:
      "从中国的四大名著到日本的《源氏物语》，从印度的两大史诗到波斯的鲁拜集——亚洲文学传统绵延数千年，文字间流淌着禅意、智慧与东方式的美学追求。",
    gradient: "from-red-900 via-rose-800 to-amber-600",
    icon: "🏯",
    stats: { works: "800+", countries: "48", languages: "200+" },
    works: [
      {
        title: "红楼梦",
        titleEn: "Dream of the Red Chamber",
        author: "曹雪芹",
        country: "中国",
        flag: "🇨🇳",
        era: "18世纪",
        genre: "小说",
        excerpt:
          "满纸荒唐言，一把辛酸泪。都云作者痴，谁解其中味？这部中国古典小说的巅峰之作，以贾宝玉、林黛玉的爱情悲剧为主线，描绘了一个封建家族的兴衰。",
        gradient: "from-red-800 via-red-700 to-amber-500",
      },
      {
        title: "源氏物語",
        titleEn: "The Tale of Genji",
        author: "紫式部",
        country: "日本",
        flag: "🇯🇵",
        era: "11世纪",
        genre: "小说",
        excerpt:
          "逝去之梦的踪迹，于今何在？这部世界上最早的长篇小说，以光源氏为中心，描绘了平安时代贵族的爱恋与无常。",
        gradient: "from-indigo-800 via-purple-700 to-pink-400",
      },
      {
        title: "摩诃婆罗多",
        titleEn: "Mahabharata",
        author: "毗耶娑",
        country: "印度",
        flag: "🇮🇳",
        era: "约公元前4世纪",
        genre: "史诗",
        excerpt:
          "这部世界上篇幅最长的史诗，讲述了婆罗多族后裔般度族与俱卢族之间的战争，其中包含的《薄伽梵歌》被誉为印度哲学的精髓。",
        gradient: "from-orange-700 via-orange-500 to-yellow-400",
      },
      {
        title: "鲁拜集",
        titleEn: "Rubaiyat",
        author: "欧玛尔·海亚姆",
        country: "波斯（今伊朗）",
        flag: "🇮🇷",
        era: "11-12世纪",
        genre: "诗歌",
        excerpt:
          "一串葡萄，一本诗集，一壶美酒，和你在荒野中的一隅——便是天堂。海亚姆的四行诗以醇酒与爱情为主题，却蕴含着深刻的哲学追问。",
        gradient: "from-emerald-700 via-teal-600 to-amber-400",
      },
    ],
  },
  {
    slug: "europe",
    name: "欧洲",
    nameEn: "Europe",
    description:
      "从荷马史诗到托尔斯泰的巨著，从但丁的神曲到卡夫卡的变形记——欧洲文学在两千年间塑造了现代小说、戏剧与诗歌的基本面貌，深刻影响了全球文学的发展方向。",
    gradient: "from-blue-900 via-indigo-800 to-sky-600",
    icon: "🏛️",
    stats: { works: "1,200+", countries: "44", languages: "80+" },
    works: [
      {
        title: "哈姆雷特",
        titleEn: "Hamlet",
        author: "威廉·莎士比亚",
        country: "英国",
        flag: "🇬🇧",
        era: "1603年",
        genre: "戏剧",
        excerpt:
          "生存还是毁灭，这是一个值得思考的问题。这部关于复仇、疯狂与存在困境的悲剧，被公认为英语文学中最伟大的作品之一。",
        gradient: "from-slate-800 via-blue-900 to-indigo-700",
      },
      {
        title: "追忆似水年华",
        titleEn: "In Search of Lost Time",
        author: "马塞尔·普鲁斯特",
        country: "法国",
        flag: "🇫🇷",
        era: "1913-1927",
        genre: "小说",
        excerpt:
          "玛德莱娜蛋糕浸入茶水的瞬间，整个童年从茶杯中浮现。这部七卷本巨著以意识流手法探索了时间、记忆与自我的本质。",
        gradient: "from-blue-800 via-indigo-700 to-purple-500",
      },
      {
        title: "战争与和平",
        titleEn: "War and Peace",
        author: "列夫·托尔斯泰",
        country: "俄国",
        flag: "🇷🇺",
        era: "1869年",
        genre: "小说",
        excerpt:
          "这部史诗般的巨著以拿破仑战争时期的俄国为背景，通过五个贵族家庭的故事，探讨了命运、自由意志与历史的本质。",
        gradient: "from-stone-800 via-red-900 to-amber-700",
      },
      {
        title: "浮士德",
        titleEn: "Faust",
        author: "约翰·歌德",
        country: "德国",
        flag: "🇩🇪",
        era: "1808/1832",
        genre: "诗剧",
        excerpt:
          "太初有为。这部耗费歌德六十年心血的诗剧，以浮士德博士与魔鬼梅菲斯特的赌约为线索，成为西方文学中最深刻的灵魂探索之一。",
        gradient: "from-gray-800 via-stone-700 to-amber-600",
      },
    ],
  },
  {
    slug: "africa",
    name: "非洲",
    nameEn: "Africa",
    description:
      "从尼罗河畔的古老神话到撒哈拉以南的口述史诗，非洲文学以其独特的节奏感、深沉的历史感和对殖民记忆的反思，为世界文学注入了不可替代的声音。",
    gradient: "from-green-900 via-emerald-800 to-yellow-600",
    icon: "🦁",
    stats: { works: "500+", countries: "54", languages: "150+" },
    works: [
      {
        title: "瓦解",
        titleEn: "Things Fall Apart",
        author: "钦努阿·阿契贝",
        country: "尼日利亚",
        flag: "🇳🇬",
        era: "1958年",
        genre: "小说",
        excerpt:
          "当一个人对他所生活的世界感到不满时，他必须面对改变。这部被誉为'非洲文学之父'的小说，以伊博族战士奥孔库沃的悲剧，呈现了殖民主义对非洲社会的冲击。",
        gradient: "from-green-800 via-emerald-700 to-amber-500",
      },
      {
        title: "一千零一夜",
        titleEn: "One Thousand and One Nights",
        author: "佚名（民间集体创作）",
        country: "埃及/阿拉伯",
        flag: "🇪🇬",
        era: "9-14世纪",
        genre: "民间故事集",
        excerpt:
          "山鲁佐德用一千零一个夜晚讲述的故事，不仅拯救了自己的生命，也为世界留下了最丰富的民间故事宝库。",
        gradient: "from-yellow-700 via-amber-600 to-orange-500",
      },
      {
        title: "耻",
        titleEn: "Disgrace",
        author: "J.M. 库切",
        country: "南非",
        flag: "🇿🇦",
        era: "1999年",
        genre: "小说",
        excerpt:
          "这部布克奖获奖作品以后种族隔离时代的南非为背景，探讨了权力、欲望与救赎的复杂关系。库切凭此作成为首位两度获得布克奖的作家。",
        gradient: "from-red-800 via-orange-700 to-yellow-500",
      },
      {
        title: "一粒麦种",
        titleEn: "A Grain of Wheat",
        author: "恩古吉·瓦·提安哥",
        country: "肯尼亚",
        flag: "🇰🇪",
        era: "1967年",
        genre: "小说",
        excerpt:
          "一粒麦子若不落在地里死去，仍旧是一粒；若是死了，就结出许多子粒来。这部以肯尼亚茅茅起义为背景的小说，深入探讨了独立、背叛与民族认同的主题。",
        gradient: "from-stone-700 via-green-800 to-yellow-600",
      },
    ],
  },
  {
    slug: "americas",
    name: "美洲",
    nameEn: "Americas",
    description:
      "从北美现代主义到拉美魔幻现实主义，从惠特曼的草叶集到马尔克斯的百年孤独——美洲文学以其大胆的叙事实验、文化融合和独特的想象力，不断突破文学的边界。",
    gradient: "from-red-800 via-rose-700 to-purple-600",
    icon: "🗽",
    stats: { works: "900+", countries: "35", languages: "30+" },
    works: [
      {
        title: "百年孤独",
        titleEn: "One Hundred Years of Solitude",
        author: "加西亚·马尔克斯",
        country: "哥伦比亚",
        flag: "🇨🇴",
        era: "1967年",
        genre: "小说",
        excerpt:
          "多年以后，面对行刑队，奥雷里亚诺·布恩迪亚上校将会回想起父亲带他去见识冰块的那个遥远的下午。这部魔幻现实主义巨著以布恩迪亚家族七代人的传奇，重写了拉丁美洲的历史。",
        gradient: "from-emerald-800 via-emerald-700 to-yellow-600",
      },
      {
        title: "白鲸",
        titleEn: "Moby-Dick",
        author: "赫尔曼·梅尔维尔",
        country: "美国",
        flag: "🇺🇸",
        era: "1851年",
        genre: "小说",
        excerpt:
          "叫我以实玛利。这部以捕鲸船为舞台的宏大叙事，通过亚哈船长对白色巨鲸的疯狂追猎，成为人类对抗命运的最深刻寓言。",
        gradient: "from-slate-700 via-blue-800 to-cyan-600",
      },
      {
        title: "小径分岔的花园",
        titleEn: "The Garden of Forking Paths",
        author: "豪尔赫·博尔赫斯",
        country: "阿根廷",
        flag: "🇦🇷",
        era: "1941年",
        genre: "短篇小说",
        excerpt:
          "时间永远分岔，通向无数的将来。这部短篇小说以一战期间的中国间谍为主角，将侦探故事与时间哲学的冥想融为一体。",
        gradient: "from-indigo-800 via-purple-700 to-rose-500",
      },
      {
        title: "漫歌",
        titleEn: "Canto General",
        author: "巴勃罗·聂鲁达",
        country: "智利",
        flag: "🇨🇱",
        era: "1950年",
        genre: "诗歌",
        excerpt:
          "这部气势磅礴的史诗诗集由十五部诗章组成，从美洲的创世神话写到当代工人的抗争，被誉为拉丁美洲的《草叶集》。",
        gradient: "from-red-700 via-orange-600 to-yellow-500",
      },
    ],
  },
  {
    slug: "oceania",
    name: "大洋洲",
    nameEn: "Oceania",
    description:
      "从澳洲原住民的口述传统到新西兰毛利文学，从帕特里克·怀特的内心探索到当代太平洋岛国文学——大洋洲文学承载着南太平洋独特的自然灵性、殖民历史记忆与多元文化交融。",
    gradient: "from-cyan-800 via-teal-700 to-emerald-500",
    icon: "🌊",
    stats: { works: "200+", countries: "14", languages: "50+" },
    works: [
      {
        title: "沃斯",
        titleEn: "Voss",
        author: "帕特里克·怀特",
        country: "澳大利亚",
        flag: "🇦🇺",
        era: "1957年",
        genre: "小说",
        excerpt:
          "这部以德国探险家穿越澳洲内陆为蓝本的小说，将残酷的荒野之旅与内心灵魂的探索交织在一起，为怀特赢得了1973年的诺贝尔文学奖。",
        gradient: "from-amber-700 via-orange-600 to-red-500",
      },
      {
        title: "骨头人",
        titleEn: "The Bone People",
        author: "凯丽·休姆",
        country: "新西兰",
        flag: "🇳🇿",
        era: "1984年",
        genre: "小说",
        excerpt:
          "这部融合毛利神话与现代叙事的作品，以三个孤独灵魂的相遇与救赎，获得了1985年的布克奖，成为新西兰文学的里程碑。",
        gradient: "from-emerald-700 via-teal-600 to-cyan-500",
      },
    ],
  },
];

export const featuredWorks: Work[] = [
  continents[0].works[0], // 红楼梦
  continents[3].works[0], // 百年孤独
  continents[2].works[0], // 瓦解
  continents[1].works[0], // 哈姆雷特
];

export const hotTopics = [
  { tag: "诺贝尔文学奖", href: "#", count: 12 },
  { tag: "女性作家", href: "#", count: 48 },
  { tag: "战后文学", href: "#", count: 35 },
  { tag: "诗歌复兴", href: "#", count: 22 },
  { tag: "翻译研究", href: "#", count: 18 },
  { tag: "生态文学", href: "#", count: 15 },
];
