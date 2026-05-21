// ================================================================
// scripts/clients/types.ts — 所有数据抓取客户端的共享类型
// ================================================================

/** 内部书名搜索配置 */
export interface BookSearchConfig {
  titleEn: string;
  authorEn: string;
  wikipediaEn?: string;
  wikipediaZh?: string;
  doubanId?: string;
  goodreadsId?: string;
  gutenbergId?: string;
  titleNative?: string;
  isbn?: string;
  baiduBaikeTitle?: string;
}

/** 抓取的文本片段 */
export interface TextFragment {
  text: string;
  sourceLabel: string;
  sourceUrl: string;
  tier: "metadata" | "reference" | "literary_analysis" | "original_text" | "fallback";
  relevance: {
    plot: number;
    characters: number;
    themes: number;
    techniques: number;
    general: number;
  };
}

/** Open Library 搜索结果 */
export interface OLSearchDoc {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  subject?: string[];
  edition_count?: number;
}

/** Open Library 作品详情 */
export interface OLWork {
  key: string;
  title: string;
  description?: string | { value: string };
  subjects?: string[];
  links?: Array<{ title: string; url: string }>;
  excerpts?: Array<{ excerpt: string; comment?: string }>;
  covers?: number[];
}

/** Wikipedia 查询结果 */
export interface WikiResult {
  extract: string;
  pageUrl: string;
  sections: Array<{ title: string; content: string }>;
  lang: string;
}

/** Google Books 查询结果 */
export interface GBVolume {
  id: string;
  volumeInfo?: {
    title?: string;
    authors?: string[];
    description?: string;
    publishedDate?: string;
    categories?: string[];
    averageRating?: number;
    pageCount?: number;
    language?: string;
  };
}

/** 查询结果统一包装 */
export interface QueryResult<T> {
  data: T;
  sourceLabel: string;
  sourceUrl: string;
  tier: "metadata" | "reference" | "literary_analysis" | "original_text";
}

/** 豆瓣书籍数据 */
export interface DoubanBookData {
  title: string;
  author: string;
  summary: string;
  rating?: number;
  tags: string[];
  sourceUrl: string;
}

/** 百度百科数据 */
export interface BaiduBaikeData {
  summary: string;
  metadata: Record<string, string>;
  sections: Array<{ title: string; content: string }>;
  sourceUrl: string;
}

/** Goodreads 数据 */
export interface GoodreadsData {
  description: string;
  genres: string[];
  rating?: number;
  sourceUrl: string;
}

/** SparkNotes/LitCharts 分析数据 */
export interface LitAnalysisData {
  summary: string;
  characters: Array<{ name: string; description: string }>;
  themes: string[];
  sourceUrl: string;
}

/** Project Gutenberg 数据 */
export interface GutenbergData {
  id: number;
  title: string;
  authors: Array<{ name: string }>;
  subjects: string[];
  sourceUrl: string;
}
