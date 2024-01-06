/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: {
          100: "#e2e1e5",
          200: "#d9d9d9",
          300: "rgba(217, 217, 217, 0)",
        },
        gold: {
          100: "#ffc407",
          200: "#ffc000",
        },
        darkolivegreen: "#416438",
        black: "#000",
        cornflowerblue: "#188ee3",
        darkviolet: "#9f07fc",
        orange: "#f99907",
        royalblue: {
          100: "#0374f9",
          200: "#0069ff",
        },
        yellow: "#f6fb0f",
        lime: {
          100: "#34f304",
          200: "#03fe3a",
          300: "#16f802",
        },
        lightgray: "#d2d2d2",
        gray: "#030303",
        mediumblue: "#0047ff",
        thistle: {
          100: "#e7d3fd",
          200: "#e3ccfc",
        },
        darkslateblue: "#202c6b",
        mediumseagreen: "#00a36c",
        red: {
          100: "#fd0000",
          200: "#f80202",
        },
        blue: "#0913fd",
        springgreen: {
          100: "#00f963",
          200: "#07f759",
        },
        lavender: {
          100: "#e9e9fe",
          200: "#d6d6ff",
        },
        darkslategray: "#094067",
        mediumpurple: "#bc85fa",
        plum: "#dec4fc",
        mediumslateblue: "#b375f9",
      },
      spacing: {},
      fontFamily: {
        consolas: "Consolas",
        "inria-serif": "'Inria Serif'",
        "snap-itc": "'Snap ITC'",
        magneto: "Magneto",
      },
      borderRadius: {
        "3xl": "22px",
        "6xs": "7px",
      },
    },
    fontSize: {
      xl: "20px",
      xs: "12px",
      "13xl": "32px",
      "5xl": "24px",
      "21xl": "40px",
      "29xl": "48px",
      "17xl": "36px",
      "3xl": "22px",
      "45xl": "64px",
      lg: "18px",
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
