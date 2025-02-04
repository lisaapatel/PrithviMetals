/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    }
  },
  plugins: []
}; 