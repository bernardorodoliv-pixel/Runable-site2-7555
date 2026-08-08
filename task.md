# Berkshire Hathaway — redesign concept

Goal: modern UX/UI redesign of berkshirehathaway.com as a working site.
Stack: Bun + Vite + React 19 + Wouter + Tailwind 4 + Hono (Runable template).
Language: English. Boldness: balanced / premium corporate.

## Progress
- [x] app_init scaffold
- [x] Scrape source site (home, subs, news 2026, reports)
- [x] Design direction (design.md): palette, type, radii, motion, a11y
- [x] Images sourced + resized into packages/web/public/images (9 files)
- [x] index.html: meta/OG, Instrument Serif + Geist
- [x] styles.css: @theme tokens, utilities, keyframes, reduced-motion
- [x] lib/content.ts: nav, stats, reports, letters, 6 sectors + subsidiaries, news, investor cards, footer
- [x] hooks/use-reveal.ts (IntersectionObserver + useScrolled)
- [x] Components: site-header, hero, company, reports, operations, newsroom, site-footer
- [x] pages/index.tsx composition + skip link
- [x] bun run build passes
- [x] Desktop visual pass @1440 (full page)
- [x] Mobile visual pass @390
- [x] Fix: hero "INC." too small on mobile -> fontSize max(1.05rem, 0.2em)
- [x] Fix: footer disclaimer hidden behind Runable badge -> own line + bottom padding
- [x] Interactions: accordion open/collapse, mobile drawer open, Esc closes drawer
- [x] mb audit: a11y clean, lang/title/h1/OG ok
- [x] Dev server on port 4200 (tmux session `web`)
- [x] Delivered

## Known / accepted
- `bun run lint` fails in the untouched mobile package (template rule expects
  `../components/ErrorBoundary`, file on disk is `__ErrorBoundary.tsx`). Pre-existing,
  unrelated to the web app; `bun run build` unaffected.
- Build warning: JS chunk ~539 kB > 500 kB (template deps).
- Audit flags 19 font sizes / 5 radii — includes Runable badge styles; acceptable.
- No canonical link (no production domain yet; vite rejects relative canonical).
