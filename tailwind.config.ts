import type { Config } from 'tailwindcss'

/*
 * Neutral placeholder palette — the design pass (Claude Design) restyles the
 * site by editing these tokens; components reference token names only.
 */
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#F7F6F3',
        paper: '#FFFFFF',
        ink: '#1A1C20',
        accent: { DEFAULT: '#2E5740', dark: '#234432' },
        muted: '#5C6068',
        faint: '#9BA0A8',
        line: '#E6E4DF',
        chip: '#EFEDE8',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        sans: ['"Hanken Grotesk"', 'sans-serif'],
        serif: ['"Newsreader"', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
