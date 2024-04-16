import { useActions } from '@hooks/useActions'
import useCartItem from '@hooks/useCartItem'
import useCurrency from '@hooks/useCurrency'
import Button from '@ui/button'
import { Minus, Plus } from 'lucide-react'
import { FC, useEffect, useRef, useState } from 'react'
import { Product as ProductProps } from 'src/types/product.types'

const Product: FC<ProductProps> = product => {
	const { cartItem } = useCartItem(product)
	const format = useCurrency()
	const { addProduct, decrementAmount, incrementAmount, setAmount } =
		useActions()

	const [newAmount, setNewAmount] = useState(cartItem?.amount.toString() || '0')

	useEffect(() => {
		setNewAmount(cartItem?.amount.toString() || '0')
	}, [cartItem])

	return (
		<div className='max-w-72 bg-bg-200 flex flex-col justify-between space-y-4 p-2 rounded-sm shadow-md border border-white/10'>
			<div className='flex flex-col space-y-2'>
				<img
					src={product.image_url}
					alt={product.title}
					className='rounded-sm'
				/>
				<p className='whitespace-nowrap overflow-hidden text-ellipsis text-center'>
					{product.title}
				</p>
				<p className='break-words'>{product.description.substring(0, 70)}...</p>
			</div>
			<div className='flex flex-col space-y-2'>
				<p className='text-center'>
					Цена: <span className='font-medium'>{format(product.price)}</span>
				</p>
				{!!cartItem ? (
					<div className='flex space-x-2'>
						<Button
							size='round'
							onClick={() => decrementAmount(cartItem.product)}
						>
							<Minus />
						</Button>
						<input
							className='bg-primary h-full w-full rounded-md flex items-center justify-center outline-none border-none text-center'
							value={newAmount}
							onChange={e => setNewAmount(e.target.value)}
							onBlur={() => {
								const numeric = Number(newAmount)

								if (!!numeric)
									setAmount({ ...cartItem.product, amount: numeric })
							}}
						/>
						<Button
							size='round'
							onClick={() => incrementAmount(cartItem.product)}
						>
							<Plus />
						</Button>
					</div>
				) : (
					<Button onClick={() => addProduct(product)}>Купить</Button>
				)}
			</div>
		</div>
	)
}

export default Product
