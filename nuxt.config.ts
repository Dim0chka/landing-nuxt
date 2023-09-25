// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
        htmlAttrs: {
            lang: 'ru',
        },
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        title: 'DEVELOPMENT ARCHITECTURE | Решаем сложные вопросы в сфере градостроительства ',
        meta: [
            { name: 'og:description', content: '☑️ Решаем вопросы любой сложности: ПЗЗ, ГПЗУ, разрешение на строительство, самострой, акт ввода в эксплуатацию, ППТ под ключ с гарантией результата  ☑️ Индивидуальные цены ☑️ Опыт более 8 лет ☑️ Земля и Недвижимость ☑️ Москва и Московская область ☎ Бесплатная консультация и помощь специалиста по тел. +7 919 108 11 17' },
            { name: 'og:keywords', content: 'Изменение в ПЗЗ, Получить ГПЗУ, Легализация самостроя, Разрешение на строительство, Получить акт ввода в эксплуатацию, Изменение проекта планировки, кадастровая компания, кадастр Москва, Московская область кадастровая компания, кадастровая компания цены' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
      }
  },
  modules: [
    'vue3-carousel-nuxt',
    '@pinia/nuxt'
  ],
  buildModules: [
    'intersection-observer',
    '@nuxtjs/pwa',
  ],
  ssr: true,
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
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
