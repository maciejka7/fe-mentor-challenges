import { type VueWrapper, mount } from '@vue/test-utils'
import type { Mock } from 'vitest'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createProduct } from '../entity/product'
import { mockProductCardData } from '../helpers/test/testData'
import ProductLIstProductCard from './ProductLIstProductCard.vue'

const cardElements = {
  productImage(wrapper: VueWrapper) { return wrapper.get('[data-test="product-image"]') },
  productCategory(wrapper: VueWrapper) { return wrapper.get('[data-test="product-category"]') },
  productName(wrapper: VueWrapper) { return wrapper.get('[data-test="product-name"]') },
  productPrice(wrapper: VueWrapper) { return wrapper.get('[data-test="product-price"]') },
  addToCartButtonIdleState(wrapper: VueWrapper) { return wrapper.get('[data-test="idle-button"]') },
  addToCartButtonActiveState(wrapper: VueWrapper) { return wrapper.get('[data-test="active-button"]') },
  addToCartButtonActiveAddButton(wrapper: VueWrapper) { return wrapper.get('[data-test="active-button-add"]') },

}

vi.mock('@vueuse/core', () => ({
  useBreakpoints: vi.fn(),
}))

let mockProductCard: VueWrapper
describe('productListProductCard test', async () => {
  beforeEach(() => {
    (useBreakpoints as Mock).mockReturnValue({ active: () => 'mobile' })
    mockProductCard = mount(ProductLIstProductCard, { props: { product: createProduct(mockProductCardData[0]) } })
  })

  it('should render product image', async () => {
    expect(mockProductCard.text()).toContain('Waffle')
    expect(mockProductCard.text()).toContain('$')
    expect(mockProductCard.html()).toMatchSnapshot()
  })

  it('should render product category', () => {
    const category = cardElements.productCategory(mockProductCard)
    expect(category.text()).toContain('Waffle')
  })
  it('should render product name', () => {
    const name = cardElements.productName(mockProductCard)
    expect(name.text()).toContain('Waffle')
  })

  it('should render product price', () => {
    const price = cardElements.productPrice(mockProductCard)
    expect(price.text()).toContain('6.50')
    expect(price.text()).toContain('$')
  })

  it('should render add to cart button', () => {
    const addToCartButton = cardElements.addToCartButtonIdleState(mockProductCard)
    expect(addToCartButton.text()).toContain('Add to cart')
  })

  it('should emit events on amount change', async () => {
    const addToCartButton = cardElements.addToCartButtonIdleState(mockProductCard)
    await addToCartButton.trigger('click')

    const addButton = cardElements.addToCartButtonActiveAddButton(mockProductCard)
    await addButton.trigger('click')
    await addButton.trigger('click')
    await addButton.trigger('click')
    const addToCartActiveButton = cardElements.addToCartButtonActiveState(mockProductCard)
    expect(addToCartActiveButton.text()).toContain('3')
  })

  it.todo('should', () => {

  })
})
