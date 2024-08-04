<script setup lang="ts">
const { desc, path, title, tagColor } = defineProps<{
  title: string
  path: string
  desc: string
  tagColor: string
}>()
</script>

<template>
  <div>
    <RouterLink :to="path" :title="title">
      <card :tag-color="tagColor">
        <card-header>
          <card-title>
            {{ title }}
          </card-title>
          <card-description>
            {{ desc }}
          </card-description>
        </card-header>
      </card>
    </RouterLink>
  </div>
</template>
