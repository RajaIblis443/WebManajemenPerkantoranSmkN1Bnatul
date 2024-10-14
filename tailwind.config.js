/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      minWidth:{
        '1/2':'50%',
        '1/3':'33.3333%',
        '1/4':'25%',
      },
      maxWidth:{
        '1/2':'50%',
        '1/3':'33.3333%',
        '1/4':'25%',
      },
      keyframes: {
        fadeInDown: {
          'from': { opacity: '0', transform: 'translateY(-20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        }
      },
      animation: {
        'fade-in-down': 'fadeInDown 1s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'spin-slow': 'spin 3s linear infinite'
      }
    }
  },
  plugins: [],
}

