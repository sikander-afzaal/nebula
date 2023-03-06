/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        purpleGr: "linear-gradient(to right,#4300ef,#e700ff)",
      },
      colors: {
        green: "#36bd41",
        "gray-600": "#9a9a9d",
        "gray-500": "#e5e5e5",
        "gray-400": "#f6f6f6",
        pink: "#d517fe",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      dropShadow: {
        heroBox: "0 0 7.5px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};
