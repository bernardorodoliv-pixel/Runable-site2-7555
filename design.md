# Design — Berkshire Hathaway (2026 redesign concept)

Editorial, warm, premium-institutional. Reference: Nestora-style layout supplied by the user —
oversized display serif wordmark, alternating cream / ink blocks, large rounded image cards with
overlaid captions, one copper accent, pill buttons, accordion, oversized contact block.

Positioning: the original site is a 1997 HTML index. The redesign keeps 100% of the institutional
content and hierarchy (reports, letters, filings, subsidiaries, governance, fraud notice, GEICO line)
but presents it as a modern investor-relations experience.

## Color

| Token | Value | Use |
|---|---|---|
| `--ink` | `#12110F` | dark sections, footer, headings on cream |
| `--ink-soft` | `#1D1B18` | dark section cards |
| `--cream` | `#F7F3EA` | page background |
| `--sand` | `#E9E1D3` | dividers, muted cards, borders |
| `--copper` | `#C2531F` | primary accent, CTA fill, links, active states |
| `--copper-bright` | `#E2622A` | hover / accent on dark |
| `--muted` | `#7A736A` | secondary text on cream |
| `--muted-dark` | `#A9A19A` | secondary text on ink |

Rules: one accent only. Copper for emphasis, never as decoration. Never pure black or pure white.
Focus ring = 2px copper offset 2px. All body text ≥ 4.5:1 (ink on cream ≈ 15:1, muted on cream ≈ 4.7:1,
muted-dark on ink ≈ 6.4:1).

## Typography

- Display: **Instrument Serif** (400 + italic) — wordmark, section titles, stat numbers.
- Body/UI: **Geist** (400/500/600) — paragraphs, nav, labels, buttons.
- Eyebrow labels: Geist 500, 11–12px, `tracking-[0.18em]`, uppercase, muted.
- Scale: hero wordmark `clamp(3.2rem, 13vw, 12.5rem)` with `leading-[0.82]`;
  section title `clamp(2.2rem, 5vw, 4.25rem)`; body 17px/1.7; small 14px/1.6.
- Max measure 68ch. Hyphenation off. No Inter / Roboto anywhere.

## Layout & spacing

- Container 1280px, 24px gutters (16px < 640px).
- Vertical rhythm: sections `py-24 md:py-36`; block gap 80px; card gap 20–24px.
- 12-col grid, deliberately asymmetric (7/5 and 5/7 splits, offset second column).
- Radii: cards `28px`, images `24px`, pills `999px`, small chips `12px`.
- Borders: 1px `--sand` on cream, `rgba(255,255,255,.12)` on ink.
- Elevation: almost none — separation comes from tone and radius, not shadows.

## Components

- **Header**: fixed floating bar, `backdrop-blur`, cream/85 → ink/85 when over dark, 1px hairline
  border. Wordmark left (serif), nav center, copper pill CTA right. < 1024px: hamburger → full-screen
  ink drawer with serif nav list. Skip-to-content link first in DOM.
- **Buttons**: primary = copper pill, white text; secondary = ink outline pill; tertiary = text link
  with animated copper underline. 48px min touch height.
- **Cards**: rounded image card, caption over gradient scrim, or flat sand card with eyebrow + title +
  meta row. Hover: image scale 1.03, caption slide 4px, 400ms ease-out.
- **Accordion** (operating companies): full-width rows, hairline dividers, `+ / −` copper glyph,
  grid of subsidiary links inside. Real `<button aria-expanded>` semantics.
- **Stat block**: serif numeral + Geist label, hairline separators, 2×2 on mobile / 4-up on desktop.
- **Notice band**: copper-tinted band with alert icon for the fraudulent-endorsement warning.
- **Contact block**: ink block, oversized serif "Let's talk", address + disclaimer, copper CTA.
- **Footer**: ink, 4 link columns + legal + copyright + GEICO quote line, giant faded wordmark.

## Motion

One orchestrated page-load: header fades down, hero wordmark rises in two staggered lines (60ms
stagger), hero image scales 1.06 → 1. On scroll, sections reveal once (opacity + 16px rise, 500ms).
Respects `prefers-reduced-motion` (all transforms disabled). CSS-only, no motion library needed.

## Accessibility

Single `h1`, ordered headings. Landmarks: header/nav/main/footer. Alt text on every content image,
`aria-hidden` on decorative ones. Visible focus everywhere. Accordion and drawer keyboard-operable
(Esc closes drawer, focus trapped). Text over images always sits on a scrim ≥ 55% opacity.

## Responsive

Mobile-first. Breakpoints 640 / 768 / 1024 / 1280. Hero wordmark scales with `clamp()`; grids collapse
7/5 → 1 col; accordion inner grid 3 → 1 col; contact block stacks; nav → drawer.
