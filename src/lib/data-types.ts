// Type stubs — 原 data.ts 中的类型定义保留（数据已迁移至数据库）

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
