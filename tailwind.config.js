/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        amazon: {
          light: "#232F3E",
          DEFAULT: "#131921",
          yellow: "#febd69",
          orange: "#f90"
        }
      }
    },
  },
  plugins: [],
}
