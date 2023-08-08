/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: { min: "0px", max: "600px" },
      md: { min: "601px", max: "890px" },
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
        "primary-light-color": "rgba(0, 128, 255, 0.852)",
        "service-perso": "rgba(0, 149, 255, 0.1)",
        "service-collabo": "rgba(195, 86, 179, 0.1)",
        "service-collective": "rgba(250, 151, 3, 0.1)",
        "service-individu": "rgba(25, 134, 23, 0.1)",
        "step-divider": "rgba(0, 149, 255, 0.5)"
      },
      colors: {
        "black-text": " #3C4257",
        "text-dark": "rgb(17, 15, 25)",
        "border-color": "#EDEDED",
        "primary-color": "#007FFF",
        "minimal-color": "#0094FF",
        "title-color": "#3C4257",
        mainbrand: "#000B4D",
        "hero-text": "rgb(50, 48, 60)",
        "gray-text": "#636363",
        "light-gray": "rgba(50, 48, 60, 0.611)",
        "hover-service": "rgba(245, 243, 243, 1)",
        "blue-mobileMenuBtn": "rgba(0, 127, 255, 0.1)",
        "blue-mobileMenuBtn": "rgba(0, 127, 255, 0.1)",
        "blue-small": "rgba(0, 148, 255, 0.5)",

        "wallet-icon": "rgba(0, 148, 255, 0.2)",
        "collectif-icon": "rgba(250, 151, 3, 0.1)",
        "individuel-icon": "rgba(24, 157, 21, 0.1)",
        "collaboratif-icon": "rgba(175, 55, 156, 0.1)",

        "green-mobileMenuBtn": "rgba(24, 157, 21, 0.1)",
        "pink-mobileMenuBtn": "rgba(195, 86, 178, 0.1)",
        borderColor: "#E2E8F0",
        // "hero-text": "rgba(50, 48, 60, 0.9)",
        "dark-hero-text": "rgba(50, 48, 60, 1)",
        "medium-gray": "rgba(50, 48, 60, 0.8)",
        "orange-mobileMenuBtn": "rgba(243, 171, 63, 0.1)",
        "green-mobileMenuBtn": "rgba(24, 157, 21, 0.1)",
        "pink-mobileMenuBtn": "rgba(195, 86, 178, 0.1)",
        "dark-primary-color": "rgba(22, 59, 95, 0.87)",
        "light-white": "rgba(255, 255, 255, 0.75)"
      },
      // font size
      fontSize: {
        xxs: "0.7rem",
        "5rem": "3rem",
        "1.2rem": "1.1rem",
        "33px": "33px",
        "35px": "35px",
        "38px": "38px",
        "40px": "40px",
        "45px": "45px",
        "12px": "12px",
        "1.55rem": "1.2rem",
        "1.56rem": "1.56rem"
      },

      // Spacing top/bottom/left/right
      spacing: {
        "12vh": "10vh",
        "15%": "15%",
        "45%": "45%",
      },

      // heigth
      height: {
        "2px": "2px",
        "11vh": "11vh",
        "93vh": "93vh",
        350: "350px",
        extra: "90%",
        "30%": "30%",
        "2px": "2px",
        "2.5px": "2.3px",
        "73vh": "73vh",
        "65vh": "47vh",
        "57vh": "60vh",
        350: "350px",
        extra: "90%",
        "50vh": "50vh"
      },
      // width
      width: {
        50: "11.6rem",
        900: "1500px",
        extra: "200%",
        "45%": "45%",
        "22%": "22%",
        "25%": "25%",
        "service-width": "37%",
        "service-w-sm": "36%",
        "service-w-md": "43%",
        "58%": "58%",
        "100": "100%"
      },
      // Margin etc...
      margin: {
        "11vh": "11vh",
        "12vh": "12vh",
        "10.45rem": "10.45rem",
        "0.18rem": "0.18rem",
        "100": "35rem"
      },
      //padding
      padding: {
        17: "4.5rem",
      },

      // translate
      translate: {
        "11px": "11px",
        "4px": "4px",
      },

      lineHeight: {
        "extra-loose": "2.5",
        36: "45px",
      },
      // borderColor 
      borderColor: {
        "service-border": "rgba(0, 149, 255, 0.3)",
        "secure-border": "rgba(50, 48, 60, 0.1)",
      },
      // borderWidth 
      borderWidth: {
        "1px": "1px"
      }
    },
  },
  plugins: [],
};
