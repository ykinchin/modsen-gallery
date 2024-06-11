import * as Yup from 'yup'

export const initialValue = {
	search: ''
}

export const searchValidationSchema = Yup.object().shape({
	search: Yup.string()
		.required('Required')
		.min(2, 'Search query must be at least 2 characters')
		.matches(/^[a-zA-Z\s]*$/, 'Only Latin characters are allowed')
})
