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
        
        gradientStart: "#b0ffff", // First color
        gradientMid: "#efdbd6", // Second color
        gradientEnd: "#b0ffff", // Third color
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
      tailwindClipPath,
    ],
}
