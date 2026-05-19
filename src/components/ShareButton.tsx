"use client";

export function ShareButton({ title, author }: { title: string; author: string }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text: `${title} — ${author}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      // Fallback: copy URL
      navigator.clipboard.writeText(window.location.href).catch(() => {});
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-1.5 rounded-full bg-white/8 px-4 py-1.5 font-[system-ui] text-sm text-white/60 backdrop-blur-sm transition-all hover:bg-white/15 hover:text-white"
      aria-label="分享"
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-4-6-4-4-4 4m4-4v13" />
      </svg>
      分享
    </button>
  );
}
