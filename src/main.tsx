import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '@screens/home'
import Error from '@screens/error'
import RootLayout from '@layouts/root'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from '@store/store'
import Cart from '@screens/cart'
import Reviews from '@screens/reviews'

const router = createBrowserRouter([
	{
		element: <RootLayout />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/cart',
				element: <Cart />,
			},
			{
				path: '/reviews',
				element: <Reviews />,
			},
		],
	},
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</Provider>
	</React.StrictMode>,
)
