import Logo from '@ui/logo'
import { FC } from 'react'
import { links } from './links'
import { NavLink } from 'react-router-dom'
import { cn } from '@utils/cn'

const Navigation: FC = () => {
	return (
		<div className='w-full py-6 px-20 shadow-sm border-b border-white/10 flex justify-between'>
			<Logo />
			<div className='flex items-center space-x-2'>
				{links.map(link => (
					<NavLink
						to={link.path}
						key={link.title}
						className={({ isActive }) =>
							cn(
								'text-text-100 hover:text-text-200 transition duration-300 ease-in-out',
								isActive && 'underline',
							)
						}
					>
						{link.title}
					</NavLink>
				))}
			</div>
		</div>
	)
}

export default Navigation
