import { Link } from 'react-router-dom'
import { HeaderType, RouteItemType } from '../../Types/navTypes'
import { HeaderLogo, HeaderWrapper, Nav, NavWrapper, SwitchDiv } from './styles'
import Logo from '../../Assets/Logo.png'
import ToggleTheme from '../ToggleTheme'
import styled from 'styled-components'

const StyledLink = styled(Link)`
	text-decoration: none;
	font-size: 20px;
	letter-spacing: 0.4px;
	text-transform: capitalize;
	color: var(--blue-base);
`

const Navigation = ({ routes }: HeaderType) => {
	return (
		<HeaderWrapper>
			<HeaderLogo src={Logo} alt="Logo" />
			<Nav>
				{routes.map((item: RouteItemType, index) => {
					return (
						<NavWrapper key={index}>
							<StyledLink to={item.path}>{item.name}</StyledLink>
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
