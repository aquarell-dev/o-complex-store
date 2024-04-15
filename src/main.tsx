import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '@screens/home'
import Error from '@screens/error'
import RootLayout from '@layouts/root'

const router = createBrowserRouter([
	{
		element: <RootLayout />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
