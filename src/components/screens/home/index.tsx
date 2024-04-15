import { useRef } from 'react'
import useProducts from './hooks/useProducts'
import useObserve from '@hooks/useObserve'
import ProductGrid from './components/product-grid'

export default function Home() {
	const { products, fetchNextPage, hasNextPage, isPending } = useProducts()

	const ref = useRef<HTMLDivElement>(null)

	useObserve(ref, () => hasNextPage && fetchNextPage())

	return (
		<>
			<ProductGrid
				products={products}
				isPending={isPending}
			/>
			{!isPending && (
				<div
					className='h-2 w-full'
					ref={ref}
				/>
			)}
		</>
	)
}
