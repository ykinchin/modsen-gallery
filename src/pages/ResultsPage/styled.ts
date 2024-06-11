import { baseTheme } from '@styles/theme'
import { styled } from 'styled-components'

export const ResultWrapper = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 16px;

	li {
		padding: 16px 32px;
		display: flex;
		flex-direction: column;
		gap: 8px;
		background-color: white;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
		cursor: pointer;

		span {
			color: ${baseTheme.colors.higlight};
		}
	}
`
