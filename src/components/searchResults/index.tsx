import { SearchItem } from '@sharedTypes/apiTypes'
import { useNavigate } from 'react-router-dom'
import { ResultWrapper } from './styled'

type Props = {
	result: SearchItem[]
	isLoading: boolean
}

export const SearchResults = ({ result, isLoading }: Props) => {
	const navigate = useNavigate()

	return (
		<ResultWrapper>
			{isLoading ? (
				<div>Looking for results...</div>
			) : (
				result.map(({ id, title, artist_display }) => (
					<li
						key={id}
						onClick={() => navigate(`/artwork/${id}`)}
					>
						{title || 'Unknown title'}
						<span>{artist_display || 'Unknown artist'}</span>
					</li>
				))
			)}
		</ResultWrapper>
	)
}
