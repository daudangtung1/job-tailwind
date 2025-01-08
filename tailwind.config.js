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
        galleryBlue1: 'rgb(10, 103, 233)',
        lightGray1: 'rgb(36, 36, 36)',
        lightGray2: 'rgb(84, 84, 84)',
        lightGray3: 'rgb(234, 242, 254)',
        defaultOrange: 'rgb(244, 64, 37)',
        orange1: 'rgb(242, 66, 13)',
        orange2: 'rgb(242, 67, 13)',
        darkBlue1: 'rgb(5, 31, 77)',
        darkBlue2: 'rgb(7, 58, 145)'
      },
      screens: {
        'tablet-lg': '992px',
        'xs': '410px',
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
