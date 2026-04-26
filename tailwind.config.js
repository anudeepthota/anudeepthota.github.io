/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-sm': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.03em' }],
        display: ['3rem', { lineHeight: '1.1', letterSpacing: '-0.035em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
      },
      boxShadow: {
        glow: '0 0 0 1px hsl(var(--border)), 0 24px 80px -32px hsl(217 91% 60% / 0.15)',
        card: '0 0 0 1px hsl(var(--border) / 0.8), 0 18px 50px -24px rgb(0 0 0 / 0.55)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to right, hsl(var(--border) / 0.35) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.35) 1px, transparent 1px)',
      },
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'shimmer-slide': {
          '0%': { transform: 'translateX(-140%) skewX(-14deg)' },
          '100%': { transform: 'translateX(260%) skewX(-14deg)' },
        },
        'text-pulse-soft': {
          '0%, 100%': { opacity: '0.9' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'shimmer-slide': 'shimmer-slide 14s ease-in-out infinite',
        'text-pulse-soft': 'text-pulse-soft 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
