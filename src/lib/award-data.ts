// ================================================================
// 世界文学总站 — 文学奖数据
// 包含国际奖项 + 中国奖项，以及作品获奖映射
// ================================================================

export interface Award {
  slug: string;
  name: string;
  nameEn: string;
  description: string;
  established: number;
  country: string;
  flag: string;
  frequency: string;
  category: "international" | "chinese";
  gradient: string;
  icon: string;
  /** 奖项官网 */
  website?: string;
  /** 简要介绍（300字左右） */
  introduction: string;
}

export interface AwardWinner {
  workId: string;
  awardSlug: string;
  year: number;
  /** 有的奖项有子类别，如雨果奖最佳长篇小说 */
  category?: string;
}

/* ========== 奖项定义 ========== */

export const awards: Award[] = [
  // ==================== 国际奖项 ====================
  {
    slug: "nobel-literature",
    name: "诺贝尔文学奖",
    nameEn: "Nobel Prize in Literature",
    description: "全球最具声望的文学奖项，授予在文学领域创作出具有理想倾向之最杰出作品的作家。",
    established: 1901,
    country: "瑞典",
    flag: "🇸🇪",
    frequency: "年度",
    category: "international",
    gradient: "from-amber-700 via-yellow-600 to-gold-400",
    icon: "🏆",
    website: "https://www.nobelprize.org/prizes/literature/",
    introduction: "诺贝尔文学奖由瑞典学院颁发，是阿尔弗雷德·诺贝尔在1895年遗嘱中设立的五大奖项之一。首届于1901年颁发。根据诺贝尔遗嘱，文学奖应授予「在文学领域中创造出具有理想主义倾向的最杰出作品的人」。\n\n百余年来，获奖者涵盖小说家、诗人、剧作家与散文家，从泰戈尔（1913，首位亚洲得主）到马尔克斯（1982）、莫言（2012，首位中国籍得主），见证了一百多年间全球文学的重大变迁。奖项不仅表彰个体的文学成就，也不断拓展着「文学」的定义边界。",
  },
  {
    slug: "booker-prize",
    name: "布克奖",
    nameEn: "Booker Prize",
    description: "英语世界最具影响力的文学奖，授予在英国或爱尔兰出版的年度最佳英语长篇小说。",
    established: 1969,
    country: "英国",
    flag: "🇬🇧",
    frequency: "年度",
    category: "international",
    gradient: "from-blue-800 via-indigo-700 to-purple-600",
    icon: "📖",
    website: "https://thebookerprizes.com/",
    introduction: "布克奖（原曼布克奖）创立于1969年，每年颁发给在英国或爱尔兰出版的最佳英语长篇小说。获奖作品往往一夜之间从文学圈走向大众视野，销量呈数十倍增长，被视为英语出版界的「圣杯」。\n\n知名获奖者包括J.M.库切（两次获奖）、石黑一雄、玛格丽特·阿特伍德、彼得·凯里、阿兰达蒂·洛伊等。布克奖以其对文学品质的坚持和对多元声音的开放，塑造了当代英语文学的经典体系。",
  },
  {
    slug: "intl-booker",
    name: "国际布克奖",
    nameEn: "International Booker Prize",
    description: "布克奖的国际版，授予翻译成英语并在英国出版的最佳外国小说，奖金由作者与译者平分。",
    established: 2005,
    country: "英国",
    flag: "🇬🇧",
    frequency: "年度",
    category: "international",
    gradient: "from-teal-700 via-cyan-600 to-blue-500",
    icon: "🌍",
    website: "https://thebookerprizes.com/international-booker-prize",
    introduction: "国际布克奖创立于2005年（2016年起改为每年颁发单部作品），表彰翻译成英语并在英国或爱尔兰出版的最佳外国小说。这一奖项强调翻译作为文学交流桥梁的重要性——每年5万英镑奖金由作者与译者平分。\n\n获奖者包括韩江（《素食者》）、奥尔加·托卡尔丘克（《云游》）等。该奖项为非英语文学的全球化传播提供了重要平台。",
  },
  {
    slug: "pulitzer-fiction",
    name: "普利策小说奖",
    nameEn: "Pulitzer Prize for Fiction",
    description: "美国最负盛名的文学奖项之一，授予上一年度由美国作家创作的杰出小说。",
    established: 1918,
    country: "美国",
    flag: "🇺🇸",
    frequency: "年度",
    category: "international",
    gradient: "from-red-800 via-rose-700 to-amber-600",
    icon: "📰",
    website: "https://www.pulitzer.org/prize-winners-by-category/219",
    introduction: "普利策奖由匈牙利裔美国报业大亨约瑟夫·普利策创立于1917年，小说奖自1918年起颁发。奖项授予上一年度由美国作家创作的、以美国生活为题材的优秀小说。\n\n著名获奖作品包括哈珀·李《杀死一只知更鸟》、托妮·莫里森《宠儿》、约翰·斯坦贝克《愤怒的葡萄》、科尔森·怀特黑德《地下铁路》等。普利策奖不仅关注文学价值，也强调作品对美国社会与文化的深度呈现。",
  },
  {
    slug: "prix-goncourt",
    name: "龚古尔文学奖",
    nameEn: "Prix Goncourt",
    description: "法国最权威的文学奖，授予年度最佳法语散文作品（以小说为主）。",
    established: 1903,
    country: "法国",
    flag: "🇫🇷",
    frequency: "年度",
    category: "international",
    gradient: "from-rose-700 via-red-600 to-orange-500",
    icon: "🥇",
    website: "https://www.academiegoncourt.com/",
    introduction: "龚古尔文学奖由埃德蒙·德·龚古尔在遗嘱中设立，以纪念其弟儒勒·德·龚古尔，1903年首次颁发。虽然是法语世界最高荣誉之一，奖金仅为象征性的10欧元——其真正价值在于获奖后数十万册的销量与永恒的文学地位。\n\n马塞尔·普鲁斯特（《在花季少女的影子下》）、西蒙娜·德·波伏娃、玛格丽特·杜拉斯等都曾获此殊荣。龚古尔学院由十位院士组成，每年11月初在巴黎德鲁昂餐厅宣布结果。",
  },
  {
    slug: "kafka-prize",
    name: "卡夫卡文学奖",
    nameEn: "Franz Kafka Prize",
    description: "以弗兰茨·卡夫卡命名的国际文学奖，表彰当代作家的杰出文学成就。",
    established: 2001,
    country: "捷克",
    flag: "🇨🇿",
    frequency: "年度",
    category: "international",
    gradient: "from-gray-900 via-slate-800 to-stone-700",
    icon: "🪲",
    website: "https://www.franzkafka-soc.cz/",
    introduction: "卡夫卡文学奖由捷克弗兰茨·卡夫卡协会和布拉格市政府于2001年共同创立，以20世纪最具影响力的德语作家弗兰茨·卡夫卡命名。奖项表彰以作品呼应卡夫卡精神——关注现代人的异化与孤独——的当代作家。\n\n获奖者包括村上春树（2006）、彼得·汉德克（2009）、玛格丽特·阿特伍德（2017）等。获奖者可获得1万美元奖金和一座卡夫卡青铜雕像。有趣的是，村上春树获奖后次年，与他齐名的捷克作家米兰·昆德拉也获此殊荣。",
  },
  {
    slug: "hugo-award",
    name: "雨果奖",
    nameEn: "Hugo Award",
    description: "全球科幻文学最高奖项，由世界科幻协会会员投票评选，涵盖长篇小说、中短篇等多个类别。",
    established: 1953,
    country: "美国",
    flag: "🇺🇸",
    frequency: "年度",
    category: "international",
    gradient: "from-purple-700 via-indigo-600 to-cyan-500",
    icon: "🚀",
    website: "https://www.thehugoawards.org/",
    introduction: "雨果奖以「科幻杂志之父」雨果·根斯巴克命名，是世界科幻协会（WSFS）每年在世界科幻大会（Worldcon）上颁发的科幻/奇幻文学最高荣誉。奖项涵盖最佳长篇小说、中篇小说、短篇小说、戏剧呈现等多个类别。\n\n经典获奖作品包括艾萨克·阿西莫夫《基地》系列、弗兰克·赫伯特《沙丘》、威廉·吉布森《神经漫游者》等。2015年，刘慈欣凭《三体》成为首位获得雨果奖最佳长篇小说奖的亚洲作家，标志着中国科幻文学的世界崛起。",
  },
  {
    slug: "cervantes-prize",
    name: "塞万提斯奖",
    nameEn: "Miguel de Cervantes Prize",
    description: "西班牙语文学世界的最高荣誉，被誉为「西班牙语文学的诺贝尔奖」。",
    established: 1976,
    country: "西班牙",
    flag: "🇪🇸",
    frequency: "年度",
    category: "international",
    gradient: "from-red-700 via-yellow-600 to-red-500",
    icon: "⚔️",
    website: "https://www.cervantes.es/",
    introduction: "塞万提斯文学奖由西班牙文化部于1976年设立，以《堂吉诃德》作者米格尔·德·塞万提斯命名，每年授予一位以西班牙语创作为人类文化遗产做出杰出贡献的作家。奖金12.5万欧元，每年4月23日（塞万提斯逝世纪念日）在阿尔卡拉大学礼堂颁发。\n\n获奖者包括豪尔赫·路易斯·博尔赫斯（1979，与赫拉尔多·迭戈共享）、奥克塔维奥·帕斯（1981）、卡洛斯·富恩特斯（1987）、马里奥·巴尔加斯·略萨（1994）等拉美文学巨匠。",
  },
  {
    slug: "akutagawa-prize",
    name: "芥川龙之介奖",
    nameEn: "Akutagawa Prize",
    description: "日本纯文学最高新人奖，以短篇小说巨匠芥川龙之介命名，发掘了无数日本文学新星。",
    established: 1935,
    country: "日本",
    flag: "🇯🇵",
    frequency: "半年一次",
    category: "international",
    gradient: "from-indigo-600 via-purple-500 to-pink-400",
    icon: "📝",
    website: "https://www.bunshun.co.jp/award/akutagawa/",
    introduction: "芥川龙之介奖（简称芥川奖）由文艺春秋社于1935年创立，以纪念日本近代短篇小说大师芥川龙之介。每年评选两次（上半期与下半期），表彰发表在各文学杂志上的优秀纯文学短中篇新人作品。获奖者将获得100万日元奖金和一块怀表。\n\n芥川奖是日本纯文学作家最重要的晋身之阶。村上春树虽多次入围却从未获奖，这本身也成为了日本文坛的传奇话题。",
  },

  // ==================== 中国奖项 ====================
  {
    slug: "maodun-prize",
    name: "茅盾文学奖",
    nameEn: "Mao Dun Literature Prize",
    description: "中国长篇小说的最高荣誉，由中国作家协会主办，每四年评选一次。",
    established: 1982,
    country: "中国",
    flag: "🇨🇳",
    frequency: "四年一次",
    category: "chinese",
    gradient: "from-red-800 via-rose-700 to-amber-500",
    icon: "🏅",
    introduction: "茅盾文学奖由中国作家协会主办，以中国现代文学巨匠茅盾（沈雁冰）命名，是根据茅盾先生遗愿将其25万元稿费捐赠而设立的。首届于1982年颁发，此后每四年评选一次，参评作品需为字数在13万以上的长篇小说。\n\n获奖作品包括路遥《平凡的世界》、陈忠实《白鹿原》、王安忆《长恨歌》、阿来《尘埃落定》、莫言《蛙》、金宇澄《繁花》等当代中国文学的标志性长篇。茅盾文学奖被誉为「中国长篇小说的最高奖项」。",
  },
  {
    slug: "luxun-prize",
    name: "鲁迅文学奖",
    nameEn: "Lu Xun Literature Prize",
    description: "中国具有最高荣誉的文学奖项之一，涵盖中篇小说、短篇小说、诗歌、散文等七个类别。",
    established: 1995,
    country: "中国",
    flag: "🇨🇳",
    frequency: "四年一次",
    category: "chinese",
    gradient: "from-gray-800 via-slate-700 to-stone-600",
    icon: "✒️",
    introduction: "鲁迅文学奖由中国作家协会主办，以中国现代文学奠基人鲁迅命名，创立于1995年。与茅盾文学奖专注于长篇小说不同，鲁迅文学奖每四年评选一次，覆盖中篇小说、短篇小说、报告文学、诗歌、散文杂文、文学理论评论和文学翻译七个类别，全面表彰各文类的杰出创作。\n\n许多当代中国重要作家都曾获得鲁迅文学奖，奖项的多元结构使其成为反映中国当代文学创作全貌的重要窗口。",
  },
  {
    slug: "laoshe-prize",
    name: "老舍文学奖",
    nameEn: "Lao She Literature Prize",
    description: "以人民艺术家老舍命名的综合性文学奖，涵盖小说、剧本及曲艺等类别。",
    established: 2000,
    country: "中国",
    flag: "🇨🇳",
    frequency: "每两至三年一次",
    category: "chinese",
    gradient: "from-teal-700 via-emerald-600 to-green-500",
    icon: "🎭",
    introduction: "老舍文学奖由北京市文联和老舍文艺基金会主办，以「人民艺术家」老舍先生命名，2000年首次颁发。该奖项设有优秀长篇小说奖、优秀中篇小说奖、优秀戏剧剧本奖和优秀曲艺作品奖等奖项，旨在鼓励关注现实生活、具有民族风格与北京特色的文学创作。\n\n老舍文学奖与茅盾文学奖、鲁迅文学奖、曹禺戏剧文学奖并称「中国四大文学奖」，但更加强调作品的戏剧性表达与京味儿文化特质。",
  },
];

import { completeAwardWinners } from "./works/award-expansion";
import { completeWinners2 } from "./works/award-expansion-2";

/* ========== 作品获奖映射（合并完整列表） ========== */

// 原有细致数据 + 扩展1 + 扩展2，合并去重
const originalWinners: AwardWinner[] = [
  // ===== 诺贝尔文学奖 =====
  { workId: "gitanjali", awardSlug: "nobel-literature", year: 1913 },
  { workId: "magic-mountain", awardSlug: "nobel-literature", year: 1929 },
  { workId: "sound-and-fury", awardSlug: "nobel-literature", year: 1949 },
  { workId: "old-man-and-sea", awardSlug: "nobel-literature", year: 1954 },
  { workId: "the-stranger", awardSlug: "nobel-literature", year: 1957 },
  { workId: "the-plague", awardSlug: "nobel-literature", year: 1957 },
  { workId: "waiting-for-godot", awardSlug: "nobel-literature", year: 1969 },
  { workId: "canto-general", awardSlug: "nobel-literature", year: 1971 },
  { workId: "voss", awardSlug: "nobel-literature", year: 1973 },
  { workId: "the-tree-of-man", awardSlug: "nobel-literature", year: 1973 },
  { workId: "hundred-years-solitude", awardSlug: "nobel-literature", year: 1982 },
  { workId: "lord-of-the-flies", awardSlug: "nobel-literature", year: 1983 },
  { workId: "children-of-gebelawi", awardSlug: "nobel-literature", year: 1988 },
  { workId: "labyrinth-of-solitude", awardSlug: "nobel-literature", year: 1990 },
  { workId: "beloved", awardSlug: "nobel-literature", year: 1993 },
  { workId: "disgrace", awardSlug: "nobel-literature", year: 2003 },
  { workId: "time-of-hero", awardSlug: "nobel-literature", year: 2010 },
  { workId: "red-sorghum", awardSlug: "nobel-literature", year: 2012 },
  { workId: "snow-country", awardSlug: "nobel-literature", year: 1968 },
  { workId: "love-in-cholera", awardSlug: "nobel-literature", year: 1982 },
  { workId: "buddenbrooks", awardSlug: "nobel-literature", year: 1929 },
  { workId: "steppenwolf", awardSlug: "nobel-literature", year: 1946 },
  { workId: "the-glass-bead-game", awardSlug: "nobel-literature", year: 1946 },
  { workId: "doctor-zhivago", awardSlug: "nobel-literature", year: 1958 },
  { workId: "one-day-ivan", awardSlug: "nobel-literature", year: 1970 },
  { workId: "the-tin-drum", awardSlug: "nobel-literature", year: 1999 },
  { workId: "blindness", awardSlug: "nobel-literature", year: 1998 },
  { workId: "quovadis", awardSlug: "nobel-literature", year: 1905 },
  { workId: "hunger", awardSlug: "nobel-literature", year: 1920 },
  { workId: "the-grapes-of-wrath", awardSlug: "nobel-literature", year: 1962 },
  { workId: "el-senor-presidente", awardSlug: "nobel-literature", year: 1967 },
  { workId: "july-people", awardSlug: "nobel-literature", year: 1991 },
  { workId: "the-interpreters", awardSlug: "nobel-literature", year: 1986 },
  { workId: "death-and-kings-horseman", awardSlug: "nobel-literature", year: 1986 },
  { workId: "cairo-trilogy", awardSlug: "nobel-literature", year: 1988 },
  { workId: "as-i-lay-dying", awardSlug: "nobel-literature", year: 1949 },

  // ===== 布克奖 =====
  { workId: "the-bone-people", awardSlug: "booker-prize", year: 1985 },
  { workId: "oscar-and-lucinda", awardSlug: "booker-prize", year: 1988 },
  { workId: "true-history-kelly-gang", awardSlug: "booker-prize", year: 2001 },
  { workId: "disgrace", awardSlug: "booker-prize", year: 1999 },
  { workId: "schindlers-ark", awardSlug: "booker-prize", year: 1982 },
  { workId: "bk-in-006", awardSlug: "booker-prize", year: 1981, category: "萨尔曼·拉什迪 · Midnight's Children" },
  { workId: "bk-in-007", awardSlug: "booker-prize", year: 1997, category: "阿兰达蒂·洛伊" },
  { workId: "bk-af-001", awardSlug: "booker-prize", year: 1991, category: "本·奥克瑞" },
  { workId: "bk-uk-008", awardSlug: "booker-prize", year: 1989, category: "石黑一雄" },
  { workId: "re-ca-01", awardSlug: "booker-prize", year: 2000, category: "玛格丽特·阿特伍德" },
  { workId: "r2-in-02", awardSlug: "booker-prize", year: 2006, category: "姬兰·德赛" },
  { workId: "re-in-06", awardSlug: "booker-prize", year: 2008, category: "阿拉文德·阿迪加" },

  // ===== 普利策小说奖 =====
  { workId: "the-grapes-of-wrath", awardSlug: "pulitzer-fiction", year: 1940 },
  { workId: "old-man-and-sea", awardSlug: "pulitzer-fiction", year: 1953 },
  { workId: "to-kill-mockingbird", awardSlug: "pulitzer-fiction", year: 1961 },
  { workId: "beloved", awardSlug: "pulitzer-fiction", year: 1988 },
  { workId: "the-color-purple", awardSlug: "pulitzer-fiction", year: 1983 },
  { workId: "re-nb-06", awardSlug: "pulitzer-fiction", year: 1957, category: "Long Day's Journey into Night" },

  // ===== 雨果奖 =====
  { workId: "x3-ch-008", awardSlug: "hugo-award", year: 2015, category: "最佳长篇小说 · 三体" },

  // ===== 塞万提斯奖 =====
  { workId: "labyrinth-of-solitude", awardSlug: "cervantes-prize", year: 1981 },
  { workId: "time-of-hero", awardSlug: "cervantes-prize", year: 1994 },
  { workId: "ficciones", awardSlug: "cervantes-prize", year: 1979 },

  // ===== 茅盾文学奖 =====
  { workId: "bk-ch-013", awardSlug: "maodun-prize", year: 1991, category: "第三届 · 平凡的世界" },
  { workId: "exp-ch-013", awardSlug: "maodun-prize", year: 1997, category: "第四届 · 白鹿原" },
  { workId: "re-ch-06", awardSlug: "maodun-prize", year: 2000, category: "第五届 · 长恨歌" },
  { workId: "re-ch-08", awardSlug: "maodun-prize", year: 2000, category: "第五届 · 尘埃落定" },
  { workId: "exp-ch-014", awardSlug: "maodun-prize", year: 2008, category: "第七届 · 秦腔" },
  { workId: "exp-ch-015", awardSlug: "maodun-prize", year: 2008, category: "第七届 · 额尔古纳河右岸" },
  { workId: "re-ch-09", awardSlug: "maodun-prize", year: 2011, category: "第八届 · 蛙" },
  { workId: "x4-ch-008", awardSlug: "maodun-prize", year: 2011, category: "第八届 · 一句顶一万句" },
  { workId: "x3-ch-007", awardSlug: "maodun-prize", year: 2015, category: "第九届 · 繁花" },
  { workId: "x5-ch-009", awardSlug: "maodun-prize", year: 2015, category: "第九届 · 黄雀记" },

  // ===== 国际布克奖 =====
  { workId: "bk-kr-003", awardSlug: "intl-booker", year: 2016, category: "The Vegetarian · 韩江" },
];

// 合并去重
const seen = new Set<string>();
const mergedWinners: AwardWinner[] = [];
for (const w of [...originalWinners, ...completeAwardWinners, ...completeWinners2]) {
  const key = `${w.awardSlug}|${w.workId}|${w.year}`;
  if (!seen.has(key)) {
    seen.add(key);
    mergedWinners.push(w);
  }
}

export const awardWinners: AwardWinner[] = mergedWinners;

/* ========== 辅助函数 ========== */

/** 按奖项 slug 获取该奖项全部获奖作品 ID 与年份 */
export function getWinnersByAward(slug: string): AwardWinner[] {
  return awardWinners.filter((w) => w.awardSlug === slug).sort((a, b) => a.year - b.year);
}

/** 获取某部作品的所有获奖记录 */
export function getAwardsByWork(workId: string): AwardWinner[] {
  return awardWinners.filter((w) => w.workId === workId);
}

/** 获取奖项定义 */
export function getAward(slug: string): Award | undefined {
  return awards.find((a) => a.slug === slug);
}

/** 按分类获取奖项 */
export function getAwardsByCategory(cat: "international" | "chinese"): Award[] {
  return awards.filter((a) => a.category === cat);
}

/** 获取每个奖项的获奖数量 */
export function getAwardStats(): Record<string, number> {
  const stats: Record<string, number> = {};
  for (const w of awardWinners) {
    stats[w.awardSlug] = (stats[w.awardSlug] || 0) + 1;
  }
  return stats;
}
