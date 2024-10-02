import { defineStore } from "pinia"
import { Product } from "../types"

interface CartItem {
  item: Product,
  quantity: number
}


export const useCartStore = defineStore('cart', () => {

  const cart = ref<CartItem[]>([])
  const isConfirmationButtonVisible = ref(false)

  const getTotalOrderValue = computed(() => {})

  const getTotalNumberOfItemInCart = computed(() => {})

  const showConfirmationModal = () => {}

  const storeItem = () => {}

  const destroyItem = () => {}

  const clearCart = () => {}

  const getCartItems = computed(() => {}) 

    return { }
  })


})