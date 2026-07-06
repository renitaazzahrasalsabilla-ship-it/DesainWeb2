/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: '#FAF6EF',
        ink: '#1C1B1A',
        muted: '#6B6560',
        teal: {
          DEFAULT: '#0F6B5C',
          dark: '#0B4F44',
          light: '#E4F1EE',
        },
        clay: '#C4622D',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
