import { Loader } from '@components/loader'
import { SectionTitle } from '@components/sectionTitle'
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
	const [sortBy, setSortBy] = useState<'artist_display' | 'title'>(
		'artist_display'
	)
	const navigate = useNavigate()

	const location = useLocation()
	const searchParams = new URLSearchParams(location.search)
	const query = searchParams.get('query')

	const fetchArtworksByQuery = () => getArtworksByQuery(query || '')

	const {
		data: result,
		isLoading,
		isError
	} = useFetchData(fetchArtworksByQuery, [query])

	const handleSort = (sortBy: 'artist_display' | 'title') => {
		setSortBy(sortBy)
	}

	const sortedResult = result?.sort((a, b) => {
		if (sortBy === 'artist_display') {
			return a.artist_display.localeCompare(b.artist_display)
		} else {
			return a.title.localeCompare(b.title)
		}
	})

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
			{sortedResult && sortedResult.length > 0 ? (
				<ResultPage>
					<FormWrapper>
						<Formik
							initialValues={{ search: '' }}
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
							$active={sortBy === 'artist_display'}
							onClick={() => handleSort('artist_display')}
						>
							Sort by Artist
						</SortButton>
						<SortButton
							$active={sortBy === 'title'}
							onClick={() => handleSort('title')}
						>
							Sort by Title
						</SortButton>
					</SortToggle>
					<ResultWrapper>
						{sortedResult.map(({ id, title, artist_display }) => (
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
