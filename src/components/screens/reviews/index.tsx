import Review from './components/review'
import useReviews from './hooks/useReviews'

export default function Reviews() {
	const { reviews } = useReviews()

	return (
		<div className='grid grid-cols-3 gap-8 m-8'>
			{reviews?.map((r, idx) => (
				<Review
					{...r}
					key={idx}
				/>
			))}
		</div>
	)
}
