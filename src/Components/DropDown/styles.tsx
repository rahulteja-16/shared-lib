import styled from 'styled-components'

export const LabelWrapper = styled.label`
	color: var(--text-100);
	font-size: var(--fs-sm);
	font-weight: var(--fw-md);
	text-transform: capitalize;
	font-family: var(--font);
	letter-spacing: 0.5px;
`

export const SelectWrapper = styled.select`
	font-size: var(--fs-md);
	border: none;
	border-bottom: 1px solid var(--blue-40);
	padding-bottom: 5px;
	padding-top: 5px;
	background-color: var(--bg-blue);
	color: var(--text-200);
	&:focus {
		outline: thin dotted;
		color: var(--blue-20);
	}
`
