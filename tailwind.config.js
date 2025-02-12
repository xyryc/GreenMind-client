/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
        lightBlue: "#C1DCDC",
        colorPrimary: "rgba(30, 30, 30, 1)",
        colorSecondary: "rgba(30, 30, 30, 0.5)",
        colorTartiary: "rgba(30, 30, 30, 0.75)",
      },
      fontFamily: {
        Quella: ["Quella", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
};
