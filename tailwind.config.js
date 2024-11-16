/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
    },
  },
  plugins: [],
};
