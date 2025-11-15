/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'arch-bg': '#0E1012',
        'arch-surface': '#151719',
        'arch-border': '#202325',
        'arch-grid': '#1A1D1F',
        'arch-accent': '#C1693C',
        'arch-text-primary': '#F4F4F3',
        'arch-text-secondary': '#C9C9C9',
      },
      fontFamily: {
        'space-mono': ['"Space Mono"', 'monospace'],
        'ibm-plex': ['"IBM Plex Mono"', 'monospace'],
        'jetbrains': ['"JetBrains Mono"', 'monospace'],
        'inter': ['"Inter"', 'sans-serif'],
      },
      spacing: {
        'grid': '32px',
      },
      letterSpacing: {
        'tight-track': '0.05em',
        'label-track': '0.1em',
      },
      transitionDuration: {
        '150': '150ms',
      },
      borderRadius: {
        'arch': '3px',
      },
    },
  },
  plugins: [],
};
