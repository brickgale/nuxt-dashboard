// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/scripts'
  ],

  css: ['assets/css/app.css'],

  app: {
    head: {
      title: 'Nuxt Starter Dashboard',
      ogTitle: 'Nuxt Starter Dashboard',
      description: 'Simple Nuxt Starter Dashboard Template.',
      ogDescription: 'Simple Nuxt Starter Dashboard Template.',
      // ogImage: 'https://example.com/image.png',
      // twitterCard: 'summary_large_image',
    }
  }
})