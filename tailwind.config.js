module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          10: "#BCBCBC",
          30: "#7D7D7D",
          50: "#5F5F60",
          70: "#363637",
          90: "#1F1F1F"
        }
      },
      fontFamily:{
        'tysla': ['Tysla', 'Helvetica', 'Arial', 'sans-serif'],
        'montserrat-m': ['Montserrat-m', 'Helvetica', 'Arial', 'sans-serif'],
        'montserrat-b': ['Montserrat-b', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
    boxShadow:{
      inner: 'inset 3px 4px 8px rgba(0, 0, 0, 0.25)'
    },
    minWidth:{
      '1/5': '20%'
    },
    maxWidth:{
      '80': '20rem'
    },
    minHeight:{
      '80': '20rem'
    },
    maxHeight:{
      '80': '20rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
