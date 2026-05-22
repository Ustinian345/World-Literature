#!/usr/bin/env npx tsx
// 从 data.ts 生成 JSON 快照供 CI 脚本使用

import * as fs from "fs";
import * as path from "path";

async function main() {
  const { allWorks } = await import("../src/lib/data");

  const works = allWorks.map((w) => ({
    id: w.id,
    title: w.title,
    titleEn: w.titleEn,
    author: w.author,
    country: w.country,
    flag: w.flag,
    continent: w.continent,
    era: w.era,
    genre: w.genre,
    themes: w.themes,
    excerpt: w.excerpt,
    gradient: w.gradient,
    year: w.year || null,
    featured: w.featured || false,
  }));

  const out = path.join(__dirname, "..", "data", "works-snapshot.json");
  fs.writeFileSync(out, JSON.stringify(works, null, 2), "utf-8");
  console.log(`Snapshot created: ${works.length} works → ${out}`);
}

main();
