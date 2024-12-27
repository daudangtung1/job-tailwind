/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {};
      for (let i = 1; i <= 10; i++) {
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
