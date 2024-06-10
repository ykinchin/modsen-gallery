import { ErrorMessage } from 'formik'
import { InputWrapper, SearchButton, StyledField } from './styled'

type Props = {
	id: string
	name: string
	placeholder: string
}

const SearchInput = ({ id, name, placeholder }: Props) => {
	return (
		<div>
			<InputWrapper>
				<StyledField
					name={name}
					id={id}
					placeholder={placeholder}
				/>
				<SearchButton type='submit'>Search</SearchButton>
			</InputWrapper>
			<ErrorMessage name={name}>{error => <span>{error}</span>}</ErrorMessage>
		</div>
	)
}

export default SearchInput
