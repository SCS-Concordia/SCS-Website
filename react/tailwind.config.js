/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'light-purple': '#C0ACEE',
        'dark-purple': '#765CBA',
      },
      fontFamily: {
        robotoMono: ['"Roboto Mono"', 'serif'],
        ibmPlex: ['"IBM Plex Mono"', 'serif'],
        JetBrainsMono: ['"JetBrains Mono"', 'serif'],
        CutiveMono: ['"Cutive Mono"', 'serif'],
        ShareTechMono: ['"Share Tech Mono"', 'serif'],
        SourceCodePro: ['"Source Code Pro"', 'serif'],

      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

