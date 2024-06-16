import { baseTheme } from '@styles/theme'
import { styled } from 'styled-components'

const ResultWrapper = styled.ul`
	display: flex;
	flex-direction: column;
	gap: ${baseTheme.gap.xs};
	position: absolute;
	top: 50px;
	z-index: 20;
	background-color: ${baseTheme.colors.grey};

	li {
		display: flex;
		flex-direction: column;
		gap: ${baseTheme.gap.s};
		padding: 16px 24px;
		background-color: white;
		cursor: pointer;

		span {
			color: ${baseTheme.colors.higlight};
		}
	}
`

const NoResult = styled.div`
	background-color: white;
	padding: 12px 24px;
	font-size: ${baseTheme.fontSize.m};
`

export { NoResult, ResultWrapper }
