# 世界文学总站 — 数据导入报告

> 生成时间: 2026-05-21T03:25:09.095Z
> 批次耗时: 1.7 分钟

## 概览

| 指标 | 数值 |
|------|------|
| 队列总数 | 1434 |
| ✅ 成功写入 | 99 |
| ❌ 失败 | 1 |
| ⊘ 数据不足 | 1076 |
| ⏳ 待处理 | 258 |
| 平均来源数/本 | 1.6 |

## 可靠性分布

| 等级 | 数量 | 占比 |
|------|------|------|
| 🔵 高可靠性 | 0 | 0.0% |
| 🟡 中等可靠性 | 0 | 0.0% |
| 🟠 有限来源提炼 | 1 | 100.0% |
| ⚫ 无数据 | 0 | — |

## 来源统计

| 来源 | 使用次数 |
|------|----------|
| wikipedia_en | 98 |
| wikipedia_zh | 55 |
| Britannica | 1 |

## 失败条目（前20）

| Book ID | 原因 |
|---------|------|
| x5-in-002 | HTTP 500 for https://openlibrary.org/search.json?q=x5-in-002&limit=3&fields=key%2Ctitle%2Cauthor_nam |

## 下一步优化建议

- ⚠ **Fallback 比例过高**（>{0.5*100}%）。建议：
  - 对 fallback 书籍运行 `--test-cold` 分析原因
  - 补充 BOOK_SEARCH_MAP 中的豆瓣 ID / 百度百科词条名
  - 考虑配置 Google Books API Key 提升元数据覆盖
- ⏳ **258 本书待处理**。运行 `npm run lit:fetch -- --batch --resume` 继续。
- 💡 **提升数据质量**：运行 `npm run lit:scan` 刷新任务队列，然后对 `partial` 条目执行 P3 深度抓取。
- 🔑 **配置 Google Books API Key**：在 `.env.local` 中设置 `GOOGLE_BOOKS_API_KEY=...` 可显著提升 Tier 1 数据量。
