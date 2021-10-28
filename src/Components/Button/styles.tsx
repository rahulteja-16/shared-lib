import styled from 'styled-components'

export const ButtonWrapper = styled.button`
	font-size: var(--fs-sm, 16px);
	font-weight: var(--fw-md, 500);
	font-family: var(--font);
	background-color: var(--btn-bg-color, #0284ff);
	border: 1px solid var(--btn-bg-color, #0284ff);
	border-radius: var(--border-radius, 8px);
	color: var(--btn-text-color);

	// &:hover {
	// 	background-color: var(--btn-bg-hover-color, #349dff);
	// 	box-shadow: 0px 0px 6px 1px var(--btn-bg-hover-color, #349dff);
	// }
`
