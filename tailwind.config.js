/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      'grey': '#9A9A9A',
      'light-grey': '#f0f0f0',
      'white': '#ffffff',
      'black': '#000000',
    },
  },
  plugins: [],
}
