import type { ApiProductData, Product } from '../types'
import { createMoney } from './money'

export function createProduct(
  productApiResponse: ApiProductData,
): Product {
  const { category, image, name, price } = productApiResponse

  const product = {
    category,
    name,
    image,
    price: createMoney(price),
  }
  return product
}
