/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "1rem",
      base: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
      "3xl": "3rem",
      "4xl": "4rem",
      "5xl": "4.5rem",
      "6xl": "5.125rem",
    },
    screens: {
      "3xl": { max: "1440px" },
      "2xl": { max: "1150px" },
      xl: { max: "1075px" },
      lg: { max: "900px" },
      slg: { max: "750px" },
      md: { max: "600px" },
      sm: { max: "450px" },
    },
    extend: {
      colors: {
        veryLightGrey: "#828282",
        lightGrey: "#A1A1A1",
        lightCyan: "#C1D0E4",
        darkBlue: "#2D3949",
        lightDarkBlue: "#566270",
        veryDarkBlue: "#283444",
        grey: {
          50: "#C1C1C1",
          100: "#A1A1A1",
          200: "#4F4F4F",
          300: "#2D3949",
        },
        lightGreen: "#2AF598",
        lightBlue: "#009EFD",
      },
      backgroundColor: {
        "bg-light-white": "rgba(255,255,255,0.2)",
        "bg-light-black": "rgba(0,0,0,0.3)",
      },
      borderRadius: {
        "border-base": "50px",
      },
    },
  },
  plugins: [],
};
