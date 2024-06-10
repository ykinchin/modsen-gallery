import { Field } from 'formik'
import styled from 'styled-components'

const InputWrapper = styled.div`
	display: flex;
`

const StyledField = styled(Field)`
	border-radius: 16px 0 0 16px;
	background: rgba(57, 57, 57, 0.05);
	border: none;
`

const SearchButton = styled.button`
	border: none;
	background: rgba(57, 57, 57, 0.05);
	border-radius: 0 16px 16px 0;
	cursor: pointer;
	padding: 16px;
`

export { InputWrapper, SearchButton, StyledField }
