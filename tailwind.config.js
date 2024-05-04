/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-dark-blue': '#000122',
        'hover-color': '#2C2C39'
      },
      backgroundSize: {
        'size-200': '200% 200%'
      },
      backgroundPosition: {
        'pos-0': '0% 0%', 
        'pos-100': '100% 100%'
      }
    },
  },
  plugins: [],
}

