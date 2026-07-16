// ================================================================
// 大洲信息 — 静态常量（仅 5 条，无需数据库）
// ================================================================

export type Continent = "asia" | "europe" | "africa" | "americas" | "oceania";

export interface ContinentInfo {
  slug: Continent;
  name: string;
  nameEn: string;
  description: string;
  gradient: string;
  icon: string;
  stats: { works: string; countries: string; languages: string };
}

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
