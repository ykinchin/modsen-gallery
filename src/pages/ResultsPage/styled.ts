import { baseTheme } from '@styles/theme'
import { styled } from 'styled-components'

type Props = {
	$active: boolean
}

const ResultPage = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${baseTheme.gap.m};
`

const FormWrapper = styled.div`
	width: ${baseTheme.width.full};
	display: 'flex';
	flex-direction: 'column';
`

const SortToggle = styled.div`
	display: flex;
	gap: ${baseTheme.gap.m};
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
	gap: ${baseTheme.gap.normal};

	li {
		padding: 16px 32px;
		display: flex;
		flex-direction: column;
		gap: ${baseTheme.gap.s};
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
		background: ${baseTheme.colors.inputBackground};
		border: none;
	}
`

const SearchButton = styled.button`
	border: none;
	background: ${baseTheme.colors.inputBackground};
	border-radius: 0 16px 16px 0;
	cursor: pointer;
	padding: ${baseTheme.padding.default};
`

export {
	FieldWrapper,
	FormWrapper,
	ResultPage,
	ResultWrapper,
	SearchButton,
	SortButton,
	SortToggle
}
