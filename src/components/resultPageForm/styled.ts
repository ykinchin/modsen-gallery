import { baseTheme } from '@styles/theme'
import { styled } from 'styled-components'

const FormWrapper = styled.div`
	width: ${baseTheme.width.full};
	display: 'flex';
	flex-direction: 'column';
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

export { FieldWrapper, FormWrapper, SearchButton }
