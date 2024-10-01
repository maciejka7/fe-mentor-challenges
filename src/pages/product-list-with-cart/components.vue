import ProductListAddToCartButton from '~/projects/product-list-with-cart/components/ProductListAddToCartButton.vue'
<script setup lang="ts">
import ProductListHeader from '~/projects/product-list-with-cart/components/ProductListHeader.vue'
import ProductLIstProductCard from '~/projects/product-list-with-cart/components/ProductLIstProductCard.vue'
import ProductListAddToCartButton from '~/projects/product-list-with-cart/components/ProductListAddToCartButton.vue'
import data from '~/projects/product-list-with-cart/data.json'
import { createProduct } from '~/projects/product-list-with-cart/entity/product'

const productData = createProduct(data[0])
</script>

<template>
  <article>
    <page-header header="Components" />

    <page-lead class="mb-8" lead="Add to cart component" />
    <ProductListAddToCartButton label="Add to Cart" />

    <page-lead class="mb-8" lead="header component" />
    <ProductListHeader header="Dessert" />

    <page-lead class="mb-8" lead="product card component" />
    <ProductLIstProductCard :product="productData" />
  </article>
</template>

<style scoped></style>
