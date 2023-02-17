/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.{html,ts}'],
  theme: {
    extend: {
      height: {
        nav: '20vh',
        header: '80vh'
      }
    },
    colors: {
      ground: '#34353A',
      primary: '#B694F6',
      'on-primary': '#fff'
    },
    fontFamily: {
      'open-sans': ['Open Sans', 'sans-serif']
    },
    backgroundImage: {
      'hero-rounded': "url('/hero-rounded.jpg')"
    }
  },
  plugins: []
}
