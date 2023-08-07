/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'moscow-pattern': " url('~/assets/img/MoscowCity.jpg')",
        'field1-pattern': " url('~/assets/img/field1.jpg')",
        'field2-pattern': " url('~/assets/img/field2.jpg')",
        'field3-pattern': " url('~/assets/img/field3.jpg')",
        'layout-pattern': " url('~/assets/img/layoutInput.jpg')",
      },
      boxShadow: {
        'social-icon': '10px 10px 60px rgba(102, 252, 241, 0.7)',
      },
      height: {
        '192': '35rem',
      },
      width: {
        '192': '30rem',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'brand-color': '#66FCF1',
      'white': '#ffffff',
      'total-black': '#000000'
    }
  },
  plugins: [],
}

