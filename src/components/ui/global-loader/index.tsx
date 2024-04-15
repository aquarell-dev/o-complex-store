import { useIsFetching, useIsMutating } from '@tanstack/react-query'
import { cn } from '@utils/cn'
import { LoaderCircle } from 'lucide-react'
import { FC } from 'react'

const GlobalLoader: FC = () => {
	const isFetching = useIsFetching()
	const isMutating = useIsMutating()

	return (
		<div
			className={cn(
				'transition duration-500 fixed right-2 top-2 overflow-hidden z-20',
				isFetching || isMutating ? 'translate-x-0' : 'translate-x-12',
			)}
		>
			<LoaderCircle className='w-6 h-6 text-primary animate-spin' />
		</div>
	)
}

export default GlobalLoader
