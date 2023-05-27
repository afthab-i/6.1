/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.html"],
  theme: {
    extend: {
      colors: {
        header: "#132A13",
        scoreboard: "#4f772d",
        gameboard: "#31572c",
        body: "#f8ffad",
        border: "#f8ffad",
        font: "#ecf39e",
      },
    },
  },
  plugins: [],
};
