// ================================================================
// useBgImage — 真实背景图片加载 Hook
// 含状态管理、缓存、API 触发与轮询
// ================================================================

"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface BgImageState {
  status: "loading" | "image" | "gradient";
  url: string | null;
  photographer: string | null;
  photographerUrl: string | null;
  source: string | null;
}

const POLL_INTERVAL = 3000; // 3s 轮询间隔
const MAX_POLL_TIME = 15000; // 最大轮询时间 15s

export function useBgImage(workId: string, title: string) {
  const [state, setState] = useState<BgImageState>({
    status: "loading",
    url: null,
    photographer: null,
    photographerUrl: null,
    source: null,
  });
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const triggeredRef = useRef(false);
  const mountedRef = useRef(true);

  const cleanupPoll = useCallback(() => {
    if (pollRef.current) {
      clearInterval(pollRef.current);
      pollRef.current = null;
    }
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    triggeredRef.current = false;

    const cacheKey = `bg|${workId}`;

    // 1. 检查本地 sessionStorage 缓存
    try {
      const cached = sessionStorage.getItem(cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached) as BgImageState;
        setState(parsed);
        return;
      }
    } catch { /* ignore */ }

    // 2. 查询 API
    async function checkStatus() {
      try {
        const res = await fetch(`/api/fetch-real-bg?workId=${workId}`);
        if (!res.ok || !mountedRef.current) return;
        const data = await res.json();

        if (data.status === "completed" && data.imageUrl) {
          const newState: BgImageState = {
            status: "image",
            url: data.imageUrl,
            photographer: data.photographer,
            photographerUrl: data.photographerUrl,
            source: data.source,
          };
          setState(newState);
          try {
            sessionStorage.setItem(cacheKey, JSON.stringify(newState));
          } catch { /* ignore */ }
          return true; // 已就绪
        }
      } catch { /* ignore */ }
      return false;
    }

    // 3. 触发搜索（仅一次）
    async function triggerSearch() {
      if (triggeredRef.current) return;
      triggeredRef.current = true;

      const ready = await checkStatus();
      if (ready) return;

      // POST 触发搜索
      try {
        const res = await fetch("/api/fetch-real-bg", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workId }),
        });
        if (!res.ok || !mountedRef.current) return;
        const data = await res.json();

        if (data.status === "completed" && data.imageUrl) {
          const newState: BgImageState = {
            status: "image",
            url: data.imageUrl,
            photographer: data.photographer,
            photographerUrl: data.photographerUrl,
            source: data.source,
          };
          setState(newState);
          try {
            sessionStorage.setItem(cacheKey, JSON.stringify(newState));
          } catch { /* ignore */ }
          return;
        }

        // 未完成 → 显示渐变占位
        if (!mountedRef.current) return;
        setState((prev) => (prev.status === "loading" ? { ...prev, status: "gradient" } : prev));
      } catch { /* ignore */ }
    }

    // 执行流程
    checkStatus().then((ready) => {
      if (!ready && mountedRef.current) {
        triggerSearch();
      }
    });

    return () => {
      mountedRef.current = false;
      cleanupPoll();
    };
  }, [workId, cleanupPoll]);

  return state;
}
