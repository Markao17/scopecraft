/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#51CAC5",
          hover: "#174B72",
        },
        secondary: "#698BC0",
        accent: "#51CAC5",
        brand: {
          light: "#698BC0",
          dark: "#174B72",
          teal: "#51CAC5",
        },
      },
    },
  },
  plugins: [],
};
