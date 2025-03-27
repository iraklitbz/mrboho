export default defineNuxtConfig({
  compatibilityDate: "2024-04-07",
  app: {
    head: {
      meta: [
        { name: 'facebook-domain-verification', content: process.env.FACEBOOK_SITE}
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Georgian:wght@100..900&display=swap" }
      ],
      script: [
        {
          hid: 'gtagHead',
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.ANALITYC_ID}`,
          async: true
        },
        {
          hid: 'gtagInit',
          innerHTML: process.env.NODE_ENV === 'production'
              ? `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', ${process.env.ANALITYC_ID});`
              : ''
        }
      ],
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
  supabase: {
    redirect: false
  },
  // vite: {
  //   server: {
  //     allowedHosts: [
  //       '297c-88-12-201-144.ngrok-free.app',
  //       'localhost',
  //       '127.0.0.1',
  //     ]
  //   }
  // },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    'nuxt-svgo',
    '@nuxtjs/apollo',
    "@pinia/nuxt",
    "@formkit/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxt/eslint",
    '@nuxtjs/supabase',
  ],
  css: [ 'vue-final-modal/style.css' ],
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
  routeRules: {
    '/account/**': {
      ssr: false
    },
    '/checkout': {
      ssr: false
    }
  },
  build: {
    transpile: ["@fawmi/vue-google-maps"],
  },
  tailwindcss: {
    cssPath: "~/assets/css/main.scss",
    exposeConfig: true,
  },
  runtimeConfig: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    BANK_CLIENT_ID: process.env.BANK_CLIENT_ID,
    BANK_SECRET_KEY: process.env.BANK_SECRET_KEY,
    BANK_API_URL: process.env.BANK_API_URL,
    BANK_PUBLIC_KEY: process.env.BANK_PUBLIC_KEY,
    PAYPAL_CLIENT: process.env.PAYPAL_CLIENT,
    PAYPAL_SECRET: process.env.PAYPAL_SECRET,
    PAYPAL_API_URL: process.env.PAYPAL_API_URL,
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
      NUXT_PUBLIC_BASE_URL: process.env.NUXT_PUBLIC_BASE_URL,
      PAYPAL_C: process.env.PAYPAL_CLIENT,
    }
  },
  devtools: { enabled: true },
});
