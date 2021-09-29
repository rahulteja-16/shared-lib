import { ButtonType } from '../../Types/buttonTypes'
import { ButtonWrapper } from './styles'

const Button = ({ children, onBtnClick }: ButtonType) => {
	return (
		<ButtonWrapper type="button" onClick={onBtnClick}>
			{children}
		</ButtonWrapper>
	)
}

export default Button
