/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./components/**/*.html",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "foodpanda-pink": "#D70F64", // Foodpanda pink
        
      },
    },
  },
  plugins: [],
};
