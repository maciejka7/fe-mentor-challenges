<script setup lang="ts">
const { imageSrc } = defineProps<{ imageSrc: string }>()
</script>

<template>
  <div>
    <img :src="imageSrc" alt="" class="max-h-[200px] w-full object-cover">
  </div>
</template>

<style scoped>

</style>
