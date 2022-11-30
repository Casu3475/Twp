/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'category-table': '#EBECF0',
        'navbar': '#90C6DD',
        'side-menu': '#86BFDA',
      },
      backgroundImage: {
        // 'road': "url('../public/road.jpg')", 
        'country': "url('../public/country.jpg')", 
      },
      opacity: {
        '95': '.95',
      },
      margin: {
        '120px': '120px',
      }
    },
  },
  plugins: [],
}
