/** @type {import('tailwindcss').Config} */
const colors = require('./src/constants/colors.ts')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: colors,
    },
  },
  plugins: [],
}

