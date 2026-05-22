import { NextResponse } from "next/server";
import * as fs from "fs";
import * as path from "path";

export async function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const filePath = path.join(process.cwd(), "data", "new-works-archive", `${today}.json`);

  if (!fs.existsSync(filePath)) {
    // Try daily-new-works.json as fallback
    const dailyPath = path.join(process.cwd(), "data", "daily-new-works.json");
    if (fs.existsSync(dailyPath)) {
      const content = fs.readFileSync(dailyPath, "utf-8");
      const data = JSON.parse(content);
      if (data.date === today) {
        return NextResponse.json({ date: today, articles: data.articles || [] });
      }
    }
    return NextResponse.json({ date: today, articles: [] });
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(content);
  return NextResponse.json({ date: today, articles: data.articles || [] });
}
