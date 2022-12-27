/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/pages/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
