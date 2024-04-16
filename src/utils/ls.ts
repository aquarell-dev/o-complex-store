export enum LS_KEYS {
	CART = 'cart',
}

export const getItem = <T>(key: string) => {
	const item = localStorage.getItem(key)

	if (!item) return null

	return JSON.parse(item) as T
}

export const setItem = <T>(key: string, value: T) => {
	localStorage.setItem(key, JSON.stringify(value))
}
