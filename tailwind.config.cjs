module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'space-grotesk': ['Space Grotesk', 'sans-serif'],
    },
    extend: {
      colors: {
        'homi-yellow': '#EBAC34',
        'homi-sage': '#8C916C',
        'homi-orange': '#C4742C',
        'homi-brown': '#743419',
        'homi-olive': '#55624A',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0) rotate(-12deg)' },
          '50%': { transform: 'translateY(-20px) rotate(-12deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
