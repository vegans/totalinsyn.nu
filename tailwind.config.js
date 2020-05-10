const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        yellow: {
          100: '#EFEBD6',
          200: '#FCEDBF',
          300: '#F9E199',
          400: '#F5CB4D',
          500: '#F1B500',
          600: '#D9A300',
          700: '#916D00',
          800: '#6C5100',
          900: '#483600'
        },
        blue: {
          100: '#E9EEF3',
          200: '#C7D4E1',
          300: '#A5BBCF',
          400: '#6287AC',
          500: '#1E5488',
          600: '#1B4C7A',
          700: '#174167',
          800: '#0E263D',
          900: '#091929'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/ui')]
}
