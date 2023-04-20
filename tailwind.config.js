/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f5f5f5",
        black: "#000",
        cornflowerblue: "#6972c3",
        icon: "#999",
        dimgray: "#666",
        "secondary-text": "#858585",
        "light-green": "#9bdd7c",
        white: "#fff",
        lavender: "#dee0ef",
        mistyrose: "#efdada",
        honeydew: "#ddefe0",
        oldlace: "#f4ecdd",
        link: "#346bd4",
        "field-color-darker": "#eaeaea",
      },
      fontFamily: { montserrat: "Montserrat", lato: "Lato" },
      borderRadius: { xl: "20px", "3xs": "10px" },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      lg: "18px",
      "17xl": "36px",
      base: "16px",
    },
  },
  corePlugins: { preflight: false },
};
