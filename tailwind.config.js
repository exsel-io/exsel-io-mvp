/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E1AC32",
        ash: "rgba(0, 0, 0, 0.46)"
      },
    },
  },
  plugins: [],
}

