import preset from '@beam/tokens/tailwind-preset';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@beam/ui/**/*.{js,mjs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
