/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '14': '14px',
        '18': '18px',
        '24': '50px',
      },
      boxShadow: {
        custom:' 17px 16px 23px -5px var(--tw-shadow-color)'
      }
    },
  },
  plugins: [],
}