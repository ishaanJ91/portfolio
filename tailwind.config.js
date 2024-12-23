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
        "dark-blue-ps": "rgb(13, 27, 64)",
        "beige-dark": "rgba(32, 32, 32)",
        "project-card-bg": "rgb(24,28,38)",
      },
      borderWidth: {
        1: "1.5px",
        3: "3px",
      },
      borderColor: {
        "border-color": "rgb(75,85,99)",
      },
      maxWidth: {
        1400: "1400px",
      },
    },
  },
  plugins: [],
};
