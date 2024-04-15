import Logo from '@ui/logo'
import { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { cn } from '@utils/cn'
import { ShoppingCart } from 'lucide-react'

const links: { title: string; path: string; icon?: ReactNode }[] = [
	{
		title: 'Корзина',
		path: '/cart',
		icon: <ShoppingCart className='w-4 h-4' />,
	},
]

const Navigation: FC = () => {
	return (
		<div className='w-full py-6 px-20 shadow-sm border-b border-white/10 flex justify-between'>
			<Logo />
			<div className='flex items-center space-x-2'>
				{links.map(link => (
					<div className='flex items-center space-x-1 text-text-100 hover:text-text-200 transition duration-300 ease-in-out'>
						<NavLink
							to={link.path}
							key={link.title}
							className={({ isActive }) => (isActive ? 'underline' : '')}
						>
							{link.title}
						</NavLink>
						{link.icon}
					</div>
				))}
			</div>
		</div>
	)
}

export default Navigation
