import type { ApiProductData } from '../../types'

export const mockProductCardData: ApiProductData[] = [{
  image: {
    desktop: '../assets/image-baklava-desktop.jpg',
    mobile: '../assets/image-baklava-mobile.jpg',
    tablet: '../assets/image-baklava-tablet.jpg',
    thumbnail: '../assets/image-baklava-thumbnail.jpg',
  },
  name: 'Waffle with Berries',
  category: 'Waffle',
  price: 6.50,
}, {
  image: {
    thumbnail: './assets/images/image-creme-brulee-thumbnail.jpg',
    mobile: './assets/images/image-creme-brulee-mobile.jpg',
    tablet: './assets/images/image-creme-brulee-tablet.jpg',
    desktop: './assets/images/image-creme-brulee-desktop.jpg',
  },
  name: 'Vanilla Bean Crème Brûlée',
  category: 'Crème Brûlée',
  price: 7.00,
}]
