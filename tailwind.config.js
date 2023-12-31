/** @type {import('tailwindcss').Config} */
export default {
   darkMode: 'class',
  content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      dark: "#1E293B",
      darkBlue:'#1E293B'
    }
  },
  },
  plugins: [],
}

