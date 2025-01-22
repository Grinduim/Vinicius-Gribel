/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#519872",
        secondary: "#3B5249",
        white: "#F2F2F2",
        grey: "#333333",
        black: "#111111"
      },
      height: {
        'screen-small': '100svh',
        'screen-large': '100lvh',
        'screen-dynamic': '100dvh',
        // Add partial heights
        '90svh': '90svh',
        '80svh': '80svh',
        '50svh': '50svh',
        '90lvh': '90lvh',
        '80lvh': '80lvh',
        '50lvh': '50lvh',
        '90dvh': '90dvh',
        '80dvh': '80dvh',
        '50dvh': '50dvh',
      },
      minHeight: {
        'screen-small': '100svh',
        'screen-large': '100lvh',
        'screen-dynamic': '100dvh',
      }
    },
  },
  plugins: [],
}