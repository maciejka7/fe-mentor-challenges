import { type VueWrapper, mount } from '@vue/test-utils'
import { type Mock, beforeEach, describe, expect, it, vi } from 'vitest'
import { mockProductCardData } from '../helpers/test/testData'
import ProductListProductsContainer from './ProductListProductsContainer.vue'
import ProductLIstProductCard from './ProductLIstProductCard.vue'

let mockProductListContainer: VueWrapper

vi.mock('@vueuse/core', () => ({
  useFetch: vi.fn(),
  useBreakpoints: vi.fn(),
}))

describe('productListProductCard test', async () => {
  beforeEach(() => {
    (useBreakpoints as Mock).mockReturnValue({ active: () => 'mobile' })
  })

  it('should render an error if fetching fail', async () => {
    (useFetch as Mock).mockReturnValue({
      json: () => ({
        data: null,
        isFetching: null,
        error: true,
      }),
    })
    mockProductListContainer = mount(ProductListProductsContainer)
    expect(mockProductListContainer.text()).toContain('Error')
  })

  it('should render a loading state before fetching data', () => {
    (useFetch as Mock).mockReturnValue({
      json: () => ({
        data: null,
        isFetching: true,
        error: null,
      }),
    })
    mockProductListContainer = mount(ProductListProductsContainer)
    expect(mockProductListContainer.text()).toContain('Loading...')
  })

  it('should render a list of compontnts', () => {
    (useFetch as Mock).mockReturnValue({
      json: () => ({
        data: {
          value: mockProductCardData,
        },
        isFetching: false,
        error: null,
      }),
    })
    mockProductListContainer = mount(ProductListProductsContainer)
    const cards = mockProductListContainer.findAllComponents(ProductLIstProductCard)
    expect(cards.length).toBeGreaterThanOrEqual(1)
  })
})
