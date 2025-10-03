/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce-slow 2s infinite',
        'pulse-slow': 'pulse-slow 2s infinite',
        'spin-slow': 'spin-slow 1s linear',
        'fade-in': 'fade-in 1s ease-out',
      },
    },
  },
  plugins: [],
};