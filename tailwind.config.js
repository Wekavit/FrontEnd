/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: { min: "360px", max: "600px" },
      md: { min: "601px", max: "768px" },
      lg: { min: "769px", max: "992px" },
      xl: { min: "993px", max: "1280px" },
      "2xl": { min: "1536px" },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "back-color": "#EDEDED",
        "primary-color": "#007FFF",
        "hero-color": "#F6F9FC",
      },
      colors: {
        "black-text": " #3C4257",
        "text-dark": "rgb(17, 15, 25)",
        "border-color": "#EDEDED",
        "primary-color": "#007FFF",
        "minimal-color": "#0094FF",
        "hero-text": "rgb(50, 48, 60)",
        "gray-text": "#636363",
        "light-gray": "rgba(50, 48, 60, 0.611)",
      },
      // font size
      fontSize: {
        xxs: "0.7rem",
        "5rem": "3.5rem",
        "1.2rem": "1.2rem",
      },
      // heigth
      height: {
        "10vh": "11vh",
        "89vh": "89vh",
        extra: "90%",
      },
      // width
      width: {
        50: "11.6rem",
        extra: "200%",
      },
      // Margin etc...
      margin: {
        "11vh": "11vh",
      },
      //padding
      padding: {
        17: "4.5rem",
      },
    },
  },
  plugins: [],
};
