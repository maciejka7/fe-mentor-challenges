import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ProductListAddToCartButton from './ProductListAddToCartButton.vue'

const buttonComponentsElements = {
  idleButton(wrapper: VueWrapper) { return wrapper.get('[data-test="idle-button"]') },
  activeButton(wrapper: VueWrapper) { return wrapper.get('[data-test="active-button"]') },
  activeButtonAdd(wrapper: VueWrapper) { return wrapper.get('[data-test="active-button-add"]') },
  activeButtonSubtract(wrapper: VueWrapper) { return wrapper.get('[data-test="active-button-subtract"]') },
}

describe('component ProductListButton.vue', () => {
  it('should render', () => {
    const wrapper = mount(ProductListAddToCartButton, { props: { label: 'Add to cart' } })
    expect(wrapper.text()).toContain('Add to cart')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should change state after click', async () => {
    const wrapper = mount(ProductListAddToCartButton, { props: { label: 'Add to cart' } })
    const idleButton = buttonComponentsElements.idleButton(wrapper)
    await idleButton.trigger('click')
    expect(wrapper.text()).toContain('0')
    await idleButton.trigger('click')
    expect(wrapper.text()).toContain('Add to cart')
  })
  it('should change count after plus button click', async () => {
    const wrapper = mount(ProductListAddToCartButton, { props: { label: 'Add to cart' } })
    const idleButton = buttonComponentsElements.idleButton(wrapper)
    await idleButton.trigger('click')

    const plusButton = buttonComponentsElements.activeButtonAdd(wrapper)

    await plusButton.trigger('click')
    await plusButton.trigger('click')

    expect(wrapper.text()).toContain('2')
  })
  it('should change count after minus button click', async () => {
    const wrapper = mount(ProductListAddToCartButton, { props: { label: 'Add to cart' } })
    const idleButton = buttonComponentsElements.idleButton(wrapper)
    await idleButton.trigger('click')

    const plusButton = buttonComponentsElements.activeButtonAdd(wrapper)
    const minusButton = buttonComponentsElements.activeButtonSubtract(wrapper)

    await plusButton.trigger('click')
    await plusButton.trigger('click')
    await minusButton.trigger('click')

    expect(wrapper.text()).toContain('1')
  })
  it('should count be at least 0 after minus clicking', async () => {
    const wrapper = mount(ProductListAddToCartButton, { props: { label: 'Add to cart' } })
    const idleButton = buttonComponentsElements.idleButton(wrapper)
    await idleButton.trigger('click')

    const plusButton = buttonComponentsElements.activeButtonAdd(wrapper)
    const minusButton = buttonComponentsElements.activeButtonSubtract(wrapper)

    await plusButton.trigger('click')
    await minusButton.trigger('click')
    await minusButton.trigger('click')
    await minusButton.trigger('click')
    await minusButton.trigger('click')

    expect(wrapper.text()).toContain('0')
  })
})
