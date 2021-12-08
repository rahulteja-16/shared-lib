const BASE_PATH = './src/Components'

const getExposedComp = () => {
	return {
		'./Button': `${BASE_PATH}/Button`,
		'./DropDown': `${BASE_PATH}/DropDown`,
		'./DatePicker': `${BASE_PATH}/CustomDatePicker`,
	}
}

module.exports = {
	getExposedComp: getExposedComp,
}
