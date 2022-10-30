/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#ADE8F4',
        dark: '#0a0502',
        btn: '#0fbbbb',
        'btn-hover': '#0fbfff',
        input: '#111111',
      },
      fontFamily: {
        qs: ['Quicksand'],
        lato: ['Lato'],
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    fontSize: ['responsive', 'hover'],
    fontFamily: ['responsive', 'hover'],
  },
  plugins: [],
};
