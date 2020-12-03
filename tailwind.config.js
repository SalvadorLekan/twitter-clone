module.exports = {
  purge: ["./src/**/*.js", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: "500px",
      // => @media (min-width: 500px) { ... }

      md: "1000px",
      // => @media (min-width: 1000px) { ... }

      lg: "1277px",
      // => @media (min-width: 1277px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {},
  plugins: [],
};
