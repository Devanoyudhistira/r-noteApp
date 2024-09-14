/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'fontFamily': {
        'robot' : 'roboto',
        'bebas' : 'Bebas Neue',
        'poppins' : 'poppins',
      },
  },
  plugins: [],
}}