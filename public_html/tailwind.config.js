const { colors, minWidth } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './resources/js/components/**/*.js',
    './resources/views/**/*.blade.php',
    './resources/css/**/*.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
