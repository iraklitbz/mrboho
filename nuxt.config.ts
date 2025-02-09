export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Georgian:wght@100..900&display=swap" }
      ]
    },
    layoutTransition: {
      name: "fade",
      mode: "out-in",
    },
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    'nuxt-svgo',
    '@nuxtjs/apollo',
    "@pinia/nuxt",
    "@formkit/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxt/eslint",
  ],
  components: [
    '~/components',
    '~/components/Menu',
    '~/components/Cards',
    '~/components/Menu/Glasses'
  ],
  eslint: {
    config: {
      stylistic: {
        indent: "tab",
        semi: true,
      },
    },
  },
  svgo: {
    global: false,
    defaultImport: 'component',
    customComponent: 'Icon'
  },
  apollo: {
    tokenStorage: 'cookie',
    clients: {
      default: {
        httpEndpoint: process.env.GQL_HOST as string,
        httpLinkOptions: {
          headers: {
            Authorization: `Bearer ${process.env.CPA_TOKEN}`,
          },
        },
        defaultOptions: {
          query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all'
          }
        }
      }
    },
  },
  build: {
    transpile: ["@fawmi/vue-google-maps"],
  },
  tailwindcss: {
    cssPath: "~/assets/css/main.scss",
    exposeConfig: true,
  },
  runtimeConfig: {
    RESEND_API_KEY: process.env.RESEND_API_KEY
  },
  devtools: { enabled: true },
});
