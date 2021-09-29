import { DatePickerType } from '../../Types/datepickerTypes'
import { DatePickerWrapper } from './styles'

const DatePicker = ({ date, onUpdateDate }: DatePickerType) => {
	return (
		<DatePickerWrapper
			type="date"
			value={date}
			onChange={onUpdateDate}
			max={date}
			data-testid="date"
		/>
	)
}

export default DatePicker
