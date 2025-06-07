export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
      },
      keyframes: {
        fadeOut: {
          to: { transform: "scale(1.5)", opacity: "0" },
        },
        explode: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(2) translateY(-20px)", opacity: "0" },
        },
      },
      animation: {
        fadeOut: "fadeOut 1s forwards",
        explode: "explode 0.6s forwards",
      },
    },
  },
  plugins: [],
};
