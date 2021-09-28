import styled from 'styled-components'

export const HeaderWrapper = styled.header`
	background-color: ${({ theme }) => theme.colors.primary};
	padding: ${({ theme }) => theme.paddings.md};
	color: ${({ theme }) => theme.colors.text};
	height: ${({ theme }) => theme.heights.lg};
	display: flex;
`

export const HeaderText = styled.h1`
	font-weight: ${({ theme }) => theme.fontWeight.md};
	text-transform: uppercase;
	font-size: ${({ theme }) => theme.fontSize.lg};
	max-width: 1680px;
	display: flex;
	justify-content: center;
	flex-flow: column;
`

export const Nav = styled.nav`
	margin-left: 2%;
	margin-right: 2%;
	display: flex;
`

export const NavWrapper = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	margin: 0% 10%;
	font-size: ${({ theme }) => theme.fontSize.md};
	text-transform: UPPERCASE;
`

export const Anchor = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.text};
`
