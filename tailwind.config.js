// tailwind.config.js
module.exports = {
  content: [
    "./index.html",             // Include root HTML
    "./src/**/*.{js,jsx,ts,tsx}" // Include all React files
  ],
  theme: {
    extend: {
      animation: {
        fadeInUp: "fadeInUp 1s ease-in-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
