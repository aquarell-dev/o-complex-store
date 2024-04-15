import { MutableRefObject, useEffect } from 'react'

const useObserve = (
	triggerRef: MutableRefObject<HTMLDivElement | null>,
	onInIntersection: () => void,
) => {
	useEffect(() => {
		const observer = new IntersectionObserver(entries =>
			entries.forEach(entry => {
				if (entry.isIntersecting) onInIntersection()
			}),
		)

		if (triggerRef.current) observer.observe(triggerRef.current)

		return () => {
			if (triggerRef.current) observer.unobserve(triggerRef.current)
			observer.disconnect()
		}
	}, [triggerRef, onInIntersection])

	return
}

export default useObserve
