import React, { FC } from 'react'
import { ProductResponse } from 'src/types/product.types'
import Product from '../product'
import { InfiniteData } from '@tanstack/react-query'
import SkeletonGrid from '../skeleton-grid'

const ProductGrid: FC<{
	products: InfiniteData<ProductResponse> | undefined
	isPending: boolean
}> = ({ products, isPending }) => {
	return (
		<div className='grid grid-cols-6 gap-4 mx-12 my-6'>
			{isPending ? (
				<SkeletonGrid className='h-72 max-w-56' />
			) : (
				products?.pages.map((page, i) => (
					<React.Fragment key={i}>
						{page.products.map(product => (
							<Product
								{...product}
								key={product.id}
							/>
						))}
					</React.Fragment>
				))
			)}
		</div>
	)
}

export default ProductGrid
