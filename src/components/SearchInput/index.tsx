import { ErrorMessage } from 'formik'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { InputWrapper, SearchButton, StyledField } from './styled'

type Props = {
	id: string
	name: string
	placeholder: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	value: string
}

const SearchInput = ({ value, id, name, placeholder, onChange }: Props) => {
	return (
		<div>
			<InputWrapper>
				<StyledField
					name={name}
					id={id}
					placeholder={placeholder}
					onChange={onChange}
					value={value}
				/>
				<SearchButton type='submit'>
					<CiSearch size={18} />
				</SearchButton>
			</InputWrapper>
			<ErrorMessage name={name}>{error => <span>{error}</span>}</ErrorMessage>
		</div>
	)
}

export default SearchInput
