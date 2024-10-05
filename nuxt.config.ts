// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/https://github.com/ZaminMirzad/nuxt-portfolio-new/", // baseURL: '/<repository>/'
    buildAssetsDir: "assets", // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/index.css"],
  ssr: false,
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/image", "@nuxt/icon", "@nuxt/ui"],
});
