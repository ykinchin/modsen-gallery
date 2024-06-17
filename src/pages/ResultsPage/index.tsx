import { Loader } from '@components/loader'
import { SectionTitle } from '@components/sectionTitle'
import { SortOption } from '@sharedTypes/apiTypes'
import { getArtworksByQuery } from '@utils/api'
import { searchValidationSchema } from '@utils/searchValidation'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { useLocation, useNavigate } from 'react-router-dom'
import useFetchData from 'src/hooks/useFetch'
import {
	FieldWrapper,
	FormWrapper,
	ResultPage,
	ResultWrapper,
	SearchButton,
	SortButton,
	SortToggle
} from './styled'

export const ResultsPage = () => {
	const [sortBy, setSortBy] = useState<SortOption>({})
	const navigate = useNavigate()

	const location = useLocation()
	const searchParams = new URLSearchParams(location.search)
	const query = searchParams.get('query')

	const fetchArtworksByQuery = () => getArtworksByQuery(query || '', sortBy)

	const {
		data: result,
		isLoading,
		isError
	} = useFetchData(fetchArtworksByQuery, [query, sortBy])

	const handleSort = (sortBy: SortOption) => {
		setSortBy(sortBy)
	}

	if (isLoading) {
		return <Loader />
	}

	if (isError && !result) {
		return (
			<SectionTitle
				title='Something went wrong'
				subtitle='Try again later'
			/>
		)
	}

	return (
		<>
			{result && result.length > 0 ? (
				<ResultPage>
					<FormWrapper>
						<Formik
							initialValues={{ search: query }}
							validationSchema={searchValidationSchema}
							onSubmit={values =>
								navigate(`/results/search?query=${values.search}`)
							}
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
					<SortToggle>
						<SortButton
							$active={Object.keys(sortBy).length === 0}
							onClick={() => handleSort({})}
						>
							Sort by Latest update
						</SortButton>
						<SortButton
							$active={'date_start' in sortBy}
							onClick={() => handleSort({ date_start: 'desc' })}
						>
							Sort by date
						</SortButton>
						<SortButton
							$active={'title.keyword' in sortBy}
							onClick={() => handleSort({ 'title.keyword': 'asc' })}
						>
							Sort by Title
						</SortButton>
					</SortToggle>
					<ResultWrapper>
						{result.map(({ id, title, artist_display }) => (
							<li
								key={id}
								onClick={() => navigate(`/artwork/${id}`)}
							>
								{title}
								<span>{artist_display}</span>
							</li>
						))}
					</ResultWrapper>
				</ResultPage>
			) : (
				<SectionTitle
					title='No results found'
					subtitle='Try a different search query'
				/>
			)}
		</>
	)
}
