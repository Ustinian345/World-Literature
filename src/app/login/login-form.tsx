"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export function LoginForm() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (mode === "register") {
        // 第一步：调用注册 API
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
            name: name || email.split("@")[0],
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          setError(data.error || `注册失败 (HTTP ${res.status})`);
          setLoading(false);
          return;
        }

        // 将用户编号存入 sessionStorage，WelcomeModal 会读取
        if (data.userNumber) {
          sessionStorage.setItem("wl-welcome-number", String(data.userNumber));
        }

        console.log("[register] API 返回成功:", data);
      }

      // 第二步：登录（注册后自动登录，或纯登录）
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(
          result.error === "CredentialsSignin"
            ? "邮箱或密码错误"
            : `登录失败: ${result.error}`
        );
      } else if (result?.ok) {
        // 标记需要检查偏好设置（PreferenceModal 读取此标志）
        localStorage.setItem("needsPreferenceCheck", "true");
        window.location.href = "/";
      }
    } catch {
      setError("网络错误，请重试");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-5 py-20">
      <div className="w-full max-w-md">
        <div className="mb-10 text-center">
          <h1 className="font-heading-cn text-3xl font-bold text-umber">
            {mode === "register" ? "注册账号" : "登录"}
          </h1>
          <p className="mt-2 font-heading-cn text-sm text-stone-500">
            欢迎回到世界文学总站
          </p>
        </div>

        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Google 登录 */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="mb-6 flex w-full items-center justify-center gap-3 rounded-lg border border-stone-300 bg-white py-3 font-heading-cn text-umber transition-colors hover:bg-stone-50"
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          使用 Google 登录
        </button>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-stone-200"/>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-cream px-3 text-xs text-stone-400">
              或使用邮箱
            </span>
          </div>
        </div>

        {/* 邮箱登录表单 */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {mode === "register" && (
            <div>
              <label className="mb-1.5 block font-heading-cn text-sm font-medium text-umber">
                昵称
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="你的昵称"
                required={mode === "register"}
                className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 font-heading-cn text-umber placeholder:text-stone-400 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
              />
            </div>
          )}

          <div>
            <label className="mb-1.5 block font-heading-cn text-sm font-medium text-umber">
              邮箱
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 font-heading-cn text-umber placeholder:text-stone-400 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
            />
          </div>

          <div>
            <label className="mb-1.5 block font-heading-cn text-sm font-medium text-umber">
              密码
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={mode === "register" ? "至少 6 位" : "输入密码"}
              required
              className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 font-heading-cn text-umber placeholder:text-stone-400 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-umber py-3 font-heading-cn text-white transition-colors hover:bg-umber/90 disabled:opacity-50"
          >
            {loading ? "处理中..." : mode === "register" ? "注册" : "登录"}
          </button>
        </form>

        {/* 切换 */}
        <p className="mt-8 text-center text-sm text-stone-500">
          {mode === "register" ? "已有账号？" : "还没有账号？"}
          <button
            type="button"
            onClick={() => {
              setMode(mode === "login" ? "register" : "login");
              setError("");
            }}
            className="ml-1 font-medium text-terracotta hover:underline"
          >
            {mode === "register" ? "去登录" : "注册"}
          </button>
        </p>
      </div>
    </div>
  );
}
