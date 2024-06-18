import { searchValidationSchema } from '@utils/searchValidation'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import { FieldWrapper, FormWrapper, SearchButton } from './styled'

type Props = {
	query: string | null
}

export const ResultPageForm = ({ query }: Props) => {
	const navigate = useNavigate()

	return (
		<FormWrapper>
			<Formik
				initialValues={{ search: query }}
				validationSchema={searchValidationSchema}
				onSubmit={values => navigate(`/results/search?query=${values.search}`)}
			>
				<Form>
					<FieldWrapper>
						<Field
							name='search'
							id='search'
							placeholder='Search Art, Artist, Work...'
						/>
						<SearchButton type='submit'>
							<CiSearch size={24} />
						</SearchButton>
					</FieldWrapper>
					<ErrorMessage name='search'>
						{error => <span>{error}</span>}
					</ErrorMessage>
				</Form>
			</Formik>
		</FormWrapper>
	)
}
