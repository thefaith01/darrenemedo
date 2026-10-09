import type { Config } from 'tailwindcss'

/*
 * Civic theme. White paper, near-black ink, one gold accent used sparingly.
 * Source Serif 4 for headings, Public Sans for everything else; both are
 * loaded with next/font in app/layout.tsx and exposed as CSS variables.
 * DESIGN.md documents the system. Edit here to retheme the whole site.
 */
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#FFFFFF',
        paper: '#F4F3F3',
        ink: '#191919',
        accent: { DEFAULT: '#191919', dark: '#333333' },
        // Gold is decoration only. Use gold.dark wherever gold carries text
        // or a meaningful edge: it clears 5:1 on white.
        gold: { DEFAULT: '#B7963E', dark: '#8A6A1F' },
        // Solid greys so contrast is predictable: muted 6.5:1, faint 5:1 on white.
        muted: '#5E5E5E',
        faint: '#6F6F6F',
        line: '#E2E1E1',
        chip: '#F4F3F3',
      },
      fontFamily: {
        display: ['var(--font-serif)', 'Georgia', 'serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Type scale: 14 label, 15 secondary, 17 body, 20 lead, then display.
        // Named `body` rather than overriding `base`, because `base` is also
        // the white colour token and text-base would set both.
        label: ['0.875rem', { lineHeight: '1.45', fontWeight: '500' }],
        sm: ['0.9375rem', { lineHeight: '1.55' }],
        body: ['1.0625rem', { lineHeight: '1.65' }],
        lead: ['1.25rem', { lineHeight: '1.55' }],
      },
      maxWidth: {
        measure: '65ch',
      },
    },
  },
  plugins: [],
}

export default config
