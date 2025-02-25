/** @type {import('tailwindcss').Config} */  
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}","node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: { 
        primary: "#B1FF0B",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('flowbite/plugin')
]
};