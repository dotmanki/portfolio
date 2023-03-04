/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        ground: '#34353A',
        'ground-card': '#3D3E42',
        primary: '#B694F6',
        'on-primary': '#fff',
        gradient: '#F9F871'
      },
      height: {
        nav: '20vh',
        header: '80vh',
        'md-header': '65vh'
      },
      keyframes: {
        'pulse-shadow': {
          '0%, 100%': {
            'box-shadow': '0 4px 6px -1px #B694F6, 0 2px 4px -2px #B694F6'
          },
          '50%': {
            'box-shadow': '0 10px 15px -3px #B694F6, 0 4px 6px -4px #B694F6'
          }
        },
        'gradient-rotate': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        }
      },
      animation: {
        'pulse-shadow': 'pulse-shadow 2s ease-in-out infinite',
        'gradient-rotate': 'gradient-rotate 2s ease-in-out infinite'
      },

      backgroundImage: {
        'hero-rounded': "url('/hero-rounded.jpg')"
      }
    },
    fontFamily: {
      'open-sans': ['Open Sans', 'sans-serif']
    },
    flex: {
      '0-0-a': '0 0 auto'
    }
  },
  plugins: []
}
