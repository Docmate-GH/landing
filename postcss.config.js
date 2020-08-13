module.exports = {
  plugins: [
    require('autoprefixer'),
    require('tailwindcss')({
      purge: [
        './src/index.html'
      ]
    })
  ]
}