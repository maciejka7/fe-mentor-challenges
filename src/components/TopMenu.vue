<script setup lang="ts">
import { Home } from 'lucide-vue-next'
</script>

<template>
  <div class="h-18 flex flex-row justify-between gap-2 border bg-neutral-100 shadow dark:bg-neutral-800 dark:text-neutral-900">
    <div class="k max-w-1/2 flex flex-row justify-center px-6 text-xl">
      <RouterLink

        class="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg py-3 text-lg font-bold transition-all dark:text-neutral-100"
        to="/" title="home page"
      >
        <Home class="h-5 w-5" />
        FeMentors challenges
      </RouterLink>
    </div>
    <nav class="flex items-center gap-4 px-2 text-sm font-medium lg:px-4">
      <RouterLink

        class="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg py-3 text-lg transition-all dark:text-neutral-100"
        to="/project-list" title="home page"
      >
        <Home class="h-4 w-4" />
        Project list
      </RouterLink>

      <button icon-btn title="toggle dark mode" @click="toggleDark()">
        <div class="h-6 w-6 text-neutral-900 font-bold dark:h-6 dark:w-6 dark:text-neutral-100" i="carbon-sun dark:carbon-moon" />
      </button>
    </nav>
  </div>
</template>

<style scoped>

</style>
