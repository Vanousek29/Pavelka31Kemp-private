import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'p31-bg': '#0A0A0A',
        'p31-bg-secondary': '#141414',
        'p31-bg-tertiary': '#161616',
        'p31-red': '#CE1126',
        'p31-red-hover': '#A50E1F',
        'p31-muted': '#B0B0B0',
        'p31-border': 'rgba(255,255,255,0.06)',
        'p31-border-light': 'rgba(255,255,255,0.12)',
        'p31-border-lighter': 'rgba(255,255,255,0.15)',
        'p31-glass': 'rgba(10,10,10,0.78)',
        'p31-footer': '#050505',
      },
      fontFamily: {
        'heading': ['var(--font-bebas)', 'sans-serif'],
        'body': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'mono': ['var(--font-jetbrains)', 'monospace'],
      },
      keyframes: {
        'p31-pulse': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        'p31-shine': {
          '0%': { transform: 'translateX(-150%) skewX(-20deg)' },
          '100%': { transform: 'translateX(350%) skewX(-20deg)' },
        },
      },
      animation: {
        'p31-pulse': 'p31-pulse 2s ease-in-out infinite',
        'p31-shine': 'p31-shine 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
