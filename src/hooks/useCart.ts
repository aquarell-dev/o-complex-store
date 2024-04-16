import { useEffect, useState } from 'react'
import { useTypedSelector } from './useTypedSelector'
import { Product } from 'src/types/product.types'
import { CartItem } from 'src/types/cart.types'
import { useMutation } from '@tanstack/react-query'
import { axiosClassic } from '@api/axios'
import { Order } from 'src/types/order.types'
import { toast } from 'react-toastify'

type CartReduceItem = CartItem & { price: number }

const useCart = () => {
	const cart = useTypedSelector(state => state.cart.items)
	const [total, setTotal] = useState({ amount: 0, price: 0 })

	useEffect(() => {
		const total = (cart as CartReduceItem[]).reduce(
			(acc, item) => ({
				...acc,
				price: acc.price + item.amount * item.product.price,
				amount: acc.amount + item.amount,
			}),
			{ price: 0, amount: 0, product: {} as Product },
		)

		console.log(total)

		setTotal(total)
	}, [cart])

	const newOrder = async (cart: CartItem[], phone: string) => {
		const order: Order = {
			phone,
			cart: cart.map(item => ({ id: item.product.id, quantity: item.amount })),
		}

		const response = await axiosClassic.post<{
			success: number
			error?: string
		}>('/order', order)

		return response.data
	}

	const {
		mutate: createOrder,
		data: orderStatus,
		isPending: isOrderCreating,
	} = useMutation<
		{
			success: number
			error?: string
		},
		Error,
		{ cart: CartItem[]; phone: string }
	>({
		mutationKey: ['new-order'],
		mutationFn: async vars => await newOrder(vars.cart, vars.phone),
		onSuccess: () => toast.success('Заказ был успешно обработан'),
	})

	return {
		cart,
		total,
		createOrder,
		isOrderCreating,
		orderStatus,
	}
}

export default useCart
