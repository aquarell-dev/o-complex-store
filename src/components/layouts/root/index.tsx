import { Outlet } from 'react-router-dom'
import Navigation from './navigation'
import GlobalLoader from '@ui/global-loader'
import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function RootLayout() {
	return (
		<>
			<GlobalLoader />
			<ToastContainer
				position='top-right'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable={false}
				pauseOnHover
				theme='dark'
				transition={Slide}
			/>
			<div className='relative min-h-screen bg-bg-100'>
				<Navigation />
				<Outlet />
			</div>
		</>
	)
}
