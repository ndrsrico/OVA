import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  // 1. Identificación y Modo de funcionamiento
  compatibilityDate: '2026-05-10',
  
  // 2. SSR Configuration
  ssr: true,

  // 3. Preparar Vuetify para Nuxt
  build: {
    transpile: ['vuetify'],
  },

  // 4. Nitro configuration for Vercel
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/Temario', '/Evaluacion', '/Recursos', '/Welcome', '/Actividades', '/Creditos'],
    },
  },

  // 5. El "Conector" de módulos
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-ignore
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],

  // 6. Archivos de estilo (CSS)
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css'
  ],

  // 7. Configuración del motor de compilación (Vite)
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    define: {
      'process.env.DEBUG': 'false',
    },
  },
})
