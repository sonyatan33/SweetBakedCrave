/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
const Unfonts = require("unplugin-fonts");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-bg-color": "#E8DDDD",
        "main-bg-color": "#BD9B9B",
      },
    },
    fontFamily: {
      fredericka: ["Fredericka the Great", ...fontFamily.sans],
      inter: ["Inter", ...fontFamily.sans],
    },
  },
  plugins: [],
};
