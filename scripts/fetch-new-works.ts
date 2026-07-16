#!/usr/bin/env npx tsx
// ================================================================
// 每日新文抓取 — 纯文学内容聚合
// 固定配额：中文 2 篇 / 英文 2 篇 / 其他（日韩等）2 篇
// 用法: npx tsx scripts/fetch-new-works.ts [--dry-run] [--ci]
//
// 关键设计：
// - 中文来源全部使用出海中文媒体（GitHub Actions 海外服务器直接可达）
// - 英文来源：New Yorker / Paris Review / Granta / LitHub / Poetry Foundation / Asymptote
// - 其他地区：Words Without Borders / KLTI Korea / Japan Times / Korean Lit Now
// - 每个来源每天最多贡献 2 篇，避免单一来源刷屏
// - 任一语言类别不足额时，AI 生成补位文章（≥500 字，含 fullContent）
// - 每篇文章都有 fullContent 字段
// ================================================================

import * as fs from "fs";
import * as path from "path";

const OUTPUT_PATH = path.join(__dirname, "..", "data", "daily-new-works.json");
const ARCHIVE_DIR = path.join(__dirname, "..", "data", "new-works-archive");
const USER_AGENT =
  "WorldLiteratureBot/1.0 (+https://github.com/world-literature)";
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY || "";

type ArticleType =
  | "fiction"
  | "essay"
  | "poetry"
  | "criticism"
  | "interview"
  | "translation"
  | "play"
  | "nonfiction";

interface Article {
  id: string;
  title: string;
  author: string;
  source: string;
  sourceUrl: string;
  excerpt: string;
  fullContent: string;
  criticism: string;
  language: string;
  tags: string[];
  type: ArticleType;
  publishedAt: string;
  collectedAt: string;
}

interface SourceDef {
  name: string;
  rss?: string;
  fallbackUrl?: string;
  lang: string;
  category: ArticleType;
  maxArticles: number;
}

// ================================================================
// 纯文学来源 — 全部从 GitHub Actions 海外服务器直接可达
// ================================================================

// 中文出海媒体（面向海外用户，无需代理）
const ZH_SOURCES: SourceDef[] = [
  {
    name: "端传媒文化",
    rss: "https://theinitium.com/feed/",
    fallbackUrl: "https://theinitium.com/channel/culture/",
    lang: "zh",
    category: "criticism",
    maxArticles: 2,
  },
  {
    name: "联合早报文艺",
    rss: "https://www.zaobao.com.sg/culture/rss.xml",
    fallbackUrl: "https://www.zaobao.com.sg/culture",
    lang: "zh",
    category: "essay",
    maxArticles: 2,
  },
  {
    name: "香港文学馆",
    rss: "https://www.hkliterature.net/feed/",
    fallbackUrl: "https://www.hkliterature.net/",
    lang: "zh",
    category: "criticism",
    maxArticles: 2,
  },
  {
    name: "明报文化",
    rss: "https://news.mingpao.com/rss/culture.xml",
    fallbackUrl: "https://news.mingpao.com/ins/文化",
    lang: "zh",
    category: "essay",
    maxArticles: 2,
  },
  {
    name: "字花文学",
    rss: "https://zihua.com.hk/feed/",
    fallbackUrl: "https://zihua.com.hk/",
    lang: "zh",
    category: "fiction",
    maxArticles: 2,
  },
  {
    name: "BBC中文文化",
    rss: "https://www.bbc.com/zhongwen/simp/culture_and_arts/rss.xml",
    fallbackUrl: "https://www.bbc.com/zhongwen/simp/topics/culture_and_arts",
    lang: "zh",
    category: "criticism",
    maxArticles: 2,
  },
  {
    name: "澳门文学馆",
    rss: "https://www.macauliterature.org.mo/feed/",
    fallbackUrl: "https://www.macauliterature.org.mo/",
    lang: "zh",
    category: "criticism",
    maxArticles: 2,
  },
];

// 英文文学来源
const EN_SOURCES: SourceDef[] = [
  {
    name: "The New Yorker Fiction",
    rss: "https://www.newyorker.com/feed/fiction",
    lang: "en",
    category: "fiction",
    maxArticles: 2,
  },
  {
    name: "The New Yorker Poetry",
    rss: "https://www.newyorker.com/feed/poems",
    lang: "en",
    category: "poetry",
    maxArticles: 2,
  },
  {
    name: "The Paris Review",
    rss: "https://www.theparisreview.org/feed/",
    lang: "en",
    category: "interview",
    maxArticles: 2,
  },
  {
    name: "Granta",
    rss: "https://granta.com/feed/",
    lang: "en",
    category: "fiction",
    maxArticles: 2,
  },
  {
    name: "Literary Hub",
    rss: "https://lithub.com/feed/",
    lang: "en",
    category: "criticism",
    maxArticles: 2,
  },
  {
    name: "Poetry Foundation",
    rss: "https://www.poetryfoundation.org/feed",
    lang: "en",
    category: "poetry",
    maxArticles: 2,
  },
  {
    name: "Asymptote Journal",
    rss: "https://www.asymptotejournal.com/feed/",
    lang: "en",
    category: "translation",
    maxArticles: 2,
  },
];

// 其他地区：日韩 + 多语种译介
const OTHER_SOURCES: SourceDef[] = [
  {
    name: "Words Without Borders",
    rss: "https://wordswithoutborders.org/feed/",
    lang: "other",
    category: "translation",
    maxArticles: 2,
  },
  {
    name: "KLTI Korea",
    rss: "https://www.klti.or.kr/eng/rss/noticeRss.do",
    lang: "other",
    category: "translation",
    maxArticles: 2,
  },
  {
    name: "The Japan Times Culture",
    rss: "https://www.japantimes.co.jp/culture/feed/",
    fallbackUrl: "https://www.japantimes.co.jp/culture/",
    lang: "other",
    category: "essay",
    maxArticles: 2,
  },
  {
    name: "Korean Literature Now",
    rss: "https://koreanliteraturenow.com/rss.xml",
    fallbackUrl: "https://koreanliteraturenow.com/",
    lang: "other",
    category: "criticism",
    maxArticles: 2,
  },
];

// 配额：中文 2 / 英文 2 / 其他 2
const QUOTAS: Record<string, number> = { zh: 2, en: 2, other: 2 };

// ================================================================
// RSS XML 直接解析
// ================================================================

async function fetchRSSDirect(src: SourceDef): Promise<Article[]> {
  if (!src.rss) return [];
  try {
    const resp = await fetch(src.rss, {
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "application/xml,text/xml,application/rss+xml",
      },
      signal: AbortSignal.timeout(12000),
    });
    if (!resp.ok) return [];
    return parseRSSXML(await resp.text(), src);
  } catch {
    return [];
  }
}

function parseRSSXML(xml: string, src: SourceDef): Article[] {
  const articles: Article[] = [];
  let match,
    count = 0;
  const itemRegex = /<item>([\s\S]*?)<\/item>/gi;

  while (
    (match = itemRegex.exec(xml)) !== null &&
    count < src.maxArticles
  ) {
    const b = match[1];
    const title = extractTag(b, "title");
    const link = extractTag(b, "link");
    const desc = extractTag(b, "description");
    const pubDate = extractTag(b, "pubDate");
    const author =
      extractTag(b, "author") || extractTag(b, "dc:creator");
    if (!title || title.length < 8) continue;
    const excerpt = stripHtml(desc || "");
    articles.push(
      makeArticle(
        src,
        `${src.lang}-rssd-${Date.now()}-${count}`,
        stripHtml(title),
        author || src.name,
        link,
        excerpt,
        excerpt, // fullContent = excerpt for RSS
        pubDate
      )
    );
    count++;
  }

  // Atom feed fallback
  if (articles.length === 0) {
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/gi;
    while (
      (match = entryRegex.exec(xml)) !== null &&
      articles.length < src.maxArticles
    ) {
      const b = match[1];
      const title = extractTag(b, "title");
      const lm = b.match(/<link[^>]*href="([^"]*)"/);
      const link = lm?.[1] || extractTag(b, "link");
      const desc = extractTag(b, "summary") || extractTag(b, "content");
      const pubDate =
        extractTag(b, "published") || extractTag(b, "updated");
      const author = extractTag(b, "author") || extractTag(b, "name");
      if (!title || title.length < 8) continue;
      const excerpt = stripHtml(desc || "");
      articles.push(
        makeArticle(
          src,
          `${src.lang}-atom-${Date.now()}-${articles.length}`,
          stripHtml(title),
          author || src.name,
          link || "",
          excerpt,
          excerpt,
          pubDate
        )
      );
    }
  }
  return articles;
}

function extractTag(xml: string, tag: string): string {
  const cdata = xml.match(
    new RegExp(
      `<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`,
      "i"
    )
  );
  if (cdata) return cdata[1];
  const plain = xml.match(
    new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i")
  );
  return plain?.[1] || "";
}

// ================================================================
// rss2json 代理
// ================================================================

async function fetchRSSProxy(src: SourceDef): Promise<Article[]> {
  if (!src.rss) return [];
  try {
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(src.rss)}`;
    const resp = await fetch(apiUrl, {
      headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
      signal: AbortSignal.timeout(15000),
    });
    if (!resp.ok) return [];
    const data = (await resp.json()) as {
      items?: Array<{
        title: string;
        author: string;
        link: string;
        description: string;
        pubDate: string;
        content?: string;
      }>;
    };
    if (!data.items) return [];
    return data.items.slice(0, src.maxArticles).map((item, i) => {
      const excerpt = stripHtml(
        item.description || item.content || ""
      );
      return makeArticle(
        src,
        `${src.lang}-rss-${Date.now()}-${i.toString(36)}`,
        item.title || "Untitled",
        item.author || src.name,
        item.link || "",
        excerpt,
        excerpt, // fullContent = excerpt for RSS
        item.pubDate
      );
    });
  } catch {
    return [];
  }
}

// ================================================================
// HTML 直接抓取（fallback 当 RSS 不可用时）
// ================================================================

async function fetchDirect(src: SourceDef): Promise<Article[]> {
  if (!src.fallbackUrl) return [];
  try {
    const resp = await fetch(src.fallbackUrl, {
      headers: { "User-Agent": USER_AGENT, Accept: "text/html" },
      signal: AbortSignal.timeout(12000),
    });
    if (!resp.ok) return [];
    return extractArticlesFromHTML(await resp.text(), src);
  } catch {
    return [];
  }
}

function extractArticlesFromHTML(
  html: string,
  src: SourceDef
): Article[] {
  const articles: Article[] = [];
  const seen = new Set<string>();
  const patterns: RegExp[] = [
    /<h[23][^>]*>\s*<a[^>]*href="([^"]*)"[^>]*>([^<]+)<\/a>\s*<\/h[23]>/gi,
    /<a[^>]*class="[^"]*title[^"]*"[^>]*href="([^"]*)"[^>]*>([^<]+)<\/a>/gi,
    /<li[^>]*>\s*<a[^>]*href="([^"]*)"[^>]*>([^<]{10,80})<\/a>/gi,
  ];

  for (const pattern of patterns) {
    if (articles.length >= src.maxArticles) break;
    let match;
    while (
      (match = pattern.exec(html)) !== null &&
      articles.length < src.maxArticles
    ) {
      const url = match[1];
      const title = stripHtml(match[2]);
      if (title.length < 10) continue;
      if (
        /^(HOME|ABOUT|CONTACT|LOGIN|SIGN|MENU|搜索|首页|关于|联系|登录|注册|更多|全部)$/i.test(
          title
        )
      )
        continue;
      if (src.lang === "zh" && !/[一-鿿]{4}/.test(title)) continue;
      const key = title.slice(0, 30);
      if (seen.has(key)) continue;
      seen.add(key);

      const surrounding = html.slice(match.index, match.index + 3000);
      const paraMatch = surrounding.match(
        /<p[^>]*>([^<]{50,400})<\/p>/i
      );
      const fullUrl = url.startsWith("http")
        ? url
        : src.fallbackUrl
          ? new URL(url, src.fallbackUrl).href
          : url;
      const excerpt = paraMatch
        ? stripHtml(paraMatch[1]).slice(0, 500)
        : "";
      articles.push(
        makeArticle(
          src,
          `${src.lang}-html-${Date.now()}-${articles.length}`,
          title,
          src.name,
          fullUrl,
          excerpt,
          excerpt,
          new Date().toISOString()
        )
      );
    }
  }
  return articles;
}

// ================================================================
// AI 补位文章 — 任一语言类别不足额时生成（≥500 字，含 fullContent）
// ================================================================

interface FillInConfig {
  lang: string;
  langName: string;
  topicDirections: string[];
  systemPrompt: string;
}

const FILL_IN_CONFIGS: Record<string, FillInConfig> = {
  zh: {
    lang: "zh",
    langName: "中文",
    topicDirections: [
      "华语新作评介",
      "翻译文学推荐",
      "经典重读",
      "作家诞辰纪念",
      "文学现象观察",
      "诗歌赏析",
      "散文荐读",
      "海外华文文学",
    ],
    systemPrompt:
      "你是一位资深中文文学编辑，为世界文学总站撰写荐评文章。文章应有独立见解、文学深度，不少于500字。",
  },
  en: {
    lang: "en",
    langName: "English",
    topicDirections: [
      "contemporary fiction review",
      "poetry collection appreciation",
      "literary criticism essay",
      "author profile and interview insights",
      "translation and world literature",
      "classic revisited",
      "literary movement analysis",
      "independent publishing spotlight",
    ],
    systemPrompt:
      "You are a senior literary editor writing for a world literature hub. Write a literary commentary or essay with independent insight and depth, at least 500 words.",
  },
  other: {
    lang: "other",
    langName: "日韩/其他",
    topicDirections: [
      "Japanese literature in translation",
      "Korean literary renaissance",
      "world literature in translation",
      "cross-cultural literary dialogue",
      "Asian literary traditions and modernity",
      "emerging voices in global fiction",
      "poetry across borders",
      "literary translation as art",
    ],
    systemPrompt:
      "You are a senior literary editor writing for a world literature hub. Write a literary commentary or essay focused on world literature, translation, and cross-cultural literary exchange, at least 500 words. Output in English.",
  },
};

async function generateFillIns(
  lang: string,
  count: number
): Promise<Article[]> {
  if (!ANTHROPIC_KEY || count <= 0) return [];

  const config = FILL_IN_CONFIGS[lang];
  if (!config) return [];

  const label =
    { zh: "中文", en: "英文", other: "日韩/其他" }[lang] || lang;
  console.log(`   🤖 ${label}不足${count}篇，AI 生成补位文章（≥500字）...`);

  const articles: Article[] = [];
  // Shuffle topic directions for variety
  const shuffled = [...config.topicDirections].sort(
    () => Math.random() - 0.5
  );

  for (let i = 0; i < count; i++) {
    const direction = shuffled[i % shuffled.length];
    try {
      const resp = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": ANTHROPIC_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 2048,
          messages: [
            {
              role: "user",
              content: `${config.systemPrompt}\n\n主题方向：${direction}\n\n请以JSON格式输出（不要markdown代码块）：\n{"title":"文章标题","body":"正文内容（不少于500字）","author":"署名"}`,
            },
          ],
        }),
        signal: AbortSignal.timeout(60000),
      });

      if (!resp.ok) {
        console.log(
          `   ⚠ AI补位 #${i + 1} API error: HTTP ${resp.status}`
        );
        continue;
      }

      const data = (await resp.json()) as {
        content?: Array<{ text: string }>;
      };
      const text = data.content?.[0]?.text || "";
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        console.log(`   ⚠ AI补位 #${i + 1} JSON parse failed`);
        continue;
      }

      const parsed = JSON.parse(jsonMatch[0]);
      const { title, body, author } = parsed;
      if (!title || !body) {
        console.log(`   ⚠ AI补位 #${i + 1} missing title/body`);
        continue;
      }

      const wordCount =
        lang === "zh"
          ? body.length // Chinese: character count
          : body.split(/\s+/).length; // English: word count
      console.log(
        `   ✓ AI补位 #${i + 1} [${lang}/${direction}]: ${title} (${wordCount}字/词)`
      );

      articles.push({
        id: `${lang}-ai-fill-${Date.now()}-${i}`,
        title,
        author: author || (lang === "zh" ? "编辑荐评" : "AI Editor"),
        source:
          lang === "zh" ? "AI 编辑荐评" : "AI Editorial",
        sourceUrl: "",
        excerpt: body.slice(0, 500),
        fullContent: body,
        criticism: "",
        language: lang,
        tags:
          lang === "zh"
            ? ["编辑荐评", "文学评论"]
            : ["Editorial", "Literary Commentary"],
        type: "criticism" as ArticleType,
        publishedAt: new Date().toISOString(),
        collectedAt: new Date().toISOString(),
      });
    } catch (e) {
      console.log(
        `   ⚠ AI补位 #${i + 1} 失败: ${(e as Error).message}`
      );
    }
  }

  return articles;
}

// ================================================================
// 关键词前过滤 — 快速排除明显非文学内容
// ================================================================

const BLOCK_KEYWORDS = [
  // 新闻/政治
  "election", "president", "senate", "congress", "vote", "bill ", "lawmakers",
  "trump", "biden", "putin", "xi jinping", "ceasefire", "sanction",
  "选举", "总统", "国会", "投票", "法案", "制裁", "停火", "武力",
  "特朗普", "拜登", "习近平", "普京", "赖清德", "蔡英文", "中共", "国民党",
  "戰爭", "战争", "军事", "解放", "反共", "民主化", "台独", "港独",
  "犯罪", "血腥", "谋杀", "袭击", "爆炸", "抗议", "示威", "镇压",
  "政府", "外交", "谈判", "领土", "主权", "国防", "军队", "武器",
  // 商业/娱乐
  "stock", "market cap", "ipo", "revenue", "profit", "billion deal",
  "股价", "市值", "融资", "营收", "净利润", "上市",
  "celebrity", "red carpet", "box office",
  "演唱会", "票房", "红毯", "真人秀", "绯闻",
  // 书单/营销
  "10 books", "best books of", "must-read", "top 5",
  "必读", "推荐书单", "十大", "不可不读",
];

const LITERARY_SIGNALS = [
  "小说", "诗歌", "诗人", "散文", "随笔", "文学", "作家", "翻译",
  "读书", "阅读", "书评", "文艺", "诗", "文", "篇", "章",
  "fiction", "novel", "poem", "poetry", "essay", "literary",
  "literature", "writer", "author", "book", "reading", "review",
  "translation", "translator", "story", "stories", "verse",
  "novelist", "poet", "critic", "narrative", "prose",
];

function isNonLiterary(title: string, excerpt: string, lang: string): boolean {
  const text = (title + " " + excerpt).toLowerCase();
  for (const kw of BLOCK_KEYWORDS) {
    if (title.includes(kw) || excerpt.includes(kw)) return true;
  }
  if (lang === "zh") {
    const hasLiterarySignal = LITERARY_SIGNALS.some(
      (s) => title.includes(s) || excerpt.includes(s)
    );
    if (!hasLiterarySignal) return true;
  }
  return false;
}

// ================================================================
// AI 内容分类 — 批量判断是否属于文学范畴 + 标注具体类型
// ================================================================

async function classifyWithAI(articles: Article[]): Promise<Article[]> {
  if (!ANTHROPIC_KEY || articles.length === 0) return articles;

  const preFiltered = articles.filter(
    (a) => !isNonLiterary(a.title, a.excerpt, a.language)
  );
  const blocked = articles.length - preFiltered.length;
  if (blocked > 0)
    console.log(`   🚫 关键词过滤: ${blocked} 篇非文学内容`);

  if (preFiltered.length === 0) return [];

  const items = preFiltered
    .map(
      (a, i) =>
        `[${i}] ${a.title.slice(0, 80)}\n   source: ${a.source}\n   text: ${a.excerpt.slice(0, 200)}`
    )
    .join("\n\n");

  try {
    const resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1024,
        messages: [
          {
            role: "user",
            content: `你是一个文学内容过滤器。判断以下${preFiltered.length}篇文章是否属于文学范畴（小说/散文/诗歌/书评/作家访谈/翻译文学）。新闻、政治、商业内容应拒绝。

对每篇文章输出一行，格式: [序号] yes|no type
type 必须是以下之一: fiction, essay, poetry, criticism, interview, translation, play, nonfiction, none

示例:
[0] yes fiction
[1] no none

${items}`,
          },
        ],
      }),
      signal: AbortSignal.timeout(30000),
    });

    if (!resp.ok) {
      console.log("   ⚠ AI 分类 API 失败，跳过筛选");
      return preFiltered;
    }

    const data = (await resp.json()) as {
      content?: Array<{ text: string }>;
    };
    const text = data.content?.[0]?.text || "";

    const results: Article[] = [];
    const lines = text.split("\n");
    for (const line of lines) {
      const m = line.match(/\[(\d+)\]\s*(yes|no)\s*(\w+)/i);
      if (!m) continue;
      const idx = parseInt(m[1], 10);
      const isLit = m[2].toLowerCase() === "yes";
      const type = m[3].toLowerCase() as ArticleType;

      if (isLit && idx >= 0 && idx < preFiltered.length) {
        const article = { ...preFiltered[idx], type };
        const typeTags: Record<string, string[]> = {
          fiction: ["虚构文学"],
          essay: ["散文"],
          poetry: ["诗歌"],
          criticism: ["文学评论"],
          interview: ["作家访谈"],
          translation: ["翻译文学"],
          play: ["戏剧"],
          nonfiction: ["非虚构"],
        };
        article.tags = [
          ...new Set([
            ...article.tags,
            ...(typeTags[type] || ["当代文学"]),
          ]),
        ];
        results.push(article);
      }
    }

    const filtered = preFiltered.length - results.length;
    console.log(
      `   🎯 AI 分类: ${results.length} 篇文学 ✓ / ${filtered} 篇非文学 ✗`
    );
    return results;
  } catch (e) {
    console.log(`   ⚠ AI 分类异常: ${(e as Error).message}`);
    return preFiltered;
  }
}

// ================================================================
// 组装 / 工具
// ================================================================

function makeArticle(
  src: SourceDef,
  id: string,
  title: string,
  author: string,
  sourceUrl: string,
  excerpt: string,
  fullContent: string,
  publishedAt: string
): Article {
  return {
    id,
    title,
    author,
    source: src.name,
    sourceUrl,
    excerpt: excerpt.slice(0, 500),
    fullContent: fullContent || excerpt.slice(0, 500),
    criticism: "",
    language: src.lang,
    tags: [src.category],
    type: src.category,
    publishedAt: publishedAt || new Date().toISOString(),
    collectedAt: new Date().toISOString(),
  };
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#?\w+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function dedupeByTitle(articles: Article[]): Article[] {
  const seen = new Set<string>();
  return articles.filter((a) => {
    const key = a.title
      .toLowerCase()
      .replace(/[^a-z0-9一-鿿]/g, "")
      .slice(0, 50);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const TYPE_LABELS: Record<string, string> = {
  fiction: "小说",
  essay: "散文",
  poetry: "诗歌",
  criticism: "评论",
  interview: "访谈",
  translation: "译介",
  play: "戏剧",
  nonfiction: "非虚构",
};

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

// ================================================================
// 主流程
// ================================================================

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const isCI = args.includes("--ci");

  const modeLabel = isCI ? "CI" : "Local";
  console.log("╔══════════════════════════════════════════════════╗");
  console.log(
    `║  Daily New Works v2 — ${modeLabel} Mode (Literary Only)`.padEnd(
      51
    ) + "║"
  );
  console.log("╚══════════════════════════════════════════════════╝\n");

  const allByLang: Record<string, Article[]> = {};

  // ---- 抓取所有语言来源 ----
  for (const [lang, sources, label] of [
    ["zh", ZH_SOURCES, "中文"],
    ["en", EN_SOURCES, "英文"],
    ["other", OTHER_SOURCES, "日韩/其他"],
  ] as [string, SourceDef[], string][]) {
    console.log(`📡 [${label}] 抓取中...`);
    const collected: Article[] = [];
    for (const src of sources) {
      let articles: Article[] = [];
      // 三级抓取策略：RSS Direct → RSS Proxy → HTML Direct
      if (src.rss) {
        articles = await fetchRSSDirect(src);
        if (articles.length === 0)
          articles = await fetchRSSProxy(src);
      }
      if (articles.length === 0 && src.fallbackUrl)
        articles = await fetchDirect(src);

      console.log(`   ${src.name}: ${articles.length} 篇`);
      collected.push(...articles);
      await sleep(600); // 请求间隔，避免触发限流
    }

    // AI 分类过滤
    if (collected.length > 0 && ANTHROPIC_KEY) {
      console.log(`   🔍 AI 内容审核中...`);
      const filtered = await classifyWithAI(collected);
      allByLang[lang] = filtered;
    } else {
      const filtered = collected.filter(
        (a) => !isNonLiterary(a.title, a.excerpt, a.language)
      );
      if (collected.length - filtered.length > 0)
        console.log(
          `   🚫 关键词过滤: ${collected.length - filtered.length} 篇`
        );
      allByLang[lang] = filtered;
    }

    console.log(
      `   📊 [${label}] 有效文学文章: ${allByLang[lang]?.length || 0} 篇`
    );
  }

  // ---- 兜底补位：任一语言类别不足配额时 AI 生成 ----
  for (const [lang, quota] of Object.entries(QUOTAS)) {
    const collected = allByLang[lang]?.length || 0;
    const shortfall = quota - collected;

    if (shortfall > 0) {
      const aiArticles = await generateFillIns(lang, shortfall);
      if (aiArticles.length > 0) {
        allByLang[lang] = [
          ...(allByLang[lang] || []),
          ...aiArticles,
        ];
        console.log(
          `   🤖 AI 补位 [${lang}]: ${aiArticles.length} 篇`
        );
      }
    }
  }

  // ---- 配额裁剪：严格 zh:2 / en:2 / other:2 ----
  const final: Article[] = [];

  for (const lang of ["zh", "en", "other"]) {
    const slice = (allByLang[lang] || []).slice(0, QUOTAS[lang]);
    final.push(...slice);

    if (slice.length < QUOTAS[lang]) {
      const short = QUOTAS[lang] - slice.length;
      console.log(
        `   ⚠ ${lang} 仍然不足: 仅有 ${slice.length} 篇 (缺 ${short} 篇)`
      );
    }
  }

  const unique = dedupeByTitle(final);

  // ---- 确保恰好 6 篇 ----
  if (unique.length < 6) {
    console.log(
      `   ⚠ 总计 ${unique.length} 篇，不足 6 篇配额`
    );
  }

  // ---- 统计 ----
  const counts: Record<string, number> = {};
  const types: Record<string, number> = {};
  for (const a of unique) {
    counts[a.language] = (counts[a.language] || 0) + 1;
    types[a.type] = (types[a.type] || 0) + 1;
  }

  console.log(`\n📊 最终: ${unique.length} 篇`);
  for (const [lang, cnt] of Object.entries(counts)) {
    const label =
      { zh: "中文", en: "英文", other: "日韩/其他" }[lang] || lang;
    console.log(
      `   ${label}: ${cnt} 篇 (配额 ${QUOTAS[lang] || "?"})`
    );
  }
  console.log(
    "   类型分布:",
    Object.entries(types)
      .map(([t, c]) => `${TYPE_LABELS[t] || t}×${c}`)
      .join(" ")
  );

  const today = new Date().toISOString().slice(0, 10);
  const output = { date: today, articles: unique };

  if (!dryRun) {
    const dir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(
      OUTPUT_PATH,
      JSON.stringify(output, null, 2),
      "utf-8"
    );
    console.log(`\n✅ ${OUTPUT_PATH}`);

    if (!fs.existsSync(ARCHIVE_DIR))
      fs.mkdirSync(ARCHIVE_DIR, { recursive: true });
    fs.writeFileSync(
      path.join(ARCHIVE_DIR, `${today}.json`),
      JSON.stringify(output, null, 2),
      "utf-8"
    );
    console.log(`📁 ${ARCHIVE_DIR}/${today}.json`);
  } else {
    console.log("\n🔍 [dry-run] 预览:");
    for (const a of unique)
      console.log(
        `   [${a.language}/${a.type}/${a.source}] ${a.title.slice(0, 70)}`
      );
  }
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
