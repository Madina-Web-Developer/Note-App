/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


    darkMode:'class',


  theme: {


    container: {
      center: true,
    },

    extend: {

      colors: {
        
        gradientStart: "rgb(255,230,250)", // First color
        gradientMid: "#e8ffff", // Second color
        gradientEnd: "rgb(255,230,250)", // Third color
      },

      color:{

        'BrandColor': '#FFADAD',
      },

      fontFamily:{
        Bangi:['Bungee Spice', 'sans-serif' ],
        Albi: ["Abril Fatface", 'serif'],
        Poppins:["Poppins", 'sans-serif'],
        SaboAlfa:["Alfa Slab One", 'serif'],
      },

      clipPath:{
        'circle': 'circle(29% at 0 0)',
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'), // Install with npm or yarn
  ],
}
