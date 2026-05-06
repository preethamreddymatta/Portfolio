/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        ink: '#080810',
        canvas: '#0c0c18',
        surface: '#13131f',
        elevated: '#1a1a2e',
        border: '#22223a',
        'border-bright': '#3a3a5c',
        teal: '#2dd4bf',
        'teal-dim': '#14b8a6',
        amber: '#f59e0b',
        'amber-dim': '#d97706',
        rose: '#f43f5e',
        muted: '#6b6b8a',
        soft: '#a8a8c8',
        bright: '#e8e8f5',
        white: '#f5f5ff',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-left': 'slideLeft 0.6s ease forwards',
        'float': 'float 7s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.5s ease-out infinite',
        'scan-line': 'scanLine 4s linear infinite',
        'bar-fill': 'barFill 1.2s ease forwards',
        'number-tick': 'numberTick 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-14px) rotate(1deg)' },
          '66%': { transform: 'translateY(-6px) rotate(-1deg)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.8' },
          '70%': { transform: 'scale(1.4)', opacity: '0' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
        scanLine: {
          '0%': { top: '0%', opacity: '0.6' },
          '50%': { opacity: '0.2' },
          '100%': { top: '100%', opacity: '0.6' },
        },
        barFill: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--fill-width)' },
        },
        numberTick: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
