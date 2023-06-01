/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#151515",
        "dark-secondary": "#202020",
        "dark-secondary-bright": "#333333",
      },
      gridTemplateColumns: {
        "side-main": "220px minmax(0, 1fr)",
      },
    },
  },
  plugins: [],
};
