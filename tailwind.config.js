/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: '#00f0ff',
        neonPink: '#ff007f',
        neonPurple: '#a100ff',
        darkBg: '#080711',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s infinite alternate',
      },
      keyframes: {
        pulseGlow: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(0,240,255,0.6))' },
          '100%': { filter: 'drop-shadow(0 0 35px rgba(255,0,127,0.9))' },
        }
      }
    },
  },
  plugins: [],
}