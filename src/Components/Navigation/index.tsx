import { Link } from 'react-router-dom'
import { HeaderType, RouteItemType } from '../../Types/navTypes'
import { HeaderText, HeaderWrapper, Nav, NavWrapper } from './styles'

const Navigation = ({ title, routes }: HeaderType) => {
	return (
		<HeaderWrapper>
			<HeaderText>{title}</HeaderText>
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
