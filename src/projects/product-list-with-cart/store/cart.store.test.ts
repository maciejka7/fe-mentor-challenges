import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, it } from 'vitest'
import { useCartStore } from './cart.store'

describe('cart Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it.todo('should hava empty store at beginning')

  it.todo('should add product to store')

  it.todo('should increase quantity of particular item in cart')

  it.todo('should decrease quantity of particular item in cart')

  it.todo('should remove item from store')

  it.todo('should get a number of items in store')

  it.todo('should get a totalOrder value of every item and quantity in cart')

  it.todo('should clear entire store to start new order')

  it.todo('should can confirm entire order by pressing confirm button')

  it.todo('should see confirmation modal after clicking confirm button')

  it.todo('should have clear cart after confirmation')
})
