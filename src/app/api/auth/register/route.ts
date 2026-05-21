import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, name } = body as {
      email?: string;
      password?: string;
      name?: string;
    };

    if (!email || !password) {
      console.error("[register] 缺少 email 或 password");
      return NextResponse.json(
        { error: "邮箱和密码为必填项" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      console.error("[register] 密码不足 6 位");
      return NextResponse.json(
        { error: "密码至少需要 6 位" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    // 检查邮箱是否已注册
    const existing = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existing) {
      console.error("[register] 邮箱已注册:", normalizedEmail);
      return NextResponse.json(
        { error: "该邮箱已被注册" },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const displayName = name?.trim() || normalizedEmail.split("@")[0];

    console.log("[register] 正在创建用户:", normalizedEmail, displayName);

    const user = await prisma.user.create({
      data: {
        email: normalizedEmail,
        name: displayName,
        passwordHash,
        provider: "credentials",
      },
    });

    // 立即查询验证数据确实写入了
    const verified = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (!verified) {
      console.error("[register] 写入验证失败：查询不到刚创建的用户");
      return NextResponse.json(
        { error: "注册失败，数据库写入异常" },
        { status: 500 }
      );
    }

    console.log("[register] 注册成功:", verified.id, verified.email);
    return NextResponse.json({
      success: true,
      user: { id: verified.id, email: verified.email, name: verified.name },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[register] 异常:", message);
    return NextResponse.json(
      { error: `服务器内部错误: ${message}` },
      { status: 500 }
    );
  }
}
