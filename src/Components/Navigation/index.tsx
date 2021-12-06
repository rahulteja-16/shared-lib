import { Link } from 'react-router-dom'
import { HeaderType, RouteItemType } from '../../Types/navTypes'
import { HeaderLogo, HeaderWrapper, Nav, NavWrapper, SwitchDiv } from './styles'
import DarkLogo from '../../Assets/name-dark.png'
import LightLogo from '../../Assets/name-light.png'
import ToggleTheme from '../ToggleTheme'
import styled from 'styled-components'
import { useState } from 'react'

const StyledLink = styled(Link)`
	text-decoration: none;
	font-size: 20px;
	letter-spacing: 0.4px;
	text-transform: capitalize;
	color: var(--blue-base);
`

const Navigation = ({ routes }: HeaderType) => {
	const [currentTheme, setCurrentTheme] = useState('dark')

	const themeValue = (theme: string) => {
		setCurrentTheme(theme)
	}

	return (
		<HeaderWrapper>
			{currentTheme === 'dark' ? (
				<HeaderLogo src={LightLogo} alt="Logo Light" />
			) : (
				<HeaderLogo src={DarkLogo} alt="Logo Dark" />
			)}
			<Nav>
				{routes &&
					routes.map((item: RouteItemType, index) => {
						return (
							<NavWrapper key={index}>
								<StyledLink to={item.path}>{item.name}</StyledLink>
							</NavWrapper>
						)
					})}
			</Nav>
			<SwitchDiv>
				<ToggleTheme themeValue={themeValue} />
			</SwitchDiv>
		</HeaderWrapper>
	)
}

export default Navigation
