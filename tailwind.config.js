/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')
export default withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}' // Pastikan semua file React ke-scan
  ],
  theme: {
    extend: {}
  },
  plugins: []
})
