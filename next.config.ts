import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel 自动处理图片优化，无需额外配置

  // 安全响应头
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
