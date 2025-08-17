/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': '#4CAF50',
        'green-light': '#81C784',
        'green-dark': '#2E7D32',
        'violet-primary': '#7E57C2',
        'violet-light': '#B39DDB',
        'violet-dark': '#4527A0',
        'neutral-light': '#FAFAFA',
        'neutral-dark': '#333333',
        'neutral-medium': '#E0E0E0',
        'white-neutral': '#FAFAFA',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}