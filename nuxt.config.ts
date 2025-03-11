// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/main.scss'],
  app: {
    head: {
      title: 'Q-Tim Nuxt App',
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
});
