/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#700B97',
        'primary-Pink': '#D4ADFC',
        'primary-darkGreen': '#064635',
        'primary-darkBlue': '#13005A',
        'primary-grayishWhite': '#DFDFDE',
        'primary-peach': '#FA9494',
        'primary-brightPeach': '#FE7E6D',
        'primary-red': '#EB1D36',
        'primary-lime': '#B4FE98',
        'primary-lightBlue': '#00E7FF',
        'primary-pink': '#FF55BB',
        'primary-neonPeach': '#FF6464',
        'primary-bg-dark': '#181c22'
      },
    },
  },
  plugins: [],
}