import Navigation from '@ui/navigation'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
	return (
		<div className='min-h-screen bg-bg-100'>
			<Navigation />
			<Outlet />
		</div>
	)
}
