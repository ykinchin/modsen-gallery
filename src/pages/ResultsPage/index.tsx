import Loader from '@components/Loader'
import SectionTitle from '@components/SectionTitle'
import { SearchItem } from '@sharedTypes/apiTypes'
import { getArtworksByQuery } from '@utils/api'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ResultWrapper } from './styled'

const ResultsPage = () => {
	const [result, setResult] = useState<SearchItem[] | null>(null)
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
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
				<section>
					<ResultWrapper>
						{result.map(item => (
							<li
								key={item.id}
								onClick={() => navigate(`/artwork/${item.id}`)}
							>
								{item.title}
								<span>{item.artist_display}</span>
							</li>
						))}
					</ResultWrapper>
				</section>
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
