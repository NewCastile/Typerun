/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neu: {
          blue: "#0091ff",
          red: "#ff0000",
          white: "#dedede",
          gray: "#c4c4c4",
          salmon: "#f75a5a",
        },
      },
    },
  },
  plugins: [],
};
