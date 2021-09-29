const BASE_PATH = './src/Components'

const getExposedComp = () => {
	return {
		'./GlobalStyles': './src/Styles/GlobalStyles',
		'./ThemeProvider': './src/Styles/ThemeProvider',
		'./Navigation': `${BASE_PATH}/Navigation`,
		'./Button': `${BASE_PATH}/Button`,
		'./DropDown': `${BASE_PATH}/DropDown`,
		'./DatePicker': `${BASE_PATH}/DatePicker`,
	}
}

module.exports = {
	getExposedComp: getExposedComp,
}
