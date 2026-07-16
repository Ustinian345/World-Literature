// scan-completeness.ts — 扫描所有书籍完成状态，生成任务队列
// 数据来源: data.ts + award-data.ts + textbook-data.ts + works/index.ts
// 输出: data/task-queue.json
import * as fs from "fs";
import * as path from "path";

// ================================================================
// 类型
// ================================================================

interface MinimalDetail {
  id: string;
  characters?: unknown[];
  plotSummary?: string;
  plotNodes?: unknown[];
  themeAnalysis?: string;
  techniques?: string;
  excerpts?: unknown[];
  insights?: string;
}

interface TaskEntry {
  bookId: string;
  title: string;
  titleEn: string;
  author: string;
  continent: string;
  source: string; // "core" | "award" | "textbook" | "expansion"
  status: "partial" | "missing";
  missingFields: string[];
  priority: number; // 1=缺≥5字段, 2=缺3-4, 3=缺1-2
}

// ================================================================
// 完整度判定
// ================================================================

function checkCompleteness(d: MinimalDetail | undefined): {
  status: "completed" | "partial" | "missing";
  missing: string[];
} {
  if (!d) return { status: "missing", missing: ["ALL"] };

  const missing: string[] = [];

  if (!d.characters || d.characters.length === 0) {
    missing.push("characters");
  } else if (d.characters.length === 1 && (!d.plotSummary || d.plotSummary.length < 80)) {
    missing.push("characters");
  }

  if (!d.plotSummary || d.plotSummary.length < 80) missing.push("plotSummary");
  if (!d.plotNodes || d.plotNodes.length < 3) missing.push("plotNodes");
  if (!d.themeAnalysis || d.themeAnalysis.length < 80) missing.push("themeAnalysis");
  if (!d.techniques || d.techniques.length < 40) missing.push("techniques");
  if (!d.excerpts || d.excerpts.length === 0) missing.push("excerpts");
  if (!d.insights || d.insights.length < 80) missing.push("insights");

  if (missing.length === 0) return { status: "completed", missing: [] };
  if (missing.length >= 5) return { status: "missing", missing };
  return { status: "partial", missing };
}

function calcPriority(missing: string[]): number {
  if (missing.length >= 5) return 1;
  if (missing.length >= 3) return 2;
  return 3;
}

// ================================================================
// 主逻辑
// ================================================================

async function main() {
  // --- 加载所有数据源 ---
  const { bookDetails } = (await import("../src/lib/book-data.ts.bak")) as {
    bookDetails: Record<string, MinimalDetail>;
  };
  const { works: coreWorks } = (await import("../src/lib/data.ts.bak")) as {
    works: Array<{ id: string; title: string; titleEn: string; author: string; continent: string }>;
  };

  // award-data
  const { awardWinners } = (await import("../src/lib/award-data.ts.bak")) as {
    awardWinners: Array<{ workId: string; awardSlug: string; year: number; category?: string }>;
  };
  const { awards } = (await import("../src/lib/award-data.ts.bak")) as {
    awards: Array<{ slug: string; name: string }>;
  };

  // textbook-data
  const {
    primaryWorks,
    middleWorks,
    highWorks,
  } = (await import("../src/lib/textbook-data")) as {
    primaryWorks: Array<{ workId?: string; title: string; author: string }>;
    middleWorks: Array<{ workId?: string; title: string; author: string }>;
    highWorks: Array<{ workId?: string; title: string; author: string }>;
  };

  // works/index.ts — expanded (award-expansion + textbook-expansion)
  const { uniqueExpandedWorks: expandedWorks } = (await import("../src/lib/works/index")) as {
    uniqueExpandedWorks: Array<{ id: string; title: string; titleEn: string; author: string; continent: string }>;
  };

  // --- 构建统一 work ID 集合 ---
  // Map: workId → best metadata (优先 expanded > core)
  interface WorkMeta {
    title: string;
    titleEn: string;
    author: string;
    continent: string;
    sources: string[];
  }

  const allMeta = new Map<string, WorkMeta>();

  // 1. core works
  for (const w of coreWorks) {
    allMeta.set(w.id, {
      title: w.title,
      titleEn: w.titleEn,
      author: w.author,
      continent: w.continent,
      sources: ["core"],
    });
  }

  // 2. expanded works (may override/add)
  for (const w of expandedWorks) {
    const existing = allMeta.get(w.id);
    if (existing) {
      if (!existing.sources.includes("expansion")) existing.sources.push("expansion");
    } else {
      allMeta.set(w.id, {
        title: w.title,
        titleEn: w.titleEn,
        author: w.author,
        continent: w.continent,
        sources: ["expansion"],
      });
    }
  }

  // 3. award winners (tag existing or add new)
  for (const aw of awardWinners) {
    const existing = allMeta.get(aw.workId);
    if (existing) {
      if (!existing.sources.includes("award")) existing.sources.push("award");
    } else {
      // award entries without metadata — use workId as title
      const awardName = awards.find((a) => a.slug === aw.awardSlug)?.name || aw.awardSlug;
      allMeta.set(aw.workId, {
        title: `[获奖:${awardName}] ${aw.workId}`,
        titleEn: aw.workId,
        author: `获奖年份: ${aw.year}`,
        continent: "unknown",
        sources: ["award"],
      });
    }
  }

  // 4. textbook works (tag existing or add new)
  const textbookWorks = [...primaryWorks, ...middleWorks, ...highWorks];
  for (const tw of textbookWorks) {
    if (!tw.workId) continue;
    const existing = allMeta.get(tw.workId);
    if (existing) {
      if (!existing.sources.includes("textbook")) existing.sources.push("textbook");
    } else {
      allMeta.set(tw.workId, {
        title: tw.title,
        titleEn: tw.workId,
        author: tw.author,
        continent: "asia",
        sources: ["textbook"],
      });
    }
  }

  // --- 扫描完整度 ---
  const details = bookDetails as Record<string, MinimalDetail>;
  const completed: string[] = [];
  const taskQueue: TaskEntry[] = [];

  for (const [id, meta] of allMeta) {
    const d = details[id];
    const result = checkCompleteness(d);

    if (result.status === "completed") {
      completed.push(id);
      continue;
    }

    const primarySource =
      meta.sources.includes("award") ? "award"
      : meta.sources.includes("textbook") ? "textbook"
      : meta.sources.includes("expansion") ? "expansion"
      : "core";

    taskQueue.push({
      bookId: id,
      title: meta.title,
      titleEn: meta.titleEn,
      author: meta.author,
      continent: meta.continent,
      source: primarySource,
      status: result.status,
      missingFields: result.missing,
      priority: calcPriority(result.missing),
    });
  }

  // --- 排序 ---
  taskQueue.sort((a, b) => {
    if (a.priority !== b.priority) return a.priority - b.priority;
    if (a.source !== b.source) {
      // core > textbook > award > expansion
      const order: Record<string, number> = { core: 0, textbook: 1, award: 2, expansion: 3 };
      return (order[a.source] ?? 4) - (order[b.source] ?? 4);
    }
    if (a.continent !== b.continent) return a.continent.localeCompare(b.continent);
    return a.title.localeCompare(b.title);
  });

  // ================================================================
  // 统计报告
  // ================================================================

  const total = allMeta.size;
  const partialCount = taskQueue.filter((t) => t.status === "partial").length;
  const missingCount = taskQueue.filter((t) => t.status === "missing").length;

  // 按来源统计
  const bySource: Record<string, { total: number; incomplete: number }> = {};
  for (const [, meta] of allMeta) {
    const src = meta.sources[0] || "unknown";
    if (!bySource[src]) bySource[src] = { total: 0, incomplete: 0 };
    bySource[src].total++;
  }
  for (const t of taskQueue) {
    const src = t.source;
    if (!bySource[src]) bySource[src] = { total: 0, incomplete: 0 };
    bySource[src].incomplete++;
  }

  // 按大洲统计
  const byContinent: Record<string, number> = {};
  for (const t of taskQueue) {
    byContinent[t.continent] = (byContinent[t.continent] || 0) + 1;
  }

  const p1 = taskQueue.filter((t) => t.priority === 1).length;
  const p2 = taskQueue.filter((t) => t.priority === 2).length;
  const p3 = taskQueue.filter((t) => t.priority === 3).length;

  console.log("═══════════════════════════════════════════");
  console.log("  书籍完整度扫描报告（全量）");
  console.log("═══════════════════════════════════════════");
  console.log("");
  console.log(`  core works (data.ts):        ${coreWorks.length}`);
  console.log(`  expanded works (index.ts):   ${expandedWorks.length}`);
  console.log(`  award winners (award-data):  ${awardWinners.length}`);
  console.log(`  textbook works (textbook):   ${textbookWorks.filter((t) => t.workId).length}`);
  console.log(`  ─────────────────────────`);
  console.log(`  去重后总书目:               ${total}`);
  console.log(`  bookDetails 已有条目:        ${Object.keys(details).length}`);
  console.log(`  ✅ completed:                ${completed.length}`);
  console.log(`  ⚠ partial:                  ${partialCount}`);
  console.log(`  ❌ missing:                 ${missingCount}`);
  console.log(`  📋 待处理任务:              ${taskQueue.length}`);
  console.log("");

  console.log("  按来源分布:");
  for (const [src, stats] of Object.entries(bySource)) {
    const srcLabel = { core: "核心书目", award: "奖项分类", textbook: "教材分类", expansion: "扩展书目" }[src] || src;
    console.log(`    ${srcLabel} (${src}): 总计${stats.total}, 待处理${stats.incomplete}`);
  }
  console.log("");

  console.log("  按大洲分布（待处理）:");
  for (const [c, n] of Object.entries(byContinent)) {
    console.log(`    ${c}: ${n}`);
  }
  console.log("");

  console.log("  按优先级:");
  console.log(`    P1 (缺≥5字段):  ${p1}`);
  console.log(`    P2 (缺3-4字段): ${p2}`);
  console.log(`    P3 (缺1-2字段): ${p3}`);
  console.log("");

  // ---- 按缺失字段统计 ----
  const fieldCounts: Record<string, number> = {};
  for (const t of taskQueue) {
    for (const f of t.missingFields) {
      fieldCounts[f] = (fieldCounts[f] || 0) + 1;
    }
  }
  console.log("  最常缺失字段:");
  const sortedFields = Object.entries(fieldCounts).sort((a, b) => b[1] - a[1]);
  for (const [field, count] of sortedFields) {
    console.log(`    ${field}: ${count} 本书`);
  }
  console.log("");

  // ================================================================
  // 写入 task-queue.json
  // ================================================================

  const outputDir = path.join(__dirname, "..", "data");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const output = {
    _meta: {
      generatedAt: new Date().toISOString(),
      summary: {
        totalUniqueWorks: total,
        coreWorks: coreWorks.length,
        expandedWorks: expandedWorks.length,
        awardWinners: awardWinners.length,
        textbookWorks: textbookWorks.filter((t) => t.workId).length,
        bookDetailsEntries: Object.keys(details).length,
        completed: completed.length,
        partial: partialCount,
        missing: missingCount,
        totalTasks: taskQueue.length,
        p1: p1,
        p2: p2,
        p3: p3,
      },
      sources: {
        core: { description: "src/lib/data.ts — 核心100+部作品", ...(bySource.core || { total: 0, incomplete: 0 }) },
        award: { description: "src/lib/award-data.ts — 诺贝尔/布克/龚古尔/茅盾等获奖作品", ...(bySource.award || { total: 0, incomplete: 0 }) },
        textbook: { description: "src/lib/textbook-data.ts — 人教版小学/初中/高中教材", ...(bySource.textbook || { total: 0, incomplete: 0 }) },
        expansion: { description: "src/lib/works/index.ts — 批量扩展书目", ...(bySource.expansion || { total: 0, incomplete: 0 }) },
      },
      schema: {
        bookId: "string — 内部 ID",
        title: "string — 中文书名",
        titleEn: "string — 英文书名",
        author: "string — 作者",
        continent: "asia|europe|africa|americas|oceania|unknown",
        source: "core|award|textbook|expansion",
        status: "partial|missing",
        missingFields: "string[] — 缺失字段列表",
        priority: "1=缺大部分|2=缺少部分|3=仅缺少量",
      },
    },
    completed,
    queue: taskQueue,
  };

  const outPath = path.join(outputDir, "task-queue.json");
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2), "utf-8");

  console.log(`✅ 已写入 ${outPath}`);
  console.log("");

  // ---- 预览前 20 条 ----
  console.log("前 20 个待处理任务:");
  console.log("".padEnd(70, "─"));
  for (let i = 0; i < Math.min(20, taskQueue.length); i++) {
    const t = taskQueue[i];
    const flag =
      { asia: "🏯", europe: "🏛️", africa: "🦁", americas: "🗽", oceania: "🌊", unknown: "📖" }[
        t.continent
      ] || "📖";
    const srcTag = { core: "核", award: "奖", textbook: "教", expansion: "扩" }[t.source] || t.source;
    console.log(
      `  ${flag} [${srcTag}][P${t.priority}] ${t.title.slice(0, 25).padEnd(26)} (${t.bookId.slice(0, 35)})`
    );
    console.log(`      缺失: ${t.missingFields.join(", ")}`);
  }
  if (taskQueue.length > 20) {
    console.log(`  ... 还有 ${taskQueue.length - 20} 个任务，详见 data/task-queue.json`);
  }
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
