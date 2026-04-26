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
        /** Hero name: shifting gradient + glow (GPU-friendly) */
        'name-aurora': {
          '0%': {
            backgroundPosition: '0% 50%',
            filter:
              'drop-shadow(0 0 10px rgb(56 189 248 / 0.45)) drop-shadow(0 0 26px rgb(168 85 247 / 0.28))',
          },
          '33%': {
            backgroundPosition: '50% 50%',
            filter:
              'drop-shadow(0 0 16px rgb(192 132 252 / 0.55)) drop-shadow(0 0 32px rgb(251 191 36 / 0.3))',
          },
          '66%': {
            backgroundPosition: '100% 50%',
            filter:
              'drop-shadow(0 0 12px rgb(251 191 36 / 0.4)) drop-shadow(0 0 28px rgb(56 189 248 / 0.35))',
          },
          '100%': {
            backgroundPosition: '0% 50%',
            filter:
              'drop-shadow(0 0 10px rgb(56 189 248 / 0.45)) drop-shadow(0 0 26px rgb(168 85 247 / 0.28))',
          },
        },
      },
      animation: {
        'shimmer-slide': 'shimmer-slide 14s ease-in-out infinite',
        'text-pulse-soft': 'text-pulse-soft 9s ease-in-out infinite',
        'name-aurora': 'name-aurora 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
