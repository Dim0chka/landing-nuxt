// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'vue3-carousel-nuxt',
  ],
  plugins: [
    {src: '~/plugins/fontawesome.js'},
  ],
  css: [
    '~/assets/scss/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
