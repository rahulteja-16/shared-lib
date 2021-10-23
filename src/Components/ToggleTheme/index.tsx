import { useState, useEffect } from 'react'
import Button from '../Button'

const ToggleTheme = () => {
	const [theme, setTheme] = useState('light')
	const nextTheme = theme === 'light' ? 'dark' : 'light'

	useEffect(() => {
		document.body.dataset.theme = theme
	}, [theme])

	return (
		<Button onBtnClick={() => setTheme(nextTheme)}>
			<span>Change Theme</span>
		</Button>
	)
}

export default ToggleTheme
