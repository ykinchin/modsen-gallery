import { baseTheme } from '@styles/theme'
import { styled } from 'styled-components'

type Props = {
	$isFavorite: boolean
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
	background-color: ${({ $isFavorite }) =>
		$isFavorite ? baseTheme.colors.lessHiglight : baseTheme.colors.grey};

	&:hover {
		transition: 0.3s ease-in-out;
		background-color: ${baseTheme.colors.lessHiglight};
	}
`

export { Button }
