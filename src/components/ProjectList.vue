<script setup lang="ts">
interface ProjectItem {
  title: string
  path: string
  desc: string
  tagColor: string
}

const projectList: ProjectItem[] = [
  {
    desc: 'Simple product page with cart and checkout',
    title: 'Product list with cart',
    path: '/product-list-with-cart',
    tagColor: 'orange',
  },
]
</script>

<template>
  <div>
    <ProjectListItem v-for="item in projectList" :key="item.path" :desc="item.desc" :path="item.path" :title="item.title" :tag-color="item.tagColor" />
  </div>
</template>

<style scoped>

</style>
