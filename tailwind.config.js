/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'md': '28rem',
        'lg': '32rem',
        'xl': '36rem',
        '2xl': '40rem',
        '3xl': '44rem',
        '4xl': '48rem',
      },
    },
  },
  plugins: [],
}

