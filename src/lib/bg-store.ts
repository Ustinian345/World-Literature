// ================================================================
// 背景图片数据存储 — 内存缓存 + JSON 文件持久化
// Vercel 运行时：JSON 文件只读，新条目缓存在内存 Map 中
// 本地开发：可写入 JSON 文件以持久化
// ================================================================

import { readFileSync, writeFileSync, existsSync } from "fs";
import path from "path";

export interface BgImageRecord {
  url: string;
  status: "pending" | "completed" | "failed";
  source: "unsplash" | "pexels";
  photographer: string;
  photographerUrl: string;
  /** Unsplash 要求的热链接属性 */
  downloadLocation?: string;
  fetchedAt: string;
  /** 搜索时使用的查询关键词（调试用） */
  searchQuery?: string;
}

type BgImageStore = Record<string, BgImageRecord>;

const DATA_PATH = path.join(process.cwd(), "data", "bg-images.json");

let _cache: BgImageStore | null = null;
let _dirty = false;

function loadStore(): BgImageStore {
  if (_cache) return _cache;
  try {
    if (existsSync(DATA_PATH)) {
      const raw = readFileSync(DATA_PATH, "utf-8");
      const parsed = JSON.parse(raw);
      // 过滤掉以 _ 开头的元数据 key
      _cache = {};
      for (const [k, v] of Object.entries(parsed)) {
        if (!k.startsWith("_")) {
          _cache[k] = v as BgImageRecord;
        }
      }
    } else {
      _cache = {};
    }
  } catch {
    _cache = {};
  }
  return _cache;
}

function saveStore(): void {
  if (!_dirty) return;
  try {
    const store = loadStore();
    // 保留元数据 key
    let existing: Record<string, unknown> = {};
    try {
      if (existsSync(DATA_PATH)) {
        existing = JSON.parse(readFileSync(DATA_PATH, "utf-8"));
      }
    } catch { /* ignore */ }
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(existing)) {
      if (k.startsWith("_")) out[k] = v;
    }
    for (const [k, v] of Object.entries(store)) {
      out[k] = v;
    }
    writeFileSync(DATA_PATH, JSON.stringify(out, null, 2), "utf-8");
    _dirty = false;
  } catch {
    // Vercel 只读文件系统 — 静默失败，内存缓存依然有效
  }
}

/** 获取单条记录 */
export function getBgImage(workId: string): BgImageRecord | null {
  return loadStore()[workId] ?? null;
}

/** 批量获取 */
export function getBgImages(workIds: string[]): Record<string, BgImageRecord> {
  const store = loadStore();
  const result: Record<string, BgImageRecord> = {};
  for (const id of workIds) {
    if (store[id]) result[id] = store[id];
  }
  return result;
}

/** 写入记录（自动保存到 JSON 文件） */
export function setBgImage(workId: string, record: BgImageRecord): void {
  const store = loadStore();
  store[workId] = record;
  _dirty = true;
  saveStore();
}

/** 批量写入 */
export function setBgImages(records: Record<string, BgImageRecord>): void {
  const store = loadStore();
  for (const [id, record] of Object.entries(records)) {
    store[id] = record;
  }
  _dirty = true;
  saveStore();
}

/** 标记为 pending */
export function markPending(workId: string): void {
  const store = loadStore();
  store[workId] = {
    url: "",
    status: "pending",
    source: "unsplash",
    photographer: "",
    photographerUrl: "",
    fetchedAt: new Date().toISOString(),
  };
  _dirty = true;
  saveStore();
}

/** 列出所有已完成的 workId */
export function getCompletedIds(): string[] {
  const store = loadStore();
  return Object.entries(store)
    .filter(([k, v]) => !k.startsWith("_") && v.status === "completed")
    .map(([k]) => k);
}

/** 列出所有 pending 或未处理的 */
export function getPendingIds(allIds: string[]): string[] {
  const store = loadStore();
  return allIds.filter((id) => {
    const record = store[id];
    return !record || record.status === "pending" || record.status === "failed";
  });
}

/** 获取统计 */
export function getBgStats(): { total: number; completed: number; pending: number; failed: number } {
  const store = loadStore();
  const entries = Object.entries(store).filter(([k]) => !k.startsWith("_"));
  return {
    total: entries.length,
    completed: entries.filter(([, v]) => v.status === "completed").length,
    pending: entries.filter(([, v]) => v.status === "pending").length,
    failed: entries.filter(([, v]) => v.status === "failed").length,
  };
}
