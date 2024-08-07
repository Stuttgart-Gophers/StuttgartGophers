const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = {
  content: [
    "./templates/**/*.{gohtml,js}",
  ],
  theme: {
    extend: {
      colors: {
        gopher: '#58caea',
        head: '#BFE3E2'
    }},
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss'),
    require('autoprefixer'),
    cssnano({
      preset: 'default'
    }),
    purgecss({
      content: ['./templates/**/*.gohtml', './src/**/*.vue', './src/**/*.jsx'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ],
}
