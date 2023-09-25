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
        'moscow-pattern': " url('~/assets/img/MoscowCity.webp')",
        'moscow-pattern2': " url('~/assets/img/MoscowCity2.webp')",
        'field1-pattern': " url('~/assets/img/field1.webp')",
        'field2-pattern': " url('~/assets/img/field2.webp')",
        'field3-pattern': " url('~/assets/img/field3.webp')",
        'field4-pattern': " url('~/assets/img/field4.webp')",
        'field5-pattern': " url('~/assets/img/field5.webp')",
        'field6-pattern': " url('~/assets/img/field6.webp')",
        'field7-pattern': " url('~/assets/img/field7.webp')",
        'field8-pattern': " url('~/assets/img/field8.webp')",
        'field9-pattern': " url('~/assets/img/field9.webp')",
        'field10-pattern': " url('~/assets/img/field10.webp')",
        'layout-pattern': " url('~/assets/img/layoutInput.webp')",
        'layout-pattern-2': " url('~/assets/img/layoutInput2.webp')",
        'photo1': " url('~/assets/img/photo1.webp')",
        'photo2': " url('~/assets/img/photo2.webp')",
        'photo3': " url('~/assets/img/photo3.webp')",
        'photo4': " url('~/assets/img/photo4.webp')",
        'photo5': " url('~/assets/img/photo5.webp')",
        'photo6': " url('~/assets/img/photo6.webp')",
        'photo7': " url('~/assets/img/photo7.webp')",
        'photo8': " url('~/assets/img/photo8.webp')",
        'photo9': " url('~/assets/img/photo9.webp')",
        'logo1': " url('~/assets/img/logo1.webp')",
        'logo2': " url('~/assets/img/logo2.webp')",
        'logo3': " url('~/assets/img/logo3.webp')",
        'logo4': " url('~/assets/img/logo4.webp')",
      },
      height: {
        '192': '30rem',
      },
      width: {
        '192': '30rem',
      }
    },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   'brand-color': '#66FCF1',
    //   'white': '#ffffff',
    //   'total-black': '#000000',
    //   'invalid': "#F46C6C"
    // },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3rem',
      'title': ['2.109rem', 'normal'],
      'base-text': ['1.172rem', '1.556rem'],
      'btn': ['0.938rem', '1.575rem'],
      'title-carusel': ['1.406rem', 'normal'],
      'title-form': ['0.75rem', '1.26rem'],
      'text-input': ['0.563rem', '1.556rem']
    }
  },
  plugins: [
  ]
}

