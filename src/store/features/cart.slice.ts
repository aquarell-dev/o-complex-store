import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LS_KEYS, getItem } from '@utils/ls'
import { CartItem } from 'src/types/cart.types'
import { Product } from 'src/types/product.types'

const initialState = getItem<{ items: CartItem[] }>(LS_KEYS.CART) ?? {
	items: [],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<Product>) => {
			state.items.push({ product: action.payload, amount: 1 })
		},
		removeProduct: (state, action: PayloadAction<Product>) => {
			state.items = state.items.filter(
				item => item.product.id !== action.payload.id,
			)
		},
		incrementAmount: (state, action: PayloadAction<Product>) => {
			state.items = state.items.map(item =>
				item.product.id === action.payload.id
					? { product: item.product, amount: item.amount + 1 }
					: item,
			)
		},
		decrementAmount: (state, action: PayloadAction<Product>) => {
			state.items = state.items.map(item =>
				item.product.id === action.payload.id
					? { product: item.product, amount: item.amount - 1 }
					: item,
			)
		},
		setAmount: (state, action: PayloadAction<Product & { amount: number }>) => {
			state.items = state.items.map(item =>
				item.product.id === action.payload.id
					? { product: item.product, amount: action.payload.amount }
					: item,
			)
		},
	},
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
