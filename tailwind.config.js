/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blackLight: "#061200",
        yellowOrange: "#EBC699",
        green: "#0C2400",
        lightWhite: "#F4F0EC",
        blackMode: "#020602",
        textDark :'#EAEAEA'
      },
      fontFamily: {
        head: "Playfair Display, serif",
        body: "Open Sans, sans-serif",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
