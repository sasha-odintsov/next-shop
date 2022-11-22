/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   'lg': {'max': '992px'},
    //   'md': {'max': '768px'},
    //   'sm': {'max': '480px'},
    // },
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp'),],
}
