// tailwind.config.js
export const content = [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}", // Make sure this includes your React files
];
export const theme = {
  extend: {
    fontFamily: {
      playwrite: ['"Playwrite MX Guides"', 'sans-serif'],
      quicksand: ['Quicksand', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    animation: {
      fadeIn: "fadeIn 1s ease-in-out",
      slideUp: "slideUp 1s ease-in-out",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      slideUp: {
        "0%": { transform: "translateY(20px)", opacity: 0 },
        "100%": { transform: "translateY(0)", opacity: 1 },
      },
    },
  },
};
export const plugins = [];
