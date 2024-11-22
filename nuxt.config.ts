// https://nuxt.com/docs/api/configuration/nuxt-config
/* export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  $development:{
    devtools: { enabled: false }
  },


  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],
  css: [
    '~/assets/css/tailwind.css',
  ],
 app:{
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"',
      }
    ]
  }
 }
  
}) */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  $development: {
    devtools: { enabled: false }
  },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],
  css: [
    '~/assets/css/tailwind.css',
  ],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"',
        }
      ]
    },
    baseURL: '/droneApp/', // Замените на имя вашего репозитория
  },
  generate: {
    routes: ['/'], // Указываем маршруты для генерации
  },
})