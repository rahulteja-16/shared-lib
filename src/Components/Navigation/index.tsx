import { Link } from 'react-router-dom'
import { HeaderType, RouteItemType } from '../../Types/navTypes'
import { HeaderLogo, HeaderWrapper, Nav, NavWrapper } from './styles'
import Logo from '../../Assets/Logo.png'

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
		</HeaderWrapper>
	)
}

export default Navigation
