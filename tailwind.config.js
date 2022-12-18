/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        bestBg: "url('/assets/bg.svg')",
      },
      colors: {
        bg: '#F5FE8E',
        bg2: '#FF8888',
        dark: '#0a0502',
        btn: '#0fbbbb',
        'btn-hover': '#0fbfff',
        input: '#DEE2E6',
        box: '#DEE2E6',
        'selected-start': '#0fbfff',
        'selected-end': '#aaa',
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
