<template>
  <div class="floating-nav" ref="navRef">
    <button class="floating-nav-toggle" @click="open = !open" :aria-label="open ? 'Close menu' : 'Open menu'">
      {{ open ? '✕' : '☰' }}
    </button>
    <transition name="fade">
      <div v-if="open" class="floating-nav-menu">
        <div class="nav-section">Home</div>
        <router-link to="/" @click="open = false">Study Guide Home</router-link>

        <div class="nav-section">Software Architecture</div>
        <router-link to="/sa" @click="open = false">SA Overview</router-link>
        <router-link to="/sa/microservices" @click="open = false">Microservices Patterns</router-link>
        <router-link to="/sa/fundamentals" @click="open = false">Fundamentals of SA</router-link>

        <div class="nav-section">Network &amp; System Admin</div>
        <router-link to="/nsa" @click="open = false">NSA Overview</router-link>
        <router-link to="/nsa/intro" @click="open = false">Intro to Sys Admin</router-link>
        <router-link to="/nsa/data-admin" @click="open = false">Data Administration</router-link>
        <router-link to="/nsa/network-admin" @click="open = false">Network Administration</router-link>
        <router-link to="/nsa/user-admin" @click="open = false">User Administration</router-link>
        <router-link to="/nsa/server-admin" @click="open = false">Server Administration</router-link>

        <div class="nav-section">Coming Soon</div>
        <router-link to="/mad" @click="open = false">Mobile App Dev</router-link>
        <router-link to="/awp" @click="open = false">Advanced Web</router-link>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const open = ref(false)
const navRef = ref(null)

function handleClickOutside(e) {
  if (navRef.value && !navRef.value.contains(e.target)) {
    open.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>
