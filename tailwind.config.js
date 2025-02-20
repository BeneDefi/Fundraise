 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'serif'],
      },
    },
  },
  plugins: [],
}
