/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-purple': '#C0ACEE',
        'dark-purple': '#765CBA',
      },
    },
  },
  plugins: [],
}

