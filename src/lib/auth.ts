import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export interface AuthUser {
  email: string;
  password: string;
  name: string;
  avatar?: string; // base64 data URL
  createdAt: string;
}

const _users: AuthUser[] = [];

export function findUser(email: string): AuthUser | null {
  return _users.find((u) => u.email.toLowerCase() === email.toLowerCase()) || null;
}

export function ensureUser(email: string, defaults?: Partial<Pick<AuthUser, "name" | "avatar">>): AuthUser {
  let user = findUser(email);
  if (!user) {
    user = { email: email.toLowerCase(), password: "", name: defaults?.name || email.split("@")[0], avatar: defaults?.avatar, createdAt: new Date().toISOString() };
    _users.push(user);
  } else {
    if (defaults?.name && !user.name) user.name = defaults.name;
    if (defaults?.avatar && !user.avatar) user.avatar = defaults.avatar;
  }
  return user;
}

export function updateUser(email: string, data: Partial<Pick<AuthUser, "name" | "password" | "avatar">>): AuthUser | null {
  const user = findUser(email);
  if (!user) return null;
  if (data.name !== undefined) user.name = data.name;
  if (data.password !== undefined) user.password = data.password;
  if (data.avatar !== undefined) user.avatar = data.avatar;
  return user;
}

function createUser(email: string, password: string, name: string) {
  if (findUser(email)) return null;
  const user: AuthUser = { email: email.toLowerCase(), password, name, createdAt: new Date().toISOString() };
  _users.push(user);
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
        if (password.length < 6) return null;

        const existing = findUser(email);
        if (existing) {
          if (existing.password !== password) return null;
          return { id: email, email: existing.email, name: existing.name, image: existing.avatar || null };
        }

        const newUser = createUser(email, password, name);
        if (!newUser) return null;
        return {
          id: email, email: newUser.email, name: newUser.name,
          isNewUser: true, userNumber: newUser.userNumber,
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
      // update 触发时：重新读取 nickname/avatar
      if (trigger === "update" && token.email) {
        const stored = findUser(token.email as string);
        if (stored) {
          token.name = stored.name;
          token.picture = stored.avatar || null;
        }
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
        session.user.name = token.name as string;
        session.user.image = (token.picture as string) || null;
      }
      return session;
    },
  },
  pages: { signIn: "/login" },
  session: { strategy: "jwt" },
});
