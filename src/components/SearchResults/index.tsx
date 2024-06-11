import { SearchItem } from '@sharedTypes/apiTypes'
import { useNavigate } from 'react-router-dom'
import { ResultWrapper } from './styled'

type Props = {
	result: SearchItem[]
}

const SearchResults = ({ result }: Props) => {
	const navigate = useNavigate()

	return (
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
	)
}

export default SearchResults
