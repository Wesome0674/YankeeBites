/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      fontFamily: {
        "body": "Shadows Into Light",
        "all": "Poppins",
      },
      screens: {
        'ps': '530px'
      },
    },
  },
  plugins: [],
}