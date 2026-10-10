# Design system: darrenemedo.com

A civic, editorial look for a chartered property professional. White paper, near-black ink, one gold accent used sparingly. Hierarchy comes from type size, weight and space, not from boxes, shadows or ornaments.

**Design read:** a personal professional site for leaseholders, RMC directors and property peers. Trust-first and editorial, redesigned in preserve mode. Dials (from taste-skill): variance 5, motion 3, density 3.

Tokens live in `tailwind.config.ts`. Shared primitives live in `components/ui.tsx`. Change them there, then update this file.

## Typography

| Role | Font | Size | Weight | Line height |
|---|---|---|---|---|
| Display (h1) | Source Serif 4 | 48px to 72px | 400 | 1.05 |
| Section heading (h2) | Source Serif 4 | 36px to 44px | 400 | 1.1 |
| Item heading (h3) | Source Serif 4 | 22px | 400 | 1.3 |
| Lead | Public Sans | 20px | 400 | 1.55 |
| Body | Public Sans | 17px | 400 | 1.65 |
| Secondary | Public Sans | 15px | 400 | 1.55 |
| Label | Public Sans | 14px | 500 | 1.45 |

- Fonts load through `next/font/google` in `app/layout.tsx` as `--font-serif` and `--font-sans`.
- Tailwind classes: `text-label`, `text-sm`, `text-body`, `text-lead`. Do not use `text-base` for size: `base` is also the white colour token.
- The serif is a deliberate editorial choice: Darren is a published writer and a chartered-track professional, so a publication serif fits. An all-sans alternative (Public Sans headings) was mocked up for comparison.
- Headings use `text-wrap: balance`, paragraphs use `text-wrap: pretty`.
- Sentence case everywhere. No tracked uppercase labels, no eyebrow text above headings, no italic display type.
- Running text is capped at `max-w-measure` (65ch).

## Colour

| Token | Hex | Use |
|---|---|---|
| base | #FFFFFF | Page and card surface |
| paper | #F4F3F3 | Alternate section band, form card on white |
| ink | #191919 | Headings, body, primary buttons |
| accent-dark | #333333 | Primary button hover |
| muted | #5E5E5E | Secondary text (6.5:1 on white) |
| faint | #6F6F6F | Placeholders only (5:1 on white) |
| line | #E2E1E1 | Hairline dividers and borders |
| gold | #B7963E | Decorative only, never text |
| gold-dark | #8A6A1F | Monogram, focus ring (5:1 on white) |
| trustpilot | #00B67A | Trustpilot star mark only. Brand exception, matches Trustpilot's own mark |
| error | #B91C1C | Form error messages |

No gradients, glows, glass or blur.

## Shape and depth

- Radius: 6px (`rounded-md`) on buttons, inputs and cards. 4px on small tags. Full round only on the monogram.
- Depth comes from a 1px `line` border or a `paper` background, never both a border and a shadow. No shadows.

## Spacing and layout

- Content width `max-w-5xl` with 24px side padding.
- Section rhythm varies by role: tight 48 to 64px, default 64 to 96px, loose 80 to 128px.
- Space above a heading is always larger than space below it.
- Each layout family appears once: divided rows only for What I do and Blog, grouped columns for Track record, featured panel plus pair for Projects, split intro and form for Contact.
- Long passages (About, Waiting list) show a lead and put the rest behind a native `<details>` "Read more".
- Reviews are shown in full. This is a deliberate exception to taste-skill's three line quote cap.
- Hero uses `min-h-[100dvh]` and at most `pt-24` top padding.

## Motion

- One entrance treatment: a 600ms fade and 14px rise on `[data-reveal]`, skipped under reduced motion.
- Content is visible by default. Reveal only hides elements after `ScrollReveal` has run.
- Hover states change colour or underline only. Nothing lifts, scales or zooms. Buttons drop 1px when pressed.
- Every interactive element shows a 2px gold-dark focus outline. A skip link leads to the main content.
- Header state and the active nav link come from IntersectionObserver, never a scroll listener.
- The hero building video is an intentional exception: a slow boomerang loop behind the name.
