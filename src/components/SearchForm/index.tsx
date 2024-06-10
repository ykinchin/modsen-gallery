import SearchInput from '@components/SearchInput'
import SearchResults from '@components/SearchResults'
import SectionTitle from '@components/SectionTitle'
import { SearchItem } from '@sharedTypes/apiTypes'
import { getArtworksByQuery } from '@utils/api'
import { initialValue, searchValidationSchema } from '@utils/searchValidation'
import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDebounce } from 'src/hooks/useDebounce'
import { FormWrapper } from './styled'

const SearchForm = () => {
	const [searchResults, setSearchResults] = useState<SearchItem[] | null>(null)
	const [searchValue, setSearchValue] = useState('')
	const [isError, setIsError] = useState(false)
	const debouncedSearch = useDebounce(searchValue, 300)
	const [isResultOpened, setIsResultOpened] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		const handleSearch = async () => {
			if (debouncedSearch) {
				setIsResultOpened(true)
				try {
					const response = await getArtworksByQuery(debouncedSearch)
					setSearchResults(response.data)
				} catch (error) {
					setIsError(true)
				}
			} else {
				setIsResultOpened(false)
			}
		}

		handleSearch()
	}, [debouncedSearch])

	const handleInputBlur = () => {
		setTimeout(() => setIsResultOpened(false), 500)
	}

	const handleInputFocus = () => {
		setIsResultOpened(true)
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.currentTarget.value)
	}

	if (isError) {
		return (
			<SectionTitle
				title='Something went wrong'
				subtitle='Try again later'
			/>
		)
	}

	return (
		<FormWrapper
			onFocus={handleInputFocus}
			onBlur={handleInputBlur}
		>
			<Formik
				initialValues={initialValue}
				validationSchema={searchValidationSchema}
				onSubmit={() => navigate(`/results/search?query=${searchValue}`)}
			>
				<Form>
					<SearchInput
						value={searchValue}
						onChange={handleInputChange}
						name='search'
						id='search'
						placeholder='Search Art, Artist, Work...'
					/>
				</Form>
			</Formik>
			{isResultOpened && searchResults && (
				<SearchResults result={searchResults.slice(0, 5)} />
			)}
		</FormWrapper>
	)
}

export default SearchForm
