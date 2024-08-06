// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },

  // experimental: {
  //   componentIslands: true,
  // },
  // css: ["~/app/assets/styles.css"],
  // components: {
  //   dirs: [
  //     {
  //       path: "~/app/components",
  //       pathPrefix: false,
  //     },
  //   ],
  // },
  modules: [
    "@nuxtjs/tailwindcss",
    // "@nuxt/icon",
    "@vueuse/nuxt",
  ],

  build: {
    transpile: ["vue-sonner"],
  },
});
