import { baseTheme } from '@styles/theme'
import { styled } from 'styled-components'

type Props = {
	$active: boolean
}

const ResultPage = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`

const SortToggle = styled.div`
	display: flex;
	gap: 20px;
`

const SortButton = styled.button<Props>`
	cursor: pointer;
	padding: 6px 12px;
	border: none;
	font-weight: 600;
	background-color: ${({ $active }) => $active && baseTheme.colors.higlight};
	color: ${({ $active }) => $active && 'white'};
`

const ResultWrapper = styled.ul`
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
const FieldWrapper = styled.div`
	display: flex;

	input {
		border-radius: 16px 0 0 16px;
		background: rgba(57, 57, 57, 0.05);
		border: none;
	}
`

const SearchButton = styled.button`
	border: none;
	background: rgba(57, 57, 57, 0.05);
	border-radius: 0 16px 16px 0;
	cursor: pointer;
	padding: 16px;
`

export {
	FieldWrapper,
	ResultPage,
	ResultWrapper,
	SearchButton,
	SortButton,
	SortToggle
}
