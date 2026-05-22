-- CreateTable
CREATE TABLE IF NOT EXISTS "FavoriteTrend" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "trendId" TEXT NOT NULL,
    "trendDate" TEXT NOT NULL,
    "trendTitle" TEXT NOT NULL,
    "savedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FavoriteTrend_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "FavoriteArticle" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "articleId" TEXT NOT NULL,
    "articleTitle" TEXT NOT NULL,
    "articleSource" TEXT NOT NULL,
    "articleDate" TEXT NOT NULL,
    "excerpt" TEXT,
    "savedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FavoriteArticle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "FavoriteTrend_userId_trendId_key" ON "FavoriteTrend"("userId", "trendId");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "FavoriteArticle_userId_articleId_key" ON "FavoriteArticle"("userId", "articleId");

-- AddForeignKey
ALTER TABLE "FavoriteTrend" ADD CONSTRAINT "FavoriteTrend_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteArticle" ADD CONSTRAINT "FavoriteArticle_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
