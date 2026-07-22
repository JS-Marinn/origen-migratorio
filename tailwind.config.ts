import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-playfair-display)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#313B5F',
          dark: '#252C49',
          light: '#465380',
        },
        gold: {
          DEFAULT: '#CD9F44',
          light: '#E4C87F',
          soft: '#F6EDDA',
        },
        body: '#3A3A3A',
        mist: '#F7F7F8',
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
