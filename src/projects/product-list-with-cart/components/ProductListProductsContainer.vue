<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import type { ApiProductData, Product } from '../types'
import { createProduct } from '../entity/product'
import ProductLIstProductCard from './ProductLIstProductCard.vue'

// Using `useFetch` to fetch data
const { data, error, isFetching } = useFetch<ApiProductData[]>('/public/dessertsData.json').json()

const productsList = computed<Product[] | []>(() => {
  if (!data.value) {
    return []
  }

  const products = data.value as ApiProductData[]
  return products.map((product => createProduct(product)))
})
</script>

<template>
  <div v-if="isFetching">
    Loading...
  </div>
  <div v-else-if="error">
    Error: {{ error.message }}
  </div>
  <div v-else class="flex flex-wrap gap-6">
    <ProductLIstProductCard v-for="product in productsList" :key="`${product.name}-${product.category}`" :product="product" />
  </div>
</template>

<style></style>
