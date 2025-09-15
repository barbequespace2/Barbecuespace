/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['var(--font-satoshi)'],
        greatVibes: ['var(--font-great-vibes)'],
        imperialScript: ['var(--font-imperial-script)'],
      },
    },
  },
  plugins: [],
};