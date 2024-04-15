import { PaginatedResponse } from './common.types'

export type Product = {
	id: number
	image_url: string
	title: string
	description: string
	price: number
}

export type ProductResponse = PaginatedResponse & { products: Product[] }
