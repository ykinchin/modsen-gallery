import SearchInput from '@components/SearchInput'
import { initialValue, searchValidationSchema } from '@utils/searchValidation'
import { Form, Formik } from 'formik'

const SearchForm = () => {
	return (
		<Formik
			initialValues={initialValue}
			validationSchema={searchValidationSchema}
			onSubmit={values => {
				console.log(values)
			}}
		>
			<Form>
				<SearchInput
					name='search'
					id='search'
					placeholder='Search Art, Artist, Work...'
				/>
			</Form>
		</Formik>
	)
}

export default SearchForm
