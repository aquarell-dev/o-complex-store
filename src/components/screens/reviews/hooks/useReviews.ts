import { axiosClassic } from '@api/axios'
import { useQuery } from '@tanstack/react-query'
import { Review } from 'src/types/review.types'

const useReviews = () => {
	const getReviews = async () => {
		const response = await axiosClassic.get<Review[]>('/reviews')

		if (response.status !== 200) throw new Error()

		return response.data
	}

	const { data: reviews, isPending: isLoading } = useQuery({
		queryKey: ['reviews'],
		queryFn: getReviews,
	})

	return { reviews, isLoading }
}

export default useReviews
