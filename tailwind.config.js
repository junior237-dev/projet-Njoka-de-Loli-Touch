module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      backgroundImage: theme => ({
        'aveiro': "url('./src/assets/aveiroDjess.jpg')"
      }),

      backgroundColor: {
        translusent: {
          100: '#e3e2e377',
          200: '#d7d8d7'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
