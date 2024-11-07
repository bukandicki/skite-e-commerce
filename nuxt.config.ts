// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseApi: process.env.NUXT_BASE_API_URL,
      email: process.env.NUXT_EMAIL,
      password: process.env.NUXT_PASSWORD,
    },
  },

  css: ["~/assets/scss/_preflight.scss"],

  googleFonts: {
    display: "swap",
    preload: true,
    download: true,
    prefetch: true,
    inject: true,
    overwriting: true,
    base64: true,
    families: {
      Roboto: [400, 500, 600, 700],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },

  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "@nuxt/image", "@pinia/nuxt"],
});
