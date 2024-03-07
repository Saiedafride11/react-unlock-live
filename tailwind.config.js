/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#270A05",
        "secondary":"#86371C",
      },
      fontFamily: {
        'ValueSansPro': ['ValueSansPro'],
        'Abril': ['Abril'],
        'Bakilda': ['Bakilda'],
      },
    },
  },
  plugins: []
}

