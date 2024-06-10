import * as Yup from 'yup'

export const initialValue = {
	search: ''
}

export const searchValidationSchema = Yup.object().shape({
	search: Yup.string().required('Search query is required')
})
