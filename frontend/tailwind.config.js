/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#DD3333",
          50: "#FBE9E9",
          100: "#F8D3D3",
          200: "#F0A8A8",
          300: "#E97C7C",
          400: "#E25050",
          600: "#AF1D1D",
          700: "#831616",
          800: "#570F0F",
          900: "#2C0707",
          950: "#160404",
        },

        dark: "#1B1B1B",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Barlow", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
};
