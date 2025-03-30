/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#f5f1ef',
          100: '#e2d4cf',
          200: '#cfb8af',
          300: '#bc9b8f',
          400: '#a97f6f',
          500: '#906556',
          600: '#704f43',
          700: '#503830',
          800: '#30221d',
          900: '#100b0a',
        },
        dragonbane: {
          50: '#f6f3ef',
          100: '#e4dace',
          200: '#d1c1ad',
          300: '#bfa88d',
          400: '#ad8f6c',
          500: '#937652',
          600: '#725b40',
          700: '#52412e',
          800: '#31271b',
          900: '#100d09',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
