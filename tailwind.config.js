/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rancho: ['"Rancho"', 'cursive'],
        roboto: ['"Roboto"', 'sans-serif'],
        tiroTamil:[ "Tiro Tamil", 'serif'],
        Farro:["Farro", "sans-serif"],
      },
      backgroundImage: {
        'Home-pattern': "url('/src/assets/BgHomeImg.jpg')",
      }
    },
  },
  plugins: [],
} 