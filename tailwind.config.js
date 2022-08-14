/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkFooter: '#1f2224',
        darkGray: '#212529',
        smothDark: '#141516',
        darkRed: '#e03131',
        iconRed: '#f03e3e',
        success: '#37b24d',
        facebook: '#1778f2',
        twitter: '#00acee',
        youtube: '#fd1d1d',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ],

}
