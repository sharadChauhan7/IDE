/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'user': "url('./src/assets/Dashboard.svg')",
      }

    },
  },
  plugins: [],
}

