import axios from 'axios'

console.log(import.meta.env.VITE_API_URL)

export const axiosClassic = axios.create({
	headers: {
		'Content-Type': 'application/json',
	},
	baseURL: import.meta.env.VITE_API_URL,
})
