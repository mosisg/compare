export interface SearchProducts {
  category: string
  products: {
    id: string
    name: string
    slug: string
    categoryId: string
  }[]
}
