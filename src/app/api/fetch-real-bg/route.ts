// ================================================================
// API: /api/fetch-real-bg
// GET  ?workId=xxx          → 返回已有图片或 pending 状态
// POST { workId, force? }   → 触发搜索（已有记录则跳过，除非 force=true）
// ================================================================

import { NextRequest, NextResponse } from "next/server";
import { getBgImage, getBgStats } from "@/lib/bg-store";
import { buildSearchContext, buildSearchQuery, fetchRealBackground } from "@/lib/bg-fetcher";
import { prisma } from "@/lib/prisma";

/** GET — 查询背景图片状态 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const workId = searchParams.get("workId");
  const stats = searchParams.get("stats");

  if (stats === "true") {
    return NextResponse.json(getBgStats(), {
      headers: { "Cache-Control": "public, max-age=60" },
    });
  }

  if (!workId) {
    return NextResponse.json({ error: "Missing workId" }, { status: 400 });
  }

  const record = getBgImage(workId);

  if (!record) {
    return NextResponse.json(
      { status: "not_found", imageUrl: null },
      {
        headers: {
          "Cache-Control": "public, max-age=10, stale-while-revalidate=60",
        },
      },
    );
  }

  return NextResponse.json(
    {
      status: record.status,
      imageUrl: record.status === "completed" ? record.url : null,
      photographer: record.photographer || null,
      photographerUrl: record.photographerUrl || null,
      source: record.source || null,
    },
    {
      headers: {
        "Cache-Control":
          record.status === "completed"
            ? "public, max-age=86400, stale-while-revalidate=604800"
            : "public, max-age=10, stale-while-revalidate=60",
      },
    },
  );
}

/** POST — 触发背景图片搜索 */
export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const batch = searchParams.get("batch");

  // 批量模式：接收 workIds 数组
  if (batch === "true") {
    try {
      const body = await request.json();
      const { workIds } = body as { workIds?: string[] };
      if (!workIds || workIds.length === 0) {
        return NextResponse.json({ error: "Missing workIds" }, { status: 400 });
      }

      // 从数据库查找 Work 对象
      const [dbWorks, dbDetails] = await Promise.all([
        prisma.work.findMany({ where: { id: { in: workIds } } }),
        prisma.workDetail.findMany({ where: { workId: { in: workIds } } }),
      ]);
      const workMap = new Map(dbWorks.map((w) => [w.id, w]));
      const detailMap = new Map(dbDetails.map((d) => [d.workId, d]));

      const results: Record<string, { status: string; url?: string }> = {};
      for (const id of workIds) {
        const dbWork = workMap.get(id);
        if (!dbWork) {
          results[id] = { status: "not_found" };
          continue;
        }
        const work = {
          ...dbWork,
          genre: (dbWork.genres as string[]) ?? [],
          themes: (dbWork.themes as string[]) ?? [],
        };
        const dbDetail = detailMap.get(id);
        const detail = dbDetail
          ? { plotSummary: dbDetail.plotSummary, characters: dbDetail.characters as Array<{ name: string }> | undefined }
          : undefined;
        const ctx = buildSearchContext(work as any, detail);
        const record = await fetchRealBackground(ctx);
        results[id] = { status: record?.status || "failed", url: record?.url };
      }

      return NextResponse.json({ results });
    } catch {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
  }

  // 单本模式
  let body: { workId?: string; force?: boolean };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { workId, force } = body;
  if (!workId) {
    return NextResponse.json({ error: "Missing workId" }, { status: 400 });
  }

  // 检查已有记录
  if (!force) {
    const existing = getBgImage(workId);
    if (existing && existing.status === "completed") {
      return NextResponse.json({
        status: "completed",
        imageUrl: existing.url,
        photographer: existing.photographer,
        photographerUrl: existing.photographerUrl,
        source: existing.source,
      });
    }
  }

  // 从数据库查找 Work 数据
  const [dbWork, dbDetail] = await Promise.all([
    prisma.work.findUnique({ where: { id: workId } }),
    prisma.workDetail.findUnique({ where: { workId } }),
  ]);
  if (!dbWork) {
    return NextResponse.json({ error: "Work not found" }, { status: 404 });
  }

  const work = {
    ...dbWork,
    genre: (dbWork.genres as string[]) ?? [],
    themes: (dbWork.themes as string[]) ?? [],
  };
  const detail = dbDetail
    ? { plotSummary: dbDetail.plotSummary, characters: dbDetail.characters as Array<{ name: string }> | undefined }
    : undefined;
  const ctx = buildSearchContext(work as any, detail);

  // 执行搜索
  const record = await fetchRealBackground(ctx);

  if (record && record.status === "completed") {
    return NextResponse.json({
      status: "completed",
      imageUrl: record.url,
      photographer: record.photographer,
      photographerUrl: record.photographerUrl,
      source: record.source,
    });
  }

  return NextResponse.json({
    status: "failed",
    imageUrl: null,
    searchQuery: buildSearchQuery(ctx),
  });
}
