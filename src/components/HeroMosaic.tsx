"use client";

import { useMemo } from "react";

// 地标真实图片 — Unsplash 知名地标照片（永久链接，高可靠性）
const LANDMARK_PHOTOS = [
  // 亚洲
  "https://images.unsplash.com/photo-1508804185872-d7badad00f7e?w=400&q=75", // 长城
  "https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&q=75", // 富士山
  "https://images.unsplash.com/photo-1548013146-72479755be8f?w=400&q=75", // 泰姬陵
  "https://images.unsplash.com/photo-1535515161284-42ac1b8e4cf8?w=400&q=75", // 吴哥窟
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=75", // 上海外滩
  "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&q=75", // 京都寺院
  "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=75", // 伦敦
  "https://images.unsplash.com/photo-1511739003426-4a20a1a77dd5?w=400&q=75", // 埃菲尔铁塔
  // 欧洲
  "https://images.unsplash.com/photo-1552832232-c0197dd883b6?w=400&q=75", // 罗马斗兽场
  "https://images.unsplash.com/photo-1555999440-a50eab58cbc7?w=400&q=75", // 雅典卫城
  "https://images.unsplash.com/photo-1512492117798-efe4ee7de3e0?w=400&q=75", // 莫斯科克里姆林
  "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f1?w=400&q=75", // 伦敦大本钟
  "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&q=75", // 布拉格
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=75", // 巴黎
  // 非洲
  "https://images.unsplash.com/photo-1539768942893-d9e95abe4ef6?w=400&q=75", // 埃及金字塔
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&q=75", // 非洲大草原
  "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=400&q=75", // 摩洛哥
  // 美洲
  "https://images.unsplash.com/photo-1605134551595-0a20a4f58e9b?w=400&q=75", // 自由女神
  "https://images.unsplash.com/photo-1526392063835-a0faa228e6e2?w=400&q=75", // 马丘比丘
  "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&q=75", // 纽约
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&q=75", // 旧金山金门
  "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&q=75", // 里约基督像
  // 大洋洲
  "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&q=75", // 悉尼歌剧院
  "https://images.unsplash.com/photo-1507699622108-5e4a4f6c1e0a?w=400&q=75", // 新西兰
  // 经典文学场景
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=75", // 古老图书馆
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&q=75", // 古典书架
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&q=75", // 古老书籍
  "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400&q=75", // 手写卷轴
  "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=400&q=75", // 羽毛笔
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=75", // 旧书堆
];

// 各大陆专属地标
const CONTINENT_LANDMARKS: Record<string, string[]> = {
  asia: [
    "https://images.unsplash.com/photo-1508804185872-d7badad00f7e?w=400&q=75", // 长城
    "https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&q=75", // 富士山
    "https://images.unsplash.com/photo-1548013146-72479755be8f?w=400&q=75", // 泰姬陵
    "https://images.unsplash.com/photo-1535515161284-42ac1b8e4cf8?w=400&q=75", // 吴哥窟
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=75", // 上海
    "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&q=75", // 京都
    "https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94?w=400&q=75", // 故宫
    "https://images.unsplash.com/photo-1591018471363-e09e6db8cd81?w=400&q=75", // 韩国宫殿
  ],
  europe: [
    "https://images.unsplash.com/photo-1511739003426-4a20a1a77dd5?w=400&q=75", // 埃菲尔
    "https://images.unsplash.com/photo-1552832232-c0197dd883b6?w=400&q=75", // 斗兽场
    "https://images.unsplash.com/photo-1555999440-a50eab58cbc7?w=400&q=75", // 卫城
    "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f1?w=400&q=75", // 大本钟
    "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&q=75", // 布拉格
    "https://images.unsplash.com/photo-1512492117798-efe4ee7de3e0?w=400&q=75", // 克里姆林
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=75", // 巴黎
    "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=400&q=75", // 威尼斯
  ],
  africa: [
    "https://images.unsplash.com/photo-1539768942893-d9e95abe4ef6?w=400&q=75", // 金字塔
    "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&q=75", // 草原
    "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=400&q=75", // 摩洛哥
    "https://images.unsplash.com/photo-1484318571209-661cf29a69c1?w=400&q=75", // 非洲市场
    "https://images.unsplash.com/photo-1565127404690-09088b5e8d87?w=400&q=75", // 撒哈拉
  ],
  americas: [
    "https://images.unsplash.com/photo-1605134551595-0a20a4f58e9b?w=400&q=75", // 自由女神
    "https://images.unsplash.com/photo-1526392063835-a0faa228e6e2?w=400&q=75", // 马丘比丘
    "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&q=75", // 纽约
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&q=75", // 金门大桥
    "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&q=75", // 里约
    "https://images.unsplash.com/photo-1518659526054-190340b32735?w=400&q=75", // 墨西哥
  ],
  oceania: [
    "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&q=75", // 悉尼歌剧院
    "https://images.unsplash.com/photo-1507699622108-5e4a4f6c1e0a?w=400&q=75", // 新西兰
    "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&q=75", // 大堡礁
  ],
};

interface HeroMosaicProps {
  /** 书籍 Unsplash 图片 URL */
  bookImages?: string[];
  /** 大陆 slug（用于加载对应地标） */
  continent?: string;
  /** 滚动速度基数 */
  speed?: number;
  /** 是否显示暗色叠加 */
  overlay?: boolean;
}

export function HeroMosaic({
  bookImages = [],
  continent,
  speed = 60,
  overlay = true,
}: HeroMosaicProps) {
  // 合并图片来源：书籍 Unsplash 图 + 地标图
  const allImages = useMemo(() => {
    const landmarks = continent
      ? (CONTINENT_LANDMARKS[continent] || LANDMARK_PHOTOS)
      : LANDMARK_PHOTOS;

    // 交替排列书籍图和地标图
    const mixed: string[] = [];
    const maxLen = Math.max(bookImages.length, landmarks.length);
    for (let i = 0; i < Math.min(maxLen, 60); i++) {
      if (i % 3 === 0 && landmarks.length > 0) {
        mixed.push(landmarks[i % landmarks.length]);
      } else if (bookImages.length > 0) {
        mixed.push(bookImages[i % bookImages.length]);
      } else {
        mixed.push(landmarks[i % landmarks.length]);
      }
    }
    return mixed;
  }, [bookImages, continent]);

  // 生成5-6行，每行图片不同排列
  const rows = useMemo(() => {
    if (allImages.length === 0) return [];
    const result: string[][] = [];
    for (let r = 0; r < 5; r++) {
      const row: string[] = [];
      const count = 14 + r * 2;
      for (let i = 0; i < count; i++) {
        row.push(allImages[(r * 7 + i) % allImages.length]);
      }
      result.push(row);
    }
    return result;
  }, [allImages]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-black">
      {/* 真实图片马赛克网格 */}
      <div className="absolute inset-0 z-0 flex flex-col" style={{ gap: "3px" }}>
        {rows.map((row, ri) => (
          <div
            key={ri}
            className="flex animate-scroll-row shrink-0"
            style={{
              gap: "3px",
              animationDuration: `${speed + ri * 18}s`,
              animationDirection: ri % 2 === 0 ? "normal" : "reverse",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              width: "max-content",
              height: `${16 + ri * 2}vh`,
            }}
          >
            {/* 双重渲染实现无缝循环 */}
            {[...row, ...row].map((imgUrl, ti) => (
              <div
                key={ti}
                className="shrink-0 overflow-hidden"
                style={{
                  width: `${12 + (ti % 3) * 5}vw`,
                  height: "100%",
                }}
              >
                <img
                  src={imgUrl}
                  alt=""
                  className="w-full h-full"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* 暗色叠加层 — 保证文字可读性 */}
      {overlay && (
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-umber/94 via-umber/82 to-umber-light/65" />
      )}
    </div>
  );
}
