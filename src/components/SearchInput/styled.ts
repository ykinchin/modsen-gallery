import { baseTheme } from '@styles/theme'
import { Field } from 'formik'
import { styled } from 'styled-components'

const InputWrapper = styled.div`
	display: flex;
`

const StyledField = styled(Field)`
	border-radius: 16px 0 0 16px;
	background: ${baseTheme.colors.inputBackground};
	border: none;
`

const SearchButton = styled.button`
	border: none;
	background: ${baseTheme.colors.inputBackground};
	border-radius: 0 16px 16px 0;
	cursor: pointer;
	padding: ${baseTheme.padding.default};
`

export { InputWrapper, SearchButton, StyledField }
