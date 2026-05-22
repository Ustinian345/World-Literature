import Link from "next/link";
import { NewWorksArchiveClient } from "./archive-client";

export const metadata = { title: "今日新文归档 | 世界文学总站" };

export default function NewWorksArchivePage() {
  return (
    <div className="min-h-screen bg-cream pt-20 pb-20">
      <div className="mx-auto max-w-4xl px-5">
        <div className="mb-10">
          <Link href="/" className="font-heading-cn text-sm text-terracotta hover:underline">← 返回首页</Link>
          <h1 className="mt-4 font-heading-cn text-3xl font-bold text-umber">今日新文 · 归档</h1>
          <p className="mt-2 font-heading-cn text-sm text-stone-500">全球文学最新动态，每日更新</p>
        </div>
        <NewWorksArchiveClient />
      </div>
    </div>
  );
}
