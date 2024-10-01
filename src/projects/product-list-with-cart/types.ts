export interface Money {
  readonly sign: string
  readonly amount: number

  money: () => string
}

export interface Product {
  image: Image
  name: string
  category: string
  price: Money
}

export interface Image {
  thumbnail: string
  mobile: string
  tablet: string
  desktop: string
}

export interface ApiProductData {
  image: Image
  name: string
  category: string
  price: number
}

export type ProductApiResponse = Promise<ApiProductData[]>
