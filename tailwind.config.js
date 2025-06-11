/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2F4F4F', // Verde oscuro
          light: '#3E6363',
          dark: '#1E3A3A',
        },
        accent: {
          DEFAULT: '#D2691E', // Ámbar/marrón
          light: '#E87F2F',
          dark: '#B35A18',
        },
        background: '#F5F5F5',
        text: '#333333',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 