import { Link } from 'react-router-dom'
import { HeaderType, RouteItemType } from '../../Types/navTypes'
import { HeaderLogo, HeaderWrapper, Nav, NavWrapper, SwitchDiv } from './styles'
import Logo from '../../Assets/Logo.png'
import ToggleTheme from '../ToggleTheme'

const Navigation = ({ routes }: HeaderType) => {
	return (
		<HeaderWrapper>
			<HeaderLogo src={Logo} alt="Logo" />
			<Nav>
				{routes.map((item: RouteItemType, index) => {
					return (
						<NavWrapper key={index}>
							<Link to={item.path} style={{ textDecoration: 'none' }}>
								{item.name}
							</Link>
						</NavWrapper>
					)
				})}
			</Nav>
			<SwitchDiv>
				<ToggleTheme />
			</SwitchDiv>
		</HeaderWrapper>
	)
}

export default Navigation
