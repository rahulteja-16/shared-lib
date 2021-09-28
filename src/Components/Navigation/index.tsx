import { Link } from 'react-router-dom'
import { HeaderText, HeaderWrapper, Nav, NavWrapper } from './styles'

export interface RouteItemType {
	path: string
	name: string
	component: React.FC
	exact: boolean
}

export interface HeaderType {
	title: string
	routes: RouteItemType[]
}

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
