/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        'leading-12': '3rem',
        'leading-13': '3.75rem',
      }
    },
    fontSize: {
      xxs: '0.5rem',
      xs: '0.75rem',
      md: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.75rem',
      '7xl': ['4.5rem'],
      '8xl': '6rem',
      '9xl': '8rem'
    }
  },
  plugins: [],
}

