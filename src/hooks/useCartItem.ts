import { useEffect, useState } from 'react'
import { CartItem } from 'src/types/cart.types'
import { Product } from 'src/types/product.types'
import { useTypedSelector } from './useTypedSelector'

const useCartItem = (product: Product) => {
	const [currentItem, setCurrentItem] = useState<CartItem | null>(null)
	const cart = useTypedSelector(state => state.cart.items)

	useEffect(() => {
		setCurrentItem(cart.find(item => item.product.id === product?.id) || null)
	}, [cart, product])

	return { cartItem: currentItem }
}

export default useCartItem
