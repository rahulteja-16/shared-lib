import styled from 'styled-components'

export const HeaderWrapper = styled.header`
	background-color: var(--bg-primary);
	height: var(--hg-xl);
	color: var(--text-100);
	display: flex;
	padding: 20px;
`

// padding: ${({ theme }) => theme.paddings.md};

export const HeaderLogo = styled.img`
	height: 65px;
	width: 300px;
	margin-top: -8px;
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

export const SwitchDiv = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 75%;
	--btn-bg-color: var(--blue-base);
`
