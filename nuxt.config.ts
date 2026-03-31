import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()]
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'zh-TW' },
      title: '鋮鋼鋁門窗工程行｜專業鋁門窗、防盜窗、採光罩、電動捲門',
      meta: [
        { name: 'description', content: '深耕中和三十年，提供鋁門窗、不鏽鋼防盜窗、採光罩、鐵皮屋、電動捲門、淋浴拉門等專業施工服務。' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap' },
      ],
    },
  },
})
