import { prisma } from "@/lib/prisma";
import * as crypto from "crypto";

function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex");
}

export type StoredUser = {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
  avatar: string | null;
  provider: string;
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
        id: crypto.randomUUID(),
        email: email.toLowerCase(),
        name: name || email.split("@")[0],
        passwordHash: password ? hashPassword(password) : "",
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
    if (user.passwordHash !== hashPassword(currentPassword)) return { success: false, error: "当前密码错误" };
    if (newPassword.length < 6) return { success: false, error: "新密码至少 6 位" };
    await prisma.user.update({
      where: { email: email.toLowerCase() },
      data: { passwordHash: hashPassword(newPassword) },
    });
    return { success: true };
  },

  async verifyPassword(email: string, password: string): Promise<StoredUser | null> {
    const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
    if (!user || user.provider !== "credentials") return null;
    if (user.passwordHash !== hashPassword(password)) return null;
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
        id: crypto.randomUUID(),
        email: email.toLowerCase(),
        name: name || email.split("@")[0],
        passwordHash: "",
        avatar: avatar || null,
        provider,
      },
    });
  },
};
