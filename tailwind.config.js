/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        brown: {
          100: '#E3E3E3',
          300: '#D0BAA1',
          500: '#9F7F59',
          700: '#393939',
          800: '#292626',
          900: '#1F1D1D',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
