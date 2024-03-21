import { defineNuxtConfig } from "nuxt";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",
  ssr: false,
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge"],
  css: ["@/assets/styles/main.scss"],
  vite: {
    // plugins: [
    //   VueI18nVitePlugin({
    //     include: [
    //       resolve(dirname(fileURLToPath(import.meta.url)), "./locales/*.json"),
    //     ],
    //   }),
    // ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_fonts.scss" as *;',
        },
      },
    },
  },
});
