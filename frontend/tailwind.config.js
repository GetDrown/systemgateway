
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        h1: ['Poppins'],
        h2: ['Poppins'],
        h3: ['Poppins'],
        poppins: 'Poppins',
        inter: 'Inter'
      },
      screens: {
        'tablet': '639px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },

    },
  },
  plugins: [],
};
