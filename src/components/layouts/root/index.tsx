import { Outlet } from 'react-router-dom'
import Navigation from './navigation'
import GlobalLoader from '@ui/global-loader'

export default function RootLayout() {
	return (
		<>
			<GlobalLoader />
			<div className='relative min-h-screen bg-bg-100'>
				<Navigation />
				<Outlet />
			</div>
		</>
	)
}
