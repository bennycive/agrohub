module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  
  theme: {
    extend: {
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  
  plugins: [],
}
