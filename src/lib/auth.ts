import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { userStore, type StoredUser } from "@/lib/user-store";

export type { StoredUser as AuthUser };

export function findUser(email: string) { return userStore.findByEmail(email); }
export function ensureUser(email: string, name?: string, avatar?: string) { return userStore.ensure(email, name, avatar); }
export function updateUser(email: string, data: Partial<Pick<StoredUser, "name" | "avatar">>) { return userStore.update(email, data); }

export const { handlers, auth, signIn: serverSignIn, signOut: serverSignOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID || "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET || "",
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "邮箱", type: "email" },
        password: { label: "密码", type: "password" },
        name: { label: "昵称", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const email = (credentials.email as string).toLowerCase().trim();
        const password = credentials.password as string;
        if (password.length < 6) return null;

        const existing = userStore.verifyPassword(email, password);
        if (existing) {
          return { id: email, email: existing.email, name: existing.name, image: existing.avatar || null };
        }

        // 检查是否已存在（Google 用户尝试用密码登录）
        const googleUser = userStore.findByEmail(email);
        if (googleUser && googleUser.provider === "google") return null;

        // 新用户 → 自动注册
        const name = (credentials.name as string) || email.split("@")[0];
        const newUser = userStore.create(email, password, name, "credentials");
        return {
          id: email, email: newUser.email, name: newUser.name,
          isNewUser: true, userNumber: userStore.getUserCount(),
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, trigger }) {
      if (user) {
        token.id = user.id || user.email || "";
        token.name = user.name || "";
        token.picture = user.image || null;
        const u = user as Record<string, unknown>;
        token.isNewUser = u.isNewUser === true;
        token.userNumber = (u.userNumber as number) || 0;
      }
      // update 触发时：从持久存储重新读取 nickname/avatar
      if (trigger === "update" && token.email) {
        const stored = userStore.findByEmail(token.email as string);
        if (stored) {
          token.name = stored.name;
          token.picture = stored.avatar || null;
        }
      }
      if (account?.provider === "google") {
        token.provider = "google";
        // Google 用户首次登录 → 写入持久存储
        if (token.email) {
          userStore.ensure(token.email as string, token.name as string, undefined, "google");
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.name = token.name as string;
        session.user.image = (token.picture as string) || null;
        const u = session.user as unknown as Record<string, unknown>;
        u.id = token.id;
        u.isNewUser = token.isNewUser || false;
        u.userNumber = token.userNumber || 0;
      }
      return session;
    },
  },
  pages: { signIn: "/login" },
  session: { strategy: "jwt" },
});
