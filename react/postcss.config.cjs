module.exports = ({ env }) => ({
  plugins: [
    require('tailwindcss')({
      config: './tailwind.config.js'
    }),
    require('autoprefixer')()
  ],
})