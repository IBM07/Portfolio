import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        orange: {
          50: '#fff8f3',
          100: '#ffe4d0',
          200: '#ffc9a8',
          300: '#ffad80',
          400: '#ff9258',
          500: '#D97D54',
          600: '#c66d47',
          700: '#b35d3a',
          800: '#9a4e31',
          900: '#7d3e27',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
