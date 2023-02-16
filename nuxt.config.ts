// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image-edge',
  ],

  image: {
    provider: 'ipx',
  },

  nitro: {
    prerender: {
      routes: ['/'],
    }
  },
})
