/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#f97316',
          hover: '#fb923c',
          dark: '#ea580c',
          subtle: 'rgba(249, 115, 22, 0.12)',
        },
        charcoal: {
          950: '#07090b',
          900: '#0d1014',
          850: '#12161c',
          800: '#171c24',
          700: '#232a36',
          600: '#323c4d',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
