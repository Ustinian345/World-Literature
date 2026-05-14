// ================================================================
// 世界文学总站 — 完整数据层 (100+ 部作品)
// 分类维度: 地区 · 体裁 · 题材 · 年代 · 作者
// ================================================================

/* ---------- 类型定义 ---------- */

export type Genre = "小说" | "诗歌" | "戏剧" | "史诗" | "散文/随笔" | "民间故事" | "哲学";
export type Theme = "爱情" | "战争" | "历史" | "哲学" | "社会" | "冒险" | "心理" | "魔幻" | "宗教" | "自然";
export type Era = "古代 (—500)" | "中世纪 (500—1500)" | "文艺复兴 (1500—1700)" | "近代 (1700—1900)" | "现代 (1900—1950)" | "当代 (1950—)";
export type Continent = "asia" | "europe" | "africa" | "americas" | "oceania";

export interface Work {
  id: string;
  title: string;
  titleEn: string;
  author: string;
  country: string;
  flag: string;
  continent: Continent;
  era: Era;
  genre: Genre[];
  themes: Theme[];
  excerpt: string;
  gradient: string;
  year?: number;
  featured?: boolean;
}

export interface ContinentInfo {
  slug: Continent;
  name: string;
  nameEn: string;
  description: string;
  gradient: string;
  icon: string;
  stats: { works: string; countries: string; languages: string };
}

/* ---------- 大洲信息 ---------- */

export const continents: ContinentInfo[] = [
  {
    slug: "asia", name: "亚洲", nameEn: "Asia",
    description: "从中国的四大名著到日本的《源氏物语》，从印度的两大史诗到波斯的鲁拜集——亚洲文学传统绵延数千年。",
    gradient: "from-red-900 via-rose-800 to-amber-600", icon: "🏯",
    stats: { works: "800+", countries: "48", languages: "200+" },
  },
  {
    slug: "europe", name: "欧洲", nameEn: "Europe",
    description: "从荷马史诗到托尔斯泰的巨著，欧洲文学在两千年间塑造了现代小说、戏剧与诗歌的基本面貌。",
    gradient: "from-blue-900 via-indigo-800 to-sky-600", icon: "🏛️",
    stats: { works: "1,200+", countries: "44", languages: "80+" },
  },
  {
    slug: "africa", name: "非洲", nameEn: "Africa",
    description: "从尼罗河畔的古老神话到撒哈拉以南的口述史诗，非洲文学为世界文学注入了不可替代的声音。",
    gradient: "from-green-900 via-emerald-800 to-yellow-600", icon: "🦁",
    stats: { works: "500+", countries: "54", languages: "150+" },
  },
  {
    slug: "americas", name: "美洲", nameEn: "Americas",
    description: "从北美现代主义到拉美魔幻现实主义，美洲文学以其大胆的叙事实验不断突破文学的边界。",
    gradient: "from-red-800 via-rose-700 to-purple-600", icon: "🗽",
    stats: { works: "900+", countries: "35", languages: "30+" },
  },
  {
    slug: "oceania", name: "大洋洲", nameEn: "Oceania",
    description: "从澳洲原住民口述传统到新西兰毛利文学，大洋洲文学承载着南太平洋独特的自然灵性与殖民记忆。",
    gradient: "from-cyan-800 via-teal-700 to-emerald-500", icon: "🌊",
    stats: { works: "200+", countries: "14", languages: "50+" },
  },
];

/* ---------- 完整作品数据集 (100+ 部) ---------- */

export const works: Work[] = [

  // ==================== 亚洲 (25+) ====================

  { id: "dream-of-red-chamber", title: "红楼梦", titleEn: "Dream of the Red Chamber", author: "曹雪芹", country: "中国", flag: "🇨🇳", continent: "asia", era: "近代 (1700—1900)", genre: ["小说"], themes: ["爱情", "社会", "哲学"], year: 1791, featured: true, excerpt: "满纸荒唐言，一把辛酸泪。都云作者痴，谁解其中味？中国古典小说的巅峰之作，以贾宝玉、林黛玉的爱情悲剧为主线，描绘了一个封建家族的兴衰。", gradient: "from-red-800 via-red-700 to-amber-500" },
  { id: "journey-to-the-west", title: "西游记", titleEn: "Journey to the West", author: "吴承恩", country: "中国", flag: "🇨🇳", continent: "asia", era: "文艺复兴 (1500—1700)", genre: ["小说"], themes: ["冒险", "宗教", "魔幻"], year: 1592, excerpt: "讲述了唐僧师徒四人历经九九八十一难前往西天取经的神话故事，融合了佛教、道教与民间信仰，是中国最受欢迎的神魔小说。", gradient: "from-orange-600 via-red-500 to-yellow-500" },
  { id: "three-kingdoms", title: "三国演义", titleEn: "Romance of the Three Kingdoms", author: "罗贯中", country: "中国", flag: "🇨🇳", continent: "asia", era: "文艺复兴 (1500—1700)", genre: ["小说"], themes: ["战争", "历史"], year: 1522, excerpt: "天下大势，分久必合，合久必分。描绘了东汉末年至三国时期的百年历史风云，是中国历史小说的开山之作。", gradient: "from-stone-800 via-red-900 to-amber-700" },
  { id: "water-margin", title: "水浒传", titleEn: "Water Margin", author: "施耐庵", country: "中国", flag: "🇨🇳", continent: "asia", era: "文艺复兴 (1500—1700)", genre: ["小说"], themes: ["社会", "冒险"], year: 1589, excerpt: "官逼民反，替天行道。讲述了宋江等一百零八位好汉聚义梁山的故事，是中国英雄传奇小说的典范。", gradient: "from-slate-700 via-gray-800 to-stone-600" },
  { id: "the-analects", title: "论语", titleEn: "The Analects", author: "孔子及其弟子", country: "中国", flag: "🇨🇳", continent: "asia", era: "古代 (—500)", genre: ["哲学"], themes: ["哲学", "社会"], year: -400, excerpt: "学而时习之，不亦说乎？记录了孔子及其弟子的言行，是儒家思想的核心经典，对中国及东亚文化产生了深远影响。", gradient: "from-amber-700 via-yellow-600 to-stone-400" },
  { id: "tao-te-ching", title: "道德经", titleEn: "Tao Te Ching", author: "老子", country: "中国", flag: "🇨🇳", continent: "asia", era: "古代 (—500)", genre: ["哲学"], themes: ["哲学", "自然"], year: -400, excerpt: "道可道，非常道；名可名，非常名。仅五千余言，却是道家思想的根本经典，影响了中国乃至世界的哲学与艺术。", gradient: "from-emerald-800 via-green-700 to-teal-600" },
  { id: "poems-li-bai", title: "李太白诗集", titleEn: "Poems of Li Bai", author: "李白", country: "中国", flag: "🇨🇳", continent: "asia", era: "中世纪 (500—1500)", genre: ["诗歌"], themes: ["自然", "哲学", "冒险"], year: 762, excerpt: "君不见黄河之水天上来，奔流到海不复回。唐代最伟大的浪漫主义诗人，被尊为'诗仙'，诗风豪放飘逸。", gradient: "from-blue-700 via-indigo-600 to-purple-500" },
  { id: "poems-du-fu", title: "杜工部集", titleEn: "Poems of Du Fu", author: "杜甫", country: "中国", flag: "🇨🇳", continent: "asia", era: "中世纪 (500—1500)", genre: ["诗歌"], themes: ["社会", "战争", "历史"], year: 770, excerpt: "国破山河在，城春草木深。唐代最伟大的现实主义诗人，被尊为'诗圣'，其诗深刻反映了安史之乱前后的社会现实。", gradient: "from-stone-700 via-gray-600 to-slate-500" },
  { id: "shiji", title: "史记", titleEn: "Records of the Grand Historian", author: "司马迁", country: "中国", flag: "🇨🇳", continent: "asia", era: "古代 (—500)", genre: ["散文/随笔"], themes: ["历史"], year: -91, excerpt: "究天人之际，通古今之变，成一家之言。中国第一部纪传体通史，记载了从黄帝到汉武帝的三千年历史，也是伟大的文学杰作。", gradient: "from-yellow-700 via-amber-600 to-stone-500" },
  { id: "strange-stories", title: "聊斋志异", titleEn: "Strange Stories from a Chinese Studio", author: "蒲松龄", country: "中国", flag: "🇨🇳", continent: "asia", era: "近代 (1700—1900)", genre: ["民间故事", "小说"], themes: ["魔幻", "爱情", "社会"], year: 1740, excerpt: "集中国古代志怪小说之大成，以狐仙鬼怪的故事折射人间百态，文笔简练而意境深远。", gradient: "from-purple-800 via-indigo-700 to-gray-600" },
  { id: "diary-of-madman", title: "狂人日记", titleEn: "Diary of a Madman", author: "鲁迅", country: "中国", flag: "🇨🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["小说"], themes: ["社会", "心理"], year: 1918, excerpt: "凡事总须研究，才会明白。中国现代文学的开山之作，以'狂人'的视角揭露了封建礼教的'吃人'本质，振聋发聩。", gradient: "from-gray-800 via-slate-700 to-stone-900" },
  { id: "tale-of-genji", title: "源氏物語", titleEn: "The Tale of Genji", author: "紫式部", country: "日本", flag: "🇯🇵", continent: "asia", era: "中世纪 (500—1500)", genre: ["小说"], themes: ["爱情", "心理", "社会"], year: 1021, featured: true, excerpt: "逝去之梦的踪迹，于今何在？世界上最早的长篇小说，以光源氏为中心描绘了平安时代贵族的爱恋与无常。", gradient: "from-indigo-800 via-purple-700 to-pink-400" },
  { id: "pillow-book", title: "枕草子", titleEn: "The Pillow Book", author: "清少纳言", country: "日本", flag: "🇯🇵", continent: "asia", era: "中世纪 (500—1500)", genre: ["散文/随笔"], themes: ["自然", "社会"], year: 1002, excerpt: "春天是破晓的时候最好。日本随笔文学的巅峰之作，以细腻的笔触记录了平安时代宫廷生活的点滴感悟。", gradient: "from-pink-500 via-rose-400 to-orange-300" },
  { id: "kokoro", title: "心", titleEn: "Kokoro", author: "夏目漱石", country: "日本", flag: "🇯🇵", continent: "asia", era: "现代 (1900—1950)", genre: ["小说"], themes: ["心理", "社会", "哲学"], year: 1914, excerpt: "这部以'先生'与'我'的友谊为线索的心理小说，深刻探讨了明治时代知识分子的孤独、罪恶感与现代性困境。", gradient: "from-slate-700 via-blue-800 to-indigo-900" },
  { id: "snow-country", title: "雪国", titleEn: "Snow Country", author: "川端康成", country: "日本", flag: "🇯🇵", continent: "asia", era: "现代 (1900—1950)", genre: ["小说"], themes: ["爱情", "自然"], year: 1948, excerpt: "穿过县界长长的隧道，便是雪国。川端康成凭此作获得诺贝尔文学奖，以极致的美感描绘了雪国艺伎的虚幻之恋。", gradient: "from-white via-blue-100 to-indigo-200" },
  { id: "rashomon", title: "罗生门", titleEn: "Rashomon", author: "芥川龙之介", country: "日本", flag: "🇯🇵", continent: "asia", era: "现代 (1900—1950)", genre: ["小说"], themes: ["心理", "哲学", "社会"], year: 1915, excerpt: "这部短篇小说以平安时代末期的京都为背景，以冷峻的笔触揭示了人性的黑暗与真相的相对性。", gradient: "from-gray-900 via-slate-800 to-stone-700" },
  { id: "mahabharata", title: "摩诃婆罗多", titleEn: "Mahabharata", author: "毗耶娑", country: "印度", flag: "🇮🇳", continent: "asia", era: "古代 (—500)", genre: ["史诗"], themes: ["战争", "哲学", "宗教"], year: -400, excerpt: "世界上篇幅最长的史诗，讲述了婆罗多族后裔般度族与俱卢族之间的战争，其中包含的《薄伽梵歌》被誉为印度哲学的精髓。", gradient: "from-orange-700 via-orange-500 to-yellow-400" },
  { id: "ramayana", title: "罗摩衍那", titleEn: "Ramayana", author: "蚁垤", country: "印度", flag: "🇮🇳", continent: "asia", era: "古代 (—500)", genre: ["史诗"], themes: ["爱情", "冒险", "宗教"], year: -300, excerpt: "印度两大史诗之一，讲述了罗摩王子流放、救妻的传奇故事，深刻影响了南亚与东南亚的文化。", gradient: "from-emerald-700 via-green-500 to-yellow-400" },
  { id: "shakuntala", title: "沙恭达罗", titleEn: "Shakuntala", author: "迦梨陀娑", country: "印度", flag: "🇮🇳", continent: "asia", era: "古代 (—500)", genre: ["戏剧"], themes: ["爱情", "自然"], year: 400, excerpt: "印度古典梵语文学最杰出的戏剧作品，以国王豆扇陀与净修女沙恭达罗的爱情故事，展现了印度古典美学的最高境界。", gradient: "from-amber-600 via-yellow-500 to-green-400" },
  { id: "gitanjali", title: "吉檀迦利", titleEn: "Gitanjali", author: "泰戈尔", country: "印度", flag: "🇮🇳", continent: "asia", era: "现代 (1900—1950)", genre: ["诗歌"], themes: ["哲学", "宗教", "自然"], year: 1910, excerpt: "泰戈尔凭此诗集成为第一位获得诺贝尔文学奖的亚洲人，以深邃的灵性与优美的韵律感动了世界。", gradient: "from-amber-500 via-orange-400 to-yellow-300" },
  { id: "rubaiyat", title: "鲁拜集", titleEn: "The Rubaiyat", author: "欧玛尔·海亚姆", country: "波斯（今伊朗）", flag: "🇮🇷", continent: "asia", era: "中世纪 (500—1500)", genre: ["诗歌"], themes: ["哲学", "爱情", "自然"], year: 1120, excerpt: "一串葡萄，一本诗集，一壶美酒，和你在荒野中的一隅——便是天堂。海亚姆的四行诗以醇酒与爱情为主题，蕴含着深刻的哲学追问。", gradient: "from-emerald-700 via-teal-600 to-amber-400" },
  { id: "shahnameh", title: "列王纪", titleEn: "Shahnameh", author: "菲尔多西", country: "波斯（今伊朗）", flag: "🇮🇷", continent: "asia", era: "中世纪 (500—1500)", genre: ["史诗"], themes: ["历史", "战争", "冒险"], year: 1010, excerpt: "波斯民族史诗，耗时三十年完成，以六万对句讲述了从创世到阿拉伯征服前的波斯历史与神话，是波斯语文学的基石。", gradient: "from-blue-800 via-indigo-700 to-purple-600" },
  { id: "masnavi", title: "玛斯纳维", titleEn: "Masnavi", author: "鲁米", country: "波斯（今伊朗）", flag: "🇮🇷", continent: "asia", era: "中世纪 (500—1500)", genre: ["诗歌"], themes: ["哲学", "宗教", "爱情"], year: 1273, excerpt: "苏菲主义诗人鲁米的杰作，被誉为'波斯语的古兰经'，以故事和寓言表达了对神圣之爱的追求。", gradient: "from-cyan-600 via-teal-500 to-emerald-400" },
  { id: "thousand-nights", title: "一千零一夜", titleEn: "One Thousand and One Nights", author: "佚名（民间集体创作）", country: "阿拉伯/埃及", flag: "🇪🇬", continent: "asia", era: "中世纪 (500—1500)", genre: ["民间故事", "小说"], themes: ["冒险", "爱情", "魔幻"], year: 1200, excerpt: "山鲁佐德用一千零一个夜晚讲述的故事，包括阿拉丁、辛巴达、阿里巴巴等经典，为世界留下了最丰富的民间故事宝库。", gradient: "from-yellow-700 via-amber-600 to-orange-500" },
  { id: "epic-of-gilgamesh", title: "吉尔伽美什史诗", titleEn: "The Epic of Gilgamesh", author: "佚名", country: "美索不达米亚（今伊拉克）", flag: "🇮🇶", continent: "asia", era: "古代 (—500)", genre: ["史诗"], themes: ["冒险", "哲学", "历史"], year: -1800, excerpt: "世界上现存最古老的文学作品，讲述了乌鲁克国王吉尔伽美什追寻永生的旅程，探索了友情、死亡与人类命运的永恒命题。", gradient: "from-stone-600 via-yellow-700 to-amber-600" },
  { id: "analects-of-confucius-kr", title: "春香传", titleEn: "The Tale of Chunhyang", author: "佚名", country: "朝鲜/韩国", flag: "🇰🇷", continent: "asia", era: "近代 (1700—1900)", genre: ["民间故事"], themes: ["爱情", "社会"], year: 1800, excerpt: "朝鲜半岛最著名的古典爱情故事，讲述了艺妓之女春香与贵族公子李梦龙的坚贞爱情，以盘索里说唱形式流传至今。", gradient: "from-pink-600 via-rose-500 to-red-400" },

  // ==================== 欧洲 (30+) ====================

  { id: "iliad", title: "伊利亚特", titleEn: "The Iliad", author: "荷马", country: "古希腊", flag: "🇬🇷", continent: "europe", era: "古代 (—500)", genre: ["史诗"], themes: ["战争", "历史", "冒险"], year: -750, excerpt: "阿喀琉斯的愤怒——西方文学的开端，以特洛伊战争中五十天的故事展现了英雄、荣誉与死亡。", gradient: "from-stone-600 via-amber-700 to-yellow-600" },
  { id: "odyssey", title: "奥德赛", titleEn: "The Odyssey", author: "荷马", country: "古希腊", flag: "🇬🇷", continent: "europe", era: "古代 (—500)", genre: ["史诗"], themes: ["冒险", "魔幻", "自然"], year: -700, excerpt: "特洛伊战争后，奥德修斯历经十年漂泊才返回家乡。这部关于归途的史诗成为西方文学中'旅程'叙事的原型。", gradient: "from-blue-800 via-cyan-700 to-teal-600" },
  { id: "oedipus", title: "俄狄浦斯王", titleEn: "Oedipus the King", author: "索福克勒斯", country: "古希腊", flag: "🇬🇷", continent: "europe", era: "古代 (—500)", genre: ["戏剧"], themes: ["心理", "哲学", "历史"], year: -429, excerpt: "亚里士多德认为最完美的悲剧，讲述了俄狄浦斯在不知情中弑父娶母的故事，深刻探讨了命运与自由意志。", gradient: "from-purple-900 via-stone-800 to-gray-700" },
  { id: "medea", title: "美狄亚", titleEn: "Medea", author: "欧里庇得斯", country: "古希腊", flag: "🇬🇷", continent: "europe", era: "古代 (—500)", genre: ["戏剧"], themes: ["爱情", "心理", "社会"], year: -431, excerpt: "这部关于背叛与复仇的悲剧，塑造了西方文学中最复杂的女性角色之一——为爱牺牲一切却被抛弃的美狄亚。", gradient: "from-red-900 via-rose-800 to-purple-700" },
  { id: "aeneid", title: "埃涅阿斯纪", titleEn: "The Aeneid", author: "维吉尔", country: "古罗马", flag: "🇮🇹", continent: "europe", era: "古代 (—500)", genre: ["史诗"], themes: ["战争", "历史", "冒险"], year: -19, excerpt: "罗马帝国的建国史诗，讲述了特洛伊英雄埃涅阿斯漂泊至意大利建国的历程，融合了荷马传统与罗马的民族精神。", gradient: "from-red-800 via-amber-700 to-yellow-600" },
  { id: "metamorphoses", title: "变形记", titleEn: "Metamorphoses", author: "奥维德", country: "古罗马", flag: "🇮🇹", continent: "europe", era: "古代 (—500)", genre: ["诗歌", "史诗"], themes: ["魔幻", "爱情", "哲学"], year: 8, excerpt: "以'变形'为主题串联起二百五十多个希腊罗马神话故事，成为后世无数文学艺术作品取之不尽的灵感源泉。", gradient: "from-purple-700 via-pink-600 to-amber-500" },
  { id: "divine-comedy", title: "神曲", titleEn: "The Divine Comedy", author: "但丁·阿利吉耶里", country: "意大利", flag: "🇮🇹", continent: "europe", era: "中世纪 (500—1500)", genre: ["史诗", "诗歌"], themes: ["宗教", "哲学", "爱情"], year: 1321, featured: true, excerpt: "地狱、炼狱、天堂三界的壮丽旅行，但丁以想象构建了中世纪基督教世界的全景图，标志着意大利文学的开端。", gradient: "from-red-900 via-orange-800 to-yellow-600" },
  { id: "decameron", title: "十日谈", titleEn: "The Decameron", author: "乔万尼·薄伽丘", country: "意大利", flag: "🇮🇹", continent: "europe", era: "中世纪 (500—1500)", genre: ["小说", "民间故事"], themes: ["爱情", "社会"], year: 1353, excerpt: "黑死病肆虐期间，十位青年男女十日间讲述的一百个故事，以幽默诙谐的笔调开启了欧洲短篇小说的传统。", gradient: "from-emerald-700 via-green-600 to-teal-500" },
  { id: "don-quixote", title: "堂吉诃德", titleEn: "Don Quixote", author: "米格尔·德·塞万提斯", country: "西班牙", flag: "🇪🇸", continent: "europe", era: "文艺复兴 (1500—1700)", genre: ["小说"], themes: ["冒险", "社会", "心理"], year: 1605, featured: true, excerpt: "被全球百位作家票选为'有史以来最伟大的小说'。落魄乡绅堂吉诃德带着侍从桑丘踏上骑士冒险之旅，在荒诞中闪耀着理想主义的光辉。", gradient: "from-amber-700 via-red-700 to-yellow-600" },
  { id: "hamlet", title: "哈姆雷特", titleEn: "Hamlet", author: "威廉·莎士比亚", country: "英国", flag: "🇬🇧", continent: "europe", era: "文艺复兴 (1500—1700)", genre: ["戏剧"], themes: ["心理", "哲学", "战争"], year: 1603, featured: true, excerpt: "生存还是毁灭，这是一个值得思考的问题。这部关于复仇、疯狂与存在困境的悲剧，被公认为英语文学中最伟大的作品。", gradient: "from-slate-800 via-blue-900 to-indigo-700" },
  { id: "king-lear", title: "李尔王", titleEn: "King Lear", author: "威廉·莎士比亚", country: "英国", flag: "🇬🇧", continent: "europe", era: "文艺复兴 (1500—1700)", genre: ["戏剧"], themes: ["心理", "社会", "哲学"], year: 1606, excerpt: "年迈的李尔王将王国分给虚伪的两个女儿，却被尽数背叛。莎士比亚最黑暗的悲剧，探索了人性、疯狂与救赎。", gradient: "from-gray-900 via-stone-800 to-slate-700" },
  { id: "paradise-lost", title: "失乐园", titleEn: "Paradise Lost", author: "约翰·弥尔顿", country: "英国", flag: "🇬🇧", continent: "europe", era: "近代 (1700—1900)", genre: ["史诗", "诗歌"], themes: ["宗教", "哲学"], year: 1667, excerpt: "以撒旦反叛、亚当夏娃被逐出伊甸园为主题的史诗巨著，以无韵体重新诠释了《创世纪》，探讨了自由意志与原罪的命题。", gradient: "from-red-900 via-rose-800 to-stone-700" },
  { id: "pride-and-prejudice", title: "傲慢与偏见", titleEn: "Pride and Prejudice", author: "简·奥斯汀", country: "英国", flag: "🇬🇧", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["爱情", "社会"], year: 1813, excerpt: "有钱的单身汉总要娶位太太，这是一条举世公认的真理。伊丽莎白·班纳特与达西先生的故事，是英语文学中最受欢迎的爱情小说。", gradient: "from-emerald-600 via-green-500 to-teal-400" },
  { id: "wuthering-heights", title: "呼啸山庄", titleEn: "Wuthering Heights", author: "艾米莉·勃朗特", country: "英国", flag: "🇬🇧", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["爱情", "心理", "自然"], year: 1847, excerpt: "希斯克利夫与凯瑟琳之间狂暴而毁灭性的爱情，在这部唯一的小说中，艾米莉·勃朗特创造了英语文学中最激烈的情感风暴。", gradient: "from-slate-700 via-gray-800 to-purple-900" },
  { id: "great-expectations", title: "远大前程", titleEn: "Great Expectations", author: "查尔斯·狄更斯", country: "英国", flag: "🇬🇧", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["社会", "心理", "爱情"], year: 1861, excerpt: "孤儿皮普从贫困到'绅士'的成长之路，狄更斯以精湛的叙事技巧描绘了维多利亚时代的阶级、财富与人性。", gradient: "from-blue-700 via-indigo-600 to-gray-600" },
  { id: "middlemarch", title: "米德尔马契", titleEn: "Middlemarch", author: "乔治·艾略特", country: "英国", flag: "🇬🇧", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["社会", "爱情", "哲学"], year: 1871, excerpt: "被弗吉尼亚·伍尔夫誉为'为成人所写的少数几部英国小说之一'，以小镇米德尔马契为舞台，描绘了英国外省生活的全景图。", gradient: "from-amber-600 via-yellow-500 to-green-500" },
  { id: "1984", title: "一九八四", titleEn: "Nineteen Eighty-Four", author: "乔治·奥威尔", country: "英国", flag: "🇬🇧", continent: "europe", era: "现代 (1900—1950)", genre: ["小说"], themes: ["社会", "哲学", "心理"], year: 1949, excerpt: "老大哥在看着你。这部反乌托邦经典描绘了一个极权主义统治下的恐怖世界，'奥威尔式'已成为政治话语的一部分。", gradient: "from-gray-900 via-slate-800 to-red-900" },
  { id: "ulysses", title: "尤利西斯", titleEn: "Ulysses", author: "詹姆斯·乔伊斯", country: "爱尔兰", flag: "🇮🇪", continent: "europe", era: "现代 (1900—1950)", genre: ["小说"], themes: ["心理", "社会", "哲学"], year: 1922, excerpt: "在都柏林的寻常一天中，乔伊斯以意识流手法重写了《奥德赛》，将日常生活升华为现代史诗，是20世纪最有影响力的小说。", gradient: "from-green-700 via-emerald-600 to-teal-500" },
  { id: "madame-bovary", title: "包法利夫人", titleEn: "Madame Bovary", author: "居斯塔夫·福楼拜", country: "法国", flag: "🇫🇷", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["爱情", "社会", "心理"], year: 1857, excerpt: "爱玛·包法利对浪漫生活的追求与幻灭，福楼拜以'精确的词语'开创了现代现实主义小说，每一个句子都经过精心打磨。", gradient: "from-blue-600 via-indigo-500 to-purple-400" },
  { id: "les-miserables", title: "悲惨世界", titleEn: "Les Misérables", author: "维克多·雨果", country: "法国", flag: "🇫🇷", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["社会", "历史", "哲学"], year: 1862, excerpt: "冉阿让的救赎之旅横跨法国大革命后的数十年，雨果以宏大的叙事探讨了正义、慈悲与人的尊严。", gradient: "from-blue-800 via-red-700 to-amber-600" },
  { id: "in-search-of-lost-time", title: "追忆似水年华", titleEn: "In Search of Lost Time", author: "马塞尔·普鲁斯特", country: "法国", flag: "🇫🇷", continent: "europe", era: "现代 (1900—1950)", genre: ["小说"], themes: ["心理", "哲学", "社会"], year: 1913, excerpt: "玛德莱娜蛋糕浸入茶水的瞬间，整个童年从茶杯中浮现。这部七卷本巨著以意识流手法探索了时间、记忆与自我的本质。", gradient: "from-blue-800 via-indigo-700 to-purple-500" },
  { id: "the-stranger", title: "局外人", titleEn: "The Stranger", author: "阿尔贝·加缪", country: "法国（阿尔及利亚出生）", flag: "🇫🇷", continent: "europe", era: "现代 (1900—1950)", genre: ["小说"], themes: ["哲学", "心理", "社会"], year: 1942, excerpt: "今天，妈妈死了。也许是在昨天，我不知道。默尔索的冷漠与这个世界的荒谬，使《局外人》成为存在主义文学的经典宣言。", gradient: "from-amber-500 via-yellow-400 to-gray-400" },
  { id: "the-plague", title: "鼠疫", titleEn: "The Plague", author: "阿尔贝·加缪", country: "法国", flag: "🇫🇷", continent: "europe", era: "现代 (1900—1950)", genre: ["小说"], themes: ["哲学", "社会"], year: 1947, excerpt: "以阿尔及利亚城市奥兰爆发的鼠疫为背景，加缪通过不同人物面对灾难的态度，深刻探讨了反抗、团结与人类处境。", gradient: "from-gray-700 via-slate-600 to-stone-500" },
  { id: "war-and-peace", title: "战争与和平", titleEn: "War and Peace", author: "列夫·托尔斯泰", country: "俄国", flag: "🇷🇺", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["战争", "历史", "爱情"], year: 1869, featured: true, excerpt: "这部史诗般的巨著以拿破仑战争时期的俄国为背景，通过五个贵族家庭的故事，探讨了命运、自由意志与历史的本质。", gradient: "from-stone-800 via-red-900 to-amber-700" },
  { id: "anna-karenina", title: "安娜·卡列尼娜", titleEn: "Anna Karenina", author: "列夫·托尔斯泰", country: "俄国", flag: "🇷🇺", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["爱情", "社会", "心理"], year: 1877, excerpt: "幸福的家庭都是相似的，不幸的家庭各有各的不幸。安娜的爱情悲剧与列文的灵魂探索交织成这部完美的小说。", gradient: "from-red-700 via-rose-600 to-purple-500" },
  { id: "crime-and-punishment", title: "罪与罚", titleEn: "Crime and Punishment", author: "费奥多尔·陀思妥耶夫斯基", country: "俄国", flag: "🇷🇺", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["心理", "哲学", "社会"], year: 1866, excerpt: "贫困大学生拉斯柯尼科夫杀害了放高利贷的老太婆，由此坠入痛苦的精神深渊。这部心理小说深入探索了罪与救赎的永恒命题。", gradient: "from-gray-900 via-red-900 to-stone-800" },
  { id: "brothers-karamazov", title: "卡拉马佐夫兄弟", titleEn: "The Brothers Karamazov", author: "费奥多尔·陀思妥耶夫斯基", country: "俄国", flag: "🇷🇺", continent: "europe", era: "近代 (1700—1900)", genre: ["小说"], themes: ["哲学", "宗教", "心理"], year: 1880, excerpt: "三个性格迥异的兄弟与他们的父亲之间的命运纠葛，陀思妥耶夫斯基的集大成之作，探讨了信仰、理性与自由意志的终极问题。", gradient: "from-stone-800 via-amber-900 to-red-800" },
  { id: "cherry-orchard", title: "樱桃园", titleEn: "The Cherry Orchard", author: "安东·契诃夫", country: "俄国", flag: "🇷🇺", continent: "europe", era: "现代 (1900—1950)", genre: ["戏剧"], themes: ["社会", "历史"], year: 1904, excerpt: "旧贵族庄园中的樱桃园即将被砍伐，一个时代的消逝在契诃夫笔下化为喜剧与悲剧交织的挽歌，是现代戏剧的里程碑。", gradient: "from-green-600 via-emerald-500 to-pink-300" },
  { id: "faust", title: "浮士德", titleEn: "Faust", author: "约翰·沃尔夫冈·冯·歌德", country: "德国", flag: "🇩🇪", continent: "europe", era: "近代 (1700—1900)", genre: ["戏剧", "诗歌"], themes: ["哲学", "宗教", "爱情"], year: 1832, excerpt: "太初有为。歌德耗费六十年心血的诗剧，以浮士德博士与魔鬼梅菲斯特的赌约为线索，探索了知识、权力与灵魂救赎的终极命题。", gradient: "from-gray-800 via-stone-700 to-amber-600" },
  { id: "magic-mountain", title: "魔山", titleEn: "The Magic Mountain", author: "托马斯·曼", country: "德国", flag: "🇩🇪", continent: "europe", era: "现代 (1900—1950)", genre: ["小说"], themes: ["哲学", "心理", "社会"], year: 1924, excerpt: "青年汉斯到瑞士疗养院探望表哥，原本计划停留三周，却在那里度过了七年。曼以疗养院为微缩世界，探索了一战前欧洲的精神危机。", gradient: "from-white via-blue-100 to-gray-300" },
  { id: "the-trial", title: "审判", titleEn: "The Trial", author: "弗朗茨·卡夫卡", country: "捷克（奥匈帝国）", flag: "🇨🇿", continent: "europe", era: "现代 (1900—1950)", genre: ["小说"], themes: ["哲学", "心理", "社会"], year: 1925, excerpt: "有人诬告了约瑟夫·K，因为他被逮捕了——虽然他没有做任何坏事。卡夫卡以荒诞的叙事预言了现代官僚社会中的个体困境。", gradient: "from-gray-900 via-slate-800 to-stone-900" },
  { id: "metamorphosis", title: "变形记", titleEn: "The Metamorphosis", author: "弗朗茨·卡夫卡", country: "捷克（奥匈帝国）", flag: "🇨🇿", continent: "europe", era: "现代 (1900—1950)", genre: ["小说"], themes: ["心理", "社会", "魔幻"], year: 1915, excerpt: "一天早晨，格里高尔·萨姆沙从不安的睡梦中醒来，发现自己变成了一只巨大的甲虫。中篇小说的典范，以荒诞的设定揭示了现代人的异化。", gradient: "from-green-800 via-brown-700 to-gray-700" },
  { id: "waiting-for-godot", title: "等待戈多", titleEn: "Waiting for Godot", author: "塞缪尔·贝克特", country: "爱尔兰", flag: "🇮🇪", continent: "europe", era: "当代 (1950—)", genre: ["戏剧"], themes: ["哲学", "心理"], year: 1953, excerpt: "两个流浪汉在一棵树下等待一个永远不会来的人。贝克特以极简主义的手法重新定义了戏剧，探索了存在的荒谬与等待的意义。", gradient: "from-gray-700 via-stone-600 to-slate-500" },
  { id: "dolls-house", title: "玩偶之家", titleEn: "A Doll's House", author: "亨利克·易卜生", country: "挪威", flag: "🇳🇴", continent: "europe", era: "近代 (1700—1900)", genre: ["戏剧"], themes: ["社会", "爱情", "心理"], year: 1879, excerpt: "诺拉关上家门的那一声响震动了整个欧洲。易卜生这部关于女性觉醒的社会问题剧，至今仍是关于性别平等的有力宣言。", gradient: "from-blue-500 via-indigo-400 to-purple-300" },

  // ==================== 非洲 (20+) ====================

  { id: "things-fall-apart", title: "瓦解", titleEn: "Things Fall Apart", author: "钦努阿·阿契贝", country: "尼日利亚", flag: "🇳🇬", continent: "africa", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "社会"], year: 1958, featured: true, excerpt: "当一个人对他所生活的世界感到不满时，他必须面对改变。这部被誉为'非洲文学之父'的小说以伊博族战士奥孔库沃的悲剧，呈现了殖民主义对非洲社会的冲击。", gradient: "from-green-800 via-emerald-700 to-amber-500" },
  { id: "arrow-of-god", title: "神箭", titleEn: "Arrow of God", author: "钦努阿·阿契贝", country: "尼日利亚", flag: "🇳🇬", continent: "africa", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "宗教", "社会"], year: 1964, excerpt: "伊博族祭司埃泽乌鲁在传统信仰与殖民统治之间的挣扎，阿契贝以深沉的笔触呈现了文化冲突的复杂性。", gradient: "from-yellow-700 via-orange-600 to-red-500" },
  { id: "grain-of-wheat", title: "一粒麦种", titleEn: "A Grain of Wheat", author: "恩古吉·瓦·提安哥", country: "肯尼亚", flag: "🇰🇪", continent: "africa", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "社会", "心理"], year: 1967, excerpt: "一粒麦子若不落在地里死去，仍旧是一粒；若是死了，就结出许多子粒来。以肯尼亚茅茅起义为背景，深入探讨了独立、背叛与民族认同。", gradient: "from-stone-700 via-green-800 to-yellow-600" },
  { id: "weep-not-child", title: "孩子，你别哭", titleEn: "Weep Not, Child", author: "恩古吉·瓦·提安哥", country: "肯尼亚", flag: "🇰🇪", continent: "africa", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "社会"], year: 1964, excerpt: "东非第一部英语小说，以一个男孩的视角见证了茅茅起义期间肯尼亚社会的剧烈变迁和殖民统治下的家庭命运。", gradient: "from-red-800 via-brown-600 to-amber-500" },
  { id: "season-of-migration", title: "北迁时节", titleEn: "Season of Migration to the North", author: "塔伊布·萨利赫", country: "苏丹", flag: "🇸🇩", continent: "africa", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "社会", "历史"], year: 1966, excerpt: "被阿拉伯文学研究院评为20世纪最重要的阿拉伯语小说，讲述了一位苏丹知识分子从英国留学归来后的身份危机与文化冲突。", gradient: "from-blue-700 via-indigo-600 to-purple-500" },
  { id: "so-long-a-letter", title: "长信", titleEn: "So Long a Letter", author: "玛丽亚玛·芭", country: "塞内加尔", flag: "🇸🇳", continent: "africa", era: "当代 (1950—)", genre: ["小说"], themes: ["爱情", "社会", "宗教"], year: 1981, excerpt: "以书信体形式讲述了一位塞内加尔寡妇拉玛图拉耶在丈夫去世后的心路历程，深刻探讨了非洲穆斯林女性的生存处境。", gradient: "from-purple-600 via-pink-500 to-orange-400" },
  { id: "gods-bits-of-wood", title: "神的木屑", titleEn: "God's Bits of Wood", author: "乌斯曼·塞姆班", country: "塞内加尔", flag: "🇸🇳", continent: "africa", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "历史"], year: 1960, excerpt: "'非洲电影之父'塞姆班的小说杰作，以1947年达喀尔-尼日尔铁路大罢工为背景，展现了非洲工人团结抗争的壮丽画卷。", gradient: "from-amber-600 via-orange-500 to-red-400" },
  { id: "the-beautyful-ones", title: "美丽者尚未诞生", titleEn: "The Beautyful Ones Are Not Yet Born", author: "阿伊·奎·阿尔马", country: "加纳", flag: "🇬🇭", continent: "africa", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理", "哲学"], year: 1968, excerpt: "以加纳独立后的腐败社会为背景，通过一个'无名之人'的视角，呈现了后殖民时代非洲社会的道德困境与个体抗争。", gradient: "from-gray-700 via-green-800 to-yellow-600" },
  { id: "efuru", title: "埃弗鲁", titleEn: "Efuru", author: "弗洛拉·恩瓦帕", country: "尼日利亚", flag: "🇳🇬", continent: "africa", era: "当代 (1950—)", genre: ["小说"], themes: ["爱情", "社会"], year: 1966, excerpt: "非洲女性文学的开创性作品，以伊博族女性埃弗鲁的两次婚姻为线索，呈现了传统社会中非洲女性的命运与韧性。", gradient: "from-emerald-600 via-green-500 to-teal-400" },
  { id: "joys-of-motherhood", title: "为母之乐", titleEn: "The Joys of Motherhood", author: "布奇·埃梅切塔", country: "尼日利亚", flag: "🇳🇬", continent: "africa", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "爱情", "心理"], year: 1979, excerpt: "以殖民时期拉各斯为背景，讲述了一位女性为家庭付出一切却面临传统与现代双重压力的感人故事。", gradient: "from-red-500 via-rose-400 to-pink-300" },
  { id: "disgrace", title: "耻", titleEn: "Disgrace", author: "J.M. 库切", country: "南非", flag: "🇿🇦", continent: "africa", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理", "历史"], year: 1999, excerpt: "后种族隔离时代的南非，大学教授戴维·卢里被迫面对权力、欲望与历史的复杂纠葛。库切凭此获得第二个布克奖。", gradient: "from-red-800 via-orange-700 to-yellow-500" },
  { id: "nervous-conditions", title: "不安之境", titleEn: "Nervous Conditions", author: "齐齐·丹加伦布加", country: "津巴布韦", flag: "🇿🇼", continent: "africa", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理"], year: 1988, excerpt: "以罗得西亚（今津巴布韦）为背景，讲述了一个女孩在殖民教育与传统文化之间的挣扎，是非洲女性文学的重要里程碑。", gradient: "from-green-700 via-yellow-600 to-red-500" },
  { id: "children-of-gebelawi", title: "街魂", titleEn: "Children of Gebelawi", author: "纳吉布·马哈福兹", country: "埃及", flag: "🇪🇬", continent: "africa", era: "当代 (1950—)", genre: ["小说"], themes: ["宗教", "哲学", "社会"], year: 1959, excerpt: "诺贝尔文学奖得主马哈福兹以开罗一条小巷的寓言故事，重述了人类宗教史，因被指亵渎而一度在埃及被禁。", gradient: "from-yellow-600 via-amber-500 to-brown-400" },
  { id: "houseboy", title: "家仆", titleEn: "Houseboy", author: "费迪南·奥约诺", country: "喀麦隆", flag: "🇨🇲", continent: "africa", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "历史"], year: 1956, excerpt: "以日记形式讲述了一个喀麦隆家仆图迪在白人主人世界中的遭遇，以讽刺的笔触揭示了殖民制度的荒谬与残酷。", gradient: "from-stone-600 via-green-700 to-yellow-500" },
  { id: "the-palm-wine-drinkard", title: "棕榈酒鬼", titleEn: "The Palm-Wine Drinkard", author: "阿莫斯·图图奥拉", country: "尼日利亚", flag: "🇳🇬", continent: "africa", era: "当代 (1950—)", genre: ["民间故事", "小说"], themes: ["魔幻", "冒险"], year: 1952, excerpt: "融合约鲁巴民间传说与现代英语的奇书，讲述了一位棕榈酒鬼前往亡灵之城寻找已故酒保的奇幻旅程。", gradient: "from-purple-700 via-fuchsia-600 to-pink-500" },
  { id: "mine-boy", title: "矿工", titleEn: "Mine Boy", author: "彼得·亚伯拉罕姆斯", country: "南非", flag: "🇿🇦", continent: "africa", era: "现代 (1900—1950)", genre: ["小说"], themes: ["社会", "历史", "爱情"], year: 1946, excerpt: "南非文学经典，讲述了一个从乡村来到约翰内斯堡金矿工作的年轻人，在种族隔离制度下的觉醒与抗争。", gradient: "from-gray-700 via-yellow-700 to-orange-600" },

  // ==================== 美洲 (25+) ====================

  { id: "hundred-years-solitude", title: "百年孤独", titleEn: "One Hundred Years of Solitude", author: "加西亚·马尔克斯", country: "哥伦比亚", flag: "🇨🇴", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["魔幻", "历史", "社会"], year: 1967, featured: true, excerpt: "多年以后，面对行刑队，奥雷里亚诺·布恩迪亚上校将会回想起父亲带他去见识冰块的那个遥远的下午。魔幻现实主义的巅峰之作。", gradient: "from-emerald-800 via-emerald-700 to-yellow-600" },
  { id: "love-in-cholera", title: "霍乱时期的爱情", titleEn: "Love in the Time of Cholera", author: "加西亚·马尔克斯", country: "哥伦比亚", flag: "🇨🇴", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["爱情", "社会"], year: 1985, excerpt: "弗洛伦蒂诺·阿里萨等待费尔明娜·达萨长达五十一年九个月零四天——一部关于爱情之坚持与变幻的百科全书式小说。", gradient: "from-rose-600 via-pink-500 to-red-400" },
  { id: "ficciones", title: "小径分岔的花园", titleEn: "Ficciones", author: "豪尔赫·路易斯·博尔赫斯", country: "阿根廷", flag: "🇦🇷", continent: "americas", era: "现代 (1900—1950)", genre: ["小说"], themes: ["哲学", "心理", "魔幻"], year: 1944, excerpt: "时间永远分岔，通向无数的将来。博尔赫斯的短篇小说将图书馆、镜子与迷宫化为哲学隐喻，重新定义了小说的可能性。", gradient: "from-indigo-800 via-purple-700 to-rose-500" },
  { id: "pedro-paramo", title: "佩德罗·巴拉莫", titleEn: "Pedro Páramo", author: "胡安·鲁尔福", country: "墨西哥", flag: "🇲🇽", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["魔幻", "心理", "历史"], year: 1955, excerpt: "马尔克斯说他能倒背这部小说。一个人来到鬼镇科马拉寻找父亲，却发现全镇都是亡灵——魔幻现实主义的开山之作。", gradient: "from-orange-700 via-red-600 to-purple-700" },
  { id: "house-of-spirits", title: "幽灵之家", titleEn: "The House of the Spirits", author: "伊莎贝尔·阿连德", country: "智利", flag: "🇨🇱", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["魔幻", "历史", "社会"], year: 1982, excerpt: "以特鲁埃瓦家族四代女性的命运为线索，阿连德以魔幻现实主义笔法书写了智利一个世纪的社会变迁。", gradient: "from-purple-700 via-rose-600 to-orange-500" },
  { id: "canto-general", title: "漫歌", titleEn: "Canto General", author: "巴勃罗·聂鲁达", country: "智利", flag: "🇨🇱", continent: "americas", era: "当代 (1950—)", genre: ["诗歌"], themes: ["历史", "自然", "社会"], year: 1950, excerpt: "这部气势磅礴的史诗诗集由十五部诗章组成，从美洲的创世神话写到当代工人的抗争，被誉为拉丁美洲的《草叶集》。", gradient: "from-red-700 via-orange-600 to-yellow-500" },
  { id: "hopscotch", title: "跳房子", titleEn: "Hopscotch", author: "胡里奥·科塔萨尔", country: "阿根廷", flag: "🇦🇷", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["哲学", "心理", "社会"], year: 1963, excerpt: "这部'反小说'提供了两种阅读顺序，读者可以像跳房子一样在章节间跳跃，是对传统叙事形式的彻底颠覆。", gradient: "from-blue-600 via-indigo-500 to-purple-400" },
  { id: "time-of-hero", title: "城市与狗", titleEn: "The Time of the Hero", author: "马里奥·巴尔加斯·略萨", country: "秘鲁", flag: "🇵🇪", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理", "战争"], year: 1963, excerpt: "以利马一所军事学校为背景，略萨以多视角叙事揭示了暴力体制下的人性扭曲，标志着拉美文学'爆炸'的开端。", gradient: "from-gray-800 via-stone-700 to-red-700" },
  { id: "death-of-artemio-cruz", title: "阿尔特米奥·克罗斯之死", titleEn: "The Death of Artemio Cruz", author: "卡洛斯·富恩特斯", country: "墨西哥", flag: "🇲🇽", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "社会", "心理"], year: 1962, excerpt: "一个墨西哥革命老兵兼报业大亨在临终前的意识流回顾，以第一、二、三人称交替叙事，呈现了墨西哥的现代史。", gradient: "from-red-700 via-orange-600 to-yellow-500" },
  { id: "moby-dick", title: "白鲸", titleEn: "Moby-Dick", author: "赫尔曼·梅尔维尔", country: "美国", flag: "🇺🇸", continent: "americas", era: "近代 (1700—1900)", genre: ["小说"], themes: ["冒险", "哲学", "自然"], year: 1851, excerpt: "叫我以实玛利。亚哈船长对白色巨鲸莫比·迪克的疯狂追猎，是人类对抗命运的最深刻寓言，也是美国文学的巅峰。", gradient: "from-slate-700 via-blue-800 to-cyan-600" },
  { id: "leaves-of-grass", title: "草叶集", titleEn: "Leaves of Grass", author: "沃尔特·惠特曼", country: "美国", flag: "🇺🇸", continent: "americas", era: "近代 (1700—1900)", genre: ["诗歌"], themes: ["自然", "哲学", "社会"], year: 1855, excerpt: "我歌颂我自己，我歌唱自己。惠特曼以自由诗体赞美民主、自然与人的身体，开创了美国诗歌的新纪元。", gradient: "from-green-600 via-emerald-500 to-lime-400" },
  { id: "huckleberry-finn", title: "哈克贝利·费恩历险记", titleEn: "Adventures of Huckleberry Finn", author: "马克·吐温", country: "美国", flag: "🇺🇸", continent: "americas", era: "近代 (1700—1900)", genre: ["小说"], themes: ["冒险", "社会"], year: 1884, excerpt: "海明威说：'所有现代美国文学都源自这一本书。'哈克与逃奴吉姆沿密西西比河的漂流，是自由与道德的伟大寓言。", gradient: "from-blue-600 via-cyan-500 to-teal-400" },
  { id: "great-gatsby", title: "了不起的盖茨比", titleEn: "The Great Gatsby", author: "F. 斯科特·菲茨杰拉德", country: "美国", flag: "🇺🇸", continent: "americas", era: "现代 (1900—1950)", genre: ["小说"], themes: ["爱情", "社会", "哲学"], year: 1925, excerpt: "于是我们奋力前行，逆水行舟，却不断被浪潮推回过去。盖茨比与美国梦的幻灭，是美国爵士时代的完美肖像。", gradient: "from-amber-400 via-yellow-300 to-gold-200" },
  { id: "sound-and-fury", title: "喧哗与骚动", titleEn: "The Sound and the Fury", author: "威廉·福克纳", country: "美国", flag: "🇺🇸", continent: "americas", era: "现代 (1900—1950)", genre: ["小说"], themes: ["心理", "社会", "历史"], year: 1929, excerpt: "福克纳以四个不同的叙事者讲述康普生家族的没落，其中班吉的智障视角开创了意识流小说的新可能。", gradient: "from-gray-800 via-slate-700 to-stone-600" },
  { id: "old-man-and-sea", title: "老人与海", titleEn: "The Old Man and the Sea", author: "欧内斯特·海明威", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["自然", "冒险", "哲学"], year: 1952, excerpt: "人可以被毁灭，但不能被打败。老渔夫圣地亚哥与大马林鱼的搏斗，是海明威'冰山理论'最精炼的体现。", gradient: "from-blue-700 via-cyan-600 to-teal-500" },
  { id: "beloved", title: "宠儿", titleEn: "Beloved", author: "托妮·莫里森", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "心理", "魔幻"], year: 1987, excerpt: "以一名逃亡女奴宁愿杀死女儿也不让她沦为奴隶的真实故事为蓝本，莫里森以诗意的语言书写了奴隶制的创伤记忆。", gradient: "from-purple-800 via-red-700 to-orange-600" },
  { id: "invisible-man", title: "看不见的人", titleEn: "Invisible Man", author: "拉尔夫·埃里森", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "心理", "哲学"], year: 1952, excerpt: "我是一个看不见的人——不是因为物理上的透明，而是因为人们拒绝看见我。这部关于种族与身份认同的经典，重塑了美国文学的版图。", gradient: "from-gray-900 via-slate-800 to-blue-900" },
  { id: "lolita", title: "洛丽塔", titleEn: "Lolita", author: "弗拉基米尔·纳博科夫", country: "美国（俄裔）", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "爱情", "社会"], year: 1955, excerpt: "洛丽塔，我的生命之光，我的欲念之火。纳博科夫以令人惊叹的语言之美讲述了一个禁忌的故事，是对叙事伦理的极端挑战。", gradient: "from-pink-500 via-rose-400 to-purple-300" },
  { id: "catcher-in-the-rye", title: "麦田里的守望者", titleEn: "The Catcher in the Rye", author: "J.D. 塞林格", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "社会", "哲学"], year: 1951, excerpt: "霍尔顿·考尔菲尔德在纽约街头漫游的三天，以青少年的声音对抗成人世界的虚伪，成为20世纪最受争议也最被热爱的成长小说。", gradient: "from-red-500 via-orange-400 to-amber-300" },
  { id: "to-kill-mockingbird", title: "杀死一只知更鸟", titleEn: "To Kill a Mockingbird", author: "哈珀·李", country: "美国", flag: "🇺🇸", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "历史"], year: 1960, excerpt: "你永远不可能真正了解一个人，除非你从他的角度去考虑问题。以一个女孩的视角讲述了种族偏见与正义的经典。", gradient: "from-green-700 via-emerald-600 to-teal-500" },
  { id: "dom-casmurro", title: "堂卡斯穆罗", titleEn: "Dom Casmurro", author: "马查多·德·阿西斯", country: "巴西", flag: "🇧🇷", continent: "americas", era: "近代 (1700—1900)", genre: ["小说"], themes: ["心理", "爱情", "社会"], year: 1899, excerpt: "巴西文学的最高成就之一，以第一人称叙述者本托回顾其一生，留下了文学史上最著名的悬案：卡皮图究竟有没有背叛他？", gradient: "from-green-600 via-yellow-500 to-blue-400" },
  { id: "the-devils-to-pay", title: "大荒野：魔鬼的报酬", titleEn: "The Devil to Pay in the Backlands", author: "若昂·吉马良斯·罗萨", country: "巴西", flag: "🇧🇷", continent: "americas", era: "当代 (1950—)", genre: ["小说"], themes: ["冒险", "哲学", "社会"], year: 1956, excerpt: "巴西腹地的牛仔里奥巴尔多在荒野中的冒险与心灵探索，罗萨以创造性的语言将巴西内陆的声音升华为世界文学的杰作。", gradient: "from-amber-600 via-orange-500 to-red-400" },
  { id: "labyrinth-of-solitude", title: "孤独的迷宫", titleEn: "The Labyrinth of Solitude", author: "奥克塔维奥·帕斯", country: "墨西哥", flag: "🇲🇽", continent: "americas", era: "当代 (1950—)", genre: ["散文/随笔"], themes: ["哲学", "社会", "历史"], year: 1950, excerpt: "诺贝尔奖得主帕斯对墨西哥国民性格的深刻剖析，探讨了面具、节日与死亡如何塑造了墨西哥人的灵魂。", gradient: "from-red-600 via-purple-500 to-indigo-400" },

  // ==================== 大洋洲 (8+) ====================

  { id: "voss", title: "沃斯", titleEn: "Voss", author: "帕特里克·怀特", country: "澳大利亚", flag: "🇦🇺", continent: "oceania", era: "当代 (1950—)", genre: ["小说"], themes: ["冒险", "哲学", "自然"], year: 1957, excerpt: "以德国探险家穿越澳洲内陆的真实经历为蓝本，怀特将残酷的荒野旅程与内心灵魂的探索交织在一起，为他赢得了1973年的诺贝尔文学奖。", gradient: "from-amber-700 via-orange-600 to-red-500" },
  { id: "the-bone-people", title: "骨头人", titleEn: "The Bone People", author: "凯丽·休姆", country: "新西兰", flag: "🇳🇿", continent: "oceania", era: "当代 (1950—)", genre: ["小说"], themes: ["心理", "爱情", "自然"], year: 1984, excerpt: "融合毛利神话与现代叙事的杰作，以三个孤独灵魂的相遇与救赎获得1985年布克奖，是新西兰文学的里程碑。", gradient: "from-emerald-700 via-teal-600 to-cyan-500" },
  { id: "oscar-and-lucinda", title: "奥斯卡与露辛达", titleEn: "Oscar and Lucinda", author: "彼得·凯里", country: "澳大利亚", flag: "🇦🇺", continent: "oceania", era: "当代 (1950—)", genre: ["小说"], themes: ["爱情", "冒险", "历史"], year: 1988, excerpt: "两个'赌徒'在19世纪澳洲的奇异爱情故事，以一座玻璃教堂顺流而下运输的意象闻名，获得1988年布克奖。", gradient: "from-blue-500 via-cyan-400 to-teal-300" },
  { id: "the-tree-of-man", title: "人树", titleEn: "The Tree of Man", author: "帕特里克·怀特", country: "澳大利亚", flag: "🇦🇺", continent: "oceania", era: "当代 (1950—)", genre: ["小说"], themes: ["自然", "社会", "心理"], year: 1955, excerpt: "以一对农民夫妇在澳洲荒野中开拓、建立家园的史诗故事，怀特将日常生活提升到了神话的高度。", gradient: "from-green-700 via-brown-600 to-amber-500" },
  { id: "once-were-warriors", title: "战士奇兵", titleEn: "Once Were Warriors", author: "艾伦·达夫", country: "新西兰", flag: "🇳🇿", continent: "oceania", era: "当代 (1950—)", genre: ["小说"], themes: ["社会", "历史", "心理"], year: 1990, excerpt: "以毛利家庭在城市贫民区的挣扎为背景，以震撼人心的笔触呈现了原住民在现代化进程中的伤痛与坚韧。", gradient: "from-red-800 via-black to-stone-700" },
  { id: "true-history-kelly-gang", title: "凯利帮的真实历史", titleEn: "True History of the Kelly Gang", author: "彼得·凯里", country: "澳大利亚", flag: "🇦🇺", continent: "oceania", era: "当代 (1950—)", genre: ["小说"], themes: ["历史", "社会", "冒险"], year: 2000, excerpt: "以澳洲传奇丛林大盗内德·凯利的视角书写，以大胆的叙事风格重新诠释了澳大利亚的国家神话，获得2001年布克奖。", gradient: "from-brown-700 via-red-800 to-amber-600" },
  { id: "carpentaria", title: "卡彭塔利亚湾", titleEn: "Carpentaria", author: "亚历克西斯·赖特", country: "澳大利亚", flag: "🇦🇺", continent: "oceania", era: "当代 (1950—)", genre: ["小说"], themes: ["自然", "社会", "魔幻"], year: 2006, excerpt: "以澳洲北部海湾小镇为背景，融合原住民神话与当代生态议题，赖特以独特的叙事声音创造了澳洲文学的新经典。", gradient: "from-teal-600 via-cyan-500 to-blue-400" },
];

/* ---------- 辅助函数 ---------- */

/** 按大洲筛选 */
export function getWorksByContinent(continent: Continent): Work[] {
  return works.filter((w) => w.continent === continent);
}

/** 按体裁筛选 */
export function getWorksByGenre(genre: Genre): Work[] {
  return works.filter((w) => w.genre.includes(genre));
}

/** 按题材筛选 */
export function getWorksByTheme(theme: Theme): Work[] {
  return works.filter((w) => w.themes.includes(theme));
}

/** 按年代筛选 */
export function getWorksByEra(era: Era): Work[] {
  return works.filter((w) => w.era === era);
}

/** 获取所有分类维度的值列表 */
export const allGenres: Genre[] = ["小说", "诗歌", "戏剧", "史诗", "散文/随笔", "民间故事", "哲学"];
export const allThemes: Theme[] = ["爱情", "战争", "历史", "哲学", "社会", "冒险", "心理", "魔幻", "宗教", "自然"];
export const allEras: Era[] = ["古代 (—500)", "中世纪 (500—1500)", "文艺复兴 (1500—1700)", "近代 (1700—1900)", "现代 (1900—1950)", "当代 (1950—)"];

/** 获取精选作品 */
export const featuredWorks = works.filter((w) => w.featured);

/** 热门话题 */
/* ---------- 合并扩展数据 ---------- */

import { uniqueExpandedWorks } from "./works";

/** 全部作品 = 核心106部 + 扩展数据 */
const allWorks = [...works, ...uniqueExpandedWorks.filter((ew) => !works.some((cw) => cw.id === ew.id))];

export { allWorks as allWorks };

export function getAllWorks(): Work[] {
  return allWorks;
}

export const hotTopics = [
  { tag: "诺贝尔文学奖", href: "/browse", count: works.filter((w) => ["海明威", "泰戈尔", "川端康成", "马尔克斯", "库切", "莫里森", "怀特"].some((a) => w.author.includes(a))).length },
  { tag: "女性作家", href: "/browse", count: works.filter((w) => ["紫式部", "清少纳言", "简·奥斯汀", "艾米莉·勃朗特", "乔治·艾略特", "弗洛拉·恩瓦帕", "布奇·埃梅切塔", "伊莎贝尔·阿连德", "托妮·莫里森", "凯丽·休姆"].some((a) => w.author.includes(a))).length },
  { tag: "魔幻现实主义", href: "/browse", count: works.filter((w) => w.themes.includes("魔幻")).length },
  { tag: "存在主义", href: "/browse", count: works.filter((w) => ["加缪", "萨特", "贝克特", "卡夫卡"].some((a) => w.author.includes(a))).length },
  { tag: "反乌托邦", href: "/browse", count: works.filter((w) => w.id === "1984").length },
  { tag: "史诗传统", href: "/browse", count: works.filter((w) => w.genre.includes("史诗")).length },
  { tag: "诗歌复兴", href: "/browse", count: works.filter((w) => w.genre.includes("诗歌")).length },
  { tag: "后殖民文学", href: "/browse", count: works.filter((w) => ["阿契贝", "恩古吉", "库切", "萨利赫", "阿尔马"].some((a) => w.author.includes(a))).length },
];
