import * as Yup from 'yup'

export const initialValue = {
	search: ''
}

export const searchValidationSchema = Yup.object().shape({
	search: Yup.string().min(3, 'Search query must be at least 3 characters')
})
