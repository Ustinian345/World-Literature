"use client";

import type { SourceAttribution } from "@/lib/book-data-types";

interface ContentSourcesProps {
  attribution?: SourceAttribution;
  workTitle: string;
  workTitleEn?: string;
  workAuthor: string;
}

const TIER_LABELS: Record<string, string> = {
  metadata: "权威元数据",
  reference: "权威参考",
  literary_analysis: "文学分析",
  original_text: "原始文本",
  fallback: "有限来源",
};

const TIER_COLORS: Record<string, string> = {
  metadata: "bg-blue-100 text-blue-800",
  reference: "bg-green-100 text-green-800",
  literary_analysis: "bg-purple-100 text-purple-800",
  original_text: "bg-amber-100 text-amber-800",
  fallback: "bg-orange-100 text-orange-800",
};

const RELIABILITY_CONFIG = {
  high: { bg: "bg-emerald-50 border-emerald-200", badge: "bg-emerald-500", label: "高可靠性", desc: "本条目由多个权威来源交叉验证" },
  medium: { bg: "bg-amber-50 border-amber-200", badge: "bg-amber-500", label: "中等可靠性", desc: "本条目基于 1-2 个来源整理" },
  fallback: { bg: "bg-orange-50 border-orange-200", badge: "bg-orange-500", label: "有限来源提炼", desc: "本条目内容基于有限公开来源提炼" },
};

export default function ContentSources({
  attribution,
  workTitle,
  workTitleEn,
  workAuthor,
}: ContentSourcesProps) {
  if (!attribution || attribution.sources.length === 0) {
    return (
      <div className="rounded-2xl border border-stone-200 bg-stone-50 p-8 text-center">
        <div className="mb-3 text-3xl">📖</div>
        <p className="font-heading-cn text-lg text-umber">
          暂无外部来源数据
        </p>
        <p className="mt-2 text-sm text-stone-500">
          本条目由 AI 辅助生成，尚未链接到权威外部来源。建议通过以下链接自行核实内容。
        </p>
        <SearchLinks title={workTitle} author={workAuthor} />
      </div>
    );
  }

  const rc = RELIABILITY_CONFIG[attribution.reliability] || RELIABILITY_CONFIG.fallback;

  return (
    <div className="space-y-6">
      {/* 可靠性徽标 */}
      <div className={`rounded-2xl border p-5 ${rc.bg}`}>
        <div className="flex items-center gap-3">
          <span className={`h-3 w-3 rounded-full ${rc.badge}`} />
          <span className="font-heading-cn text-sm font-semibold text-umber">{rc.label}</span>
        </div>
        <p className="mt-2 text-sm text-stone-600">{rc.desc}</p>
        {attribution.disclaimer && (
          <p className="mt-2 rounded-lg bg-white/60 p-3 text-sm italic text-amber-800">
            ⚠ {attribution.disclaimer}
          </p>
        )}
      </div>

      {/* 来源列表 */}
      <div className="space-y-3">
        {attribution.sources.map((source, i) => (
          <a
            key={i}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 rounded-xl border border-stone-200 bg-warm-white p-4 transition-shadow hover:shadow-md"
          >
            {/* 来源图标 */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-stone-100 text-lg">
              {source.label.includes("Wikipedia") ? "📚" :
               source.label.includes("豆瓣") ? "📗" :
               source.label.includes("百度百科") ? "📘" :
               source.label.includes("Open Library") ? "📕" :
               source.label.includes("Google") ? "📙" :
               source.label.includes("SparkNotes") ? "✏️" :
               source.label.includes("Goodreads") ? "⭐" :
               source.label.includes("LitCharts") ? "📊" :
               source.label.includes("Gutenberg") ? "📜" :
               source.label.includes("Britannica") ? "🏛️" :
               source.label.includes("Wikimedia") ? "🗂️" : "🔗"}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="font-heading-cn text-sm font-semibold text-umber">
                  {source.label}
                </span>
                <span className={`rounded-full px-2 py-0.5 text-xs ${TIER_COLORS[source.tier] || "bg-stone-100 text-stone-600"}`}>
                  {TIER_LABELS[source.tier] || source.tier}
                </span>
              </div>
              <p className="mt-0.5 truncate text-xs text-stone-400">
                {source.url}
              </p>
              {source.contributedFields && source.contributedFields.length > 0 && (
                <p className="mt-1 text-xs text-stone-500">
                  贡献: {source.contributedFields.map((f) => {
                    const labels: Record<string, string> = {
                      plotSummary: "情节", characters: "人物", themeAnalysis: "主题",
                      techniques: "手法", excerpts: "引文", insights: "赏析",
                    };
                    return labels[f] || f;
                  }).join(" · ")}
                </p>
              )}
            </div>

            <span className="shrink-0 text-xs text-stone-400">↗</span>
          </a>
        ))}
      </div>

      {/* 搜索链接 */}
      <SearchLinks title={workTitle} author={workAuthor} />
    </div>
  );
}

function SearchLinks({ title, author }: { title: string; author: string }) {
  const q = encodeURIComponent(`${title} ${author}`.trim());
  const links = [
    { label: "Google Books", url: `https://www.google.com/search?tbm=bks&q=${q}` },
    { label: "Wikipedia", url: `https://en.wikipedia.org/w/index.php?search=${q}` },
    { label: "百度百科", url: `https://baike.baidu.com/search?word=${encodeURIComponent(title)}` },
    { label: "豆瓣读书", url: `https://book.douban.com/subject_search?search_text=${encodeURIComponent(title)}` },
  ];

  return (
    <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
      <p className="mb-3 text-xs font-semibold text-stone-500">自行核实搜索</p>
      <div className="flex flex-wrap gap-2">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-stone-300 bg-white px-3 py-1.5 text-xs text-stone-600 transition-colors hover:border-amber-400 hover:text-amber-700"
          >
            🔍 {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}
