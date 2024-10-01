<script setup lang="ts">
import ProductListPreviewImage from '../projects/product-list-with-cart/img/cardImg.png'

export interface ProjectItem {

  title: string
  path: string
  desc: string
  imageSrc: string
  links: {
    components: string
    frontendMentors: string
    notes: string
    sourceCode: string
  }
}

const projectList: ProjectItem[] = [
  {
    desc: 'Simple product page with cart and checkout',
    title: 'Product list with cart',
    path: '/product-list-with-cart',
    imageSrc: ProductListPreviewImage,
    links: {
      components: '/product-list-with-cart/components',
      notes: '/product-list-with-cart/notes',
      frontendMentors: 'https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d',
      sourceCode: 'https://github.com/maciejka7/fe-mentor-challenges/tree/main/src',
    },
  },
]
</script>

<template>
  <div>
    <ProjectListItem
      v-for="item in projectList" :key="item.path" :desc="item.desc" :path="item.path"
      :title="item.title" :image-src="item.imageSrc" :links="item.links"
    />
  </div>
</template>

<style scoped>

</style>
