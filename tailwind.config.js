/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': { 'min': '360px', 'max': '600px' },
      'md': { 'min': '601px', 'max': '768px' },
      'lg': { 'min': '769px', 'max': '992px' },
      'xl': { 'min': '993px', 'max': '1280px' },
      '2xl': { 'min': '1536px'}
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
        "hero-color" : "#F6F9FC"
      },
      colors: {
        "black-text": " #3C4257",
        "border-color": "#EDEDED",
        "primary-color": "#007FFF",
      },
    },
  },
  plugins: [],
};
