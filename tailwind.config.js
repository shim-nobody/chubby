/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B9D',
        'soft-pink': '#FFD6E5',
        'bg-main': '#FFF5F8',
        'light-cream': '#FFF9F0',
        'dark-text': '#49333D',
        lavender: '#DCCBFF',
      },
      fontFamily: {
        handwritten: ['"Dancing Script"', 'cursive'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.4s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'rise': 'rise 4s ease-in-out forwards',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.12)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.12)' },
          '70%': { transform: 'scale(1)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(0.7)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        rise: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100vh)', opacity: '0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      backgroundImage: {
        'gradient-romantic': 'linear-gradient(135deg, #FFF5F8 0%, #FFD6E5 50%, #DCCBFF 100%)',
        'gradient-pink': 'linear-gradient(135deg, #FF6B9D 0%, #FFB3D1 100%)',
        'gradient-cream': 'linear-gradient(180deg, #FFF9F0 0%, #FFD6E5 100%)',
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(255, 107, 157, 0.15)',
        'glow': '0 0 24px rgba(255, 107, 157, 0.4)',
        'card': '0 8px 32px rgba(73, 51, 61, 0.1)',
      },
    },
  },
  plugins: [],
}
