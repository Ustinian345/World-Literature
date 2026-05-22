#!/usr/bin/env npx tsx
// ================================================================
// 每日新文抓取 — 纯文学内容聚合 (fiction / essay / poetry / criticism)
// 目标比例：中文 40% / 英文 40% / 其他 20%
// 用法: npx tsx scripts/fetch-new-works.ts [--dry-run] [--ci|--local]
// ================================================================

import * as fs from "fs";
import * as path from "path";

const OUTPUT_PATH = path.join(__dirname, "..", "data", "daily-new-works.json");
const ARCHIVE_DIR = path.join(__dirname, "..", "data", "new-works-archive");
const USER_AGENT = "WorldLiteratureBot/1.0 (+https://github.com/world-literature)";
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY || "";

type ArticleType = "fiction" | "essay" | "poetry" | "criticism" | "interview" | "translation" | "play" | "nonfiction";

interface Article {
  id: string; title: string; author: string;
  source: string; sourceUrl: string; excerpt: string;
  criticism: string; language: string; tags: string[];
  type: ArticleType;
  publishedAt: string; collectedAt: string;
}

interface SourceDef {
  name: string; rss?: string; fallbackUrl?: string;
  lang: string; category: ArticleType; maxArticles: number;
}

// ================================================================
// 纯文学来源 — 专注创作/评论，不含新闻综合媒体
// ================================================================

const CI_ZH_SOURCES: SourceDef[] = [
  { name: "端传媒文化", rss: "https://theinitium.com/feed/", fallbackUrl: "https://theinitium.com/channel/culture/", lang: "zh", category: "criticism", maxArticles: 2 },
  { name: "联合早报文艺", rss: "https://www.zaobao.com.sg/culture/rss.xml", fallbackUrl: "https://www.zaobao.com.sg/culture", lang: "zh", category: "essay", maxArticles: 2 },
  { name: "香港文学馆", rss: "https://www.hkliterature.net/feed/", fallbackUrl: "https://www.hkliterature.net/", lang: "zh", category: "criticism", maxArticles: 2 },
  { name: "明报文化", rss: "https://news.mingpao.com/rss/culture.xml", fallbackUrl: "https://news.mingpao.com/ins/文化", lang: "zh", category: "essay", maxArticles: 2 },
  { name: "字花文学", rss: "https://zihua.com.hk/feed/", fallbackUrl: "https://zihua.com.hk/", lang: "zh", category: "fiction", maxArticles: 2 },
  { name: "BBC中文文化", rss: "https://www.bbc.com/zhongwen/simp/culture_and_arts/rss.xml", fallbackUrl: "https://www.bbc.com/zhongwen/simp/topics/culture_and_arts", lang: "zh", category: "criticism", maxArticles: 2 },
  { name: "澳门文学馆", rss: "https://www.macauliterature.org.mo/feed/", fallbackUrl: "https://www.macauliterature.org.mo/", lang: "zh", category: "criticism", maxArticles: 2 },
];

const LOCAL_ZH_SOURCES: SourceDef[] = [
  { name: "澎湃思想市场", rss: "https://www.thepaper.cn/rss.jsp", fallbackUrl: "https://www.thepaper.cn/list_155", lang: "zh", category: "criticism", maxArticles: 2 },
  { name: "豆瓣读书", fallbackUrl: "https://book.douban.com/", lang: "zh", category: "criticism", maxArticles: 2 },
  { name: "知乎文学", fallbackUrl: "https://www.zhihu.com/topic/19551221/hot", lang: "zh", category: "criticism", maxArticles: 2 },
];

// ---- 英文文学来源 ----
const EN_SOURCES: SourceDef[] = [
  { name: "The New Yorker Fiction", rss: "https://www.newyorker.com/feed/fiction", lang: "en", category: "fiction", maxArticles: 2 },
  { name: "The New Yorker Poetry", rss: "https://www.newyorker.com/feed/poems", lang: "en", category: "poetry", maxArticles: 2 },
  { name: "The Paris Review", rss: "https://www.theparisreview.org/feed/", lang: "en", category: "interview", maxArticles: 2 },
  { name: "Granta", rss: "https://granta.com/feed/", lang: "en", category: "fiction", maxArticles: 2 },
  { name: "Literary Hub", rss: "https://lithub.com/feed/", lang: "en", category: "criticism", maxArticles: 2 },
  { name: "Poetry Foundation", rss: "https://www.poetryfoundation.org/feed", lang: "en", category: "poetry", maxArticles: 2 },
  { name: "Words Without Borders", rss: "https://wordswithoutborders.org/feed/", lang: "en", category: "translation", maxArticles: 2 },
  { name: "Asymptote Journal", rss: "https://www.asymptotejournal.com/feed/", lang: "en", category: "translation", maxArticles: 2 },
];

// ---- 其他地区 ----
const OTHER_SOURCES: SourceDef[] = [
  { name: "KLTI Korea", rss: "https://www.klti.or.kr/eng/rss/noticeRss.do", lang: "other", category: "translation", maxArticles: 2 },
  { name: "Words Without Borders Asia", rss: "https://wordswithoutborders.org/region/asia/feed/", lang: "other", category: "translation", maxArticles: 2 },
];

const QUOTAS: Record<string, number> = { zh: 4, en: 4, other: 2 };

// ================================================================
// RSS XML 直接解析
// ================================================================

async function fetchRSSDirect(src: SourceDef): Promise<Article[]> {
  if (!src.rss) return [];
  try {
    const resp = await fetch(src.rss, {
      headers: { "User-Agent": USER_AGENT, Accept: "application/xml,text/xml" },
      signal: AbortSignal.timeout(12000),
    });
    if (!resp.ok) return [];
    return parseRSSXML(await resp.text(), src);
  } catch { return []; }
}

function parseRSSXML(xml: string, src: SourceDef): Article[] {
  const articles: Article[] = [];
  let match, count = 0;
  const itemRegex = /<item>([\s\S]*?)<\/item>/gi;

  while ((match = itemRegex.exec(xml)) !== null && count < src.maxArticles) {
    const b = match[1];
    const title = extractTag(b, "title");
    const link = extractTag(b, "link");
    const desc = extractTag(b, "description");
    const pubDate = extractTag(b, "pubDate");
    const author = extractTag(b, "author") || extractTag(b, "dc:creator");
    if (!title || title.length < 8) continue;
    articles.push(makeArticle(src, `${src.lang}-rssd-${Date.now()}-${count}`, stripHtml(title), author || src.name, link, stripHtml(desc || ""), pubDate));
    count++;
  }

  // Atom
  if (articles.length === 0) {
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/gi;
    while ((match = entryRegex.exec(xml)) !== null && articles.length < src.maxArticles) {
      const b = match[1];
      const title = extractTag(b, "title");
      const lm = b.match(/<link[^>]*href="([^"]*)"/);
      const link = lm?.[1] || extractTag(b, "link");
      const desc = extractTag(b, "summary") || extractTag(b, "content");
      const pubDate = extractTag(b, "published") || extractTag(b, "updated");
      const author = extractTag(b, "author") || extractTag(b, "name");
      if (!title || title.length < 8) continue;
      articles.push(makeArticle(src, `${src.lang}-atom-${Date.now()}-${articles.length}`, stripHtml(title), author || src.name, link || "", stripHtml(desc || ""), pubDate));
    }
  }
  return articles;
}

function extractTag(xml: string, tag: string): string {
  const cdata = xml.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`, "i"));
  if (cdata) return cdata[1];
  const plain = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"));
  return plain?.[1] || "";
}

// ================================================================
// rss2json proxy
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
    const data = (await resp.json()) as { items?: Array<{ title: string; author: string; link: string; description: string; pubDate: string; content?: string }> };
    if (!data.items) return [];
    return data.items.slice(0, src.maxArticles).map((item, i) =>
      makeArticle(src, `${src.lang}-rss-${Date.now()}-${i.toString(36)}`, item.title || "Untitled", item.author || src.name, item.link || "", item.description || item.content || "", item.pubDate)
    );
  } catch { return []; }
}

// ================================================================
// HTML 直接抓取
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
  } catch { return []; }
}

function extractArticlesFromHTML(html: string, src: SourceDef): Article[] {
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
    while ((match = pattern.exec(html)) !== null && articles.length < src.maxArticles) {
      const url = match[1];
      const title = stripHtml(match[2]);
      if (title.length < 10) continue;
      if (/^(HOME|ABOUT|CONTACT|LOGIN|SIGN|MENU|搜索|首页|关于|联系|登录|注册|更多|全部)$/i.test(title)) continue;
      if (src.lang === "zh" && !/[一-鿿]{4}/.test(title)) continue;
      const key = title.slice(0, 30);
      if (seen.has(key)) continue;
      seen.add(key);

      const surrounding = html.slice(match.index, match.index + 3000);
      const paraMatch = surrounding.match(/<p[^>]*>([^<]{50,400})<\/p>/i);
      const fullUrl = url.startsWith("http") ? url : (src.fallbackUrl ? new URL(url, src.fallbackUrl).href : url);
      articles.push(makeArticle(src, `${src.lang}-html-${Date.now()}-${articles.length}`, title, src.name, fullUrl, paraMatch ? stripHtml(paraMatch[1]).slice(0, 500) : "", new Date().toISOString()));
    }
  }
  return articles;
}

// ================================================================
// AI 编辑荐评（中文源全失败时补位）
// ================================================================

async function generateEditorial(): Promise<Article[]> {
  if (!ANTHROPIC_KEY) return [];
  console.log("   🤖 中文来源全失败，AI 生成编辑荐评...");
  try {
    const resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": ANTHROPIC_KEY, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({
        model: "claude-sonnet-4-6", max_tokens: 1024,
        messages: [{ role: "user", content: `你是世界文学总站的中文编辑。写一篇200字的中文文学荐评。主题可选：近期华语文学新作/经典作家纪念导读/文学趋势观察。只输出JSON：{"title":"标题","body":"正文"}` }],
      }),
      signal: AbortSignal.timeout(30000),
    });
    if (!resp.ok) return [];
    const data = (await resp.json()) as { content?: Array<{ text: string }> };
    const text = data.content?.[0]?.text || "";
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return [];
    const { title, body } = JSON.parse(jsonMatch[0]);
    if (!title || !body) return [];
    console.log(`   ✓ AI 荐评: ${title}`);
    return [{
      id: `zh-editorial-${Date.now()}`, title, author: "编辑荐评", source: "编辑荐评", sourceUrl: "",
      excerpt: body.slice(0, 500), criticism: "", language: "zh",
      tags: ["编辑荐评", "文学评论"], type: "criticism" as ArticleType,
      publishedAt: new Date().toISOString(), collectedAt: new Date().toISOString(),
    }];
  } catch (e) {
    console.log(`   ⚠ AI 补位失败: ${(e as Error).message}`);
    return [];
  }
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
  // 中文文学信号词
  "小说", "诗歌", "诗人", "散文", "随笔", "文学", "作家", "翻译",
  "读书", "阅读", "书评", "文艺", "诗", "文", "篇", "章",
  "fiction", "novel", "poem", "poetry", "essay", "literary",
  "literature", "writer", "author", "book", "reading", "review",
  "translation", "translator", "story", "stories", "verse",
  "novelist", "poet", "critic", "narrative", "prose",
];

function isNonLiterary(title: string, excerpt: string, lang: string): boolean {
  const text = (title + " " + excerpt).toLowerCase();

  // 1. 黑名单关键词匹配
  for (const kw of BLOCK_KEYWORDS) {
    if (title.includes(kw) || excerpt.includes(kw)) return true;
  }

  // 2. 中文内容必须有文学信号词（AI 不可用时兜底）
  if (lang === "zh") {
    const hasLiterarySignal = LITERARY_SIGNALS.some((s) => title.includes(s) || excerpt.includes(s));
    if (!hasLiterarySignal) return true;
  }

  return false;
}

// ================================================================
// AI 内容分类 — 判断是否属于文学范畴 + 标注具体类型
// ================================================================

async function classifyWithAI(articles: Article[]): Promise<Article[]> {
  if (!ANTHROPIC_KEY || articles.length === 0) return articles;

  // 先做关键词快速筛选
  const preFiltered = articles.filter((a) => !isNonLiterary(a.title, a.excerpt, a.language));
  const blocked = articles.length - preFiltered.length;
  if (blocked > 0) console.log(`   🚫 关键词过滤: ${blocked} 篇非文学内容`);

  if (preFiltered.length === 0) return [];

  // 批量 AI 分类
  const items = preFiltered.map((a, i) =>
    `[${i}] ${a.title.slice(0, 80)}\n   source: ${a.source}\n   text: ${a.excerpt.slice(0, 200)}`
  ).join("\n\n");

  try {
    const resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": ANTHROPIC_KEY, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({
        model: "claude-sonnet-4-6", max_tokens: 512,
        messages: [{
          role: "user",
          content: `你是一个文学内容过滤器。判断以下${preFiltered.length}篇文章是否属于文学范畴（小说/散文/诗歌/书评/作家访谈/翻译文学）。新闻、政治、商业内容应拒绝。

对每篇文章输出一行，格式: [序号] yes|no type
type 必须是以下之一: fiction, essay, poetry, criticism, interview, translation, play, nonfiction, none

示例:
[0] yes criticism
[1] no none
[2] yes fiction

${items}`
        }],
      }),
      signal: AbortSignal.timeout(30000),
    });
    if (!resp.ok) {
      console.log("   ⚠ AI 分类 API 失败，跳过筛选");
      return preFiltered;
    }
    const data = (await resp.json()) as { content?: Array<{ text: string }> };
    const text = data.content?.[0]?.text || "";

    // Parse results
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
        // Auto-tag based on type
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
        article.tags = [...new Set([...article.tags, ...(typeTags[type] || ["当代文学"])])];
        results.push(article);
      }
    }

    const filtered = preFiltered.length - results.length;
    console.log(`   🎯 AI 分类: ${results.length} 篇文学 ✓ / ${filtered} 篇非文学 ✗`);
    return results;
  } catch (e) {
    console.log(`   ⚠ AI 分类异常: ${(e as Error).message}`);
    return preFiltered;
  }
}

// ================================================================
// 组装 / 工具
// ================================================================

function makeArticle(src: SourceDef, id: string, title: string, author: string, sourceUrl: string, excerpt: string, publishedAt: string): Article {
  return {
    id, title, author, source: src.name, sourceUrl,
    excerpt: excerpt.slice(0, 500), criticism: "", language: src.lang,
    tags: [src.category], type: src.category,
    publishedAt: publishedAt || new Date().toISOString(),
    collectedAt: new Date().toISOString(),
  };
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#?\w+;/g, " ")
    .replace(/\s+/g, " ").trim();
}

function dedupeByTitle(articles: Article[]): Article[] {
  const seen = new Set<string>();
  return articles.filter((a) => {
    const key = a.title.toLowerCase().replace(/[^a-z0-9一-鿿]/g, "").slice(0, 50);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const TYPE_LABELS: Record<string, string> = {
  fiction: "小说", essay: "散文", poetry: "诗歌",
  criticism: "评论", interview: "访谈", translation: "译介",
  play: "戏剧", nonfiction: "非虚构",
};

function sleep(ms: number) { return new Promise((r) => setTimeout(r, ms)); }

// ================================================================
// 主流程
// ================================================================

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const isCI = args.includes("--ci");
  const isLocal = args.includes("--local");

  console.log("╔══════════════════════════════════════════════════╗");
  console.log(`║  Daily New Works — ${isCI ? "CI" : "Local"} Mode (Literary Only)`.padEnd(51) + "║");
  console.log("╚══════════════════════════════════════════════════╝\n");

  // ---- 构建源列表 ----
  let zhSources = [...CI_ZH_SOURCES];
  if (!isCI || isLocal) zhSources = [...zhSources, ...LOCAL_ZH_SOURCES];

  const allByLang: Record<string, Article[]> = {};

  // ---- 抓取 ----
  for (const [lang, sources, label] of [
    ["zh", zhSources, "中文"],
    ["en", EN_SOURCES, "英文"],
    ["other", OTHER_SOURCES, "日韩/其他"],
  ] as [string, SourceDef[], string][]) {
    console.log(`📡 [${label}] 抓取中...`);
    const collected: Article[] = [];
    for (const src of sources) {
      let articles: Article[] = [];
      if (src.rss) { articles = await fetchRSSDirect(src); if (articles.length === 0) articles = await fetchRSSProxy(src); }
      if (articles.length === 0 && src.fallbackUrl) articles = await fetchDirect(src);
      console.log(`   ${src.name}: ${articles.length} 篇`);
      collected.push(...articles);
      await sleep(600);
    }

    // AI 分类过滤（仅当有文章且有 API key 时）
    if (collected.length > 0 && ANTHROPIC_KEY) {
      console.log(`   🔍 AI 内容审核中...`);
      const filtered = await classifyWithAI(collected);
      allByLang[lang] = filtered;
    } else {
      // 无 AI key 时用关键词过滤
      const filtered = collected.filter((a) => !isNonLiterary(a.title, a.excerpt, a.language));
      if (collected.length - filtered.length > 0) console.log(`   🚫 关键词过滤: ${collected.length - filtered.length} 篇`);
      allByLang[lang] = filtered;
    }
  }

  // ---- CI 中文补位 ----
  if (allByLang["zh"].length === 0 && isCI) {
    const ai = await generateEditorial();
    if (ai.length > 0) { allByLang["zh"] = ai; console.log(`   AI: ${ai.length} 篇`); }
  }

  // ---- 配额裁剪 ----
  const final: Article[] = [];
  for (const lang of ["zh", "en", "other"]) {
    const quota = QUOTAS[lang] || 3;
    let articles = allByLang[lang] || [];
    if (articles.length < quota && lang !== "en") {
      const used = new Set(final.map((f) => f.id));
      const enPool = (allByLang["en"] || []).filter((a) => !used.has(a.id));
      const fillers = enPool.slice(0, quota - articles.length);
      if (fillers.length > 0) { console.log(`   🔄 ${lang} 不足，英文补 ${fillers.length} 篇`); articles = [...articles, ...fillers]; }
    }
    final.push(...articles.slice(0, quota));
  }

  const unique = dedupeByTitle(final);

  // ---- 统计 ----
  const counts: Record<string, number> = {};
  const types: Record<string, number> = {};
  for (const a of unique) { counts[a.language] = (counts[a.language] || 0) + 1; types[a.type] = (types[a.type] || 0) + 1; }

  console.log(`\n📊 最终: ${unique.length} 篇`);
  for (const [lang, cnt] of Object.entries(counts)) {
    const label = { zh: "中文", en: "英文", other: "日韩/其他" }[lang] || lang;
    console.log(`   ${label}: ${cnt} 篇 (${((cnt / unique.length) * 100).toFixed(0)}%)`);
  }
  console.log("   类型分布:", Object.entries(types).map(([t, c]) => `${TYPE_LABELS[t] || t}×${c}`).join(" "));

  const today = new Date().toISOString().slice(0, 10);
  const output = { date: today, articles: unique };

  if (!dryRun) {
    const dir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), "utf-8");
    console.log(`\n✅ ${OUTPUT_PATH}`);
    if (!fs.existsSync(ARCHIVE_DIR)) fs.mkdirSync(ARCHIVE_DIR, { recursive: true });
    fs.writeFileSync(path.join(ARCHIVE_DIR, `${today}.json`), JSON.stringify(output, null, 2), "utf-8");
    console.log(`📁 ${ARCHIVE_DIR}/${today}.json`);
  } else {
    console.log("\n🔍 [dry-run] 预览:");
    for (const a of unique) console.log(`   [${a.language}/${a.type}/${a.source}] ${a.title.slice(0, 70)}`);
  }
}

main().catch((err) => { console.error("Fatal:", err); process.exit(1); });
