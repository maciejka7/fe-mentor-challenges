<script setup lang="ts">
const { lead } = defineProps<{ lead: string }>()
</script>

<template>
  <p class="text-muted-foreground mt-4 text-xl">
    {{ lead }}
  </p>
</template>
