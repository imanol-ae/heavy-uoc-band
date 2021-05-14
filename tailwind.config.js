module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'corporate-nav-dark': '#923a31',
      'corporate-nav-light': '#e03d34',
      'white': '#ffffff',
      'links': 'rgb(71, 71, 214)',
    },
    extend: {
      backgroundImage: theme => ({
      'front-image': "url('../images/components.jpg')",
      'band-members-image': "url('../images/concert.jpg')",
       })
    },
    fontFamily: {
      'quicksand': ['Quicksand', 'sans-serif'],
      'titillium': ['Titillium Web', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],
     },
    textColor: theme => ({
      ...theme('colors'),
      'titles': '#343a40',
    }),
    minHeight: {
      '700': '740px',
    },
    backgroundSize: {
      '100': '100vw',
    },
    flex: {
      '1': '1',
    },
    borderColor: theme => ({
      ...theme('colors'),
      'grey-dark': '#343a40'
    }),
    borderRadius: {
      '350': '350px',
      'md': '0.375rem',
    }
  },
  variants: {
    extend: {
      borderWidth:['hover'],
      borderColor:['hover'],
      borderStyle:['hover'],
    },
  },
  plugins: [],
}