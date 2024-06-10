import { baseTheme } from '@styles/theme'
import { styled } from 'styled-components'

const Button = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 500%;
	height: 59px;
	width: 59px;
	background-color: ${baseTheme.colors.grey};
	cursor: pointer;

	&:hover {
		transition: 0.3s ease-in-out;
		background-color: rgba(251, 215, 178, 0.3);
	}
`

export { Button }
