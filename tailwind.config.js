/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF Pro", "Helvetica Neue", "Arial", "sans-serif"],
        // aeonik: ["Aeonik", "sans-serif"],
        porlane: ["Porlane", "sans-serif"],
        jetbrainsMono: ["JetBrains Mono", "sans-serif"],
      },
      colors: {
        darkBackground: "#080808",
        primaryWhite: "#CFCFCF",
        highlightWhite: "#FFFFFF",
        dullWhite: "#757575",
      },
    },
  },
  plugins: [],
};
