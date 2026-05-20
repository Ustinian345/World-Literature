// ================================================================
// 真实图片获取引擎 — Unsplash + Pexels API
// 从书籍元数据中提取视觉关键词，搜索适合做背景的高质量真实图片
// ================================================================

import type { Work } from "./data";
import type { WorkDetail } from "./book-data";
import { getBgImage, setBgImage } from "./bg-store";
import type { BgImageRecord } from "./bg-store";

/* ========== 关键词映射 ========== */

/** 将中文文学主题/题材映射为英文视觉搜索词 */
const themeKeywordMap: Record<string, string[]> = {
  "爱情": ["romantic", "couple", "love story", "vintage romance"],
  "战争": ["battlefield", "war epic", "historic battle", "soldier"],
  "历史": ["ancient architecture", "historic", "classical era", "old world"],
  "哲学": ["contemplation", "wisdom", "ancient philosophy", "meditation"],
  "社会": ["society crowd", "city street", "social gathering", "urban life"],
  "冒险": ["adventure journey", "epic landscape", "wild nature", "exploration"],
  "心理": ["shadow solitude", "introspection", "melancholy atmosphere", "moody"],
  "魔幻": ["magical realism", "fantasy landscape", "mystical forest", "dreamlike"],
  "宗教": ["sacred temple", "spiritual", "ancient church", "monastery"],
  "自然": ["mountain landscape", "river forest", "wild nature", "pastoral"],
};

/** 根据地区补充视觉风格 */
const continentStyleMap: Record<string, string> = {
  asia: "asian traditional architecture",
  europe: "european classical architecture",
  africa: "african savanna landscape",
  americas: "american landscape",
  oceania: "pacific ocean nature",
};

/** 根据年代补充视觉风格 */
const eraKeywordMap: Record<string, string[]> = {
  "古代 (—500)": ["ancient civilization", "ruins", "antique"],
  "中世纪 (500—1500)": ["medieval castle", "gothic cathedral", "ancient manuscript"],
  "文艺复兴 (1500—1700)": ["renaissance art", "baroque palace", "classical painting"],
  "近代 (1700—1900)": ["victorian era", "19th century", "historical drama"],
  "现代 (1900—1950)": ["early 20th century", "vintage", "classic film noir"],
  "当代 (1950—)": ["contemporary abstract", "modern architecture", "dramatic light"],
};

/** 中文经典作品 → 英文视觉查询映射（精确匹配优于语义搜索） */
const workVisualQueries: Record<string, string> = {
  "dream-of-red-chamber": "ancient Chinese garden pavilion lantern rain moody",
  "journey-to-the-west": "misty mountain peaks ancient Chinese temple pilgrimage path",
  "three-kingdoms": "ancient Chinese battlefield war epic dramatic sky",
  "water-margin": "wild mountains marshland ancient Chinese fortress mist",
  "divine-comedy": "dramatic light heaven hell renaissance painting cathedral",
  "don-quixote": "Spanish windmill golden field lone knight countryside",
  "hamlet": "ancient castle misty graveyard moody dramatic atmosphere",
  "war-and-peace": "Russian winter palace ballroom aristocratic 19th century",
  "crime-and-punishment": "St Petersburg dark street winter lamp shadow",
  "hundred-years-solitude": "tropical rainforest magical realism Colombian landscape",
  "les-miserables": "19th century Paris street rain cobblestone moody",
  "moby-dick": "stormy ocean whale sea dramatic waves ship",
  "tale-of-genji": "Japanese ancient palace cherry blossom Heian era elegant",
  "pride-and-prejudice": "English countryside manor garden regency era romantic",
  "great-gatsby": "art deco jazz age 1920s party golden lights",
  "1984": "dystopian brutalist architecture surveillance dark atmosphere",
  "the-stranger": "Algerian sun beach stark blinding light Mediterranean",
  "madame-bovary": "French provincial town 19th century countryside pastoral",
  "odyssey": "ancient Greek sea ship Mediterranean voyage island",
  "iliad": "ancient Greek warrior battlefield Trojan epic dramatic sky",
  "anna-karenina": "Russian train station snow winter aristocratic ballroom",
  "wuthering-heights": "English moor stormy weather wild landscape dark sky",
  "things-fall-apart": "African village savanna Igbo culture traditional ceremony",
  "brothers-karamazov": "Russian monastery winter town Orthodox church moody",
  "ulysses": "Dublin street early 1900s vintage city literary",
};

/* ========== 关键词提取 ========== */

export interface BookSearchContext {
  workId: string;
  title: string;
  titleEn: string;
  author: string;
  country: string;
  continent: string;
  themes: string[];
  genre: string[];
  era: string;
  excerpt: string;
  plotSummary?: string;
  characterNames?: string[];
}

/** 从书籍数据构建搜索上下文 */
export function buildSearchContext(
  work: Work,
  detail?: { plotSummary?: string; characters?: Array<{ name: string }> },
): BookSearchContext {
  return {
    workId: work.id,
    title: work.title,
    titleEn: work.titleEn || work.title,
    author: work.author,
    country: work.country,
    continent: work.continent,
    themes: work.themes,
    genre: work.genre,
    era: work.era,
    excerpt: work.excerpt,
    plotSummary: detail?.plotSummary,
    characterNames: detail?.characters?.map((c) => c.name),
  };
}

/** 提取中英文混合关键词，生成最佳英文视觉搜索查询 */
export function buildSearchQuery(ctx: BookSearchContext): string {
  // 1. 优先使用手工编写的精确视觉查询
  if (workVisualQueries[ctx.workId]) {
    return workVisualQueries[ctx.workId];
  }

  const parts: string[] = [];

  // 2. 英文书名关键词（取实词）
  const titleWords = ctx.titleEn
    .replace(/[.,\/#!$%^&*;:{}=\-_`~()'"\[\]]/g, "")
    .split(/\s+/)
    .filter((w) => w.length > 3 && !["the", "and", "for", "with", "from", "into"].includes(w.toLowerCase()));
  parts.push(...titleWords.slice(0, 2));

  // 3. 主题关键词
  for (const theme of ctx.themes.slice(0, 2)) {
    const mapped = themeKeywordMap[theme];
    if (mapped) parts.push(mapped[0]);
  }

  // 4. 作者姓氏
  const authorLast = ctx.author.split(/[\s·]+/).pop() || "";
  if (authorLast.length > 1 && !/^[一-鿿]{2,}$/.test(authorLast)) {
    // 非中文名才加入
    parts.push(authorLast);
  }

  // 5. 地区风格
  const regionStyle = continentStyleMap[ctx.continent];
  if (regionStyle) parts.push(regionStyle.split(" ").slice(0, 2).join(" "));

  // 6. 年代风格
  const eraKeywords = eraKeywordMap[ctx.era];
  if (eraKeywords) parts.push(eraKeywords[0]);

  // 7. 如果搜索结果太少（少于 5 个词），从 excerpt 和 plotSummary 中提取
  if (parts.length < 4 && ctx.excerpt) {
    // 提取中文关键词的英文谐音/映射
    const excerptLower = ctx.excerpt.toLowerCase();
    const visualWords = [
      "castle", "palace", "garden", "mountain", "river", "forest",
      "battle", "journey", "love", "tragedy", "adventure", "mystery",
      "ancient", "classical", "traditional", "historic",
    ];
    for (const w of visualWords) {
      if (excerptLower.includes(w)) parts.push(w);
    }
  }

  // 去重并限制长度
  const unique = [...new Set(parts)];
  return unique.slice(0, 6).join(" ");
}

/* ========== Unsplash API ========== */

interface UnsplashPhoto {
  id: string;
  urls: { raw: string; full: string; regular: string; small: string; thumb: string };
  width: number;
  height: number;
  description: string | null;
  alt_description: string | null;
  user: { name: string; links: { html: string } };
  links: { download_location: string };
}

/** 判断图片是否适合做背景 */
function scoreImage(photo: UnsplashPhoto): number {
  let score = 0;
  const ratio = photo.width / photo.height;

  // 横版或接近正方形的构图适合做全屏背景
  if (ratio >= 1.2 && ratio <= 2.5) score += 3;
  else if (ratio >= 1.0 && ratio <= 3.0) score += 1;
  else if (ratio < 0.8) score -= 2; // 竖版不适合

  // 高分辨率加分
  if (photo.width >= 2000) score += 3;
  else if (photo.width >= 1200) score += 2;
  else if (photo.width >= 800) score += 1;

  // 描述质量 — 有描述的更好（说明图片内容明确）
  if (photo.description && photo.description.length > 10) score += 1;

  return score;
}

/** 搜索 Unsplash */
async function searchUnsplash(query: string): Promise<BgImageRecord | null> {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;
  if (!accessKey) return null;

  try {
    const url = new URL("https://api.unsplash.com/search/photos");
    url.searchParams.set("query", query);
    url.searchParams.set("orientation", "landscape");
    url.searchParams.set("per_page", "10");
    url.searchParams.set("content_filter", "high");

    const res = await fetch(url.toString(), {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
        "Accept-Version": "v1",
      },
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) return null;
    const data = await res.json();
    if (!data.results || data.results.length === 0) return null;

    const photos: UnsplashPhoto[] = data.results;
    // 按适合做背景的程度排序
    photos.sort((a, b) => scoreImage(b) - scoreImage(a));

    const best = photos[0];
    return {
      url: best.urls.regular,
      status: "completed",
      source: "unsplash",
      photographer: best.user.name,
      photographerUrl: `${best.user.links.html}?utm_source=world-literature&utm_medium=referral`,
      downloadLocation: best.links.download_location,
      fetchedAt: new Date().toISOString(),
      searchQuery: query,
    };
  } catch {
    return null;
  }
}

/* ========== Pexels API（备选） ========== */

interface PexelsPhoto {
  id: number;
  src: { original: string; large2x: string; large: string; medium: string };
  width: number;
  height: number;
  photographer: string;
  photographer_url: string;
  alt: string;
}

async function searchPexels(query: string): Promise<BgImageRecord | null> {
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) return null;

  try {
    const url = new URL("https://api.pexels.com/v1/search");
    url.searchParams.set("query", query);
    url.searchParams.set("orientation", "landscape");
    url.searchParams.set("per_page", "8");
    url.searchParams.set("size", "large");

    const res = await fetch(url.toString(), {
      headers: { Authorization: apiKey },
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) return null;
    const data = await res.json();
    if (!data.photos || data.photos.length === 0) return null;

    const photos: PexelsPhoto[] = data.photos;
    // 按构图和分辨率排序
    photos.sort((a, b) => {
      const scoreA = (a.width / a.height >= 1.2 && a.width / a.height <= 2.5 ? 3 : 1) + (a.width >= 2000 ? 3 : a.width >= 1200 ? 1 : 0);
      const scoreB = (b.width / b.height >= 1.2 && b.width / b.height <= 2.5 ? 3 : 1) + (b.width >= 2000 ? 3 : b.width >= 1200 ? 1 : 0);
      return scoreB - scoreA;
    });

    const best = photos[0];
    return {
      url: best.src.large2x || best.src.large,
      status: "completed",
      source: "pexels",
      photographer: best.photographer,
      photographerUrl: best.photographer_url,
      fetchedAt: new Date().toISOString(),
      searchQuery: query,
    };
  } catch {
    return null;
  }
}

/* ========== 主入口 ========== */

/**
 * 为指定书籍获取真实背景图片
 * 优先级：Unsplash > Pexels
 * 自动检查已有记录避免重复请求
 */
export async function fetchRealBackground(ctx: BookSearchContext): Promise<BgImageRecord | null> {
  // 1. 检查是否已有记录
  const existing = getBgImage(ctx.workId);
  if (existing && existing.status === "completed") return existing;

  // 2. 构建搜索查询
  const query = buildSearchQuery(ctx);
  console.log(`[bg-fetcher] Searching for "${ctx.title}" -> "${query}"`);

  // 3. 优先 Unsplash
  let result = await searchUnsplash(query);
  if (!result) {
    console.log(`[bg-fetcher] Unsplash failed for "${ctx.title}", trying Pexels...`);
    result = await searchPexels(query);
  }

  // 4. 如果第一次搜索无结果，尝试扩展查询（只用书名 + 作者）
  if (!result) {
    const fallbackQuery = `${ctx.titleEn} ${ctx.author.split(/[\s·]+/).pop()}`;
    console.log(`[bg-fetcher] Fallback search: "${fallbackQuery}"`);
    result = await searchUnsplash(fallbackQuery);
    if (!result) {
      result = await searchPexels(fallbackQuery);
    }
  }

  // 5. 存入 store
  if (result) {
    setBgImage(ctx.workId, result);
    console.log(`[bg-fetcher] ✓ Found image for "${ctx.title}" from ${result.source}`);
  } else {
    const failedRecord: BgImageRecord = {
      url: "",
      status: "failed",
      source: "unsplash",
      photographer: "",
      photographerUrl: "",
      fetchedAt: new Date().toISOString(),
      searchQuery: query,
    };
    setBgImage(ctx.workId, failedRecord);
    console.log(`[bg-fetcher] ✗ No image found for "${ctx.title}"`);
  }

  return result;
}

/**
 * 批量获取 — 串行执行避免 API 限流
 * @returns 成功/失败计数
 */
export async function fetchBackgroundsBatch(
  contexts: BookSearchContext[],
  onProgress?: (done: number, total: number, current: string) => void,
): Promise<{ success: number; failed: number }> {
  let success = 0;
  let failed = 0;

  for (let i = 0; i < contexts.length; i++) {
    const ctx = contexts[i];
    onProgress?.(i, contexts.length, ctx.title);

    // 跳过已完成的
    const existing = getBgImage(ctx.workId);
    if (existing && existing.status === "completed") {
      success++;
      continue;
    }

    const result = await fetchRealBackground(ctx);
    if (result) success++;
    else failed++;

    // API 限流保护 — 每个请求间隔至少 1s
    if (i < contexts.length - 1) {
      await new Promise((r) => setTimeout(r, 1100));
    }
  }

  onProgress?.(contexts.length, contexts.length, "完成");
  return { success, failed };
}
