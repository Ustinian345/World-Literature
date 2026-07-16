// ================================================================
// 批量预生成背景图片脚本
// 用法：npx tsx scripts/batch-fetch-bg.ts [--popular] [--all]
//   --popular  仅处理 featured 热门书籍（默认）
//   --all      处理全部 106+ 部核心书籍
//
// 需要设置环境变量：UNSPLASH_ACCESS_KEY
// 可选：PEXELS_API_KEY（作为备选）
// ================================================================

import * as path from "path";
import { existsSync, readFileSync, writeFileSync } from "fs";

// ---- 加载 .env.local（Node 脚本不会自动加载） ----
function loadEnvFile(filePath: string) {
  if (!existsSync(filePath)) return;
  const content = readFileSync(filePath, "utf-8");
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
loadEnvFile(path.join(__dirname, "..", ".env.local"));
loadEnvFile(path.join(__dirname, "..", ".env"));

// ---- 直接在脚本中内联需要的逻辑（避免 TS 模块解析问题） ----

const DATA_PATH = path.join(__dirname, "..", "data", "bg-images.json.bak");

interface BgRecord {
  url: string;
  status: "pending" | "completed" | "failed";
  source: "unsplash" | "pexels";
  photographer: string;
  photographerUrl: string;
  downloadLocation?: string;
  fetchedAt: string;
  searchQuery?: string;
}

// ---- 从 data.ts 中手动加载作品（避免跨模块引用问题） ----
// 注意：如果运行失败，请直接从 src/lib/data.ts 导入
// npx tsx 可以处理 TypeScript 导入

async function main() {
  // 动态导入数据模块
  const { allWorks } = await import("../src/lib/data.ts.bak");
  const { bookDetails } = await import("../src/lib/book-data.ts.bak");
  const { buildSearchContext, fetchRealBackground } = await import("../src/lib/bg-fetcher");
  const { getBgImage } = await import("../src/lib/bg-store");

  const args = process.argv.slice(2);
  const modeAll = args.includes("--all");
  const modePopular = args.includes("--popular") || !modeAll;

  const targetWorks = modeAll
    ? allWorks
    : allWorks.filter((w) => w.featured);

  console.log("╔══════════════════════════════════════════╗");
  console.log("║  世界文学总站 — 背景图片批量生成器     ║");
  console.log("╚══════════════════════════════════════════╝");
  console.log("");
  console.log(`模式: ${modeAll ? "全部作品" : "热门书籍"}`);
  console.log(`目标: ${targetWorks.length} 部作品`);
  console.log("");

  const unsplashKey = process.env.UNSPLASH_ACCESS_KEY;
  const pexelsKey = process.env.PEXELS_API_KEY;

  if (!unsplashKey && !pexelsKey) {
    console.error("❌ 错误：请设置 UNSPLASH_ACCESS_KEY 或 PEXELS_API_KEY 环境变量");
    console.error("");
    console.error("   Windows PowerShell:");
    console.error('   $env:UNSPLASH_ACCESS_KEY="your_key_here"');
    console.error("");
    console.error("   Mac/Linux:");
    console.error('   export UNSPLASH_ACCESS_KEY="your_key_here"');
    console.error("");
    console.error("   Unsplash API: https://unsplash.com/developers");
    console.error("   Pexels API: https://www.pexels.com/api/");
    process.exit(1);
  }

  if (unsplashKey) console.log("✓ Unsplash API Key 已配置");
  if (pexelsKey) console.log("✓ Pexels API Key 已配置");
  console.log("");

  // 统计初始状态
  let alreadyDone = 0;
  let toProcess = 0;
  for (const w of targetWorks) {
    const existing = getBgImage(w.id);
    if (existing && existing.status === "completed") {
      alreadyDone++;
    } else {
      toProcess++;
    }
  }

  console.log(`已完成: ${alreadyDone} 部`);
  console.log(`待处理: ${toProcess} 部`);
  console.log("");

  if (toProcess === 0) {
    console.log("✅ 所有目标书籍均已有背景图，无需处理。");
    return;
  }

  const startTime = Date.now();
  let success = 0;
  let failed = 0;
  let skipped = alreadyDone;

  for (let i = 0; i < targetWorks.length; i++) {
    const work = targetWorks[i];
    const progress = `[${(i + 1).toString().padStart(3, " ")}/${targetWorks.length}]`;

    // 跳过已完成的
    const existing = getBgImage(work.id);
    if (existing && existing.status === "completed") {
      console.log(`${progress} ⏭  跳过: ${work.title} (已完成)`);
      skipped++;
      continue;
    }

    process.stdout.write(`${progress} 🔍 ${work.title}... `);

    const detail = (bookDetails as Record<string, unknown>)[work.id] as
      | { plotSummary?: string; characters?: Array<{ name: string }> }
      | undefined;
    const ctx = buildSearchContext(work, detail);
    const result = await fetchRealBackground(ctx);

    if (result) {
      success++;
      console.log(`✓ ${result.source} (${result.photographer})`);
    } else {
      failed++;
      console.log(`✗ 未找到`);
    }

    // API 限流保护
    if (i < targetWorks.length - 1) {
      await new Promise((r) => setTimeout(r, 1100));
    }
  }

  const elapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
  console.log("");
  console.log("═══════════════════════════════════════════");
  console.log(`  完成! 耗时 ${elapsed} 分钟`);
  console.log(`  成功: ${success}  |  失败: ${failed}  |  跳过: ${skipped - alreadyDone}`);
  console.log(`  总完成: ${success + skipped}`);
  console.log("═══════════════════════════════════════════");
  console.log("");
  console.log("📝 data/bg-images.json 已更新，请提交到 git。");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
