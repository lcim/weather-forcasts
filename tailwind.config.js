/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "views/**/*.{html,ejs,js,jsx}",
    "./index.js",
  ],
  theme: {
    extend: {
      minWidth: {
        "0": "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/5": "60%",
        "3/4": "75%",
        "4/5": "80%",
        "9/10": "90%",
        "93/100": "93%",
        "95/100": "95%",
        "96/100": "96%",
        "97/100": "97%",
        "full": "100%",
      }
    },
  },
  plugins: [require("daisyui")],
}

