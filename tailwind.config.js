module.exports = {
  purge: ['./src/**/*.tsx', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
