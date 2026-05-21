import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

const _users: Array<{
  email: string;
  password: string;
  name: string;
  createdAt: string;
}> = [];

// 暴露到 globalThis 供 API 路由访问
(globalThis as Record<string, unknown>)._authUsers = _users;

function findUser(email: string) {
  return _users.find((u) => u.email.toLowerCase() === email.toLowerCase()) || null;
}

function createUser(email: string, password: string, name: string) {
  if (findUser(email)) return null;
  const user = { email: email.toLowerCase(), password, name, createdAt: new Date().toISOString() };
  _users.push(user);
  // userNumber = _users.length（push 之后的长度，动态递增）
  return { email: user.email, name: user.name, isNew: true, userNumber: _users.length };
}

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
        const name = (credentials.name as string) || email.split("@")[0];

        // 密码长度不足则拒绝
        if (password.length < 6) return null;

        const user = findUser(email);
        if (user) {
          // 已有用户 → 校验密码
          if (user.password !== password) return null;
          return { id: email, email: user.email, name: user.name };
        }

        // 新用户 → 自动注册
        const newUser = createUser(email, password, name);
        if (!newUser) return null;
        return {
          id: email,
          email: newUser.email,
          name: newUser.name,
          isNewUser: true,
          userNumber: newUser.userNumber,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id || user.email || "";
        token.name = user.name || "";
        // 仅新注册用户设置 isNewUser（登录用户不设置）
        const u = user as Record<string, unknown>;
        token.isNewUser = u.isNewUser === true;
        token.userNumber = (u.userNumber as number) || 0;
      }
      if (account?.provider === "google") token.provider = "google";
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
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
