import { useActions } from '@hooks/useActions'
import useCurrency from '@hooks/useCurrency'
import { X } from 'lucide-react'
import { FC } from 'react'
import { CartItem as TCartItem } from 'src/types/cart.types'

const CartItem: FC<TCartItem> = props => {
	const format = useCurrency()
	const { removeProduct } = useActions()

	return (
		<div className='relative flex space-x-4 p-4 h-32 border-b border-white/10'>
			<img src={props.product.image_url} />
			<div className='flex flex-col justify-between space-y-2'>
				<p className='whitespace-nowrap overflow-hidden text-ellipsis'>
					Наименование: {props.product.title}
				</p>
				<p>Кол-во, шт: {props.amount}</p>
				<p>Стоимость, ₽: {format(props.product.price * props.amount)}</p>
			</div>
			<button
				className='absolute top-2 right-2'
				onClick={() => removeProduct(props.product)}
			>
				<X className='w-4 h-4 text-white/60 hover:text-white/30 transition duration-300 ease-in-out' />
			</button>
		</div>
	)
}

export default CartItem
