import type { Config } from 'tailwindcss'

/*
 * Roman theme — marble, terracotta, and aged gold. Components reference
 * token names only; edit here to retheme the whole site.
 */
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#F3ECDD',
        paper: '#FBF6EA',
        ink: '#2A2016',
        accent: { DEFAULT: '#A23E24', dark: '#7E2E1A' },
        gold: { DEFAULT: '#B7963E', dark: '#8A6A1F' },
        muted: '#5A503E',
        faint: '#A79C87',
        line: '#DED0B4',
        chip: '#EFE4C9',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        sans: ['"EB Garamond"', 'serif'],
        serif: ['"EB Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
