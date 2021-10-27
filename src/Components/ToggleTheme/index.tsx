import { useState, useEffect } from 'react'
import Button from '../Button'
import { ThemeText } from './styles'

const ToggleTheme = () => {
	const [theme, setTheme] = useState('light')
	const nextTheme = theme === 'light' ? 'dark' : 'light'

	useEffect(() => {
		document.body.dataset.theme = theme
	}, [theme])

	return (
		<Button onBtnClick={() => setTheme(nextTheme)}>
			<ThemeText>Change Theme</ThemeText>
		</Button>
	)
}

export default ToggleTheme
