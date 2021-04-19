module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      colors: { 'accent-1': '#333' },
      height: {
        textarea: '30rem'
      }
    }
  },
  variants: { extend: {} },
  plugins: []
}
