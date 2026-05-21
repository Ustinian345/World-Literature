// scripts/clients/fragment-collector.ts — 文本片段收集器
// 从多个来源累积文本片段，按字段相关性评分
import type { TextFragment } from "./types";

export type WorkDetailField =
  | "plotSummary"
  | "characters"
  | "themeAnalysis"
  | "techniques"
  | "excerpts"
  | "insights";

/** 根据关键词判断片段对某个字段的相关性 (0-1) */
function scoreRelevance(text: string, field: WorkDetailField): number {
  const lower = text.toLowerCase();
  const keywordMap: Record<WorkDetailField, string[]> = {
    plotSummary: [
      "plot", "synopsis", "story", "narrative", "summary", "事件", "情节",
      "chapter", "scene", "act", "novel", "故事", "叙述",
    ],
    characters: [
      "character", "protagonist", "hero", "heroine", "villain", "人物",
      "角色", "主角", "反派", "主人公", "女主角", "男主角",
    ],
    themeAnalysis: [
      "theme", "analysis", "interpretation", "meaning", "symbolism",
      "motif", "主题", "解释", "意义", "象征", "寓意",
    ],
    techniques: [
      "style", "technique", "narrative", "writing", "structure",
      "literary", "手法", "风格", "文体", "修辞", "叙事",
    ],
    excerpts: [
      "quote", "excerpt", "passage", "citation", "引用", "摘录", "名句",
    ],
    insights: [
      "influence", "legacy", "significance", "impact", "reception",
      "影响", "意义", "价值", "启发", "评价", "接受",
    ],
  };

  const keywords = keywordMap[field] || [];
  let score = 0.1; // base score
  for (const kw of keywords) {
    if (lower.includes(kw)) score += 0.15;
  }
  return Math.min(score, 1);
}

export class FragmentCollector {
  private fragments: TextFragment[] = [];

  add(fragment: TextFragment): void {
    this.fragments.push(fragment);
  }

  addMany(fragments: TextFragment[]): void {
    this.fragments.push(...fragments);
  }

  totalChars(): number {
    return this.fragments.reduce((sum, f) => sum + f.text.length, 0);
  }

  count(): number {
    return this.fragments.length;
  }

  private fieldToRelevanceKey(field: WorkDetailField): keyof TextFragment["relevance"] {
    return FIELD_TO_KEY[field];
  }

  getRelevantTo(field: WorkDetailField): TextFragment[] {
    const key = this.fieldToRelevanceKey(field);
    return this.fragments
      .filter((f) => f.relevance[key] > 0.2 || f.relevance.general > 0.5)
      .sort((a, b) => b.relevance[key] - a.relevance[key]);
  }

  getByTier(tier: TextFragment["tier"]): TextFragment[] {
    return this.fragments.filter((f) => f.tier === tier);
  }

  getAll(): TextFragment[] {
    return [...this.fragments];
  }

  /** 获取各 tier 来源统计 */
  tierSummary(): Record<string, { count: number; chars: number }> {
    const summary: Record<string, { count: number; chars: number }> = {};
    for (const f of this.fragments) {
      if (!summary[f.tier]) summary[f.tier] = { count: 0, chars: 0 };
      summary[f.tier].count++;
      summary[f.tier].chars += f.text.length;
    }
    return summary;
  }
}

const FIELD_TO_KEY: Record<WorkDetailField, keyof TextFragment["relevance"]> = {
  plotSummary: "plot",
  characters: "characters",
  themeAnalysis: "themes",
  techniques: "techniques",
  excerpts: "general",
  insights: "general",
};

/** 从纯文本创建一个简单的 TextFragment */
export function makeFragment(
  text: string,
  sourceLabel: string,
  sourceUrl: string,
  tier: TextFragment["tier"],
  fieldHints?: WorkDetailField[]
): TextFragment {
  const relevance: TextFragment["relevance"] = {
    plot: 0.1,
    characters: 0.1,
    themes: 0.1,
    techniques: 0.1,
    general: 0.5,
  };

  const fields = fieldHints || (
    ["plotSummary", "characters", "themeAnalysis", "techniques", "excerpts", "insights"] as WorkDetailField[]
  );

  for (const field of fields) {
    const key = FIELD_TO_KEY[field];
    relevance[key] = Math.max(relevance[key], scoreRelevance(text, field));
  }

  return { text, sourceLabel, sourceUrl, tier, relevance };
}
