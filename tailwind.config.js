module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'blue': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          'from': {
              transform: 'translateY(20px)',
              opacity: '0'
          },
          'to': {
              transform: 'translateY(0)',
              opacity: '1'
          }
        }
      },
      animation: {
          fadeInUp: 'fadeInUp 0.8s ease forwards'
      }
    },
  },
  plugins: [],
};
