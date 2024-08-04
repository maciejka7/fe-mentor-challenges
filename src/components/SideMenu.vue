<script setup lang="ts">
import { Home } from 'lucide-vue-next'
</script>

<template>
  <div class="h-full max-h-screen flex flex-col gap-2 border bg-neutral-100 shadow">
    <div class="flex flex-col px-6 py-4 text-xl">
      <RouterLink

        class="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg py-3 transition-all"
        to="/" title="home page"
      >
        <Home class="h-4 w-4" />
        Home
      </RouterLink>
      <page-lead lead="Hi 👋 select project:" />
    </div>
    <div class="flex-1">
      <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
        <!-- <a
          href="/"
          class="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
        >
          <Home class="w-4 h-4" />
          Dashboard
        </a> -->
        <project-list />
      </nav>
    </div>
  </div>
</template>

<style scoped>

</style>
