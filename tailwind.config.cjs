/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': '1000px',
      'lg': '1400px',
    },
    extend: {
      boxShadow: {
        'neoShadow': '5px 5px',
      }
    },
    colors: {
      'primary1': "#f57842",
      'primary2': "#99421a",
      'primary3': "#ebcfab",
      'infusedBlack': "#282525",
      'neubrutalistBlack': "#000000",
    },
    fontFamily: {
      ubuntu: ['Ubuntu', 'sans-serif'],
      anybody: ['Anybody', 'cursive'],
      techMono: ['Share Tech Mono', 'monospace'],
    }
  },
  plugins: [],
}
