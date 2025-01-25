// module.exports = {
//     plugins: {
//       tailwindcss: {},
//       autoprefixer: {},
//     },

//   }


module.exports = {
  plugins: [
    require('postcss-nested'), // Enables nesting in your CSS
    require('tailwindcss'),
    require('autoprefixer')
  ]
};
