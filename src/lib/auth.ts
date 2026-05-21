import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

// 简单内存用户存储（生产环境替换为数据库）
// 格式: { email: string, password: string, name: string, createdAt: string }
const _users: Array<{
  email: string;
  password: string;
  name: string;
  createdAt: string;
}> = [];

export function findUser(email: string) {
  return _users.find((u) => u.email.toLowerCase() === email.toLowerCase()) || null;
}

export function createUser(email: string, password: string, name: string) {
  if (findUser(email)) return null;
  const user = { email: email.toLowerCase(), password, name, createdAt: new Date().toISOString() };
  _users.push(user);
  return { email: user.email, name: user.name };
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID || process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET || process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "邮箱", type: "email", placeholder: "your@email.com" },
        password: { label: "密码", type: "password" },
        name: { label: "昵称（注册时）", type: "text" },
        action: { label: "操作", type: "text" }, // "login" | "register"
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const email = (credentials.email as string).toLowerCase().trim();
        const password = credentials.password as string;
        const action = (credentials.action as string) || "login";

        if (action === "register") {
          const name = (credentials.name as string) || email.split("@")[0];
          if (password.length < 6) throw new Error("密码至少6位");
          const existing = findUser(email);
          if (existing) throw new Error("该邮箱已注册");
          const user = createUser(email, password, name);
          if (!user) throw new Error("注册失败");
          return { id: email, email, name: user.name };
        }

        // login
        const user = findUser(email);
        if (!user || user.password !== password) throw new Error("邮箱或密码错误");
        return { id: email, email: user.email, name: user.name };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id || user.email || "";
        token.name = user.name || "";
      }
      if (account?.provider === "google") {
        token.provider = "google";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as unknown as Record<string, unknown>).id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
});
