"use client";

import { useState, useCallback } from "react";

export function QuoteCopy({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [text]);

  return (
    <button
      onClick={(e) => { e.stopPropagation(); handleCopy(); }}
      className={`copy-success group flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs transition-all duration-300 ${
        copied
          ? "bg-emerald-500/20 text-emerald-300"
          : "bg-white/5 text-cream/40 hover:bg-white/10 hover:text-cream/70"
      }`}
      aria-label={copied ? "已复制" : "复制引文"}
      title={copied ? "已复制到剪贴板" : "点击复制"}
    >
      {copied ? (
        <>
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path d="m5 13 4 4L19 7" />
          </svg>
          已复制
        </>
      ) : (
        <>
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M8 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2m-6 12h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z" />
          </svg>
          复制
        </>
      )}
    </button>
  );
}
