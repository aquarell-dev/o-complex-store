import { axiosClassic } from '@api/axios'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useState } from 'react'
import type { ProductResponse } from 'src/types/product.types'

const useProducts = () => {
	const [maxPage, setMaxPage] = useState(0)

	const getProducts = async (page: number) => {
		await new Promise(resolve => setTimeout(resolve, 500)) // задержка чтоб увидеть лоадер

		const response = await axiosClassic.get<ProductResponse>(
			`/products?page=${page}&page_size=12`,
		)

		if (response.status !== 200)
			throw new Error('Не удалось получить список товаров')

		setMaxPage(Math.ceil(response.data.total / response.data.amount))

		return response.data
	}

	const {
		data: products,
		fetchNextPage,
		hasNextPage,
		isLoading,
		isPending,
	} = useInfiniteQuery({
		queryKey: ['products'],
		queryFn: async ({ pageParam }) => await getProducts(pageParam),
		initialPageParam: 0,
		getNextPageParam: lastPage =>
			lastPage.page === maxPage ? null : lastPage.page + 1,
	})

	return { products, fetchNextPage, hasNextPage, isLoading, isPending }
}

export default useProducts
