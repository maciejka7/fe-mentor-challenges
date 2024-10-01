<script setup lang="ts">
import { ComponentIcon, Github, NotebookText, PanelsTopLeft } from 'lucide-vue-next'
import type { ProjectItem } from '~/components/ProjectList.vue'

const { desc, path, title, imageSrc, links } = defineProps<ProjectItem>()
</script>

<template>
  <div class="mt-6">
    <RouterLink :to="path" :title="title">
      <card>
        <card-image :image-src="imageSrc" />
        <card-header>
          <card-title>
            {{ title }}
          </card-title>
          <card-description>
            {{ desc }}
          </card-description>
          <card-footer class="grid grid-cols-4 mt-4 justify-between gap-4 p-0">
            <router-link class="flex grow gap-2 border px-4 py-2 shadow" :to="links.components">
              Components
              <ComponentIcon />
            </router-link>
            <router-link class="flex grow gap-2 border px-4 py-2 shadow" :to="links.notes">
              Notes
              <NotebookText />
            </router-link>
            <a class="flex grow gap-2 border px-4 py-2 shadow" target="_blank" :href="links.frontendMentors">
              FrontendMentors
              <PanelsTopLeft />
            </a>
            <a class="flex grow gap-2 border px-4 py-2 shadow" target="_blank" :href="links.sourceCode">
              Source Code
              <Github />
            </a>
          </card-footer>
        </card-header>
      </card>
    </RouterLink>
  </div>
</template>
