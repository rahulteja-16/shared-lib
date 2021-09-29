import Navigation from './Components/Navigation'
import './styles.css'
import GlobalStyles from './Styles/GlobalStyles'
import ThemeProvider from './Styles/ThemeProvider'

const App = () => {
	return (
		<ThemeProvider>
			<GlobalStyles />
			<Navigation routes={[]}>
				<div>Working</div>
			</Navigation>
		</ThemeProvider>
	)
}

export default App
