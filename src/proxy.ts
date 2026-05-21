import { auth } from "@/lib/auth";

export const proxy = auth;

export const config = {
  matcher: [
    "/profile/:path*",
    "/dashboard/:path*",
    "/api/protected/:path*",
  ],
};
