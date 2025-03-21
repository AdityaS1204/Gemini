/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily:{
          Outfit:["Outfit",'san-serif'],
          genera:["general","san-serif"],
          "Outfit-Bold":["Outfit-Bold","san-serif"],
          "Outfit-Regular":["Outfit-Regular","san-serif"],
          "Outfit-ExtraBold":["Outfit-ExtraBold","san-serif"],
          "Outfit-Medium":["Outfit-Medium","san-serif"],
        },
      },
    },
    plugins: [],
  }