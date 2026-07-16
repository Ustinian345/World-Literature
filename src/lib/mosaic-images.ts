// 背景图片加载：异步版（从数据库）用于 Server Components，同步版（静态地标）用于 Client Components

import { prisma } from "@/lib/prisma";

// 静态地标图片 — 供客户端组件使用（不变，无需数据库）
const LANDMARK_PHOTOS = [
  "https://images.unsplash.com/photo-1508804185872-d7badad00f7e?w=400&q=75",
  "https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&q=75",
  "https://images.unsplash.com/photo-1548013146-72479755be8f?w=400&q=75",
  "https://images.unsplash.com/photo-1535515161284-42ac1b8e4cf8?w=400&q=75",
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=75",
  "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&q=75",
  "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=75",
  "https://images.unsplash.com/photo-1511739003426-4a20a1a77dd5?w=400&q=75",
  "https://images.unsplash.com/photo-1552832232-c0197dd883b6?w=400&q=75",
  "https://images.unsplash.com/photo-1555999440-a50eab58cbc7?w=400&q=75",
  "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&q=75",
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=75",
  "https://images.unsplash.com/photo-1539768942893-d9e95abe4ef6?w=400&q=75",
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&q=75",
  "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=400&q=75",
  "https://images.unsplash.com/photo-1605134551595-0a20a4f58e9b?w=400&q=75",
  "https://images.unsplash.com/photo-1526392063835-a0faa228e6e2?w=400&q=75",
  "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&q=75",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&q=75",
  "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&q=75",
  "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&q=75",
  "https://images.unsplash.com/photo-1507699622108-5e4a4f6c1e0a?w=400&q=75",
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=75",
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&q=75",
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&q=75",
  "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400&q=75",
];

/** 服务端异步版本 — 从数据库 bg_images 表读取 */
export async function getBookCoverImages(): Promise<string[]> {
  const images = await prisma.bgImage.findMany({
    where: { status: "completed", url: { not: "" } },
    select: { url: true },
    take: 50,
  });

  const dbUrls = images.map((b) => {
    const url = b.url as string;
    const photoId = url.match(/photo-([^?]+)/)?.[1];
    return photoId
      ? `https://images.unsplash.com/photo-${photoId}?w=400&q=75&fit=crop`
      : url;
  });

  return dbUrls.length > 0 ? dbUrls : LANDMARK_PHOTOS;
}

/** 客户端同步版本 — 直接返回静态地标图片（无需数据库） */
export function getBookCoverImagesSync(): string[] {
  return LANDMARK_PHOTOS;
}

/** @deprecated 使用 getBookCoverImagesSync 替代 */
export function getAwardImages(): string[] {
  return getBookCoverImagesSync();
}
