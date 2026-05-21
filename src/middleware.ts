export { auth as middleware } from "@/lib/auth";

export const config = {
  // 需要登录才能访问的页面
  matcher: [
    "/profile/:path*",
    "/dashboard/:path*",
    "/api/protected/:path*",
  ],
};
