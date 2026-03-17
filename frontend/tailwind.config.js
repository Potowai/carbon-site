/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'carbon-bg': '#0b0f19',
        'carbon-surface': '#161b27',
        'carbon-primary': '#10b981',
        'carbon-accent': '#34d399',
        'carbon-border': 'rgba(255, 255, 255, 0.05)',
      },
      boxShadow: {
        'premium': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
        'glow': '0 0 20px rgba(16, 185, 129, 0.3)',
      }
    },
  },
  plugins: [],
}
