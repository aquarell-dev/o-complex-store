import { Middleware, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/store'
import { LS_KEYS, setItem } from '@utils/ls'

const cartMiddleware: Middleware = store => next => action => {
	const result = next(action) // so store changes, and we can get the new state and sync it

	if ((action as PayloadAction).type.startsWith('cart')) {
		const cart = (store.getState() as RootState).cart

		setItem(LS_KEYS.CART, cart)
	}

	return result
}

export default cartMiddleware
