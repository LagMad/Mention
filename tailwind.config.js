/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"]
      },
      colors: {
        'cust-darker-blue': '#0E2D5C',
        'cust-green': '#04BA91',

        'cust-black-light': '#E6E6E6',
        'cust-black-light-hover': '#D9D9D9',
        'cust-black-light-active': '#B0B0B0',
        'cust-black-normal': '#000000',
      },
      backgroundImage: {
        'HeroSection': "url('/src/assets/Street.png')",
      }
    },
  },
  plugins: [],
};
