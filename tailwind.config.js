/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],

}

// module.exports = {
//   darkMode: 'class', // Enables dark mode using the "class" strategy
//   content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };


