import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
  routes: [
    { path: '/', component: () => import('@/pages/HomePage.vue') },

    // Software Architecture
    { path: '/sa', component: () => import('@/pages/sa/SAHome.vue') },
    { path: '/sa/microservices', component: () => import('@/pages/sa/microservices/MicroservicesHome.vue') },
    { path: '/sa/microservices/ch1', component: () => import('@/pages/sa/microservices/Ch1.vue') },
    { path: '/sa/microservices/ch2', component: () => import('@/pages/sa/microservices/Ch2.vue') },
    { path: '/sa/microservices/ch3', component: () => import('@/pages/sa/microservices/Ch3.vue') },
    { path: '/sa/microservices/ch4', component: () => import('@/pages/sa/microservices/Ch4.vue') },
    { path: '/sa/microservices/ch5', component: () => import('@/pages/sa/microservices/Ch5.vue') },
    { path: '/sa/microservices/ch7', component: () => import('@/pages/sa/microservices/Ch7.vue') },
    { path: '/sa/fundamentals', component: () => import('@/pages/sa/fundamentals/FundamentalsHome.vue') },

    // Network & System Administration
    { path: '/nsa', component: () => import('@/pages/nsa/NSAHome.vue') },
    { path: '/nsa/intro', component: () => import('@/pages/nsa/intro/IntroSysAdmin.vue') },
    { path: '/nsa/user-admin', component: () => import('@/pages/nsa/user-admin/UserAdmin.vue') },
    { path: '/nsa/server-admin', component: () => import('@/pages/nsa/server-admin/ServerAdmin.vue') },
    { path: '/nsa/network-admin', component: () => import('@/pages/nsa/network-admin/NetworkAdmin.vue') },
    { path: '/nsa/data-admin', component: () => import('@/pages/nsa/data-admin/DataAdmin.vue') },

    // Placeholders
    { path: '/mad', component: () => import('@/pages/ComingSoon.vue'), meta: { title: 'Mobile App Development' } },
    { path: '/awp', component: () => import('@/pages/ComingSoon.vue'), meta: { title: 'Advanced Web Programming' } },
  ]
})

export default router
