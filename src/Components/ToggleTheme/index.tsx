import { useState, useEffect } from 'react'
import Button from '../Button'
import { ThemeText } from './styles'

interface ToggleThemeType {
	themeValue: (theme: string) => void
}

const ToggleTheme = ({ themeValue }: ToggleThemeType) => {
	const [theme, setTheme] = useState('dark')
	const nextTheme = theme === 'light' ? 'dark' : 'light'

	const updateTheme = () => {
		setTheme(nextTheme)
		themeValue(nextTheme)
	}

	useEffect(() => {
		document.body.dataset.theme = theme
	}, [theme])

	return (
		<Button onBtnClick={updateTheme}>
			<ThemeText>Change Theme</ThemeText>
		</Button>
	)
}

export default ToggleTheme
