// 浏览页 — Server Component 从数据库获取全量作品，传递给客户端筛选组件

import { prisma } from "@/lib/prisma";
import { BrowseClient } from "./browse-client";

export default async function BrowsePage() {
  const works = await prisma.work.findMany();
  return <BrowseClient works={works} />;
}
