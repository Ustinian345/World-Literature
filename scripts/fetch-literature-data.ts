#!/usr/bin/env npx tsx
// ================================================================
// 世界文学总站 — Literature Data Specialist Agent 脚本
// 用法：npx tsx scripts/fetch-literature-data.ts <bookId> [选项]
//
// 该脚本实现 DATA_COLLECTOR Agent 的全部逻辑：
//   1. API First    — Open Library → Wikipedia → Google Books
//   2. Crawl Fallback — 如果 API 数据不足，输出提示信息
//   3. Reasoning & Synthesis — 事实核查 + 结构化输出为 JSON/TS
//   4. Attribution  — 每个核心字段保留 source_url
//
// 选项：
//   --write       将结果写入 src/lib/book-data.ts
//   --force       覆盖已有数据（默认跳过已存在的条目）
//   --dry-run     仅抓取不写入（默认行为）
//   --help        显示帮助信息
//
// 内容标准（来自 Agent 定义）：
//   - 人物：全名 · 社会关系 · 核心矛盾 · 最终命运
//   - 情节：Summary（简介）+ Detailed Plot（含剧透的详尽叙述）
//   - 主题：必须引用文学评论中的关键词
//
// 运行约束：
//   - 抓取请求携带合法 User-Agent
//   - 请求频率控制 1-2 秒/次
//   - 仅在抓取到真实文本后才进行格式化，禁止无中生有
// ================================================================

import * as fs from "fs";
import * as path from "path";

// ---- 多源客户端 ----
import { queryOpenLibrary } from "./clients/open-library";
import { queryWikipedia } from "./clients/wikipedia";
import { queryGoogleBooks } from "./clients/google-books";
import { queryWikimediaSummary } from "./clients/wikimedia";
import { queryDoubanById, searchDoubanByTitle } from "./clients/douban";
import { queryBaiduBaike } from "./clients/baidu-baike";
import { queryGoodreads } from "./clients/goodreads";
import { querySparkNotes } from "./clients/sparknotes";
import { queryLitCharts } from "./clients/litcharts";
import { queryGutenberg } from "./clients/gutenberg";
import { queryBritannica } from "./clients/britannica";
import {
  FragmentCollector,
  makeFragment,
} from "./clients/fragment-collector";
import type { WorkDetailField } from "./clients/fragment-collector";
import { synthesizeFromFragments } from "./clients/fallback-synthesizer";
import { searchWeb, filterQualityResults, searchResultsToFragments } from "./clients/web-search";
import { scrapeTopResults, scrapedPagesToFragments } from "./clients/content-scraper";
import type { BookSearchConfig } from "./clients/types";
import type {
  OLSearchDoc,
  OLWork,
  GBVolume,
  DoubanBookData,
  BaiduBaikeData,
} from "./clients/types";

// ================================================================
// 类型定义（运行时副本，与 src/lib/book-data.ts 保持一致）
// ================================================================

interface SourceEntry {
  label: string;
  url: string;
  tier: "metadata" | "reference" | "literary_analysis" | "original_text" | "fallback";
  fetchedAt: string;
  contributedFields?: string[];
}

interface SourceAttribution {
  sources: SourceEntry[];
  reliability: "high" | "medium" | "fallback";
  disclaimer?: string;
  searchLinks?: Array<{ label: string; url: string }>;
}

interface WorkDetail {
  id: string;
  characters: Character[];
  plotSummary: string;
  plotNodes: PlotNode[];
  themeAnalysis: string;
  techniques: string;
  excerpts: Excerpt[];
  insights: string;
  sourceAttribution?: SourceAttribution;
  _sources?: Record<string, string>;
}

interface Character {
  name: string;
  role: string;
  description: string;
}

interface PlotNode {
  label: string;
  description: string;
}

interface Excerpt {
  quote: string;
  context: string;
}

// ================================================================
// 配置
// ================================================================

const USER_AGENT =
  "WorldLiteratureHub/1.0 (academic research project; https://github.com/world-literature)";
const RATE_LIMIT_MS = 1500;

// ================================================================
// 工具函数
// ================================================================

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ================================================================
// Rate-limited HTTP client（支持代理）
// ================================================================

let lastRequestTime = 0;
let _proxyDispatcher: unknown = undefined;
let _proxyUrlCache: string | null = null;

async function getProxyDispatcher(): Promise<unknown> {
  const proxyUrl =
    process.env.HTTPS_PROXY || process.env.HTTP_PROXY ||
    process.env.https_proxy || process.env.http_proxy || null;

  // 代理 URL 没变，直接返回缓存
  if (proxyUrl === _proxyUrlCache) return _proxyDispatcher;
  _proxyUrlCache = proxyUrl;

  if (!proxyUrl) {
    _proxyDispatcher = null;
    return null;
  }

  try {
    const undici = await import("undici");
    if (undici.ProxyAgent) {
      _proxyDispatcher = new undici.ProxyAgent({ uri: proxyUrl });
      return _proxyDispatcher;
    }
  } catch {
    // undici 不可用
  }
  _proxyDispatcher = null;
  return null;
}

/** 返回带代理支持的 fetch 函数 */
async function getFetch(): Promise<typeof globalThis.fetch> {
  const dispatcher = await getProxyDispatcher();
  if (!dispatcher) return globalThis.fetch;

  // 必须使用 undici 的 fetch——全局 fetch 不支持 dispatcher 选项
  const undici = await import("undici");
  if (undici.fetch) return undici.fetch as unknown as typeof globalThis.fetch;

  return globalThis.fetch;
}

async function rateLimitedFetch(url: string): Promise<string> {
  const now = Date.now();
  const elapsed = now - lastRequestTime;
  if (elapsed < RATE_LIMIT_MS) {
    await sleep(RATE_LIMIT_MS - elapsed);
  }
  lastRequestTime = Date.now();

  const dispatcher = await getProxyDispatcher();
  const fetchFn: typeof globalThis.fetch = dispatcher
    ? ((await import("undici")).fetch as unknown as typeof globalThis.fetch)
    : globalThis.fetch;

  const init: RequestInit & { dispatcher?: unknown } = {
    headers: {
      "User-Agent": USER_AGENT,
      Accept: "application/json",
    },
  };

  if (dispatcher) {
    init.dispatcher = dispatcher;
  }

  const resp = await fetchFn(url, init);

  if (!resp.ok) {
    throw new Error(`HTTP ${resp.status} for ${url}`);
  }

  return resp.text();
}

async function fetchJSON(url: string): Promise<unknown> {
  const text = await rateLimitedFetch(url);
  return JSON.parse(text);
}

// ================================================================
// 搜索结果映射：bookId → API 搜索词（来自 clients/types.ts）
// ================================================================

// 核心书籍搜索映射（确保高精度匹配）
const BOOK_SEARCH_MAP: Record<string, BookSearchConfig> = {
  "dream-of-red-chamber": {
    titleEn: "Dream of the Red Chamber",
    authorEn: "Cao Xueqin",
    wikipediaEn: "Dream_of_the_Red_Chamber",
    wikipediaZh: "红楼梦",
  },
  "tale-of-genji": {
    titleEn: "The Tale of Genji",
    authorEn: "Murasaki Shikibu",
    wikipediaEn: "The_Tale_of_Genji",
    wikipediaZh: "源氏物语",
  },
  "journey-to-the-west": {
    titleEn: "Journey to the West",
    authorEn: "Wu Cheng'en",
    wikipediaEn: "Journey_to_the_West",
    wikipediaZh: "西游记",
  },
  "mahabharata": {
    titleEn: "Mahabharata",
    authorEn: "Vyasa",
    wikipediaEn: "Mahabharata",
    wikipediaZh: "摩诃婆罗多",
  },
  "don-quixote": {
    titleEn: "Don Quixote",
    authorEn: "Miguel de Cervantes",
    wikipediaEn: "Don_Quixote",
    wikipediaZh: "堂吉诃德",
  },
  "hamlet": {
    titleEn: "Hamlet",
    authorEn: "William Shakespeare",
    wikipediaEn: "Hamlet",
    wikipediaZh: "哈姆雷特",
  },
  "crime-and-punishment": {
    titleEn: "Crime and Punishment",
    authorEn: "Fyodor Dostoevsky",
    wikipediaEn: "Crime_and_Punishment",
    wikipediaZh: "罪与罚",
  },
  "three-kingdoms": {
    titleEn: "Romance of the Three Kingdoms",
    authorEn: "Luo Guanzhong",
    wikipediaEn: "Romance_of_the_Three_Kingdoms",
    wikipediaZh: "三国演义",
  },
  "water-margin": {
    titleEn: "Water Margin",
    authorEn: "Shi Nai'an",
    wikipediaEn: "Water_Margin",
    wikipediaZh: "水浒传",
  },
  "iliad": {
    titleEn: "Iliad",
    authorEn: "Homer",
    wikipediaEn: "Iliad",
    wikipediaZh: "伊利亚特",
  },
  "odyssey": {
    titleEn: "Odyssey",
    authorEn: "Homer",
    wikipediaEn: "Odyssey",
    wikipediaZh: "奥德赛",
  },
  "divine-comedy": {
    titleEn: "Divine Comedy",
    authorEn: "Dante Alighieri",
    wikipediaEn: "Divine_Comedy",
    wikipediaZh: "神曲",
  },
  "faust": {
    titleEn: "Faust",
    authorEn: "Johann Wolfgang von Goethe",
    wikipediaEn: "Goethe%27s_Faust",
    wikipediaZh: "浮士德",
  },
  "madame-bovary": {
    titleEn: "Madame Bovary",
    authorEn: "Gustave Flaubert",
    wikipediaEn: "Madame_Bovary",
    wikipediaZh: "包法利夫人",
  },
  "les-miserables": {
    titleEn: "Les Miserables",
    authorEn: "Victor Hugo",
    wikipediaEn: "Les_Misérables",
    wikipediaZh: "悲惨世界",
  },
  "war-and-peace": {
    titleEn: "War and Peace",
    authorEn: "Leo Tolstoy",
    wikipediaEn: "War_and_Peace",
    wikipediaZh: "战争与和平",
  },
  "anna-karenina": {
    titleEn: "Anna Karenina",
    authorEn: "Leo Tolstoy",
    wikipediaEn: "Anna_Karenina",
    wikipediaZh: "安娜·卡列尼娜",
  },
  "brothers-karamazov": {
    titleEn: "The Brothers Karamazov",
    authorEn: "Fyodor Dostoevsky",
    wikipediaEn: "The_Brothers_Karamazov",
    wikipediaZh: "卡拉马佐夫兄弟",
  },
  "moby-dick": {
    titleEn: "Moby Dick",
    authorEn: "Herman Melville",
    wikipediaEn: "Moby-Dick",
    wikipediaZh: "白鲸记",
  },
  "great-gatsby": {
    titleEn: "The Great Gatsby",
    authorEn: "F. Scott Fitzgerald",
    wikipediaEn: "The_Great_Gatsby",
    wikipediaZh: "了不起的盖茨比",
  },
  "pride-and-prejudice": {
    titleEn: "Pride and Prejudice",
    authorEn: "Jane Austen",
    wikipediaEn: "Pride_and_Prejudice",
    wikipediaZh: "傲慢与偏见",
  },
  "wuthering-heights": {
    titleEn: "Wuthering Heights",
    authorEn: "Emily Bronte",
    wikipediaEn: "Wuthering_Heights",
    wikipediaZh: "呼啸山庄",
  },
  "1984": {
    titleEn: "Nineteen Eighty-Four",
    authorEn: "George Orwell",
    wikipediaEn: "Nineteen_Eighty-Four",
    wikipediaZh: "一九八四",
  },
  "ulysses": {
    titleEn: "Ulysses",
    authorEn: "James Joyce",
    wikipediaEn: "Ulysses_(novel)",
    wikipediaZh: "尤利西斯",
  },
  "old-man-and-sea": {
    titleEn: "The Old Man and the Sea",
    authorEn: "Ernest Hemingway",
    wikipediaEn: "The_Old_Man_and_the_Sea",
    wikipediaZh: "老人与海",
  },
  "the-stranger": {
    titleEn: "The Stranger",
    authorEn: "Albert Camus",
    wikipediaEn: "The_Stranger_(Camus_novel)",
    wikipediaZh: "局外人",
  },
  "things-fall-apart": {
    titleEn: "Things Fall Apart",
    authorEn: "Chinua Achebe",
    wikipediaEn: "Things_Fall_Apart",
    wikipediaZh: "瓦解",
  },
  "oedipus": {
    titleEn: "Oedipus Rex",
    authorEn: "Sophocles",
    wikipediaEn: "Oedipus_Rex",
    wikipediaZh: "俄狄浦斯王",
  },
  "the-trial": {
    titleEn: "The Trial",
    authorEn: "Franz Kafka",
    wikipediaEn: "The_Trial",
    wikipediaZh: "审判",
  },
  "metamorphosis": {
    titleEn: "The Metamorphosis",
    authorEn: "Franz Kafka",
    wikipediaEn: "The_Metamorphosis",
    wikipediaZh: "变形记",
  },
  "waiting-for-godot": {
    titleEn: "Waiting for Godot",
    authorEn: "Samuel Beckett",
    wikipediaEn: "Waiting_for_Godot",
    wikipediaZh: "等待戈多",
  },
  "ramayana": {
    titleEn: "Ramayana",
    authorEn: "Valmiki",
    wikipediaEn: "Ramayana",
    wikipediaZh: "罗摩衍那",
  },
  "rubaiyat": {
    titleEn: "Rubaiyat of Omar Khayyam",
    authorEn: "Omar Khayyam",
    wikipediaEn: "Rubaiyat_of_Omar_Khayyam",
    wikipediaZh: "鲁拜集",
  },
  "epic-of-gilgamesh": {
    titleEn: "Epic of Gilgamesh",
    authorEn: "",
    wikipediaEn: "Epic_of_Gilgamesh",
    wikipediaZh: "吉尔伽美什史诗",
  },
  "thousand-nights": {
    titleEn: "One Thousand and One Nights",
    authorEn: "",
    wikipediaEn: "One_Thousand_and_One_Nights",
    wikipediaZh: "一千零一夜",
  },
  "shahnameh": {
    titleEn: "Shahnameh",
    authorEn: "Ferdowsi",
    wikipediaEn: "Shahnameh",
    wikipediaZh: "列王纪",
  },
  "paradise-lost": {
    titleEn: "Paradise Lost",
    authorEn: "John Milton",
    wikipediaEn: "Paradise_Lost",
    wikipediaZh: "失乐园",
  },
  "king-lear": {
    titleEn: "King Lear",
    authorEn: "William Shakespeare",
    wikipediaEn: "King_Lear",
    wikipediaZh: "李尔王",
  },
  "great-expectations": {
    titleEn: "Great Expectations",
    authorEn: "Charles Dickens",
    wikipediaEn: "Great_Expectations",
    wikipediaZh: "远大前程",
  },
  "middlemarch": {
    titleEn: "Middlemarch",
    authorEn: "George Eliot",
    wikipediaEn: "Middlemarch",
    wikipediaZh: "米德尔马契",
  },
  "sound-and-fury": {
    titleEn: "The Sound and the Fury",
    authorEn: "William Faulkner",
    wikipediaEn: "The_Sound_and_the_Fury",
    wikipediaZh: "喧哗与骚动",
  },
  "lolita": {
    titleEn: "Lolita",
    authorEn: "Vladimir Nabokov",
    wikipediaEn: "Lolita",
    wikipediaZh: "洛丽塔",
  },
  "catcher-in-the-rye": {
    titleEn: "The Catcher in the Rye",
    authorEn: "J. D. Salinger",
    wikipediaEn: "The_Catcher_in_the_Rye",
    wikipediaZh: "麦田里的守望者",
  },
  "to-kill-mockingbird": {
    titleEn: "To Kill a Mockingbird",
    authorEn: "Harper Lee",
    wikipediaEn: "To_Kill_a_Mockingbird",
    wikipediaZh: "杀死一只知更鸟",
  },
  "beloved": {
    titleEn: "Beloved",
    authorEn: "Toni Morrison",
    wikipediaEn: "Beloved_(novel)",
    wikipediaZh: "宠儿",
  },
  "invisible-man": {
    titleEn: "Invisible Man",
    authorEn: "Ralph Ellison",
    wikipediaEn: "Invisible_Man",
    wikipediaZh: "看不见的人",
  },
  "love-in-cholera": {
    titleEn: "Love in the Time of Cholera",
    authorEn: "Gabriel Garcia Marquez",
    wikipediaEn: "Love_in_the_Time_of_Cholera",
    wikipediaZh: "霍乱时期的爱情",
  },
  "house-of-spirits": {
    titleEn: "The House of the Spirits",
    authorEn: "Isabel Allende",
    wikipediaEn: "The_House_of_the_Spirits",
    wikipediaZh: "幽灵之家",
  },
  "pedro-paramo": {
    titleEn: "Pedro Paramo",
    authorEn: "Juan Rulfo",
    wikipediaEn: "Pedro_Páramo",
    wikipediaZh: "佩德罗·巴拉莫",
  },
  "aeneid": {
    titleEn: "Aeneid",
    authorEn: "Virgil",
    wikipediaEn: "Aeneid",
    wikipediaZh: "埃涅阿斯纪",
  },
  "medea": {
    titleEn: "Medea",
    authorEn: "Euripides",
    wikipediaEn: "Medea_(play)",
    wikipediaZh: "美狄亚",
  },
  "decameron": {
    titleEn: "The Decameron",
    authorEn: "Giovanni Boccaccio",
    wikipediaEn: "The_Decameron",
    wikipediaZh: "十日谈",
  },
  "the-plague": {
    titleEn: "The Plague",
    authorEn: "Albert Camus",
    wikipediaEn: "The_Plague",
    wikipediaZh: "鼠疫",
  },
  "cherry-orchard": {
    titleEn: "The Cherry Orchard",
    authorEn: "Anton Chekhov",
    wikipediaEn: "The_Cherry_Orchard",
    wikipediaZh: "樱桃园",
  },
  "magic-mountain": {
    titleEn: "The Magic Mountain",
    authorEn: "Thomas Mann",
    wikipediaEn: "The_Magic_Mountain",
    wikipediaZh: "魔山",
  },
  "dolls-house": {
    titleEn: "A Doll's House",
    authorEn: "Henrik Ibsen",
    wikipediaEn: "A_Doll%27s_House",
    wikipediaZh: "玩偶之家",
  },
  "huckleberry-finn": {
    titleEn: "Adventures of Huckleberry Finn",
    authorEn: "Mark Twain",
    wikipediaEn: "Adventures_of_Huckleberry_Finn",
    wikipediaZh: "哈克贝利·费恩历险记",
  },
  "leaves-of-grass": {
    titleEn: "Leaves of Grass",
    authorEn: "Walt Whitman",
    wikipediaEn: "Leaves_of_Grass",
    wikipediaZh: "草叶集",
  },
  "ficciones": {
    titleEn: "Ficciones",
    authorEn: "Jorge Luis Borges",
    wikipediaEn: "Ficciones",
    wikipediaZh: "虚构集",
  },
  "dom-casmurro": {
    titleEn: "Dom Casmurro",
    authorEn: "Machado de Assis",
    wikipediaEn: "Dom_Casmurro",
    wikipediaZh: "堂卡斯穆罗",
  },
  "kokoro": {
    titleEn: "Kokoro",
    authorEn: "Natsume Soseki",
    wikipediaEn: "Kokoro",
    wikipediaZh: "心",
  },
  "snow-country": {
    titleEn: "Snow Country",
    authorEn: "Yasunari Kawabata",
    wikipediaEn: "Snow_Country",
    wikipediaZh: "雪国",
  },
  "rashomon": {
    titleEn: "Rashomon",
    authorEn: "Ryunosuke Akutagawa",
    wikipediaEn: "Rashōmon_(short_story)",
    wikipediaZh: "罗生门",
  },
  "shakuntala": {
    titleEn: "Shakuntala",
    authorEn: "Kalidasa",
    wikipediaEn: "Shakuntala_(play)",
    wikipediaZh: "沙恭达罗",
  },
  "gitanjali": {
    titleEn: "Gitanjali",
    authorEn: "Rabindranath Tagore",
    wikipediaEn: "Gitanjali",
    wikipediaZh: "吉檀迦利",
  },
  "disgrace": {
    titleEn: "Disgrace",
    authorEn: "J. M. Coetzee",
    wikipediaEn: "Disgrace",
    wikipediaZh: "耻",
  },
  "arrow-of-god": {
    titleEn: "Arrow of God",
    authorEn: "Chinua Achebe",
    wikipediaEn: "Arrow_of_God",
    wikipediaZh: "神箭",
  },
  "grain-of-wheat": {
    titleEn: "A Grain of Wheat",
    authorEn: "Ngũgĩ wa Thiong'o",
    wikipediaEn: "A_Grain_of_Wheat",
  },
  "voss": {
    titleEn: "Voss",
    authorEn: "Patrick White",
    wikipediaEn: "Voss_(novel)",
  },
  "oscar-and-lucinda": {
    titleEn: "Oscar and Lucinda",
    authorEn: "Peter Carey",
    wikipediaEn: "Oscar_and_Lucinda",
  },
  "true-history-kelly-gang": {
    titleEn: "True History of the Kelly Gang",
    authorEn: "Peter Carey",
    wikipediaEn: "True_History_of_the_Kelly_Gang",
  },
  "the-bone-people": {
    titleEn: "The Bone People",
    authorEn: "Keri Hulme",
    wikipediaEn: "The_Bone_People",
  },
  "carpentaria": {
    titleEn: "Carpentaria",
    authorEn: "Alexis Wright",
    wikipediaEn: "Carpentaria_(novel)",
  },

  // === 中国哲学/经典 ===
  "the-analects": {
    titleEn: "Analects",
    authorEn: "Confucius",
    wikipediaEn: "Analects",
    wikipediaZh: "论语",
  },
  "tao-te-ching": {
    titleEn: "Tao Te Ching",
    authorEn: "Laozi",
    wikipediaEn: "Tao_Te_Ching",
    wikipediaZh: "道德经",
  },
  "poems-li-bai": {
    titleEn: "Li Bai",
    authorEn: "Li Bai",
    wikipediaEn: "Li_Bai",
    wikipediaZh: "李白",
  },
  "poems-du-fu": {
    titleEn: "Du Fu",
    authorEn: "Du Fu",
    wikipediaEn: "Du_Fu",
    wikipediaZh: "杜甫",
  },
  "shiji": {
    titleEn: "Records of the Grand Historian",
    authorEn: "Sima Qian",
    wikipediaEn: "Records_of_the_Grand_Historian",
    wikipediaZh: "史记",
  },
  "strange-stories": {
    titleEn: "Strange Tales from a Chinese Studio",
    authorEn: "Pu Songling",
    wikipediaEn: "Strange_Tales_from_a_Chinese_Studio",
    wikipediaZh: "聊斋志异",
  },
  "diary-of-madman": {
    titleEn: "A Madman's Diary",
    authorEn: "Lu Xun",
    wikipediaEn: "A_Madman%27s_Diary",
    wikipediaZh: "狂人日记",
  },
  "pillow-book": {
    titleEn: "The Pillow Book",
    authorEn: "Sei Shonagon",
    wikipediaEn: "The_Pillow_Book",
    wikipediaZh: "枕草子",
  },
  "masnavi": {
    titleEn: "Masnavi",
    authorEn: "Rumi",
    wikipediaEn: "Masnavi",
  },
  "analects-of-confucius-kr": {
    titleEn: "Chunhyangjeon",
    authorEn: "",
    wikipediaEn: "Chunhyangjeon",
    wikipediaZh: "春香传",
  },
  "metamorphoses": {
    titleEn: "Metamorphoses",
    authorEn: "Ovid",
    wikipediaEn: "Metamorphoses",
    wikipediaZh: "变形记",
  },
  "in-search-of-lost-time": {
    titleEn: "In Search of Lost Time",
    authorEn: "Marcel Proust",
    wikipediaEn: "In_Search_of_Lost_Time",
    wikipediaZh: "追忆似水年华",
  },
  "gods-bits-of-wood": {
    titleEn: "God's Bits of Wood",
    authorEn: "Ousmane Sembène",
    wikipediaEn: "God%27s_Bits_of_Wood",
  },
  "children-of-gebelawi": {
    titleEn: "Children of Gebelawi",
    authorEn: "Naguib Mahfouz",
    wikipediaEn: "Children_of_Gebelawi",
  },
  "efuru": {
    titleEn: "Efuru",
    authorEn: "Flora Nwapa",
    wikipediaEn: "Efuru",
  },
  "joys-of-motherhood": {
    titleEn: "The Joys of Motherhood",
    authorEn: "Buchi Emecheta",
    wikipediaEn: "The_Joys_of_Motherhood",
  },
  "weep-not-child": {
    titleEn: "Weep Not, Child",
    authorEn: "Ngũgĩ wa Thiong'o",
    wikipediaEn: "Weep_Not,_Child",
  },
  "season-of-migration": {
    titleEn: "Season of Migration to the North",
    authorEn: "Tayeb Salih",
    wikipediaEn: "Season_of_Migration_to_the_North",
  },
  "the-beautyful-ones": {
    titleEn: "The Beautyful Ones Are Not Yet Born",
    authorEn: "Ayi Kwei Armah",
    wikipediaEn: "The_Beautyful_Ones_Are_Not_Yet_Born",
  },
  "nervous-conditions": {
    titleEn: "Nervous Conditions",
    authorEn: "Tsitsi Dangarembga",
    wikipediaEn: "Nervous_Conditions",
  },
  "houseboy": {
    titleEn: "Houseboy",
    authorEn: "Ferdinand Oyono",
    wikipediaEn: "Houseboy_(novel)",
  },
  "the-palm-wine-drinkard": {
    titleEn: "The Palm-Wine Drinkard",
    authorEn: "Amos Tutuola",
    wikipediaEn: "The_Palm-Wine_Drinkard",
  },
  "mine-boy": {
    titleEn: "Mine Boy",
    authorEn: "Peter Abrahams",
    wikipediaEn: "Mine_Boy",
  },
  "so-long-a-letter": {
    titleEn: "So Long a Letter",
    authorEn: "Mariama Bâ",
    wikipediaEn: "So_Long_a_Letter",
  },
  "canto-general": {
    titleEn: "Canto General",
    authorEn: "Pablo Neruda",
    wikipediaEn: "Canto_General",
  },
  "hopscotch": {
    titleEn: "Hopscotch",
    authorEn: "Julio Cortazar",
    wikipediaEn: "Hopscotch_(Cortázar_novel)",
  },
  "time-of-hero": {
    titleEn: "The Time of the Hero",
    authorEn: "Mario Vargas Llosa",
    wikipediaEn: "The_Time_of_the_Hero",
  },
  "death-of-artemio-cruz": {
    titleEn: "The Death of Artemio Cruz",
    authorEn: "Carlos Fuentes",
    wikipediaEn: "The_Death_of_Artemio_Cruz",
  },
  "labyrinth-of-solitude": {
    titleEn: "The Labyrinth of Solitude",
    authorEn: "Octavio Paz",
    wikipediaEn: "The_Labyrinth_of_Solitude",
  },
  "the-devils-to-pay": {
    titleEn: "The Devil to Pay in the Backlands",
    authorEn: "João Guimarães Rosa",
    wikipediaEn: "The_Devil_to_Pay_in_the_Backlands",
  },
  "the-tree-of-man": {
    titleEn: "The Tree of Man",
    authorEn: "Patrick White",
    wikipediaEn: "The_Tree_of_Man",
  },
  "once-were-warriors": {
    titleEn: "Once Were Warriors",
    authorEn: "Alan Duff",
    wikipediaEn: "Once_Were_Warriors",
  },
};

// ================================================================
// 数据质量评分 & 合成
// ================================================================

const HIGH_THRESHOLD = 10;
const SUFFICIENT_THRESHOLD = 5;

function scoreWorkDetail(detail: WorkDetail): number {
  let score = 0;
  if (detail.characters.length >= 3) score += 3;
  else if (detail.characters.length >= 1) score += 1;
  if (detail.plotSummary.length >= 500) score += 3;
  else if (detail.plotSummary.length >= 200) score += 2;
  else if (detail.plotSummary.length >= 80) score += 1;
  if (detail.plotNodes.length >= 4) score += 2;
  else if (detail.plotNodes.length >= 2) score += 1;
  if (detail.themeAnalysis.length >= 300) score += 2;
  else if (detail.themeAnalysis.length >= 100) score += 1;
  if (detail.techniques.length >= 200) score += 2;
  else if (detail.techniques.length >= 80) score += 1;
  if (detail.excerpts.length >= 2) score += 2;
  else if (detail.excerpts.length >= 1) score += 1;
  if (detail.insights.length >= 200) score += 2;
  else if (detail.insights.length >= 80) score += 1;
  return score;
}

function extractFirstParagraph(text: string, maxLen = 500): string {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLen) return cleaned;
  const truncated = cleaned.slice(0, maxLen);
  const lastPeriod = truncated.lastIndexOf(".");
  if (lastPeriod > maxLen * 0.6) return truncated.slice(0, lastPeriod + 1);
  return truncated + "...";
}

function escapeTSString(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

/** 从段落中提取前几句 */
function firstSentences(text: string, n: number): string {
  const sentences = text.split(/(?<=[.!?。！？])\s+/);
  return sentences.slice(0, n).join(" ");
}

// ================================================================
// 6-Tier 抓取流水线
// ================================================================

interface PipelineResult {
  detail: WorkDetail;
  searchConfig: BookSearchConfig | null;
  summary: {
    tiersAttempted: number[];
    tiersSucceeded: number[];
    totalSources: number;
    reliability: "high" | "medium" | "fallback";
    score: number;
  };
}

async function executePipeline(
  bookId: string,
  searchConfig: BookSearchConfig,
  bookTitle: string,
  bookAuthor: string,
  verbose = true,
  forceAllTiers = false,
  enableFullSearch = false
): Promise<PipelineResult> {
  const collector = new FragmentCollector();
  const sources: SourceEntry[] = [];
  const now = () => new Date().toISOString();
  const tiersAttempted: number[] = [];
  const tiersSucceeded: number[] = [];

  function addSource(
    label: string,
    url: string,
    tier: SourceEntry["tier"],
    text: string,
    contributed?: string[]
  ) {
    sources.push({ label, url, tier, fetchedAt: now(), contributedFields: contributed });
    collector.add(
      makeFragment(text, label, url, tier, contributed as WorkDetailField[] | undefined)
    );
  }

  const log = verbose ? console.log : (..._a: unknown[]) => {};

  // ---- Tier 1: Metadata (并行) ----
  log("  [Tier 1] Open Library + Google Books...");
  tiersAttempted.push(1);

  const [olResult, gbResult] = await Promise.allSettled([
    queryOpenLibrary(searchConfig.titleEn, searchConfig.authorEn || undefined),
    queryGoogleBooks(searchConfig.titleEn, searchConfig.authorEn || undefined),
  ]);

  if (olResult.status === "fulfilled" && olResult.value) {
    const { work, sourceUrl } = olResult.value;
    const desc = typeof work.description === "string" ? work.description : work.description?.value || "";
    const subjectText = (work.subjects || []).join("; ");
    const text = [desc, subjectText].filter(Boolean).join("\n");
    if (text) {
      addSource("Open Library", sourceUrl, "metadata", text, ["plotSummary", "themeAnalysis"]);
    }
    tiersSucceeded.push(1);
    log(`  ✓ Open Library: ${desc.length} chars desc, ${(work.subjects || []).length} subjects`);
  } else {
    log("  ⚠ Open Library: 未找到");
  }

  if (gbResult.status === "fulfilled" && gbResult.value) {
    const { volume, sourceUrl } = gbResult.value;
    const desc = volume.volumeInfo?.description || "";
    if (desc) {
      addSource("Google Books", sourceUrl, "metadata", desc, ["plotSummary"]);
    }
    if (!tiersSucceeded.includes(1)) tiersSucceeded.push(1);
    log(`  ✓ Google Books: ${desc.length} chars`);
  } else {
    log("  ⚠ Google Books: 未找到（可能未配 API Key）");
  }

  // ---- Tier 2: Wikipedia 多语言 + Wikimedia (并行) ----
  log("  [Tier 2] Wikipedia (EN+ZH) + Wikimedia...");
  tiersAttempted.push(2);

  const wikiLangs: Array<"en" | "zh"> = [];
  if (searchConfig.wikipediaEn) wikiLangs.push("en");
  if (searchConfig.wikipediaZh) wikiLangs.push("zh");
  // deduplicate
  const uniqueLangs = Array.from(new Set(wikiLangs));

  const wikiPromises = uniqueLangs.map((lang) =>
    queryWikipedia(searchConfig.wikipediaEn || searchConfig.titleEn, lang)
  );
  const wikiResults = await Promise.allSettled(wikiPromises);

  let wikiSucceeded = false;
  for (let i = 0; i < wikiResults.length; i++) {
    const r = wikiResults[i];
    if (r.status === "fulfilled" && r.value) {
      const { extract, pageUrl, sections } = r.value;
      if (extract) {
        addSource(
          `Wikipedia (${r.value.lang.toUpperCase()})`,
          pageUrl,
          "reference",
          extract,
          ["plotSummary", "characters", "themeAnalysis"]
        );
        wikiSucceeded = true;

        // 添加 section 内容
        for (const sec of sections.slice(0, 5)) {
          collector.add(
            makeFragment(sec.content, `Wikipedia ${r.value.lang.toUpperCase()} — ${sec.title}`, pageUrl, "reference")
          );
        }
        log(`  ✓ Wikipedia ${r.value.lang.toUpperCase()}: ${extract.length} chars, ${sections.length} sections`);
      }
    }
  }

  // Wikimedia REST API（结构化摘要）
  const wikiMediaResult = await queryWikimediaSummary(
    searchConfig.wikipediaEn || searchConfig.titleEn
  );
  if (wikiMediaResult) {
    const text = [wikiMediaResult.description, wikiMediaResult.extract].filter(Boolean).join("\n");
    if (text && !wikiSucceeded) {
      addSource("Wikimedia", wikiMediaResult.sourceUrl, "reference", text, ["plotSummary"]);
    } else if (text) {
      collector.add(makeFragment(text, "Wikimedia Summary", wikiMediaResult.sourceUrl, "reference"));
    }
    if (!wikiSucceeded) wikiSucceeded = true;
    log(`  ✓ Wikimedia: ${wikiMediaResult.description ? "有描述" : "无描述"}`);
  }

  if (wikiSucceeded) tiersSucceeded.push(2);
  else log("  ⚠ Wikipedia/Wikimedia: 均未找到");

  // ---- 数据充足性检查 ----
  const intermediateDetail = buildMinimalDetail(bookId, bookTitle, bookAuthor, collector);
  let currentScore = scoreWorkDetail(intermediateDetail);

  // ---- Tier 2.5: 全网搜索（仅 --full-search 或数据极缺时） ----
  if (enableFullSearch && (currentScore < SUFFICIENT_THRESHOLD || forceAllTiers)) {
    log("  [Tier 2.5] 全网搜索 + 智能爬取...");
    tiersAttempted.push(2.5);

    const nativeTitle = searchConfig.titleNative || searchConfig.wikipediaZh
      ? searchConfig.titleNative || bookTitle
      : undefined;

    const searchResult = await searchWeb(bookTitle, bookAuthor, nativeTitle);

    if (searchResult && searchResult.results.length > 0) {
      const filtered = filterQualityResults(searchResult.results);
      log(`  ✓ 搜索到 ${searchResult.results.length} 个结果 (${filtered.filter(r => (r as {score?: number}).score === 2).length} 个高质量)`);

      // 添加搜索结果摘要
      const searchFragments = searchResultsToFragments(filtered.slice(0, 8), searchResult.query);
      for (const f of searchFragments) {
        collector.add(f);
      }

      // 爬取前 3 个高质量结果页面
      const topUrls = filtered.filter(r => (r as {score?: number}).score === 2).slice(0, 3).map(r => r.link);
      if (topUrls.length > 0) {
        const scrapedPages = await scrapeTopResults(topUrls, 3);
        if (scrapedPages.length > 0) {
          const scrapedFragments = scrapedPagesToFragments(scrapedPages);
          for (const f of scrapedFragments) {
            collector.add(f);
          }
          log(`  ✓ 成功爬取 ${scrapedPages.length} 个页面: ${scrapedPages.map(p => p.domain).join(", ")}`);
        }
      }

      tiersSucceeded.push(2.5);
    } else {
      log("  ⚠ 全网搜索: 未找到高质量结果");
    }
  }

  // ---- Tier 3: 中文来源 (并行) ----
  if (currentScore < SUFFICIENT_THRESHOLD || forceAllTiers) {
    log("  [Tier 3] 豆瓣 + 百度百科...");
    tiersAttempted.push(3);

    const doubanPromise = searchConfig.doubanId
      ? queryDoubanById(searchConfig.doubanId)
      : searchDoubanByTitle(searchConfig.titleNative || searchConfig.titleEn, searchConfig.authorEn);
    const baiduPromise = queryBaiduBaike(
      searchConfig.baiduBaikeTitle || searchConfig.wikipediaZh || searchConfig.titleEn
    );

    const [doubanResult, baiduResult] = await Promise.allSettled([doubanPromise, baiduPromise]);

    if (doubanResult.status === "fulfilled" && doubanResult.value) {
      const d = doubanResult.value;
      addSource("豆瓣读书", d.sourceUrl, "reference", d.summary, ["plotSummary", "themeAnalysis"]);
      if (d.tags.length > 0) {
        collector.add(
          makeFragment(`标签: ${d.tags.join(", ")}`, "豆瓣读书", d.sourceUrl, "reference")
        );
      }
      tiersSucceeded.push(3);
      log(`  ✓ 豆瓣: ${d.summary.length} chars, rating=${d.rating || "N/A"}`);
    } else {
      log("  ⚠ 豆瓣: 未找到");
    }

    if (baiduResult.status === "fulfilled" && baiduResult.value) {
      const b = baiduResult.value;
      const baiduText = [b.summary, ...b.sections.map((s) => s.content)].join("\n");
      if (baiduText.length > 50) {
        addSource("百度百科", b.sourceUrl, "reference", baiduText, ["plotSummary", "characters", "themeAnalysis"]);
        if (!tiersSucceeded.includes(3)) tiersSucceeded.push(3);
        log(`  ✓ 百度百科: summary=${b.summary.length} chars, metadata=${Object.keys(b.metadata).length} keys`);
      } else {
        log("  ⚠ 百度百科: 内容不足");
      }
    } else {
      log("  ⚠ 百度百科: 未找到");
    }
  } else {
    log("  [Tier 3] 跳过（数据已充足，score=" + currentScore + ")");
  }

  // 重新评分
  const postTier3Detail = buildMinimalDetail(bookId, bookTitle, bookAuthor, collector);
  currentScore = scoreWorkDetail(postTier3Detail);

  // ---- Tier 4: 英文文学分析 (并行) ----
  if (currentScore < SUFFICIENT_THRESHOLD || forceAllTiers) {
    log("  [Tier 4] SparkNotes + Goodreads + LitCharts...");
    tiersAttempted.push(4);

    const [sparkResult, goodreadsResult, litchartsResult] = await Promise.allSettled([
      querySparkNotes(searchConfig.titleEn),
      queryGoodreads(searchConfig.titleEn, searchConfig.authorEn || undefined),
      queryLitCharts(searchConfig.titleEn),
    ]);

    if (sparkResult.status === "fulfilled" && sparkResult.value) {
      const s = sparkResult.value;
      const text = [s.summary, ...s.themes.map((t) => `Theme: ${t}`)].join("\n");
      if (text.length > 50) {
        addSource("SparkNotes", s.sourceUrl, "literary_analysis", text, ["plotSummary", "themeAnalysis"]);
        tiersSucceeded.push(4);
        log(`  ✓ SparkNotes: chars=${text.length}, characters=${s.characters.length}, themes=${s.themes.length}`);
      }
    } else {
      log("  ⚠ SparkNotes: 未找到");
    }

    if (goodreadsResult.status === "fulfilled" && goodreadsResult.value) {
      const g = goodreadsResult.value;
      if (g.description) {
        addSource("Goodreads", g.sourceUrl, "literary_analysis", g.description, ["plotSummary", "themeAnalysis"]);
        if (!tiersSucceeded.includes(4)) tiersSucceeded.push(4);
        log(`  ✓ Goodreads: ${g.description.length} chars, genres=${g.genres.join(",")}`);
      }
    } else {
      log("  ⚠ Goodreads: 未找到");
    }

    if (litchartsResult.status === "fulfilled" && litchartsResult.value) {
      const l = litchartsResult.value;
      if (l.summary) {
        addSource("LitCharts", l.sourceUrl, "literary_analysis", l.summary, ["plotSummary", "themeAnalysis"]);
        if (!tiersSucceeded.includes(4)) tiersSucceeded.push(4);
        log(`  ✓ LitCharts: ${l.summary.length} chars, themes=${l.themes.length}`);
      }
    } else {
      log("  ⚠ LitCharts: 未找到");
    }
  } else {
    log("  [Tier 4] 跳过（数据已充足，score=" + currentScore + ")");
  }

  // ---- Tier 5: 原文 + 百科 (并行) ----
  const postTier4Detail = buildMinimalDetail(bookId, bookTitle, bookAuthor, collector);
  currentScore = scoreWorkDetail(postTier4Detail);

  if (currentScore < SUFFICIENT_THRESHOLD || forceAllTiers) {
    log("  [Tier 5] Gutenberg + Britannica...");
    tiersAttempted.push(5);

    const [gutenbergResult, britannicaResult] = await Promise.allSettled([
      queryGutenberg(searchConfig.titleEn, searchConfig.authorEn || undefined),
      queryBritannica(searchConfig.titleEn),
    ]);

    if (gutenbergResult.status === "fulfilled" && gutenbergResult.value) {
      const g = gutenbergResult.value;
      const text = `Subjects: ${g.subjects.join("; ")}`;
      addSource("Project Gutenberg", g.sourceUrl, "original_text", text, ["insights"]);
      tiersSucceeded.push(5);
      log(`  ✓ Gutenberg: #${g.id}, ${g.subjects.length} subjects`);
    } else {
      log("  ⚠ Gutenberg: 未找到");
    }

    if (britannicaResult.status === "fulfilled" && britannicaResult.value) {
      const b = britannicaResult.value;
      if (b.summary) {
        addSource("Britannica", b.sourceUrl, "reference", b.summary, ["plotSummary", "themeAnalysis"]);
        if (!tiersSucceeded.includes(5)) tiersSucceeded.push(5);
        log(`  ✓ Britannica: ${b.summary.length} chars`);
      }
    } else {
      log("  ⚠ Britannica: 未找到");
    }
  } else {
    log("  [Tier 5] 跳过（数据已充足，score=" + currentScore + ")");
  }

  // ---- Tier 6: Fallback Synthesizer ----
  const finalPreDetail = buildMinimalDetail(bookId, bookTitle, bookAuthor, collector);
  currentScore = scoreWorkDetail(finalPreDetail);
  let detail: WorkDetail;
  let reliability: "high" | "medium" | "fallback";

  if (currentScore >= HIGH_THRESHOLD) {
    reliability = "high";
    detail = buildFinalDetail(bookId, bookTitle, bookAuthor, collector);
  } else if (currentScore >= SUFFICIENT_THRESHOLD) {
    reliability = "medium";
    detail = buildFinalDetail(bookId, bookTitle, bookAuthor, collector);
  } else if (collector.totalChars() > 200) {
    log("  [Tier 6] Fallback Synthesizer...");
    tiersAttempted.push(6);
    tiersSucceeded.push(6);

    const synth = await synthesizeFromFragments({
      bookId, title: bookTitle, author: bookAuthor, collector,
    });
    detail = {
      ...synth.detail,
      sourceAttribution: {
        sources,
        reliability: "fallback",
        disclaimer: synth.disclaimer,
        searchLinks: synth.searchLinks,
      },
    };
    reliability = "fallback";
    log(`  ✓ Fallback: ${collector.totalChars()} chars from ${collector.count()} fragments`);
  } else {
    // 完全没有数据
    detail = buildMinimalDetail(bookId, bookTitle, bookAuthor, collector);
    detail.sourceAttribution = {
      sources,
      reliability: "fallback",
      disclaimer: "暂无足够公开来源数据。请通过搜索链接核实信息。",
      searchLinks: generateSearchLinks(bookTitle, bookAuthor),
    };
    reliability = "fallback";
  }

  // 确保 sourceAttribution 在所有路径上设置
  if (!detail.sourceAttribution) {
    detail.sourceAttribution = { sources, reliability };
  }

  const summary = {
    tiersAttempted,
    tiersSucceeded,
    totalSources: sources.length,
    reliability,
    score: currentScore,
  };

  return { detail, searchConfig, summary };
}

/** 生成搜索链接 */
function generateSearchLinks(title: string, author: string): Array<{ label: string; url: string }> {
  const encoded = encodeURIComponent(`${title} ${author}`.trim());
  return [
    { label: "Google Books 搜索", url: `https://www.google.com/search?tbm=bks&q=${encoded}` },
    { label: "Wikipedia 搜索", url: `https://en.wikipedia.org/w/index.php?search=${encoded}` },
    { label: "百度百科 搜索", url: `https://baike.baidu.com/search?word=${encodeURIComponent(title)}` },
    { label: "豆瓣读书 搜索", url: `https://book.douban.com/subject_search?search_text=${encodeURIComponent(title)}` },
  ];
}

/** 从碎片构建最小 WorkDetail */
function buildMinimalDetail(
  bookId: string,
  bookTitle: string,
  bookAuthor: string,
  collector: FragmentCollector
): WorkDetail {
  const gather = (field: WorkDetailField, maxLen: number): string => {
    const relevant = collector.getRelevantTo(field);
    const text = relevant.map((f) => f.text).join("\n\n");
    if (text.length > 0) return text.slice(0, maxLen).trim();
    return "";
  };

  return {
    id: bookId,
    characters: [],
    plotSummary: gather("plotSummary", 800),
    plotNodes: [],
    themeAnalysis: gather("themeAnalysis", 600),
    techniques: gather("techniques", 400),
    excerpts: [],
    insights: gather("insights", 400),
  };
}

/** 从碎片构建最终 WorkDetail */
function buildFinalDetail(
  bookId: string,
  bookTitle: string,
  bookAuthor: string,
  collector: FragmentCollector
): WorkDetail {
  const gather = (field: WorkDetailField, maxLen: number): string => {
    const relevant = collector.getRelevantTo(field);
    const text = relevant.map((f) => f.text).join("\n\n");
    return text.slice(0, maxLen).trim();
  };

  const plotSummary = gather("plotSummary", 1000);

  // Plot nodes from paragraphs
  const plotNodes: Array<{ label: string; description: string }> = [];
  const paragraphs = plotSummary.split(/\n\n+/).filter((p) => p.trim().length > 40).slice(0, 8);
  paragraphs.forEach((para, i) => {
    plotNodes.push({
      label: `Part ${i + 1}`,
      description: firstSentences(para, 1).slice(0, 200),
    });
  });

  // Characters from named entities
  const characters: Array<{ name: string; role: string; description: string }> = [];
  const charText = gather("characters", 600);
  const nameMatches = charText.match(/\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+){0,2})\b/g);
  if (nameMatches) {
    const seen = new Set<string>();
    nameMatches
      .filter((n) => {
        const l = n.toLowerCase();
        if (seen.has(l)) return false;
        seen.add(l);
        return n.length > 3 && !/^(The|This|That|These|Those|There|Their|They|Chapter|Part|Book|Volume|Page)$/i.test(n);
      })
      .slice(0, 8)
      .forEach((name) => {
        characters.push({ name, role: "角色", description: `${bookTitle} 中的主要角色。` });
      });
  }

  const allText = collector.getAll().map((f) => f.text).join("\n");
  const excerpts: Array<{ quote: string; context: string }> = [];
  const quoteMatches = allText.match(/[""]([^""]{20,200})[""]/g);
  if (quoteMatches) {
    quoteMatches.slice(0, 3).forEach((q) => {
      excerpts.push({ quote: q.replace(/^[""]|[""]$/g, ""), context: `From ${bookTitle}` });
    });
  }

  return {
    id: bookId,
    characters,
    plotSummary: plotSummary || `《${bookTitle}》是 ${bookAuthor} 创作的一部文学作品。`,
    plotNodes,
    themeAnalysis: gather("themeAnalysis", 800),
    techniques: gather("techniques", 600),
    excerpts,
    insights: gather("insights", 600) || `${bookTitle} is a notable work in world literature by ${bookAuthor}.`,
  };
}

// ================================================================
// 独立 fetchLiteratureData（兼容单本模式 + 被 batch runner 调用）
// ================================================================

async function fetchLiteratureData(
  bookId: string,
  enableFullSearch = false
): Promise<{ detail: WorkDetail; searchConfig: BookSearchConfig | null; summary?: PipelineResult["summary"] }> {
  let searchConfig = BOOK_SEARCH_MAP[bookId] || null;

  let bookTitle = searchConfig?.titleEn || bookId;
  let bookAuthor = searchConfig?.authorEn || "";

  try {
    const { works } = (await import("../src/lib/data.ts.bak")) as {
      works: Array<{ id: string; title: string; author: string; titleEn: string }>;
    };
    const found = works.find((w) => w.id === bookId);
    if (found) {
      if (!searchConfig) {
        bookTitle = found.titleEn || found.title;
        bookAuthor = found.author;
      }
      console.log(`  书名: ${found.title} (${found.titleEn || found.title})`);
      console.log(`  作者: ${found.author}`);
    }
  } catch { /* ignore */ }

  if (!searchConfig) {
    searchConfig = {
      titleEn: bookTitle,
      authorEn: bookAuthor,
      wikipediaEn: bookTitle.replace(/\s+/g, "_"),
    };
  }

  console.log(`\n🔍 开始抓取: ${bookTitle}`);
  console.log(`  作者: ${bookAuthor}`);
  console.log("");

  const { detail, summary } = await executePipeline(
    bookId, searchConfig, bookTitle, bookAuthor, true, false, enableFullSearch
  );

  console.log(`\n  📊 质量评分: ${summary.score} | 可靠性: ${summary.reliability}`);
  console.log(`  📡 来源: ${summary.totalSources} (tiers: ${summary.tiersSucceeded.join(",")})`);
  if (detail.sourceAttribution?.disclaimer) {
    console.log(`  ⚠ ${detail.sourceAttribution.disclaimer}`);
  }

  return { detail, searchConfig, summary };
}

// ================================================================
// 输出格式化
// ================================================================

function formatWorkDetailTS(detail: WorkDetail): string {
  const lines: string[] = [];

  lines.push(`  "${detail.id}": {`);
  lines.push(`    id: "${detail.id}",`);

  // Characters
  if (detail.characters.length > 0) {
    lines.push(`    characters: [`);
    detail.characters.forEach((c, i) => {
      const comma = i < detail.characters.length - 1 ? "," : "";
      lines.push(
        `      { name: "${escapeTSString(c.name)}", role: "${escapeTSString(c.role)}", description: "${escapeTSString(c.description)}" }${comma}`
      );
    });
    lines.push(`    ],`);
  }

  // Plot Summary
  lines.push(`    plotSummary: "${escapeTSString(detail.plotSummary)}",`);

  // Plot Nodes
  if (detail.plotNodes.length > 0) {
    lines.push(`    plotNodes: [`);
    detail.plotNodes.forEach((n, i) => {
      const comma = i < detail.plotNodes.length - 1 ? "," : "";
      lines.push(
        `      { label: "${escapeTSString(n.label)}", description: "${escapeTSString(n.description)}" }${comma}`
      );
    });
    lines.push(`    ],`);
  }

  // Theme Analysis
  lines.push(`    themeAnalysis: "${escapeTSString(detail.themeAnalysis)}",`);

  // Techniques
  lines.push(`    techniques: "${escapeTSString(detail.techniques)}",`);

  // Excerpts
  if (detail.excerpts.length > 0) {
    lines.push(`    excerpts: [`);
    detail.excerpts.forEach((e, i) => {
      const comma = i < detail.excerpts.length - 1 ? "," : "";
      lines.push(
        `      { quote: "${escapeTSString(e.quote)}", context: "${escapeTSString(e.context)}" }${comma}`
      );
    });
    lines.push(`    ],`);
  } else {
    lines.push(`    excerpts: [],`);
  }

  // Insights
  lines.push(`    insights: "${escapeTSString(detail.insights)}",`);

  // Source attribution (runtime-accessible)
  if (detail.sourceAttribution && detail.sourceAttribution.sources.length > 0) {
    const sa = detail.sourceAttribution;
    lines.push(`    sourceAttribution: {`);
    lines.push(`      sources: [`);
    for (const s of sa.sources) {
      const fields = s.contributedFields?.length ? `, contributedFields: [${s.contributedFields.map((f) => `"${f}"`).join(", ")}]` : "";
      lines.push(`        { label: "${escapeTSString(s.label)}", url: "${escapeTSString(s.url)}", tier: "${s.tier}", fetchedAt: "${s.fetchedAt}"${fields} },`);
    }
    lines.push(`      ],`);
    lines.push(`      reliability: "${sa.reliability}",`);
    if (sa.disclaimer) {
      lines.push(`      disclaimer: "${escapeTSString(sa.disclaimer)}",`);
    }
    if (sa.searchLinks && sa.searchLinks.length > 0) {
      lines.push(`      searchLinks: [`);
      for (const sl of sa.searchLinks) {
        lines.push(`        { label: "${escapeTSString(sl.label)}", url: "${escapeTSString(sl.url)}" },`);
      }
      lines.push(`      ],`);
    }
    lines.push(`    },`);
  } else if (detail._sources && Object.keys(detail._sources).length > 0) {
    // Backward compat: convert old _sources to sourceAttribution
    const sources: Array<{ label: string; url: string; tier: string; fetchedAt: string }> = [];
    for (const [key, url] of Object.entries(detail._sources)) {
      sources.push({ label: key, url, tier: "reference", fetchedAt: "" });
    }
    lines.push(`    sourceAttribution: {`);
    lines.push(`      sources: [`);
    for (const s of sources) {
      lines.push(`        { label: "${escapeTSString(s.label)}", url: "${escapeTSString(s.url)}", tier: "${s.tier}", fetchedAt: "${s.fetchedAt}" },`);
    }
    lines.push(`      ],`);
    lines.push(`      reliability: "medium",`);
    lines.push(`    },`);
  }

  lines.push(`  },`);

  return lines.join("\n");
}

// ================================================================
// 写入 book-data.ts
// ================================================================

function writeToBookData(bookId: string, detail: WorkDetail): boolean {
  const bookDataPath = path.join(__dirname, "..", "src", "lib", "book-data.ts");

  if (!fs.existsSync(bookDataPath)) {
    console.error(`❌ 错误：找不到 ${bookDataPath}`);
    return false;
  }

  const lines = fs.readFileSync(bookDataPath, "utf-8").split("\n");
  const newEntryLines = formatWorkDetailTS(detail).split("\n");

  // 查找 bookId 条目的起始行
  const escapedId = bookId.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const startPattern = new RegExp(`^\\s*"${escapedId}":\\s*\\{`);
  let entryStart = -1;

  for (let i = 0; i < lines.length; i++) {
    if (startPattern.test(lines[i])) {
      entryStart = i;
      break;
    }
  }

  if (entryStart >= 0) {
    // 找到条目的结束行：从 entryStart 开始跟踪 brace depth
    let depth = 0;
    let entryEnd = entryStart;

    for (let i = entryStart; i < lines.length; i++) {
      for (const ch of lines[i]) {
        if (ch === "{") depth++;
        if (ch === "}") depth--;
      }
      if (depth === 0) {
        entryEnd = i;
        break;
      }
    }

    // 替换条目（保留前后空行结构）
    const before = lines.slice(0, entryStart);
    const after = lines.slice(entryEnd + 1);

    // 确保新条目前有空行
    const newLines = [...newEntryLines];
    const updatedLines = [...before, ...newLines, ...after];
    fs.writeFileSync(bookDataPath, updatedLines.join("\n"), "utf-8");
    console.log(`\n✅ 已更新 src/lib/book-data.ts 中的 "${bookId}" 条目`);
  } else {
    // 追加新条目：找到 `};` 是 export 结束标记的位置
    // book-data.ts 结构：export const bookDetails: ... = { ... };
    // 最后一个 }; 是 export 的结束
    let exportEnd = -1;
    for (let i = lines.length - 1; i >= 0; i--) {
      if (lines[i].trim() === "};") {
        exportEnd = i;
        break;
      }
    }

    if (exportEnd < 0) {
      console.error("❌ 错误：无法找到 book-data.ts 的结束标记");
      return false;
    }

    const before = lines.slice(0, exportEnd);
    const after = lines.slice(exportEnd);
    const newLines = ["", ...newEntryLines];
    const updatedLines = [...before, ...newLines, ...after];
    fs.writeFileSync(bookDataPath, updatedLines.join("\n"), "utf-8");
    console.log(`\n✅ 已添加 "${bookId}" 到 src/lib/book-data.ts`);
  }

  return true;
}

// ================================================================
// 批量模式 — Batch Runner
// ================================================================

interface TaskQueueItem {
  bookId: string;
  title: string;
  titleEn: string;
  author: string;
  continent: string;
  source: string;
  status: "partial" | "missing";
  missingFields: string[];
  priority: number;
  /** 批量处理标记 */
  batchStatus?: "done" | "failed" | "skipped";
  batchProcessedAt?: string;
  batchError?: string;
  batchSources?: string[];
}

interface TaskQueueFile {
  _meta: {
    generatedAt: string;
    summary: Record<string, number>;
    sources: Record<string, unknown>;
    schema: Record<string, string>;
  };
  completed: string[];
  queue: TaskQueueItem[];
}

interface BatchProgress {
  startedAt: string;
  lastUpdatedAt: string;
  totalTasks: number;
  processed: number;
  succeeded: number;
  failed: number;
  skipped: number;
  consecutiveFailures: number;
  maxConsecutiveFailures: number;
  currentBookId: string | null;
  currentQueueIndex: number;
  stopped: boolean;
  stopReason: string;
  /** 可靠性统计 */
  highReliabilityCount: number;
  mediumReliabilityCount: number;
  fallbackCount: number;
  emptyCount: number;
}

// ================================================================
// Git 自动提交
// ================================================================

async function gitCommitAndPush(bookId: string, sourceLabels: string[]): Promise<string> {
  const { execSync } = await import("child_process");
  const repoRoot = path.join(__dirname, "..");
  const sourcesStr = sourceLabels.join(",").slice(0, 60);

  try {
    execSync("git add -A", { cwd: repoRoot, stdio: "pipe", timeout: 10000 });
    const msg = `data: update detail for ${bookId} [${sourcesStr}]`;
    execSync(`git commit -m "${msg.replace(/"/g, '\\"')}"`, { cwd: repoRoot, stdio: "pipe", timeout: 10000 });
    execSync("git push origin main", { cwd: repoRoot, stdio: "pipe", timeout: 30000 });
    return "✓ pushed";
  } catch (e) {
    const errMsg = e instanceof Error ? e.message : String(e);
    if (errMsg.includes("nothing to commit") || errMsg.includes("working tree clean")) {
      return "⊘ no changes";
    }
    if (errMsg.includes("cannot open") || errMsg.includes("not a git")) {
      return "✗ git error";
    }
    // Push failure — don't block batch
    return "✗ push failed";
  }
}

function loadTaskQueue(): { queue: TaskQueueItem[]; data: TaskQueueFile } {
  const queuePath = path.join(__dirname, "..", "data", "task-queue.json");
  if (!fs.existsSync(queuePath)) {
    console.error("❌ 找不到 data/task-queue.json，请先运行 npm run lit:scan");
    process.exit(1);
  }
  const raw = fs.readFileSync(queuePath, "utf-8");
  const data = JSON.parse(raw) as TaskQueueFile;
  return { queue: data.queue, data };
}

function saveTaskQueue(data: TaskQueueFile): void {
  const queuePath = path.join(__dirname, "..", "data", "task-queue.json");
  data._meta.generatedAt = new Date().toISOString();
  fs.writeFileSync(queuePath, JSON.stringify(data, null, 2), "utf-8");
}

function saveBatchProgress(progress: BatchProgress): void {
  const progressPath = path.join(__dirname, "..", "data", "batch-progress.json");
  progress.lastUpdatedAt = new Date().toISOString();
  fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), "utf-8");
}

interface SkippedBookLog {
  bookId: string;
  title: string;
  author: string;
  source: string;
  continent: string;
  reason: string;
  processedAt: string;
}

function appendSkippedBook(entry: SkippedBookLog): void {
  const skippedPath = path.join(__dirname, "..", "data", "skipped-books.json");
  let records: SkippedBookLog[] = [];
  if (fs.existsSync(skippedPath)) {
    try {
      records = JSON.parse(fs.readFileSync(skippedPath, "utf-8"));
    } catch { /* ignore */ }
  }
  records.push(entry);
  fs.writeFileSync(skippedPath, JSON.stringify(records, null, 2), "utf-8");
}

const FAILURE_EMOJI: Record<string, string> = {
  "NetworkError": "🌐",
  "RateLimit": "⏳",
  "HTTPError": "🔌",
  "ParseError": "📝",
  "NotFound": "🔍",
  "default": "❌",
};

function classifyError(err: Error): string {
  const msg = err.message.toLowerCase();
  if (msg.includes("fetch") || msg.includes("connect") || msg.includes("timeout") || msg.includes("econnrefused")) return "NetworkError";
  if (msg.includes("429") || msg.includes("rate limit") || msg.includes("too many")) return "RateLimit";
  if (msg.includes("http")) return "HTTPError";
  if (msg.includes("parse") || msg.includes("json") || msg.includes("syntax")) return "ParseError";
  if (msg.includes("not found") || msg.includes("404") || msg.includes("missing")) return "NotFound";
  return "default";
}

async function runBatch(options: {
  maxFailures?: number; startIndex?: number; limit?: number;
  onlyPriority?: number[]; onlySource?: string[]; onlyContinent?: string[];
  batchAll?: boolean; fullSearch?: boolean; autoCommit?: boolean;
}): Promise<void> {
  const {
    maxFailures = 5,
    startIndex = 0,
    limit = Infinity,
    onlyPriority,
    onlySource,
    onlyContinent,
    batchAll = false,
    fullSearch = false,
    autoCommit = false,
  } = options;
  const _batchFullSearch = fullSearch;
  const _batchAutoCommit = autoCommit;

  const bannerTitle = batchAll ? "BATCH-ALL MODE（全量重处理）" : "BATCH MODE";
  console.log("╔══════════════════════════════════════════════════╗");
  console.log(`║  Literature Data Specialist — ${bannerTitle.padEnd(18)}║`);
  console.log("╚══════════════════════════════════════════════════╝");
  console.log("");

  // 加载队列
  const { queue, data: queueData } = loadTaskQueue();

  // 过滤条件
  let remaining = queue
    .map((item, idx) => ({ item, originalIndex: idx }))
    .filter(({ item }) => batchAll || !item.batchStatus || item.batchStatus !== "done");

  if (onlyPriority && onlyPriority.length > 0) {
    remaining = remaining.filter(({ item }) => onlyPriority.includes(item.priority));
  }
  if (onlySource && onlySource.length > 0) {
    remaining = remaining.filter(({ item }) => onlySource.includes(item.source));
  }
  if (onlyContinent && onlyContinent.length > 0) {
    remaining = remaining.filter(({ item }) => onlyContinent.includes(item.continent));
  }

  const totalRemaining = remaining.length;
  const toProcess = remaining.slice(startIndex, startIndex + limit);

  console.log(`  队列总数:       ${queue.length}`);
  console.log(`  未处理:         ${totalRemaining}`);
  console.log(`  本次处理:       ${toProcess.length}`);
  console.log(`  最大连续失败:   ${maxFailures}`);
  console.log(`  起始位置:       ${startIndex}`);
  if (limit < Infinity) console.log(`  数量限制:       ${limit}`);
  console.log("");

  if (toProcess.length === 0) {
    console.log("✅ 所有任务已完成，无需处理。");
    return;
  }

  // 初始化进度
  const progress: BatchProgress = {
    startedAt: new Date().toISOString(),
    lastUpdatedAt: "",
    totalTasks: toProcess.length,
    processed: 0,
    succeeded: 0,
    failed: 0,
    skipped: 0,
    consecutiveFailures: 0,
    maxConsecutiveFailures: maxFailures,
    currentBookId: null,
    currentQueueIndex: 0,
    stopped: false,
    stopReason: "",
    highReliabilityCount: 0,
    mediumReliabilityCount: 0,
    fallbackCount: 0,
    emptyCount: 0,
  };
  saveBatchProgress(progress);

  const startTime = Date.now();

  for (let i = 0; i < toProcess.length; i++) {
    const { item, originalIndex } = toProcess[i];
    const bookId = item.bookId;
    const progressLine = `[${(i + 1).toString().padStart(4, " ") }/${toProcess.length}]`;

    // ETA 估算
    let etaStr = "";
    if (i > 0) {
      const elapsed = (Date.now() - startTime) / 1000;
      const avgSec = elapsed / i;
      const remaining = avgSec * (toProcess.length - i);
      const etaMin = Math.ceil(remaining / 60);
      etaStr = ` ETA:${etaMin}m`;
    }

    const flag = { asia: "🏯", europe: "🏛️", africa: "🦁", americas: "🗽", oceania: "🌊", unknown: "📖" }[item.continent] || "📖";
    const srcTag = { core: "核", award: "奖", textbook: "教", expansion: "扩" }[item.source] || item.source;

    process.stdout.write(`${progressLine} ${flag}[${srcTag}][P${item.priority}] ${item.title.slice(0, 25).padEnd(25)}${etaStr} `);

    progress.currentBookId = bookId;
    progress.currentQueueIndex = i;
    progress.processed = i;

    try {
      // 完整的抓取 → 写入流程
      const { detail } = await fetchLiteratureData(bookId, _batchFullSearch);

      // 检查数据质量：至少要有一些真实数据
      const dataScore =
        (detail.characters.length > 0 ? 1 : 0) +
        (detail.plotSummary.length > 100 ? 1 : 0) +
        (detail.plotNodes.length >= 2 ? 1 : 0) +
        (detail.themeAnalysis.length > 100 ? 1 : 0);

      if (dataScore >= 1) {
        const writeOk = writeToBookData(bookId, detail);
        if (writeOk) {
          // 更新队列状态
          queueData.queue[originalIndex].batchStatus = "done";
          queueData.queue[originalIndex].batchProcessedAt = new Date().toISOString();
          queueData.queue[originalIndex].batchSources =
            detail.sourceAttribution?.sources.map((s) => s.label) || [];

          progress.succeeded++;
          progress.consecutiveFailures = 0;

          // 可靠性统计
          const rel = detail.sourceAttribution?.reliability || "fallback";
          if (rel === "high") progress.highReliabilityCount++;
          else if (rel === "medium") progress.mediumReliabilityCount++;
          else progress.fallbackCount++;

          // 移入 completed 列表
          if (!queueData.completed.includes(bookId)) {
            queueData.completed.push(bookId);
          }

          const sourcesStr = detail.sourceAttribution?.sources.map((s) => s.label).join(",") || "no-source";
          console.log(`✓ 写入成功 [${detail.sourceAttribution?.reliability || "?"}] [${sourcesStr}]`);

        } else {
          // 写入失败也算失败
          queueData.queue[originalIndex].batchStatus = "failed";
          queueData.queue[originalIndex].batchError = "write failed";
          progress.failed++;
          progress.consecutiveFailures++;
          console.log(`✗ 写入失败`);
        }
      } else {
        // 数据质量不足
        queueData.queue[originalIndex].batchStatus = "skipped";
        queueData.queue[originalIndex].batchProcessedAt = new Date().toISOString();
        queueData.queue[originalIndex].batchError = "insufficient data from APIs";
        progress.skipped++;
        progress.consecutiveFailures = 0; // API 返回了数据但质量不足，不算网络失败
        console.log(`⊘ 数据不足 (score=${dataScore})`);

        appendSkippedBook({
          bookId,
          title: item.title,
          author: item.author,
          source: item.source,
          continent: item.continent,
          reason: `dataScore=${dataScore} (chars:${detail.characters.length} plot:${detail.plotSummary.length} nodes:${detail.plotNodes.length} themes:${detail.themeAnalysis.length})`,
          processedAt: new Date().toISOString(),
        });
      }

      // 每 10 本保存一次队列和进度
      if ((i + 1) % 10 === 0) {
        saveTaskQueue(queueData);
        saveBatchProgress(progress);
      }
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      const errorType = classifyError(error);

      queueData.queue[originalIndex].batchStatus = "failed";
      queueData.queue[originalIndex].batchError = error.message.slice(0, 200);
      progress.failed++;
      progress.consecutiveFailures++;

      const emoji = FAILURE_EMOJI[errorType] || FAILURE_EMOJI.default;
      console.log(`${emoji} ${errorType}: ${error.message.slice(0, 80)}`);

      // 指数退避：等待 2^n 秒（上限 64 秒）
      const backoffSec = Math.min(2 ** progress.consecutiveFailures, 64);
      console.log(`  ⏳ 指数退避 ${backoffSec}s 后继续...`);

      // 仅连续失败超过阈值时停止（上限更高，不轻易中断）
      if (progress.consecutiveFailures >= maxFailures) {
        progress.stopped = true;
        progress.stopReason = `连续 ${progress.consecutiveFailures} 次失败（${errorType}），指数退避已达上限。建议检查代理或网络后 --resume 继续。`;
        saveTaskQueue(queueData);
        saveBatchProgress(progress);

        console.log("");
        console.log("═".repeat(55));
        console.log(`⛔ 自动停止: ${progress.stopReason}`);
        console.log("═".repeat(55));
        break;
      }

      await sleep(backoffSec * 1000);
    }

    // 保存单本状态
    saveTaskQueue(queueData);
  }

  // 最终保存
  saveTaskQueue(queueData);
  saveBatchProgress(progress);

  const elapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1);

  // ================================================================
  // 批量进度报告
  // ================================================================
  console.log("");
  console.log("═".repeat(55));
  console.log("  📊 批量处理进度报告");
  console.log("═".repeat(55));
  console.log(`  耗时:           ${elapsed} 分钟`);
  console.log(`  已处理:         ${progress.processed + 1}`);
  console.log(`  ✅ 成功写入:     ${progress.succeeded}`);
  console.log(`  ❌ 失败:         ${progress.failed}`);
  console.log(`  ⊘ 数据不足:    ${progress.skipped}`);
  console.log(`  连续失败:       ${progress.consecutiveFailures}/${maxFailures}`);
  console.log(`  队列剩余:       ${totalRemaining - (progress.processed + 1)}`);
  console.log(`  状态:           ${progress.stopped ? "⛔ 已停止" : "✅ 已完成"}`);
  if (progress.stopReason) {
    console.log(`  停止原因:       ${progress.stopReason}`);
  }
  console.log("═".repeat(55));

  // 来源统计
  const sourceStats: Record<string, number> = {};
  for (const item of queueData.queue) {
    if (item.batchStatus === "done") {
      const srcs = item.batchSources || [];
      for (const s of srcs) {
        sourceStats[s] = (sourceStats[s] || 0) + 1;
      }
    }
  }
  if (Object.keys(sourceStats).length > 0) {
    console.log("");
    console.log("  来源链接统计:");
    for (const [src, count] of Object.entries(sourceStats).sort((a, b) => b[1] - a[1])) {
      console.log(`    ${src}: ${count} 本`);
    }
  }

  // 可靠性报告
  if (progress.highReliabilityCount + progress.mediumReliabilityCount + progress.fallbackCount > 0) {
    console.log("");
    console.log("  📊 可靠性报告:");
    const total = progress.highReliabilityCount + progress.mediumReliabilityCount + progress.fallbackCount;
    console.log(`    🔵 高可靠性 (>=3 verified sources):   ${progress.highReliabilityCount} 本 (${((progress.highReliabilityCount/total)*100).toFixed(1)}%)`);
    console.log(`    🟡 中等可靠性 (1-2 sources):          ${progress.mediumReliabilityCount} 本 (${((progress.mediumReliabilityCount/total)*100).toFixed(1)}%)`);
    console.log(`    🟠 有限来源提炼 (LLM formatted):      ${progress.fallbackCount} 本 (${((progress.fallbackCount/total)*100).toFixed(1)}%)`);
    console.log(`    ⚫ 无数据 (仅搜索链接):                ${progress.emptyCount} 本`);
  }

  console.log("");
  console.log("📁 data/task-queue.json     — 已更新");
  console.log("📁 data/batch-progress.json — 进度文件");
  console.log("📁 data/skipped-books.json  — 跳过记录");
  console.log("📁 src/lib/book-data.ts     — 已写入");

  // 生成导入报告
  const reportPath = generateImportReport(queueData, progress, {
    elapsedMinutes: parseFloat(elapsed),
    startTime: startTime,
  });
  console.log(`📁 ${reportPath}`);

  console.log("");
  console.log("继续运行: npm run lit:fetch -- --batch --resume");
  console.log("全量重新处理: npm run lit:fetch -- --batch-all");

  // 自动 commit + push（全部完成后一次性提交）
  if (_batchAutoCommit && progress.succeeded > 0) {
    console.log("");
    console.log("═".repeat(55));
    console.log("  📤 统一提交所有变更...");
    const gitStatus = await gitCommitAndPush(
      `batch-${progress.succeeded}-books`,
      [`${progress.succeeded} books`, `${progress.skipped} skipped`]
    );
    console.log(`  ${gitStatus}`);
    console.log("═".repeat(55));
  }
}

// ================================================================
// 导入报告生成
// ================================================================

function generateImportReport(
  queueData: TaskQueueFile,
  progress: BatchProgress,
  timing: { elapsedMinutes: number; startTime: number }
): string {
  const now = new Date().toISOString();
  const allItems = queueData.queue;
  const doneItems = allItems.filter((t) => t.batchStatus === "done");
  const failedItems = allItems.filter((t) => t.batchStatus === "failed");
  const skippedItems = allItems.filter((t) => t.batchStatus === "skipped");
  const pendingItems = allItems.filter((t) => !t.batchStatus);

  // 来源统计
  const sourceStats: Record<string, number> = {};
  let totalSources = 0;
  for (const item of doneItems) {
    const srcs = item.batchSources || [];
    totalSources += srcs.length;
    for (const s of srcs) {
      sourceStats[s] = (sourceStats[s] || 0) + 1;
    }
  }

  // 可靠性统计
  const highRel = progress.highReliabilityCount;
  const medRel = progress.mediumReliabilityCount;
  const fallbackRel = progress.fallbackCount;
  const totalRel = highRel + medRel + fallbackRel;

  const lines = [
    "# 世界文学总站 — 数据导入报告",
    "",
    `> 生成时间: ${now}`,
    `> 批次耗时: ${timing.elapsedMinutes} 分钟`,
    "",
    "## 概览",
    "",
    `| 指标 | 数值 |`,
    `|------|------|`,
    `| 队列总数 | ${allItems.length} |`,
    `| ✅ 成功写入 | ${doneItems.length} |`,
    `| ❌ 失败 | ${failedItems.length} |`,
    `| ⊘ 数据不足 | ${skippedItems.length} |`,
    `| ⏳ 待处理 | ${pendingItems.length} |`,
    `| 平均来源数/本 | ${doneItems.length > 0 ? (totalSources / doneItems.length).toFixed(1) : "N/A"} |`,
    "",
    "## 可靠性分布",
    "",
    `| 等级 | 数量 | 占比 |`,
    `|------|------|------|`,
    `| 🔵 高可靠性 | ${highRel} | ${totalRel > 0 ? ((highRel / totalRel) * 100).toFixed(1) : "0"}% |`,
    `| 🟡 中等可靠性 | ${medRel} | ${totalRel > 0 ? ((medRel / totalRel) * 100).toFixed(1) : "0"}% |`,
    `| 🟠 有限来源提炼 | ${fallbackRel} | ${totalRel > 0 ? ((fallbackRel / totalRel) * 100).toFixed(1) : "0"}% |`,
    `| ⚫ 无数据 | ${progress.emptyCount} | — |`,
    "",
  ];

  // 来源明细
  if (Object.keys(sourceStats).length > 0) {
    lines.push("## 来源统计");
    lines.push("");
    lines.push("| 来源 | 使用次数 |");
    lines.push("|------|----------|");
    const sorted = Object.entries(sourceStats).sort((a, b) => b[1] - a[1]);
    for (const [src, count] of sorted) {
      lines.push(`| ${src} | ${count} |`);
    }
    lines.push("");
  }

  // 失败明细（前20）
  if (failedItems.length > 0) {
    lines.push("## 失败条目（前20）");
    lines.push("");
    lines.push("| Book ID | 原因 |");
    lines.push("|---------|------|");
    for (const item of failedItems.slice(0, 20)) {
      lines.push(`| ${item.bookId} | ${(item.batchError || "未知").slice(0, 100)} |`);
    }
    if (failedItems.length > 20) {
      lines.push(`| ... | +${failedItems.length - 20} 条 |`);
    }
    lines.push("");
  }

  // 建议
  lines.push("## 下一步优化建议");
  lines.push("");
  if (fallbackRel > totalRel * 0.5) {
    lines.push("- ⚠ **Fallback 比例过高**（>{0.5*100}%）。建议：");
    lines.push("  - 对 fallback 书籍运行 `--test-cold` 分析原因");
    lines.push("  - 补充 BOOK_SEARCH_MAP 中的豆瓣 ID / 百度百科词条名");
    lines.push("  - 考虑配置 Google Books API Key 提升元数据覆盖");
  }
  if (failedItems.length > allItems.length * 0.1) {
    lines.push("- ❌ **失败率偏高**。检查代理和网络连接。");
  }
  if (pendingItems.length > 0) {
    lines.push(`- ⏳ **${pendingItems.length} 本书待处理**。运行 \`npm run lit:fetch -- --batch --resume\` 继续。`);
  }
  lines.push("- 💡 **提升数据质量**：运行 `npm run lit:scan` 刷新任务队列，然后对 `partial` 条目执行 P3 深度抓取。");
  lines.push("- 🔑 **配置 Google Books API Key**：在 `.env.local` 中设置 `GOOGLE_BOOKS_API_KEY=...` 可显著提升 Tier 1 数据量。");
  lines.push("");

  const reportPath = path.join(__dirname, "..", "data", "import-report.md");
  fs.writeFileSync(reportPath, lines.join("\n"), "utf-8");
  return "data/import-report.md";
}

// ================================================================
// CLI 入口
// ================================================================

function printHelp() {
  console.log(`
╔══════════════════════════════════════════════════╗
║  世界文学总站 — Literature Data Specialist     ║
║  文学数据采集与精准化 Agent                      ║
╚══════════════════════════════════════════════════╝

用法：
  npx tsx scripts/fetch-literature-data.ts <bookId> [选项]
  npx tsx scripts/fetch-literature-data.ts --batch [选项]

单本模式选项：
  --write       将结果写入 src/lib/book-data.ts
  --force       覆盖已有数据（默认跳过已存在的条目）
  --dry-run     仅抓取不写入（默认行为）
  --help        显示此帮助信息

批量模式选项（--batch / --batch-all）：
  --batch             启用批量处理模式，读取 data/task-queue.json
  --batch-all         全量重处理（包括已完成的书籍）
  --resume            从上次中断处继续（跳过 batchStatus=done）
  --max-failures <n>  最大连续失败次数（默认 5，触发指数退避）
  --limit <n>         最多处理 N 本（默认无限制）
  --only-priority <n> 仅处理指定优先级（如 1,2）
  --only-source <s>   仅处理指定来源（core,award,textbook,expansion）
  --only-continent <c> 仅处理指定大洲（asia,europe,africa,americas,oceania）
  --start <n>         从队列第 N 本开始（默认 0）
  --full-search       启用全网搜索（Serper.dev/DuckDuckGo）
  --auto-commit       全部完成后统一 git commit + push

环境变量：
  HTTP_PROXY / HTTPS_PROXY       代理服务器地址
  SERPER_API_KEY                 全网搜索 (Serper.dev) — 免费 2,500 次/月
  GOOGLE_BOOKS_API_KEY           Google Books API 密钥（可选）

示例：
  npm run lit:fetch hamlet -- --write --full-search                         # 单本+全网搜索
  npm run lit:fetch -- --batch                                              # 处理未完成队列
  npm run lit:fetch -- --batch-all                                          # 一键全量生产所有详情页
  npm run lit:fetch -- --batch-all --full-search                            # 全量+全网搜索
  npm run lit:fetch -- --batch --only-continent africa --full-search        # 非洲+搜索
  npm run lit:fetch -- --batch --max-failures 8 --resume                    # 续跑
  npm run lit:fetch -- --test-cold <bookId> --full-search                    # 冷门书全网搜索测试

配置代理 + 搜索 API（Windows PowerShell）：
  $env:HTTPS_PROXY="http://127.0.0.1:7890"
  $env:SERPER_API_KEY="your-key-here"
  npm run lit:fetch -- --batch-all --full-search

配置代理 + 搜索 API（Mac/Linux/bash）：
  export HTTPS_PROXY=http://127.0.0.1:7890
  export SERPER_API_KEY=your-key-here
  npm run lit:fetch -- --batch-all --full-search

Agent 策略（来自 DATA_COLLECTOR.md）：
  1. API First    — 优先查询 Open Library, Google Books, Wikipedia
  2. Crawl Fallback — API 不足时标注需要手动补充
  3. Attribution  — 每个字段保留 source_url
  4. Content Standards — 人物含全名·关系·矛盾·命运；情节区分 Summary/Detail；主题引用批评关键词

运行约束：
  • User-Agent: ${USER_AGENT}
  • Rate limit: 1.5s/request
  • 指数退避：连续失败时自动等待 2^n 秒（上限 64s），${5} 次后自动停止
`);
}

function parseBatchArgs(args: string[]): {
  maxFailures: number;
  startIndex: number;
  limit: number;
  onlyPriority?: number[];
  onlySource?: string[];
  onlyContinent?: string[];
  batchAll: boolean;
  fullSearch: boolean;
  autoCommit: boolean;
} {
  const result = {
    maxFailures: 5,
    startIndex: 0,
    limit: Infinity,
    onlyPriority: undefined as number[] | undefined,
    onlySource: undefined as string[] | undefined,
    onlyContinent: undefined as string[] | undefined,
    batchAll: false,
    fullSearch: false,
    autoCommit: false,
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case "--max-failures":
        result.maxFailures = parseInt(args[++i], 10) || 3;
        break;
      case "--start":
        result.startIndex = parseInt(args[++i], 10) || 0;
        break;
      case "--limit":
        result.limit = parseInt(args[++i], 10) || Infinity;
        break;
      case "--only-priority":
        result.onlyPriority = (args[++i] || "").split(",").map(Number).filter((n) => !isNaN(n));
        break;
      case "--only-source":
        result.onlySource = (args[++i] || "").split(",");
        break;
      case "--only-continent":
        result.onlyContinent = (args[++i] || "").split(",");
        break;
      case "--full-search":
        result.fullSearch = true;
        break;
      case "--auto-commit":
        result.autoCommit = true;
        break;
    }
  }

  return result;
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
    printHelp();
    return;
  }

  // ---- 冷门书测试模式 (--test-cold) ----
  if (args.includes("--test-cold")) {
    const nonFlagArgs = args.filter((a) => !a.startsWith("--"));
    const bookId = nonFlagArgs[0];
    if (!bookId) {
      console.error("用法: npm run lit:fetch -- --test-cold <bookId>");
      process.exit(1);
    }

    loadEnvFiles();

    console.log("╔══════════════════════════════════════════════════╗");
    console.log("║  Pipeline Test — 冷门书籍 6-Tier 全链路测试   ║");
    console.log("╚══════════════════════════════════════════════════╝");
    console.log("");
    console.log(`测试书: ${bookId}`);
    console.log("模式: 全部 6 Tiers 强制执行（无数据充足性跳过）");
    console.log("");

    // 获取搜索配置（同单本模式逻辑）
    let searchConfig = BOOK_SEARCH_MAP[bookId] || null;
    let bookTitle = searchConfig?.titleEn || bookId;
    let bookAuthor = searchConfig?.authorEn || "";

    try {
      const { works } = (await import("../src/lib/data.ts.bak")) as {
        works: Array<{ id: string; title: string; author: string; titleEn: string }>;
      };
      const found = works.find((w) => w.id === bookId);
      if (found) {
        if (!searchConfig) {
          bookTitle = found.titleEn || found.title;
          bookAuthor = found.author;
        }
        console.log(`书名: ${found.title} (${found.titleEn || found.title})`);
        console.log(`作者: ${found.author}`);
      }
    } catch { /* ignore */ }

    if (!searchConfig) {
      searchConfig = {
        titleEn: bookTitle,
        authorEn: bookAuthor,
        wikipediaEn: bookTitle.replace(/\s+/g, "_"),
      };
    }

    console.log("");
    console.log("═".repeat(55));

    // 强制执行全部 6 tiers（不使用 sufficiency gate）
    const testFullSearch = args.includes("--full-search");
    const { detail, summary } = await executePipeline(
      bookId, searchConfig, bookTitle, bookAuthor, true, true, testFullSearch
    );

    console.log("");
    console.log("═".repeat(55));
    console.log("  📊 测试报告");
    console.log("═".repeat(55));
    console.log(`  Tiers 尝试:    [${summary.tiersAttempted.join(", ")}]`);
    console.log(`  Tiers 成功:    [${summary.tiersSucceeded.join(", ")}]`);
    console.log(`  来源总数:      ${summary.totalSources}`);
    console.log(`  质量评分:      ${summary.score}`);
    console.log(`  可靠性:        ${summary.reliability}`);
    console.log("");
    console.log(`  角色数:        ${detail.characters.length}`);
    console.log(`  情节长度:      ${detail.plotSummary.length} chars`);
    console.log(`  情节节点:      ${detail.plotNodes.length}`);
    console.log(`  主题分析:      ${detail.themeAnalysis.length} chars`);
    console.log(`  写作手法:      ${detail.techniques.length} chars`);
    console.log(`  摘抄数:        ${detail.excerpts.length}`);
    console.log(`  启发:         ${detail.insights.length} chars`);
    console.log("");

    if (detail.sourceAttribution) {
      console.log("  来源明细:");
      for (const s of detail.sourceAttribution.sources) {
        console.log(`    [${s.tier}] ${s.label}: ${s.url}`);
      }
      if (detail.sourceAttribution.disclaimer) {
        console.log(`  ⚠ ${detail.sourceAttribution.disclaimer}`);
      }
      if (detail.sourceAttribution.searchLinks) {
        console.log("  搜索链接:");
        for (const sl of detail.sourceAttribution.searchLinks) {
          console.log(`    🔍 ${sl.label}: ${sl.url}`);
        }
      }
    }

    // 保存测试结果
    const testFile = path.join(__dirname, "..", "data", `test-cold-${bookId}.json`);
    fs.writeFileSync(
      testFile,
      JSON.stringify({ detail, summary, searchConfig }, null, 2),
      "utf-8"
    );
    console.log("");
    console.log(`📁 测试结果已保存: data/test-cold-${bookId}.json`);
    return;
  }

  // ---- 批量模式 / 全量模式 ----
  if (args.includes("--batch") || args.includes("--batch-all")) {
    const batchArgs = parseBatchArgs(args);
    if (args.includes("--batch-all")) batchArgs.batchAll = true;

    const modeLabel = batchArgs.batchAll ? "BATCH-ALL（全量重处理）" : "BATCH";

    // --resume: 从上次中断处继续
    if (args.includes("--resume")) {
      const progressPath = path.join(__dirname, "..", "data", "batch-progress.json");
      if (fs.existsSync(progressPath)) {
        const prev = JSON.parse(fs.readFileSync(progressPath, "utf-8")) as BatchProgress;
        if (prev.currentQueueIndex > 0 && !args.includes("--start")) {
          batchArgs.startIndex = prev.currentQueueIndex;
          console.log(`↻ 从上次中断处继续: index=${batchArgs.startIndex}`);
          console.log(`  上次: 成功=${prev.succeeded} 失败=${prev.failed} 跳过=${prev.skipped}`);
          console.log("");
        }
      }
    }

    // 加载 .env 代理设置
    loadEnvFiles();

    await runBatch(batchArgs);
    return;
  }

  // ---- 单本模式 ----
  const bookId = args[0];
  const writeMode = args.includes("--write");
  const forceMode = args.includes("--force");

  console.log("╔══════════════════════════════════════════════════╗");
  console.log("║  Literature Data Specialist Agent              ║");
  console.log("╚══════════════════════════════════════════════════╝");
  console.log("");
  console.log(`Book ID: ${bookId}`);
  console.log(`模式: ${writeMode ? "写入" : "仅预览"}`);
  console.log(`强制覆盖: ${forceMode ? "是" : "否"}`);
  console.log("");

  // 加载 .env 代理设置
  loadEnvFiles();

  // 检查是否已有数据（非 force 模式）
  if (!forceMode) {
    try {
      const { bookDetails } = (await import("../src/lib/book-data.ts.bak")) as {
        bookDetails: Record<string, unknown>;
      };
      const existing = bookDetails[bookId];
      if (existing) {
        const detail = existing as Record<string, unknown>;
        const hasFullData =
          detail.characters &&
          Array.isArray(detail.characters) &&
          detail.characters.length > 0 &&
          detail.plotSummary &&
          typeof detail.plotSummary === "string" &&
          detail.plotSummary.length > 100;

        if (hasFullData && !writeMode) {
          console.log(
            `⚠ "${bookId}" 已有完整数据。使用 --force 覆盖，或使用 --write 更新。`
          );
          console.log("");
          console.log("现有数据预览：");
          console.log(formatWorkDetailTS(existing as WorkDetail));
          return;
        }

        if (hasFullData && writeMode) {
          console.log(
            `⚠ "${bookId}" 已有完整数据。使用 --force 强制覆盖。`
          );
          return;
        }
      }
    } catch {
      // 无法加载 book-data.ts，继续执行
    }
  }

  try {
    const singleFullSearch = args.includes("--full-search");
    const { detail } = await fetchLiteratureData(bookId, singleFullSearch);

    console.log("\n═══════════════════════════════════════════════");
    console.log("  生成的 WorkDetail：");
    console.log("═══════════════════════════════════════════════\n");
    console.log(formatWorkDetailTS(detail));
    console.log("");

    if (writeMode) {
      const success = writeToBookData(bookId, detail);
      if (success) {
        console.log("💡 提示：请手动检查生成的内容，特别是：");
        console.log("  1. 人物名称、角色、描述的准确性");
        console.log("  2. 情节摘要是否忠实于原作");
        console.log("  3. 引用文本的来源核实");
        console.log("  4. 使用 LLM 进行最终的文学润色");
        console.log("");
        console.log("⚠ 根据 Agent 约束，仅在抓取到真实文本后才进行 LLM 格式化。");
        console.log("  当前输出为原始 API 数据合成结果，建议人工审核后合并。");
      }
    } else {
      console.log("💡 预览模式。使用 --write 将结果写入 src/lib/book-data.ts");
    }

    // 数据完整性提醒
    const missingFields: string[] = [];
    if (detail.characters.length === 0) missingFields.push("characters");
    if (detail.plotSummary.length < 100) missingFields.push("plotSummary (detail)");
    if (detail.plotNodes.length === 0) missingFields.push("plotNodes");
    if (detail.themeAnalysis.length < 100) missingFields.push("themeAnalysis");
    if (detail.techniques.length < 50) missingFields.push("techniques");
    if (detail.excerpts.length === 0) missingFields.push("excerpts");

    if (missingFields.length > 0) {
      console.log("");
      console.log(`⚠ 以下字段数据不足: ${missingFields.join(", ")}`);
      console.log("  根据 Agent 策略，请手动从以下来源补充：");
      console.log("  • SparkNotes: https://www.sparknotes.com/lit/");
      console.log("  • CliffsNotes: https://www.cliffsnotes.com/");
      console.log("  • Wikipedia (完整页面)");
      console.log("  • Google Books 预览");
    }
  } catch (err) {
    console.error("\n❌ 抓取失败:", err instanceof Error ? err.message : err);
    process.exit(1);
  }
}

/** 加载 .env.local 和 .env 中的环境变量（代理等） */
function loadEnvFiles() {
  const candidates = [
    path.join(__dirname, "..", ".env.local"),
    path.join(__dirname, "..", ".env"),
  ];
  for (const filePath of candidates) {
    if (!fs.existsSync(filePath)) continue;
    const content = fs.readFileSync(filePath, "utf-8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIdx = trimmed.indexOf("=");
      if (eqIdx === -1) continue;
      const key = trimmed.slice(0, eqIdx).trim();
      const value = trimmed.slice(eqIdx + 1).trim();
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  }

  // 报告代理设置
  const proxy = process.env.HTTPS_PROXY || process.env.HTTP_PROXY || process.env.https_proxy || process.env.http_proxy;
  if (proxy) {
    console.log(`🔗 检测到代理: ${proxy}`);
  }
}

main();
