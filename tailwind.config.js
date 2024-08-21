/** @type {import('tailwindcss').Config} */
import tailwindcssHighlights from 'tailwindcss-highlights'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,md}',
    './pages/**/*.{js,ts,jsx,tsx,md}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcssHighlights,
  ],
}
