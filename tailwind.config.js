/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {


    container: {
      center: true,
    },

    extend: {

      
      colors:{

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
