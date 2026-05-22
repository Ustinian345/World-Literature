"use client";

import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";

const ALL_TAGS = [
  "古典文学", "现代文学", "魔幻现实主义", "爱情小说", "战争文学",
  "侦探推理", "科幻小说", "历史小说", "哲学文学", "诗歌散文",
  "俄国文学", "拉美文学", "东亚文学", "非洲文学", "北欧文学",
  "诺贝尔奖作品", "流亡文学", "女性文学", "成长小说", "存在主义",
];

export default function PreferenceModal() {
  const { data: session, update } = useSession();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const checkedRef = useRef(false);

  useEffect(() => {
    // 必须已登录 + 只检查一次
    if (!session?.user?.id) return;
    if (checkedRef.current) return;

    // 将 justLoggedIn 转为 wl-show-preference，方便后续统一读取
    if (sessionStorage.getItem("justLoggedIn") === "true") {
      sessionStorage.removeItem("justLoggedIn");
      sessionStorage.setItem("wl-show-preference", "true");
    }

    const shouldShow = sessionStorage.getItem("wl-show-preference") === "true";
    if (!shouldShow) return; // 无标记 → 永不弹出

    checkedRef.current = true;

    const isReset = sessionStorage.getItem("wl-reset-preferences") === "1";
    const prefs = session.user.preferences;
    const needsSetup = !prefs || prefs.length === 0;

    // 非首次设置且非重置 → 清理标记，不弹
    if (!needsSetup && !isReset) {
      sessionStorage.removeItem("wl-show-preference");
      sessionStorage.removeItem("wl-reset-preferences");
      return;
    }

    // 重置时预填已有偏好
    if (isReset && prefs?.length) {
      setSelected([...prefs]);
    }

    // 等待欢迎弹窗先关掉
    const wait = sessionStorage.getItem("wl-welcome-number") ? 1200 : 400;
    const timer = setTimeout(() => setVisible(true), wait);
    return () => clearTimeout(timer);
  }, [session?.user?.id]);

  function toggleTag(tag: string) {
    setSelected((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    setError("");
  }

  async function handleSave() {
    if (selected.length === 0) {
      setError("请至少选择一个偏好标签");
      return;
    }
    if (saving) return;

    setSaving(true);
    setError("");

    try {
      const res = await fetch("/api/user/preferences", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ preferences: selected }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "保存失败");
        setSaving(false);
        return;
      }

      // 刷新 session — 同步 preferences 到 token
      await update();

      // 清除所有触发标记
      sessionStorage.removeItem("wl-show-preference");
      sessionStorage.removeItem("wl-reset-preferences");

      setVisible(false);
      setSaving(false);
    } catch {
      setError("网络错误，请重试");
      setSaving(false);
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[101] flex items-center justify-center bg-black/50 p-5 backdrop-blur-sm">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-cream shadow-2xl">
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-terracotta/10 to-transparent" />

        <div className="relative px-6 pb-6 pt-10">
          <h2 className="mb-1 text-center font-heading-cn text-2xl font-bold text-umber">
            选择你的文学偏好
          </h2>
          <p className="mb-6 text-center font-heading-cn text-sm text-stone-500">
            选出你感兴趣的文学类型，我们为你定制每日推荐
          </p>

          <div className="mb-6 flex flex-wrap justify-center gap-2">
            {ALL_TAGS.map((tag) => {
              const active = selected.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  disabled={saving}
                  className={`rounded-full px-4 py-2 font-heading-cn text-sm transition-all ${
                    active
                      ? "bg-terracotta text-white shadow-md"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  } disabled:opacity-50`}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          {error && (
            <p className="mb-3 text-center font-heading-cn text-sm text-red-500">{error}</p>
          )}

          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full rounded-xl bg-umber py-3 font-heading-cn text-sm font-medium text-cream shadow-lg transition-all hover:bg-umber/90 disabled:opacity-50"
          >
            {saving ? "保存中..." : `确认选择 (${selected.length})`}
          </button>
        </div>
      </div>
    </div>
  );
}
