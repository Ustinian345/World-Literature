# CLAUDE.md

## Project: 世界文学总站 (World Literature Hub)

A bilingual (Chinese/English) web application serving as a central hub for exploring world literature across six continents, 100+ countries, and 3,000+ literary works.

## Tech Stack

- **Framework**: Next.js 16 (App Router) with TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Playfair Display (English headings), Noto Serif SC (Chinese headings), EB Garamond (body)
- **Deployment**: Vercel

## Project Structure

```
src/
  app/
    layout.tsx      — Root layout (navbar, footer, fonts, metadata)
    page.tsx         — Homepage (hero, stats, featured, continent sections)
    globals.css      — Design tokens (warm literary palette) + base styles
```

## Design Tokens

- **Cream** (#faf7f2): Page background
- **Parchment** (#f3ede3): Alt section background
- **Terracotta** (#c4734f): Primary CTA / links
- **Amber** (#c8963e): Accent / gold elements
- **Umber** (#3c2415): Primary text
- **Warm White** (#fffdf9): Card surfaces

## Commands

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```
