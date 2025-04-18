/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", // 추가 가능
  ],
  theme: {
    extend: {
      fontFamily: {},
    },
  },
  plugins: [],
};
