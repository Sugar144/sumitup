<template>
  <div class="chapter-nav">
    <router-link v-if="prev" :to="prev.to" class="prev">
      &larr; {{ prev.label }}
    </router-link>
    <span v-else></span>
    <router-link v-if="next" :to="next.to" class="next">
      {{ next.label }} &rarr;
    </router-link>
    <span v-else></span>
  </div>
</template>

<script setup>
defineProps({
  prev: { type: Object, default: null },
  next: { type: Object, default: null }
})
</script>
