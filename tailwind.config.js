/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}","*.html"],
  theme: {
    extend: {
      colors: {
        newcolor: '#F74C3C',
    },
      fontFamily: {
        body: ['helvetica neue'],
        titre: ['arvo']
      }
  },
  plugins: [],
}
}