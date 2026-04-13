/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#103F4D',
          deep: '#0B2F3A',
          mist: '#1C5A6A',
          surf: '#2A6A78',
          sand: '#E4C995',
          shell: '#F6F1E8',
          pearl: '#FCFAF6',
          line: '#D8C8A8',
          ink: '#35515A',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      maxWidth: {
        shell: '78rem',
      },
      boxShadow: {
        panel: '0 24px 80px rgba(16, 63, 77, 0.08)',
      },
      backgroundImage: {
        'brand-hero': 'linear-gradient(180deg, #0E3743 0%, #103F4D 45%, #1A5667 100%)',
        'brand-diagonal': 'linear-gradient(135deg, #103F4D 0%, #184B5A 55%, #2A6A78 100%)',
        'brand-soft': 'linear-gradient(180deg, rgba(16,63,77,0.04) 0%, rgba(26,86,103,0.08) 100%)',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
