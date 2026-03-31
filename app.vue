<template>
  <div class="text-gray-800 antialiased">

    <!-- ── Navbar ────────────────────────────────────────── -->
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      <div class="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <span class="font-bold text-navy-900 text-base sm:text-lg tracking-wide">鋮鋼鋁門窗工程行</span>
        <a href="#contact"
           class="bg-navy-900 text-white text-sm px-5 py-2 rounded hover:bg-[#142347] transition-colors">
          聯絡我們
        </a>
      </div>
    </header>

    <!-- ── Hero ──────────────────────────────────────────── -->
    <section class="py-16 lg:py-28 bg-white">
      <div class="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-navy-900 mb-5">
            專業鋁門窗與<br>
            <span class="text-[#e8931c]">打造居家安全空間</span>
          </h1>
          <p class="text-gray-600 leading-relaxed mb-8 max-w-md">
            深耕中和，呂明德先生親自領軍。我們堅持「專業、親切、誠信」的職人精神，為您的居家安全與美學嚴格把關。
          </p>
          <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div class="flex items-center gap-2">
              <span class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 text-xs">✕</span>
              <span class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 text-xs">◎</span>
              <span class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 text-xs">🔒</span>
            </div>
            <span class="text-gray-500">超過 <strong class="text-navy-900">1,000+</strong> 戶家庭的信任選擇</span>
          </div>
        </div>
        <div class="relative">
          <div class="aspect-[5/4] rounded-2xl overflow-hidden shadow-xl bg-gray-200">
            <img
              src="/images/hero.png"
              alt="專業鋁門窗"
              class="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ── Products ───────────────────────────────────────── -->
    <section id="products" class="py-16 lg:py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-5">
        <div class="mb-10">
          <h2 class="text-2xl sm:text-3xl font-bold text-navy-900 mb-2">專業產品系列</h2>
          <p class="text-gray-500">針對不同建築需求，提供最多元、最堅固的工程解決方案</p>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div v-for="p in products" :key="p.name"
               class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <div class="aspect-[4/3] overflow-hidden bg-gray-100">
              <img :src="p.img" :alt="p.name"
                   class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                   loading="lazy" />
            </div>
            <div class="p-4">
              <h3 class="font-bold text-navy-900 mb-1 text-sm sm:text-base">{{ p.name }}</h3>
              <p class="text-gray-500 text-xs sm:text-sm leading-relaxed">{{ p.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Process ────────────────────────────────────────── -->
    <section id="process" class="py-16 lg:py-20 bg-navy-900">
      <div class="max-w-6xl mx-auto px-5">
        <div class="mb-12">
          <h2 class="text-2xl sm:text-3xl font-bold text-white mb-3">標準化服務流程</h2>
          <p class="text-blue-200 text-sm sm:text-base max-w-xl">從初步洽談到完工後的維護，我們建立了一套嚴謹的 SOP，確保每一項細節都能達到最高水準。</p>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div v-for="(step, i) in steps" :key="step.title" class="flex flex-col items-start">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-sm bg-[#552B00] flex items-center justify-center shrink-0">
                <img :src="step.icon" :alt="step.title" class="w-5 h-5" />
              </div>
              <span class="text-3xl font-bold text-white/20">{{ String(i + 1).padStart(2, '0') }}</span>
            </div>
            <h3 class="text-white font-bold mb-2">{{ step.title }}</h3>
            <p class="text-blue-200 text-sm leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Why Us ─────────────────────────────────────────── -->
    <section id="about" class="py-16 lg:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-5">
        <div class="mb-12 text-center">
          <h2 class="text-2xl sm:text-3xl font-bold text-navy-900 mb-3">為什麼選擇我們？</h2>
          <div class="w-10 h-0.5 bg-brand-orange mx-auto"></div>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="r in reasons" :key="r.title"
               class="p-6 rounded-xl bg-[#F2F4F6] hover:shadow-md transition-all">
            <div class="w-11 h-11 rounded-sm bg-[#002046] flex items-center justify-center mb-4">
              <!-- outline SVG icon, color #EB851C -->
              <svg v-html="r.icon" class="w-5 h-5 text-[#EB851C]" fill="none" stroke="#EB851C" stroke-width="1.8" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" />
            </div>
            <h3 class="font-bold text-navy-900 mb-2 text-sm sm:text-base">{{ r.title }}</h3>
            <p class="text-gray-500 text-xs sm:text-sm leading-relaxed">{{ r.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA / Contact ──────────────────────────────────── -->
    <section id="contact" class="relative py-16 lg:py-20 overflow-hidden">
      <!-- background image -->
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat"
           style="background-image: url('/images/contact-background.png')"></div>
      <!-- dark overlay -->
      <div class="absolute inset-0 bg-navy-900/85"></div>

      <div class="relative max-w-6xl mx-auto px-5">
        <div class="mb-10">
          <h2 class="text-2xl sm:text-3xl font-bold text-white leading-snug mb-2">
            立即開始您的<br>居家安全計畫
          </h2>
          <p class="text-blue-200 text-sm sm:text-base">不論是老屋翻新、氣密窗更換，還是大型金屬工程需求，鋮鋼鋁門窗工程行團隊隨時準備為您服務。歡迎預約到府丈量。</p>
        </div>
        <div class="grid lg:grid-cols-2 gap-10 items-start">
          <!-- Contact Info -->
          <div class="space-y-5">
            <div class="flex items-start gap-3 text-blue-100">
              <svg class="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="#EB851C" stroke-width="1.8" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 21C12 21 5 13.5 5 8.5a7 7 0 0 1 14 0c0 5-7 12.5-7 12.5z"/><circle cx="12" cy="8.5" r="2.5"/>
              </svg>
              <span class="text-sm sm:text-base">新北市中和區景平路309號</span>
            </div>
            <div class="flex items-center gap-3 text-blue-100">
              <svg class="w-5 h-5 shrink-0" fill="none" stroke="#EB851C" stroke-width="1.8" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.18h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.09-1.09a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <a href="tel:0909085599" class="text-sm sm:text-base hover:text-white transition-colors">
                0909-085-599 (呂明德先生)
              </a>
            </div>
            <div class="flex items-center gap-3 text-blue-100">
              <svg class="w-5 h-5 shrink-0" fill="none" stroke="#EB851C" stroke-width="1.8" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M9 7h6M9 11h6M9 15h4"/>
              </svg>
              <span class="text-sm sm:text-base">統一編號: 60067845</span>
            </div>

            <!-- LINE card -->
            <div class="mt-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-5 flex items-center gap-5">
              <img src="/images/qrcode.png" alt="LINE QR Code"
                   class="w-24 h-24 rounded-xl object-contain bg-white p-1 shrink-0" />
              <div>
                <p class="text-white font-bold text-base mb-1">加入 LINE 好友</p>
                <p class="text-blue-200 text-sm leading-relaxed">拍照傳送您的施工需求<br>師傅線上即時初估</p>
                <p class="text-blue-300 text-sm mt-3">搜尋 ID：@chen</p>
              </div>
            </div>
          </div>

          <!-- Map -->
          <div class="rounded-xl overflow-hidden shadow-lg h-72 sm:h-80 bg-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.0849743822516!2d121.49745!3d24.99843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a8f577a6c9e7%3A0x0!2z5paw5YyX5biC5Lit5ZKM5Y2A5pS_5bmz5b2V309!5e0!3m2!1szh-TW!2stw!4v1"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Footer ─────────────────────────────────────────── -->
    <footer class="bg-navy-950 py-5">
      <div class="max-w-6xl mx-auto px-5 text-center text-blue-300 text-xs sm:text-sm">
        © 鋮鋼鋁門窗工程行｜統編 60067845. All Rights Reserved.
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
const products = [
  {
    name: '鋁門窗',
    desc: '客製化多色烤漆，多色烤漆工法，結合卓越抗老性與彈性配搭能能。',
    img: '/images/aluminum-doors.png',
  },
  {
    name: '不鏽鋼防盜門窗',
    desc: '使用 304/316 頂級不鏽鋼鋼材，結合高安全建議第一選防範。',
    img: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80',
  },
  {
    name: '採光罩',
    desc: '強化玻璃與透明保護蓋合置，節能採光同時防護 99% 紫外線。',
    img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
  },
  {
    name: '鐵皮屋',
    desc: '防水耐腐蝕，多種頂材與鋼架結構技術提升居家或戶外倉儲空間。',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
  },
  {
    name: '電動捲門',
    desc: '智慧系統，結合高品質鋁合金或鋼板材質，具備紅外線全感應平整建造。',
    img: 'https://images.unsplash.com/photo-1558612078-9a2e3a8e9e1b?w=600&q=80',
  },
  {
    name: '硫化銅門',
    desc: '使用分解硫化鋼材，防濕、遮擋、防腐，性能極佳，是集合住宅及聯棟建議。',
    img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600&q=80',
  },
  {
    name: '淋浴拉門',
    desc: '即可分客製化，多種開關型式，使用鋼化玻璃及鋁合金五金配件。',
    img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80',
  },
  {
    name: '塑鋼門',
    desc: '適用於社區空間，通適於封閉空間，高品質塑鋼材質，有型而不節縮。',
    img: 'https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?w=600&q=80',
  },
]

const steps = [
  {
    icon: '/images/message.svg',
    title: '專業諮詢',
    desc: '了解您的需求與空間規劃，提供合適的門窗空間整體解決方案。',
  },
  {
    icon: '/images/rule.svg',
    title: '現場丈量',
    desc: '由專業師傅到府精確量測尺寸，提供施工後防腐防護繪製細部結構規畫。',
  },
  {
    icon: '/images/tool.svg',
    title: '施工安裝',
    desc: '由具有多年施作經驗的工班負責安裝，嚴謹執行防水與固態工法。',
  },
  {
    icon: '/images/jobcheck.svg',
    title: '售後服務',
    desc: '施作完成的保固與回饋維護服務，若有任何使用狀況皆立即予以回應處理。',
  },
]

// Outline SVG path strings for reasons icons (stroke="#EB851C" applied on the svg element)
const reasons = [
  {
    // wrench / craft
    icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    title: '三十年職人經驗',
    desc: '由呂明德師傅親自督工每道施工程序，擁有豐富的工程實務經驗。',
  },
  {
    // headset / customer service
    icon: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
    title: '透明報價與親切服務',
    desc: '報價清楚透明，每一份報價詳細說明各工序，讓您安心委託。',
  },
  {
    // shield-check
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>',
    title: '頂級材料選用',
    desc: '僅選用一流大廠最新材料，不鏽鋼、鋁合金、防腐蝕，絕不省略任何品質考量。',
  },
  {
    // thumbs up
    icon: '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>',
    title: '在地口碑',
    desc: '深耕中和多年，深受在地社區及鄰里家庭信任，讓我們的業績持續成長的動力。',
  },
]
</script>
