# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Next.js development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint with Next.js core-web-vitals rules
```

No test suite is configured.

## Architecture

This is a **Next.js 16 App Router** portfolio site for Jaydeep Sindhav — Frontend Developer. Minimal Editorial design: warm off-white background (`#FAFAF8`), typography-forward, no heavy animations. Fully static, no backend or API routes.

### Pages

| Route | File | Notes |
|---|---|---|
| `/` | `src/app/page.tsx` | Home — Hero, About, Projects, Skills, Writing, Contact, Footer |
| `/blog` | `src/app/blog/page.tsx` | Blog listing (server component) |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | Individual post (SSG via `generateStaticParams`) |

### Key files

- `src/app/layout.tsx` — Root layout: font CSS variables (`--font-inter`, `--font-syne`, `--font-fira`), global metadata, Navigation wrapper
- `src/lib/posts.ts` — Server-only file I/O: `getAllPosts()` and `getPostBySlug(slug)`. Slug is validated against `/^[a-z0-9]+(?:-[a-z0-9]+)*$/` before any filesystem access.
- `src/lib/animations.ts` — Framer Motion variants: `fadeInUp`, `staggerContainer`, `viewportOnce`
- `src/lib/cn.ts` — `cn()` utility: `clsx` + `tailwind-merge`
- `src/types/index.ts` — Shared interfaces: `Project`, `Skill`, `BlogPost`

### Design tokens (`tailwind.config.js`)

| Token | Value | Role |
|---|---|---|
| `page` | `#FAFAF8` | Background |
| `surface` | `#F4F4F5` | Card / surface |
| `border` | `#E4E4E7` | Dividers |
| `muted` | `#71717A` | Secondary text |
| `ink` | `#18181B` | Primary text |
| `accent` | `#4F46E5` | Links, highlights |
| `accent-light` | `#EEF2FF` | Accent bg tint |

Fonts via CSS variables: `--font-inter` (body), `--font-syne` (display/headings), `--font-fira` (mono).

### Utility classes (`globals.css`)

| Class | Purpose |
|---|---|
| `.section-label` | Small cyan eyebrow text above headings |
| `.section-heading` | Display heading (Syne, bold) |
| `.card` | Surface card with border and hover state |
| `.tech-tag` | Small indigo badge for tech stack |
| `.btn-primary` | Dark filled button |
| `.btn-secondary` | Outlined button |
| `.prose-editorial` | Blog post body prose styles |

### Blog pattern

Posts are MDX files in `src/content/posts/`. Add a post by creating `src/content/posts/my-post-slug.mdx` with:

```mdx
---
title: "Post title"
date: "2026-04-13"
summary: "One sentence."
---

Content here...
```

Slugs must be lowercase alphanumeric with hyphens only (`my-post-slug`). `getAllPosts()` and `getPostBySlug()` in `src/lib/posts.ts` handle all file reading — no CMS, no database.

`<MDXRemote>` in the blog post page passes a `components` prop that blocks `script`, `iframe`, `object`, and `embed` from rendering.

### Adding a new home-page section

1. Create `src/components/MySection.tsx`
2. Import and add it to `src/app/page.tsx`
3. Add a matching `href="#my-section"` anchor in `src/components/Navigation.tsx`

To wire up scroll-reveal animations, import from `src/lib/animations.ts`:

```tsx
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

// Stagger wrapper on the container, fadeInUp on each child
<motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
  <motion.p variants={fadeInUp}>…</motion.p>
</motion.div>
```

### Navigation

`src/components/Navigation.tsx` is a sticky top bar. `Link` (Next.js) for real routes (`/blog`), `href="#section-id"` for on-page anchors. Social icon SVGs are inlined directly in the component.

### Security headers

HTTP security headers (CSP, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) are set in `next.config.ts` via the `headers()` async function and apply to all routes.

### URL safety

`src/components/Projects.tsx` exports a `safeHref(url)` helper that only passes through `https:` and `http:` URLs to anchor `href` attributes. Use it whenever rendering user-supplied or data-driven URLs.

### Path alias

`@/*` resolves to `./src/*`.
