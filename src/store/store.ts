import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './features/cart.slice'
import cartMiddleware from './middlewares/cart.middleware'

export const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(cartMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
