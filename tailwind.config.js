// tailwind.config.js
module.exports = {
    content: [
      './index.html', // Essential for Vite/React to scan HTML
      './src/**/*.{js,ts,jsx,tsx}', // Essential for Tailwind to scan your components
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/typography'), // <-- CRITICAL: Add this line
    ],
  };