<script setup lang="ts">
import type { Product } from '../types'
import ProductListAddToCartButton from './ProductListAddToCartButton.vue'

const { product } = defineProps<{ product: Product }>()

const breakpoints = useBreakpoints({
  mobile: 0, // optional
  tablet: 640,
  desktop: 1024,
})

const activeBreakpoint = breakpoints.active()

const imageUrl = computed(() => {
  const urlString: string = String(product.image[activeBreakpoint.value!])
  return `/src/projects/product-list-with-cart${urlString.slice(1, urlString.length)}`
})
</script>

<template>
  <div class="max-w-60 rounded-xl">
    <div data-test="card-container" class="relative w-full">
      <img :src="imageUrl" class="rounded-xl" :alt="product.name">
      <ProductListAddToCartButton class="absolute left-1/2 w-fit -top-6 -translate-x-1/2" label="Add to cart" />
    </div>
    <p class="text-plwc-rose-500 text-sm -mt-3" data-test="product-category">
      {{ product.category }}
    </p>
    <h2 class="text-plwc-rose-900 text-lg font-bold" data-test="product-name">
      {{ product.name }}
    </h2>
    <p class="text-plwc-red text-md font-bold" data-test="product-price">
      {{ product.price.money() }}
    </p>
  </div>
</template>

<style scoped></style>
