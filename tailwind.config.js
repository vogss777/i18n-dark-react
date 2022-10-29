/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      sm: '640px',
      //=>@media(min-width:640px){...}
      md: '768px',
      //=>@media(min-width:768px){...}
      xl: '1280px',
      //=>@media(min-width:1280px){...}
      '2xl': '1536px',
      //=>@media(min-width:1536px){...}
      lg: '800px',
      // => @media (min-width: 1240px) { ... }
    },
    extend: {
      textOpacity: ['light']
    },
  },
  plugins: [],
}
