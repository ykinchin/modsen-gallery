import { SearchInput } from '@components/searchInput'
import { SearchResults } from '@components/searchResults'
import { SectionTitle } from '@components/sectionTitle'
import { getArtworksByQuery } from '@utils/api'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDebounce } from 'src/hooks/useDebounce'
import useFetchData from 'src/hooks/useFetch'
import { FormWrapper } from './styled'

export const SearchForm = () => {
	const [searchValue, setSearchValue] = useState<string>('')
	const debouncedSearch = useDebounce(searchValue, 300)
	const [isResultOpened, setIsResultOpened] = useState(false)
	const navigate = useNavigate()

	const fetchArtworksByQuery = () => getArtworksByQuery(debouncedSearch ?? '')

	const {
		data: searchResults,
		isLoading,
		isError
	} = useFetchData(fetchArtworksByQuery, [debouncedSearch])

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
				initialValues={{ search: '' }}
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
				<SearchResults
					isLoading={isLoading}
					result={searchResults.slice(0, 5)}
				/>
			)}
		</FormWrapper>
	)
}
