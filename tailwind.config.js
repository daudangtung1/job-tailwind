/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        'blue-alpha': 'rgba(10, 103, 233, 0.7)',
        'blue-solid': '#0a67e9',
        'blue-base': 'rgb(13, 98, 242)',
        'blue-light': 'rgba(8, 58, 145, 0)',
      },
      screens: {
        'xs': '410px',
        'custom-destop': '1800px',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {};
      for (let i = 1; i <= 20; i++) {
          utilities[`.break-para-${i}`] = {
              overflow: 'hidden',
              display: '-webkit-box',
              '-webkit-box-orient': 'vertical',
              '-webkit-line-clamp': `${i}`,
              wordBreak: 'break-word',
          };
      }
      addUtilities(utilities, ['responsive']);
    }),
  ],
}
