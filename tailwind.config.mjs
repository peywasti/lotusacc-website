export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#ddecfb',
          200: '#c2ddf7',
          300: '#8fc3f0',
          400: '#51a0e2',
          500: '#2b84d2',
          600: '#1e5a8a',
          700: '#18486e',
          800: '#0f3a5a',
          900: '#0b2d48',
        },
        accent: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
      },
      fontFamily: {
        sans: ["Estedad", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
