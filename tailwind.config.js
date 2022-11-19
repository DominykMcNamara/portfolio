/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        black: 'rgb(21, 21, 21)',
        neonGreen: 'rgb(78, 225, 160)',
        lightBlack: 'rgb(36, 36, 36)',
        gray: 'rgb(217, 217, 217)',
        white: 'rgb(255, 255, 255)'
      }
    },
    fontFamily: {
      base: [ 'Space Grotesk', 'sans-serif', 'ui-sans-serif', "system-ui"],
    },
    letterSpacing: {
      h1: '-0.156rem',
      h2: '-0.094rem'
    },
    fontSize: {
      h1: ["5.5rem", { lineHeight: "5.5rem"}],
      h2: ["3rem", { lineHeight: "3.5rem" }],
      h3: ["1.5rem", { lineHeight: "2rem" }],
      p: ["1.125rem", { lineHeight: "1.75rem" }]
    },
    extend: {},
  },
  plugins: [],
}