import useCart from '@hooks/useCart'
import CartItem from './components/cart-item'
import OrderForm from './components/order-form'

export default function Cart() {
	const { cart } = useCart()

	return (
		<div className='mx-8 flex space-x-4 my-4'>
			<div className='flex flex-col w-2/3'>
				{cart.map((item, idx) => (
					<CartItem
						{...item}
						key={idx}
					/>
				))}
			</div>
			<OrderForm />
		</div>
	)
}
