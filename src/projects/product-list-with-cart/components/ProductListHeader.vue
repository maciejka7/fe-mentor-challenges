<script setup lang="ts">
const { header } = defineProps<{ header: string }>()
</script>

<template>
  <h1 class="text-plwc-rose-900 mb-8 text-4xl font-extrabold leading-5">
    {{ header }}
  </h1>
</template>

<style scoped></style>
:wqa
