/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        hero: {
          primary: '#E5B94B', // Golden yellow for primary actions and accents
          secondary: '#2B2B2B', // Darker gray for cards and sections
          dark: '#1A1A1A', // Very dark background
          light: '#E5E5E5', // Light gray for text
          accent: '#F7C64B', // Brighter yellow for hover states
          'dark-800': '#1F1F1F', // Slightly lighter dark for cards
          'dark-700': '#2B2B2B', // Even lighter dark for hover states
          'dark-600': '#343434', // For borders and dividers
          'light-200': '#CCCCCC', // Dimmer text
          'light-300': '#A3A3A3', // Even dimmer text
          'light-400': '#737373', // For less important text
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
