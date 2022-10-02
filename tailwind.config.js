/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "2/3": "75%",
    },
    extend: {},
  },
  plugins: [],
};
