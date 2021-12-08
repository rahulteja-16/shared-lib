const BASE_PATH = './src/Components'

const getExposedComp = () => {
	return {
		'./GlobalStyles': './src/Styles/GlobalStyles',
		'./Navigation': `${BASE_PATH}/Navigation`,
		'./Button': `${BASE_PATH}/Button`,
		'./DropDown': `${BASE_PATH}/DropDown`,
		'./DatePicker': `${BASE_PATH}/CustomDatePicker`,
	}
}

module.exports = {
	getExposedComp: getExposedComp,
}
