// Type stubs — 原 book-data.ts 中的类型定义保留（数据已迁移至数据库）

export interface Character {
  name: string;
  role: string;
  description: string;
}

export interface PlotNode {
  label: string;
  description: string;
}

export interface Excerpt {
  quote: string;
  context: string;
}

export interface SourceEntry {
  label: string;
  url: string;
  tier: "metadata" | "reference" | "literary_analysis" | "original_text" | "fallback";
  fetchedAt: string;
  contributedFields?: string[];
}

export interface SourceAttribution {
  sources: SourceEntry[];
  reliability: "high" | "medium" | "fallback";
  disclaimer?: string;
  searchLinks?: Array<{ label: string; url: string }>;
}

export interface WorkDetail {
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

export type PartialWorkDetail = Pick<WorkDetail, "id"> & Partial<Omit<WorkDetail, "id">>;
