<template>
  <div id="study-app">
    <FloatingNav />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <SiteFooter />
    <BackToTop />
  </div>
</template>

<script setup>
import FloatingNav from './components/FloatingNav.vue'
import SiteFooter from './components/SiteFooter.vue'
import BackToTop from './components/BackToTop.vue'
</script>
