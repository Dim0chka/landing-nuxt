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
        '192': '30rem',
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
      'total-black': '#000000',
      'invalid': "#F46C6C"
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3rem',
      'title': ['2.109rem', '3.438rem'],
      'base-text': ['1.172rem', '1.556rem'],
      'btn': ['0.938rem', '1.575rem'],
      'title-carusel': ['1.828rem', '3.011rem'],
      'title-form': ['0.75rem', '1.26rem'],
      'text-input': ['0.563rem', '1.556rem']
    }
  },
  plugins: [],
}

