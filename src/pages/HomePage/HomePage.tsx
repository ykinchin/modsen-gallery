import SearchSection from '@components/SearchSection'
import { Artwork } from '@sharedTypes/apiTypes'
import { getArtworks } from '@utils/api'
import { useEffect, useState } from 'react'

const HomePage = () => {
	const [artworks, setArtworks] = useState<Artwork[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchArtworks = async () => {
			try {
				const response = await getArtworks()
				setArtworks(response.data)
			} catch (error) {
				setError('An error occurred while fetching artworks')
			} finally {
				setIsLoading(false)
			}
		}
		fetchArtworks()
	}, [])

	console.log(artworks, isLoading, error)
	return (
		<>
			<SearchSection />
		</>
	)
}

export default HomePage
