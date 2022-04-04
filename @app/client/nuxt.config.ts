import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: ["nuxt-graphql-client", "@nuxtjs/tailwindcss"],
  srcDir: "app/",
  buildDir: "dist/",
  target: "static",
  tailwindcss: {
    cssPath: "~/app/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
  },
  publicRuntimeConfig: {
    "graphql-client": {
      documentPaths: ["app/queries"],
    },
  },
});
