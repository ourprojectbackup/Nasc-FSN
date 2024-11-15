/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Times New Roman', 'Times', 'serif'],
      },
      fontSize: {
        '4.5xl': '2.5rem', // Adjust this size as needed
      },
    },
  },
  plugins: [],
}

