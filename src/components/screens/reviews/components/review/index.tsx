import { FC } from 'react'
import { Review as TReview } from 'src/types/review.types'
import DOMPurify from 'dompurify'

const Review: FC<TReview> = props => {
	return (
		<div
			className='bg-bg-300 rounded-md shadow-md p-4'
			dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.text) }}
		/>
	)
}

export default Review
