// scripts/clients/fallback-synthesizer.ts — Tier 6 最终 fallback
// 基于所有收集的文本片段，进行忠实结构化提炼
// 原则：仅格式化/翻译现有片段，绝不无中生有

import type { TextFragment } from "./types";
import { FragmentCollector, makeFragment } from "./fragment-collector";
import type { WorkDetailField } from "./fragment-collector";

// 注意：这里引用的是 book-data.ts 的类型（通过动态 import）
interface SynthesizedDetail {
  id: string;
  characters: Array<{ name: string; role: string; description: string }>;
  plotSummary: string;
  plotNodes: Array<{ label: string; description: string }>;
  themeAnalysis: string;
  techniques: string;
  excerpts: Array<{ quote: string; context: string }>;
  insights: string;
}

export interface FallbackSynthesisInput {
  bookId: string;
  title: string;
  author: string;
  collector: FragmentCollector;
}

export interface FallbackSynthesisResult {
  detail: SynthesizedDetail;
  disclaimer: string;
  searchLinks: Array<{ label: string; url: string }>;
}

/** 提取前N个句子 */
function firstSentences(text: string, n: number): string {
  const sentences = text.split(/(?<=[.!?。！？])\s+/);
  return sentences.slice(0, n).join(" ");
}

/** 截取文本 maxLen 字符（以完整句子边界） */
function truncateText(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text;
  const truncated = text.slice(0, maxLen);
  const lastPeriod = Math.max(
    truncated.lastIndexOf("."),
    truncated.lastIndexOf("。"),
    truncated.lastIndexOf("! "),
    truncated.lastIndexOf("? ")
  );
  if (lastPeriod > maxLen * 0.6) return truncated.slice(0, lastPeriod + 1);
  return truncated + "...";
}

function generateSearchLinks(title: string, author: string): Array<{ label: string; url: string }> {
  const encodedTitle = encodeURIComponent(`${title} ${author}`.trim());
  const encodedTitleCN = encodeURIComponent(title);
  return [
    {
      label: "Google Books 搜索",
      url: `https://www.google.com/search?tbm=bks&q=${encodedTitle}`,
    },
    {
      label: "Wikipedia 搜索",
      url: `https://en.wikipedia.org/w/index.php?search=${encodedTitle}`,
    },
    {
      label: "百度百科 搜索",
      url: `https://baike.baidu.com/search?word=${encodedTitleCN}`,
    },
    {
      label: "豆瓣读书 搜索",
      url: `https://book.douban.com/subject_search?search_text=${encodedTitleCN}`,
    },
  ];
}

const CHINESE_KEYWORDS = /[一-鿿]/;

function hasChinese(text: string): boolean {
  return CHINESE_KEYWORDS.test(text);
}

export async function synthesizeFromFragments(
  input: FallbackSynthesisInput
): Promise<FallbackSynthesisResult> {
  const { bookId, title, author, collector } = input;

  const disclaimer =
    "内容基于有限公开来源提炼，建议读者通过以下搜索链接核实信息。";

  const searchLinks = generateSearchLinks(title, author);

  // ---- 为每个字段收集最相关片段 ----
  const gatherField = (field: WorkDetailField, minChars: number): string => {
    const relevant = collector.getRelevantTo(field);
    if (relevant.length === 0) {
      // 回退到通用片段
      const general = collector.getAll().filter(
        (f) => f.relevance.general > 0.3
      );
      if (general.length === 0) return "";
      return truncateText(general.map((f) => f.text).join("\n\n"), minChars + 200);
    }
    return truncateText(relevant.map((f) => f.text).join("\n\n"), minChars + 200);
  };

  // ---- Plot Summary ----
  const plotSummary = gatherField("plotSummary", 200);

  // ---- Plot Nodes ----
  const plotNodes: Array<{ label: string; description: string }> = [];
  const plotText = gatherField("plotSummary", 600);
  const paragraphs = plotText.split(/\n\n+/).filter((p) => p.trim().length > 40).slice(0, 8);
  paragraphs.forEach((para, i) => {
    plotNodes.push({
      label: `第 ${i + 1} 部分`,
      description: firstSentences(para, 2).slice(0, 200),
    });
  });

  // ---- Characters ----
  const characters: Array<{ name: string; role: string; description: string }> = [];
  const charText = gatherField("characters", 400);
  // 尝试从文本中识别专有名词（大写单词对）作为角色名
  const nameMatches = charText.match(/\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+){0,2})\b/g);
  if (nameMatches) {
    const seen = new Set<string>();
    const uniqueNames = nameMatches.filter((n) => {
      const lower = n.toLowerCase();
      if (seen.has(lower)) return false;
      seen.add(lower);
      return n.length > 3 && !/^(The|This|That|These|Those|There|Their|They|Chapter|Part|Book|Volume|Page)$/i.test(n);
    }).slice(0, 8);

    uniqueNames.forEach((name) => {
      characters.push({
        name,
        role: "角色",
        description: `"${title}" 中出现的角色。更多信息请通过搜索链接核实。`,
      });
    });
  }

  // ---- Theme Analysis ----
  const themeAnalysis = gatherField("themeAnalysis", 300);

  // ---- Techniques ----
  const techniques = gatherField("techniques", 200);

  // ---- Insights ----
  const insights = gatherField("insights", 200);

  // ---- Excerpts ----
  const excerpts: Array<{ quote: string; context: string }> = [];
  const allText = collector.getAll().map((f) => f.text).join("\n");
  const quoteMatches = allText.match(/["“]([^"”]{20,200})["”]/g);
  if (quoteMatches) {
    quoteMatches.slice(0, 3).forEach((q) => {
      const clean = q.replace(/^["“]|["”]$/g, "");
      excerpts.push({ quote: clean, context: `来源：${title}` });
    });
  }

  const detail: SynthesizedDetail = {
    id: bookId,
    characters,
    plotSummary: plotSummary || `请通过搜索链接查看《${title}》的详细信息。`,
    plotNodes,
    themeAnalysis: themeAnalysis || `请通过搜索链接查看《${title}》的主题分析。`,
    techniques: techniques || `请通过搜索链接了解《${title}》的写作手法。`,
    excerpts,
    insights: insights || `${title} 是一部值得深入阅读的作品。建议通过本页提供的搜索链接获取更多权威分析。`,
  };

  return { detail, disclaimer, searchLinks };
}
