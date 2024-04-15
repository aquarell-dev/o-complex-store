import { useRouteError } from 'react-router-dom'

export default function Error() {
	const error = useRouteError() as { status: number }

	console.log(error)

	return (
		<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
			<p className='text-7xl font-medium'>{error.status}</p>
			<p className='text-xl italic'>Упс! Ошибка...</p>
		</div>
	)
}
