import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  // 1. Identificación y Modo de funcionamiento
  compatibilityDate: '2026-05-10',
  // ssr: false causaba un bug en @nuxt/vite-builder 4.4.5 con el modo dev.
  // Para evitar errores de hidratación de Vuetify usamos routeRules en su lugar.
  routeRules: {
    '/**': { ssr: false }
  },

  // 2. Preparar Vuetify para Nuxt
  build: {
    transpile: ['vuetify'],
  },

  // 3. El "Conector" de módulos
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-ignore
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],

  // 4. Archivos de estilo (CSS)
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css'
  ],

  // 5. Configuración del motor de compilación (Vite)
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
