module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      black: '#1e1e1e',
      white: '#f5f5f5',
    },
    fontFamily: {
      sans: ['Inter', 'system-ui'],
      mono: ['ui-monospace'],
    },
    fontWeight: {
      thin: 200,
      normal: 400,
      medium: 600,
      bold: 800,
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
