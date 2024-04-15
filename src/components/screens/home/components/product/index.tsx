import useCurrency from '@hooks/useCurrency'
import Button from '@ui/button'
import { FC } from 'react'
import { Product as ProductProps } from 'src/types/product.types'

const Product: FC<ProductProps> = product => {
	const format = useCurrency()

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
				<Button>Купить</Button>
			</div>
		</div>
	)
}

export default Product
