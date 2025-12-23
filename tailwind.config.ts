import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        emerald: {
          DEFAULT: 'hsl(160 60% 40%)',
          glow: 'hsl(160 60% 40% / 0.5)'
        },
        gold: {
          DEFAULT: 'hsl(42 85% 55%)',
          glow: 'hsl(42 85% 55% / 0.5)'
        }
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Outfit', 'sans-serif'],
        sans: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'slide-in': {
          from: { transform: 'translateX(-100%)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' }
        },
        'scale-in': {
          from: { transform: 'scale(0.95)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' }
        },
        'fade-up': {
          from: { transform: 'translateY(30px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' }
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 20px hsl(160 60% 40% / 0.3), 0 0 10px hsl(42 85% 55% / 0.2)' },
          '50%': { boxShadow: '0 0 40px hsl(160 60% 40% / 0.5), 0 0 20px hsl(42 85% 55% / 0.3)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-in': 'slide-in 0.6s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'fade-up': 'fade-up 0.8s ease-out',
        'glow': 'glow 3s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
        'spin-slow': 'spin-slow 25s linear infinite'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-luxury': 'linear-gradient(135deg, hsl(160 60% 40%), hsl(42 85% 55%))'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
