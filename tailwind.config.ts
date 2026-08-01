import type { Config } from 'tailwindcss'

/*
 * TrustFlow theme — white, near-black, and a single gold accent carried
 * over from the previous Roman palette. Components reference token names
 * only; edit here to retheme the whole site.
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
        accent: { DEFAULT: '#191919', dark: 'rgba(25,25,25,0.9)' },
        gold: { DEFAULT: '#B7963E', dark: '#8A6A1F' },
        muted: 'rgba(25,25,25,0.7)',
        faint: 'rgba(25,25,25,0.5)',
        line: '#e5e5e5',
        chip: '#F4F3F3',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
