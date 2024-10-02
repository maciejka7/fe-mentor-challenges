import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { createProduct } from '../entity/product'
import { mockProductCardData } from '../helpers/test/testData'
import type { CartItem } from './cart.store'
import { useCartStore } from './cart.store'

const mockProduct: CartItem = {
  item: createProduct(mockProductCardData[0]),
  quantity: 1,

}

describe('cart Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('should hava empty store at beginning', async () => {
    const { getCartItems } = useCartStore()
    expect(getCartItems.length).to.eq(0)
  })

  it('should add product to store', async () => {
    const { getCartItems, storeItem } = useCartStore()
    expect(getCartItems.length).to.eq(0)
    storeItem(mockProduct)
    expect(getCartItems.length).to.eq(1)
  })

  it('should increase quantity of particular item in cart', async () => {
    const { getCartItems, storeItem } = useCartStore()
    expect(getCartItems.length).to.eq(0)
    storeItem(mockProduct)
    storeItem(mockProduct)
    expect(getCartItems.length).to.eq(1)
    expect(getCartItems[0].quantity).to.eq(2)
  })

  it.todo('should remove item from store', async () => {})

  it.todo('should get a number of items in store', async () => {})

  it.todo('should get a totalOrder value of every item and quantity in cart', async () => {})

  it.todo('should clear entire store to start new order', async () => {})

  it.todo('should can confirm entire order by pressing confirm button', async () => {})

  it.todo('should see confirmation modal after clicking confirm button', async () => {})

  it.todo('should have clear cart after confirmation', async () => {})
})
