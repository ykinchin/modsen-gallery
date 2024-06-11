import Loader from '@components/Loader'
import SectionTitle from '@components/SectionTitle'
import { SearchItem } from '@sharedTypes/apiTypes'
import { getArtworksByQuery } from '@utils/api'
import { searchValidationSchema } from '@utils/searchValidation'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { useLocation, useNavigate } from 'react-router-dom'
import {
	FieldWrapper,
	ResultPage,
	ResultWrapper,
	SearchButton,
	SortButton,
	SortToggle
} from './styled'

const ResultsPage = () => {
	const [result, setResult] = useState<SearchItem[] | null>(null)
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const [sortBy, setSortBy] = useState<'artist_display' | 'title'>(
		'artist_display'
	)
	const navigate = useNavigate()

	const location = useLocation()
	const searchParams = new URLSearchParams(location.search)
	const query = searchParams.get('query')

	useEffect(() => {
		const fetchArtworksByQuery = async () => {
			if (query)
				try {
					const response = await getArtworksByQuery(query)
					setResult(response.data)
				} catch (error) {
					setIsError(true)
				} finally {
					setIsLoading(false)
				}
		}
		fetchArtworksByQuery()
	}, [query])

	const handleSort = (sortBy: 'artist_display' | 'title') => {
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

	const sortedResult = result?.sort((a, b) => {
		if (sortBy === 'artist_display') {
			return a.artist_display.localeCompare(b.artist_display)
		} else {
			return a.title.localeCompare(b.title)
		}
	})

	return (
		<>
			{sortedResult && sortedResult.length > 0 ? (
				<ResultPage>
					<div
						style={{
							width: '100%',
							display: 'flex',
							flexDirection: 'column'
						}}
					>
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
					</div>
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
						{sortedResult.map(item => (
							<li
								key={item.id}
								onClick={() => navigate(`/artwork/${item.id}`)}
							>
								{item.title}
								<span>{item.artist_display}</span>
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

export default ResultsPage
