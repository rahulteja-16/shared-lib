import Navigation from './Components/Navigation'
import './styles.css'
import GlobalStyles from './Styles/GlobalStyles'

const App = () => {
	return (
		<div>
			<GlobalStyles />
			<Navigation routes={[]}>
				<div>Working</div>
			</Navigation>
		</div>
	)
}

export default App
