import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export type StoredUser = {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
  avatar: string | null;
  provider: string;
  preferences: unknown;
  createdAt: Date;
};

export const userStore = {
  async findByEmail(email: string): Promise<StoredUser | null> {
    return prisma.user.findUnique({ where: { email: email.toLowerCase() } });
  },

  async create(email: string, password: string, name: string, provider = "credentials"): Promise<StoredUser> {
    const existing = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
    if (existing) return existing;
    return prisma.user.create({
      data: {
        email: email.toLowerCase(),
        name: name || email.split("@")[0],
        passwordHash: password ? await hashPassword(password) : "",
        provider,
      },
    });
  },

  async update(email: string, data: Partial<Pick<StoredUser, "name" | "avatar">>): Promise<StoredUser | null> {
    return prisma.user.update({
      where: { email: email.toLowerCase() },
      data,
    }).catch(() => null);
  },

  async changePassword(email: string, currentPassword: string, newPassword: string): Promise<{ success: boolean; error?: string }> {
    const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
    if (!user) return { success: false, error: "用户不存在" };
    if (user.provider !== "credentials") return { success: false, error: "第三方登录用户无密码" };
    const valid = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!valid) return { success: false, error: "当前密码错误" };
    if (newPassword.length < 6) return { success: false, error: "新密码至少 6 位" };
    await prisma.user.update({
      where: { email: email.toLowerCase() },
      data: { passwordHash: await hashPassword(newPassword) },
    });
    return { success: true };
  },

  async verifyPassword(email: string, password: string): Promise<StoredUser | null> {
    const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
    if (!user || user.provider !== "credentials") return null;
    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return null;
    return user;
  },

  async getUserCount(): Promise<number> {
    return prisma.user.count();
  },

  async ensure(email: string, name?: string, avatar?: string, provider = "google"): Promise<StoredUser> {
    const existing = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
    if (existing) return existing;
    return prisma.user.create({
      data: {
        email: email.toLowerCase(),
        name: name || email.split("@")[0],
        passwordHash: "",
        avatar: avatar || null,
        provider,
      },
    });
  },

  async updatePreferences(userId: string, preferences: string[]): Promise<StoredUser | null> {
    return prisma.user.update({
      where: { id: userId },
      data: { preferences },
    }).catch(() => null);
  },

  async getPreferences(userId: string): Promise<string[] | null> {
    const user = await prisma.user.findUnique({ where: { id: userId }, select: { preferences: true } });
    return (user?.preferences as string[] | null) || null;
  },
};
