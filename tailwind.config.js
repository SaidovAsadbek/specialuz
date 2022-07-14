/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      lgreen: "#00e200",
      lgreen2: "#0ebd0e",
      dgreen: "#008d00",
      white: "#fff",
      dark: "black",
      black: "#212529",
      ldark: "#262b2f",
      red : '#fa2a2a'
    },
    extend: {
      backdropBlur: {
        sm: "10px",
      },
    },
  },
  plugins: [],
};
