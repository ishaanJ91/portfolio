/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "300px",
      sm: "530px",
      md: "666px",
      lg: "880px",
      xl: "1200px",
    },
    extend: {
      height: {
        "3/4": "70vh",
      },
      colors: {
        beige: "#efece3",
        "beige-dark": "rgba(32, 32, 32)",
      },
      borderWidth: {
        1: "1.5px",
        3: "3px",
      },
      maxWidth: {
        1500: "1500px",
      },
    },
  },
  plugins: [],
};
