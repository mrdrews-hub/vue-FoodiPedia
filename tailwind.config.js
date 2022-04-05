module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    container: {
      center: true,
      padding: '14px'
    },
    extend: {
      backgroundImage: {
        bglogin: "url(/bg-login.jpg)",
        bghero: "url(./src/assets/img/food2.jpg)",
        bghero2: "url(./src/assets/img/food3.jpg)",
        notfound: "url(./src/assets/img/starry-night-sky.jpg)"
      },
      spacing: {
        '128': '32rem',
        '148': '42rem'
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        'slide-right': {
          '0%': { left: '-499px'},
          '100%': { left: 0 }
        },
        'fade-out': {
          '100%': { opacity: 1 },
          '0%': { opacity: 0 }
        }
      },
      animation: {
        fade: 'fade ease-in 1s',
        'slide-right': 'slide-right ease-in-out .4s',
        'bounce-slow': 'bounce 2s linear infinite',
        'fade-out': 'fade-out ease-put .4s'
      },
      gridTemplateColumns: {
        'max': 'repeat(8, max-content)'
      },
      screens: {
        '2xl': '1340px'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin.js'),
    require('@tailwindcss/line-clamp')
  ],
}
