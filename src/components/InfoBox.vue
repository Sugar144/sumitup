<template>
  <div class="info-box" :class="boxClass">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: { type: String, default: 'note', validator: v => ['note', 'analogy', 'warning', 'key-point'].includes(v) }
})

const boxClass = computed(() => `${props.type}-box`)
</script>
