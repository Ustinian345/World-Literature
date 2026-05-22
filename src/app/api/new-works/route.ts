import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";
import * as path from "path";

interface Article {
  id: string;
  title: string;
  author: string;
  source: string;
  sourceUrl: string;
  excerpt: string;
  criticism: string;
  language: string;
  tags: string[];
  publishedAt: string;
  collectedAt: string;
}

function loadAllArticles(): Article[] {
  const archiveDir = path.join(process.cwd(), "data", "new-works-archive");
  if (!fs.existsSync(archiveDir)) return [];

  const files = fs.readdirSync(archiveDir).filter((f) => f.endsWith(".json"));
  files.sort().reverse(); // newest first

  const articles: Article[] = [];
  for (const file of files) {
    try {
      const content = fs.readFileSync(path.join(archiveDir, file), "utf-8");
      const data = JSON.parse(content);
      if (data.articles) articles.push(...data.articles);
    } catch { continue; }
  }
  return articles;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get("date");
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "20", 10);
  const lang = searchParams.get("lang");
  const source = searchParams.get("source");
  const tag = searchParams.get("tag");

  let articles: Article[];

  if (date) {
    const filePath = path.join(process.cwd(), "data", "new-works-archive", `${date}.json`);
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ articles: [], total: 0 });
    }
    const content = fs.readFileSync(filePath, "utf-8");
    articles = JSON.parse(content).articles || [];
  } else {
    articles = loadAllArticles();
  }

  // Filters
  if (lang) articles = articles.filter((a) => a.language === lang);
  if (source) articles = articles.filter((a) => a.source.includes(source));
  if (tag) articles = articles.filter((a) => a.tags.includes(tag));

  const total = articles.length;
  const start = (page - 1) * limit;
  const paged = articles.slice(start, start + limit);

  return NextResponse.json({ articles: paged, total, page, limit });
}
