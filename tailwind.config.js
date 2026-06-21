/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        forest: '#0D5C4A',
        'forest-dark': '#093D31',
        teal: '#1B7A63',
        terra: '#C96B3A',
        'terra-light': '#F2C4A8',
        peach: '#F8E8DC',
        sage: '#4A8C7A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
