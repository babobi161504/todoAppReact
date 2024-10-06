const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "custom-blue": "#243c5a",
      },
      fontFamily: {
        display: "Oswald, ui-serif", // Adds a new `font-display` class
      },
      flex: {
        2: "1 1 0%",
      },
      content: [flowbite.content()],
      plugins: [flowbite.plugin()],
      // fontWeight: {
      //   hairline: "100",
      //   extralight: "200",
      //   light: "300",
      //   normal: "400",
      //   medium: "500",
      //   semibold: "600",
      //   bold: "700",
      //   // extrabold: "800",
      //   // "extra-bold": "800",
      //   black: "900",
      // },
    },
  },

  plugins: [],
};
