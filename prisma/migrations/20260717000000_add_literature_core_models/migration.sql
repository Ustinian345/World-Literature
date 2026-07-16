-- Baseline: all tables already exist in production via prisma db push.
-- This migration is for history tracking only. Mark it as applied.

-- Work（作品基础信息）
CREATE TABLE IF NOT EXISTS "Work" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "titleEn" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "flag" TEXT NOT NULL DEFAULT '',
    "continent" TEXT NOT NULL,
    "era" TEXT NOT NULL,
    "genres" JSONB NOT NULL DEFAULT '[]',
    "themes" JSONB NOT NULL DEFAULT '[]',
    "excerpt" TEXT NOT NULL DEFAULT '',
    "gradient" TEXT NOT NULL DEFAULT '',
    "year" INTEGER,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Work_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "Work_continent_idx" ON "Work"("continent");
CREATE INDEX IF NOT EXISTS "Work_featured_idx" ON "Work"("featured");
CREATE INDEX IF NOT EXISTS "Work_author_idx" ON "Work"("author");

-- WorkDetail（作品深度详情）
CREATE TABLE IF NOT EXISTS "WorkDetail" (
    "id" TEXT NOT NULL,
    "workId" TEXT NOT NULL,
    "characters" JSONB NOT NULL DEFAULT '[]',
    "plotSummary" TEXT NOT NULL DEFAULT '',
    "plotNodes" JSONB NOT NULL DEFAULT '[]',
    "themeAnalysis" TEXT NOT NULL DEFAULT '',
    "techniques" TEXT NOT NULL DEFAULT '',
    "excerpts" JSONB NOT NULL DEFAULT '[]',
    "insights" TEXT NOT NULL DEFAULT '',
    "sourceAttribution" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkDetail_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "WorkDetail_workId_key" ON "WorkDetail"("workId");

ALTER TABLE "WorkDetail" ADD CONSTRAINT "WorkDetail_workId_fkey" FOREIGN KEY ("workId") REFERENCES "Work"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- WorkCharacter（扩展人物数据库）
CREATE TABLE IF NOT EXISTS "WorkCharacter" (
    "id" TEXT NOT NULL,
    "workId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "WorkCharacter_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "WorkCharacter_workId_idx" ON "WorkCharacter"("workId");

ALTER TABLE "WorkCharacter" ADD CONSTRAINT "WorkCharacter_workId_fkey" FOREIGN KEY ("workId") REFERENCES "Work"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- BgImage（书籍背景图片）
CREATE TABLE IF NOT EXISTS "BgImage" (
    "id" TEXT NOT NULL,
    "workId" TEXT NOT NULL,
    "url" TEXT NOT NULL DEFAULT '',
    "status" TEXT NOT NULL DEFAULT 'pending',
    "source" TEXT NOT NULL DEFAULT 'unsplash',
    "photographer" TEXT NOT NULL DEFAULT '',
    "photographerUrl" TEXT NOT NULL DEFAULT '',
    "searchQuery" TEXT NOT NULL DEFAULT '',
    "fetchedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BgImage_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "BgImage_workId_key" ON "BgImage"("workId");

ALTER TABLE "BgImage" ADD CONSTRAINT "BgImage_workId_fkey" FOREIGN KEY ("workId") REFERENCES "Work"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Award（文学奖）
CREATE TABLE IF NOT EXISTS "Award" (
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameEn" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "established" INTEGER NOT NULL,
    "country" TEXT NOT NULL,
    "flag" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "gradient" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "website" TEXT,
    "introduction" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Award_pkey" PRIMARY KEY ("slug")
);

-- AwardWinner（获奖记录）
CREATE TABLE IF NOT EXISTS "AwardWinner" (
    "id" TEXT NOT NULL,
    "workId" TEXT NOT NULL,
    "awardSlug" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "category" TEXT,

    CONSTRAINT "AwardWinner_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "AwardWinner_workId_awardSlug_year_key" ON "AwardWinner"("workId", "awardSlug", "year");
CREATE INDEX IF NOT EXISTS "AwardWinner_awardSlug_idx" ON "AwardWinner"("awardSlug");

ALTER TABLE "AwardWinner" ADD CONSTRAINT "AwardWinner_workId_fkey" FOREIGN KEY ("workId") REFERENCES "Work"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "AwardWinner" ADD CONSTRAINT "AwardWinner_awardSlug_fkey" FOREIGN KEY ("awardSlug") REFERENCES "Award"("slug") ON DELETE CASCADE ON UPDATE CASCADE;

-- DailyTrend（每日文学趋势）
CREATE TABLE IF NOT EXISTS "DailyTrend" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "perspectives" TEXT NOT NULL,
    "insight" TEXT NOT NULL,
    "sourceLinks" JSONB NOT NULL DEFAULT '[]',
    "sourceType" TEXT,
    "generatedAt" TIMESTAMP(3) NOT NULL,
    "totalPostsAnalyzed" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DailyTrend_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "DailyTrend_date_idx" ON "DailyTrend"("date");

-- DailyNewWork（今日新文）
CREATE TABLE IF NOT EXISTS "DailyNewWork" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "sourceUrl" TEXT NOT NULL DEFAULT '',
    "excerpt" TEXT NOT NULL,
    "fullContent" TEXT,
    "criticism" TEXT,
    "language" TEXT NOT NULL,
    "tags" JSONB NOT NULL DEFAULT '[]',
    "type" TEXT NOT NULL DEFAULT 'criticism',
    "publishedAt" TIMESTAMP(3) NOT NULL,
    "collectedAt" TIMESTAMP(3) NOT NULL,
    "date" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DailyNewWork_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "DailyNewWork_date_idx" ON "DailyNewWork"("date");
CREATE INDEX IF NOT EXISTS "DailyNewWork_language_idx" ON "DailyNewWork"("language");
