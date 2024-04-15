/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				primary: '#7551FF',
				secondary: '#F97912',
				text: {
					100: '#FFFFFF',
					200: 'rgb(255 255 255 / 0.6)',
				},
				bg: {
					100: '#0c0f0e',
					200: '#141414',
					300: '#1a1a1a',
				},
			},
    },
  },
  plugins: [],
}

