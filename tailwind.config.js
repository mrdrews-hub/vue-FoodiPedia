module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        bglogin: "url(/bg-login.jpg)",
        bghero: "url(./src/assets/img/food2.jpg)",
        bghero2: "url(./src/assets/img/food3.jpg)",
        notfound: "url(./src/assets/img/starry-night-sky.jpg)"
      },
      fontFamily: {
        'palette': ["'Palette Mosaic', 'cursive', 'sans-serif'"]
      },
      spacing: {
        '128': '32rem',
        '148': '42rem'
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        fade: 'fade ease-in 1s',
        'bounce-slow': 'bounce 2s linear infinite'
      },
      gridTemplateColumns: {
        'max': 'repeat(8, max-content)'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin.js'),
    require('@tailwindcss/line-clamp')
  ],
}
