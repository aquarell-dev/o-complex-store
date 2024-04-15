import { useCallback } from 'react'

const formatter = new Intl.NumberFormat('ru-RU', {
	style: 'currency',
	currency: 'RUB',
})

const useCurrency = () => {
	const format = useCallback((amount: number) => formatter.format(amount), [])

	return format
}

export default useCurrency
