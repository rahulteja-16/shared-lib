import Boop from './Components/Boop'
import Button from './Components/Button'
import './styles.css'
import GlobalStyles from './Styles/GlobalStyles'

const App = () => {
	return (
		<div>
			<GlobalStyles />
			<Boop rotation={30} timing={30}>
				<Button
					onBtnClick={() => {
						console.log('test')
					}}
				>
					<div>Test</div>
				</Button>
			</Boop>
		</div>
	)
}

export default App
