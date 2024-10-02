import { describe, expect, it } from 'vitest'
import { mockProductCardData } from '../helpers/test/testData'
import type { CartItem } from './cartItem'
import { createCartItem } from './cartItem'
import { createProduct } from './product'

const [firstProduct, secondProduct] = mockProductCardData

describe('cartItem factory', () => {
  it('should equals two same cartItem be true', () => {
    const mockProdut = createProduct(firstProduct)

    const cartItem: CartItem = {
      item: mockProdut,
      quantity: 1,
    }

    const mockCartItem = createCartItem(cartItem)
    const mockAnotherCartItem = createCartItem(cartItem)

    expect(mockCartItem.equals(mockCartItem, mockAnotherCartItem)).toBe(true)
  })

  it('should equals two different cartItem be false', () => {
    const mockProdut = createProduct(firstProduct)
    const mockAnotherProduct = createProduct(secondProduct)

    const cartItem: CartItem = {
      item: mockProdut,
      quantity: 1,
    }
    const anotherCartItem: CartItem = {
      item: mockAnotherProduct,
      quantity: 2,
    }
    const mockCartItem = createCartItem(cartItem)
    const mockAnotherCartItem = createCartItem(anotherCartItem)

    expect(mockCartItem.equals(mockCartItem, mockAnotherCartItem)).toBe(false)
  })
})
