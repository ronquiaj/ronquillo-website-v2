module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    debugScreens: {
      position: ["top", "left"],
    },
    screens: {
      xs: "0px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1900px",
    },
    fontFamily: {
      merriweather: ["Merriweather Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#99A799",
        secondary: "#ADC2A9",
        background: "#D3E4CD",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
