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
        'field4-pattern': " url('~/assets/img/field4.jpg')",
        'field5-pattern': " url('~/assets/img/field5.jpg')",
        'field6-pattern': " url('~/assets/img/field6.jpg')",
        'field7-pattern': " url('~/assets/img/field7.jpg')",
        'field8-pattern': " url('~/assets/img/field8.jpg')",
        'field9-pattern': " url('~/assets/img/field9.jpg')",
        'field10-pattern': " url('~/assets/img/field10.jpg')",
        'layout-pattern': " url('~/assets/img/layoutInput.jpg')",
        'layout-pattern-2': " url('~/assets/img/layoutInput2.jpg')",
        'photo1': " url('~/assets/img/photo1.png')",
        'photo2': " url('~/assets/img/photo2.png')",
        'photo3': " url('~/assets/img/photo3.png')",
        'photo4': " url('~/assets/img/photo4.png')",
        'photo5': " url('~/assets/img/photo5.png')",
        'photo6': " url('~/assets/img/photo6.png')",
        'photo7': " url('~/assets/img/photo7.png')",
        'photo8': " url('~/assets/img/photo8.png')",
        'photo9': " url('~/assets/img/photo9.png')",
        'logo1': " url('~/assets/img/logo1.png')",
        'logo2': " url('~/assets/img/logo2.png')",
        'logo3': " url('~/assets/img/logo3.png')",
        'logo4': " url('~/assets/img/logo4.png')",
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

