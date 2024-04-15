import { FC } from 'react'
import { Link } from 'react-router-dom'

const Logo: FC = () => {
	return (
		<div className='text-xl font-medium'>
			<Link
				to='/'
				className='select-none'
			>
				O Complex
			</Link>
		</div>
	)
}

export default Logo
