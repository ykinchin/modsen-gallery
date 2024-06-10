import { baseTheme } from '@styles/theme'
import { styled } from 'styled-components'

type Props = {
	isFavorite: boolean
}

const Button = styled.button<Props>`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 500%;
	height: 59px;
	width: 59px;
	cursor: pointer;
	border: none;
	background-color: ${({ isFavorite }) =>
		isFavorite ? 'rgba(251, 215, 178, 0.3)' : baseTheme.colors.grey};

	&:hover {
		transition: 0.3s ease-in-out;
		background-color: rgba(251, 215, 178, 0.3);
	}
`

export { Button }
