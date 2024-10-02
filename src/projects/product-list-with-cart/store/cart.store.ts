import { defineStore } from 'pinia'
import { type CartItem, type CartItemEntity, createCartItem } from '../entity/cartItem'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<CartItemEntity[]>([])
  const isConfirmationButtonVisible = ref(false)

  const getTotalOrderValue = computed(() => {})

  const getTotalNumberOfItemInCart = computed(() => {})

  const showConfirmationModal = () => {}

  const storeItem = (newItem: CartItem) => {
    const newItemEntity = createCartItem(newItem)

    cart.value.find((currentValue, index, arr) => {
      console.log(currentValue)
    })

    cart.value.push(newItemEntity)
  }

  const destroyItem = () => {}

  const clearCart = () => {}

  const getCartItems = computed(() => {
    return cart.value
  })

  return {
    getCartItems,
    storeItem,
    destroyItem,
    clearCart,
    showConfirmationModal,
    getTotalNumberOfItemInCart,
    getTotalOrderValue,
    isConfirmationButtonVisible,

  }
})
