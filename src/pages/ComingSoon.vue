<template>
  <div>
  <header class="site-header">
    <div class="breadcrumb"><router-link to="/" style="color: var(--blue-200); text-decoration: none;">Study Guide</router-link> &rsaquo; {{ title }}</div>
    <h1>{{ title }}</h1>
    <p class="subtitle">Study materials are being prepared</p>
  </header>

  <div class="page-container">
    <div class="coming-soon">
      <p style="font-size: 3rem; margin-bottom: 1rem;">&#128218;</p>
      <p style="font-size: 1.1rem;">Content for this subject is coming soon.</p>
      <p>Check back later or <router-link to="/" style="color: var(--blue-500);">return to the home page</router-link>.</p>
    </div>
  </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const title = computed(() => route.meta.title || 'Coming Soon')
</script>
