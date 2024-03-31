import { useEffect, useRef, useState } from 'react'

export const useOnClickOutside = isInitialValue => {
	const [isShow, setIsShow] = useState(isInitialValue)
	const ref = useRef(null)

	const handleOutside = event => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleOutside, true)
		return () => {
			document.removeEventListener('click', handleOutside, true)
		}
	})

	return { ref, isShow, setIsShow }
}
