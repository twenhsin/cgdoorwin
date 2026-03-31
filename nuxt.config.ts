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
      title: '鋮鋼鋁門窗工程行｜中和專業鋁門窗、防盜窗、電動捲門',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '深耕新北市中和區30年，提供鋁門窗、不鏽鋼防盜窗、採光罩、電動捲門、淋浴拉門等專業安裝服務。呂明德師傅親自督工，透明報價，歡迎來電 0909-085-599。' },
        { name: 'keywords', content: '鋁門窗、中和鋁門窗、防盜窗、電動捲門、採光罩、新北市鋁門窗' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: '鋮鋼鋁門窗工程行｜中和專業鋁門窗、防盜窗、電動捲門' },
        { property: 'og:description', content: '深耕新北市中和區30年，提供鋁門窗、不鏽鋼防盜窗、採光罩、電動捲門、淋浴拉門等專業安裝服務。呂明德師傅親自督工，透明報價，歡迎來電 0909-085-599。' },
        { property: 'og:url', content: 'https://cgdoorwin.vercel.app/' },
        { property: 'og:locale', content: 'zh_TW' },
      ],
      link: [
        { rel: 'canonical', href: 'https://cgdoorwin.vercel.app/' },
        { rel: 'icon', type: 'image/png', href: '/images/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap' },
      ],
    },
  },
})
