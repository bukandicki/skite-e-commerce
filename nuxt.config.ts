// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  modules: ["@nuxtjs/google-fonts", "@nuxt/image"],
});
