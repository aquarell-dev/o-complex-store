import { Outlet } from 'react-router-dom'
import Navigation from './navigation'

export default function RootLayout() {
	return (
		<div className='min-h-screen bg-bg-100'>
			<Navigation />
			<Outlet />
		</div>
	)
}
