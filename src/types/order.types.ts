export type OrderForm = {
	phone: string
}

export type Order = {
	phone: string
	cart: { id: number; quantity: number }[]
}
