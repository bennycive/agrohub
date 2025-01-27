module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],



  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        bounceTwice: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },

      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        fadeInUp: 'fadeInUp 1s ease-out',
        bounceTwice: 'bounceTwice 1.5s ease-in-out infinite',
        spinSlow: 'spinSlow 4s linear infinite',
        slideIn: 'slideIn 1s ease-in-out',
      },
    },
  },

  plugins: [],
  
}
