<script setup lang="ts">
import { CircleMinus, CirclePlus, ShoppingCart } from 'lucide-vue-next'
import { defineEmits, defineProps } from 'vue'

interface ProductListButtonProps {
  label: string
}

type ProductListButtonState = 'active' | 'idle'

const { label } = defineProps<ProductListButtonProps>()
const emit = defineEmits<(e: 'addAmount', amount: number) => void>()
const buttonState = ref<ProductListButtonState>('idle')
const quantity = ref<number>(0)

function toggleButtonState() {
  if (buttonState.value === 'active') {
    buttonState.value = 'idle'
  }
  else {
    buttonState.value = 'active'
  }
}

function changeQuantity(value: number) {
  if (!(quantity.value === 0 && value === -1)) {
    quantity.value += value
    emit('addAmount', quantity.value)
  }
}
</script>

<template>
  <button
    v-if="buttonState === 'idle'" data-test="idle-button"
    class="border-plwc-rose-400 hover:border-plwc-red hover:text-plwc-red relative min-w-40 w-fit flex gap-2 border rounded-full bg-white px-7 py-3 transition-all transition-duration-300"
    @click="toggleButtonState"
  >
    <ShoppingCart class="text-plwc-red" /> {{ label }}
  </button>
  <button
    v-else data-test="active-button"
    class="border-plwc-rose-400 hover:border-plwc-red bg-plwc-red relative min-w-40 w-fit flex justify-between gap-2 border rounded-full p-3 text-white transition-all transition-duration-300"
    @click="toggleButtonState"
  >
    <CircleMinus data-test="active-button-subtract" @click.stop="changeQuantity(-1)" />
    {{ quantity }}
    <CirclePlus data-test="active-button-add" @click.stop="changeQuantity(1)" />
  </button>
</template>

<style scoped></style>
