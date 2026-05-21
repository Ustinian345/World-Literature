// 文件用户存储 — 持久化到 data/users.json
import * as fs from "fs";
import * as path from "path";
import * as crypto from "crypto";

const USERS_FILE = path.join(process.cwd(), "data", "users.json");

export interface StoredUser {
  email: string;
  name: string;
  passwordHash: string; // SHA-256 hex
  avatar?: string;
  createdAt: string;
  provider: "credentials" | "google";
}

function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex");
}

function loadUsers(): StoredUser[] {
  try {
    if (fs.existsSync(USERS_FILE)) {
      return JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"));
    }
  } catch { /* ignore */ }
  return [];
}

function saveUsers(users: StoredUser[]): void {
  const dir = path.dirname(USERS_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), "utf-8");
  // 同步更新内存引用（auth.ts 用）
  (globalThis as Record<string, unknown>)._authUsers = users;
}

export const userStore = {
  findByEmail(email: string): StoredUser | null {
    return loadUsers().find((u) => u.email.toLowerCase() === email.toLowerCase()) || null;
  },

  create(email: string, password: string, name: string, provider: "credentials" | "google" = "credentials"): StoredUser {
    const users = loadUsers();
    const existing = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (existing) return existing;

    const user: StoredUser = {
      email: email.toLowerCase(),
      name: name || email.split("@")[0],
      passwordHash: password ? hashPassword(password) : "",
      createdAt: new Date().toISOString(),
      provider,
    };
    users.push(user);
    saveUsers(users);
    return user;
  },

  update(email: string, data: Partial<Pick<StoredUser, "name" | "avatar">>): StoredUser | null {
    const users = loadUsers();
    const idx = users.findIndex((u) => u.email.toLowerCase() === email.toLowerCase());
    if (idx === -1) return null;
    if (data.name !== undefined) users[idx].name = data.name;
    if (data.avatar !== undefined) users[idx].avatar = data.avatar;
    saveUsers(users);
    return users[idx];
  },

  changePassword(email: string, currentPassword: string, newPassword: string): { success: boolean; error?: string } {
    const users = loadUsers();
    const idx = users.findIndex((u) => u.email.toLowerCase() === email.toLowerCase());
    if (idx === -1) return { success: false, error: "用户不存在" };
    if (users[idx].provider !== "credentials") return { success: false, error: "第三方登录用户无密码" };
    if (!users[idx].passwordHash) return { success: false, error: "当前账号无密码" };
    if (users[idx].passwordHash !== hashPassword(currentPassword)) return { success: false, error: "当前密码错误" };
    if (newPassword.length < 6) return { success: false, error: "新密码至少 6 位" };
    users[idx].passwordHash = hashPassword(newPassword);
    saveUsers(users);
    return { success: true };
  },

  verifyPassword(email: string, password: string): StoredUser | null {
    const user = this.findByEmail(email);
    if (!user || user.provider !== "credentials") return null;
    if (user.passwordHash !== hashPassword(password)) return null;
    return user;
  },

  getUserCount(): number {
    return loadUsers().length;
  },

  ensure(email: string, name?: string, avatar?: string, provider: "credentials" | "google" = "google"): StoredUser {
    let user = this.findByEmail(email);
    if (!user) {
      return this.create(email, "", name || email.split("@")[0], provider);
    }
    // 更新缺失的字段
    if (name && !user.name) { user.name = name; this.update(email, { name }); }
    if (avatar && !user.avatar) { user.avatar = avatar; this.update(email, { avatar }); }
    return user;
  },
};
