import type { Product } from '../types'

export interface CartItem {
  item: Product
  quantity: number
}

export interface CartItemEntity extends CartItem {
  equals: (a: CartItem, b: CartItem) => boolean
}

export function createCartItem(cartItem: CartItem): CartItemEntity {
  const equals = (a: CartItem, b: CartItem) => {
    const isNameEqual = a.item.name === b.item.name
    const isCategoryEqual = a.item.category === b.item.category
    const isPriceEqual = a.item.price.money() === b.item.price.money()

    if (isNameEqual && isCategoryEqual && isPriceEqual) {
      return true
    }
    return false
  }

  return {
    item: cartItem.item,
    quantity: cartItem.quantity,
    equals,
  }
}
