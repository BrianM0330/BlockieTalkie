// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  runtimeConfig: {
    SOCKET_URL: process.env.SOCKET_URL,

    public: {
      SOCKET_URL: process.env.SOCKET_URL
    }
  },
  serverHandlers: [{
    route: '/ws',
    handler: '~/server-middleware/socket'
  }]
})
