<script setup lang="ts">
const { header } = defineProps<{ header: string }>()
</script>

<template>
  <h2
    class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
  >
    {{ header }}
  </h2>
</template>
