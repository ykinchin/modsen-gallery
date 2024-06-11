import GalleryItem from '@components/GalleryItem'
import Loader from '@components/Loader'
import SectionTitle from '@components/SectionTitle'
import { Artwork } from '@sharedTypes/apiTypes'
import { getArtworkById } from '@utils/api'
import { useEffect, useState } from 'react'
import { BiBookmark } from 'react-icons/bi'
import { useFavorites } from 'src/context/FavoritesContext'
import { FavoritePage, GridContainer, PageTitle } from './styled'

const FavoritesPage = () => {
	const [artwork, setArtworks] = useState<Artwork[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const { favorites } = useFavorites()

	useEffect(() => {
		const fetchArtworks = async () => {
			try {
				if (favorites.length > 0) {
					const response = await getArtworkById(favorites)
					setArtworks(response.data)
				} else {
					setArtworks([])
				}
			} catch (error) {
				setIsError(true)
			} finally {
				setIsLoading(false)
			}
		}
		fetchArtworks()
	}, [favorites])

	return (
		<FavoritePage>
			<PageTitle>
				Here Are Your
				<div>
					<BiBookmark />
					Favorites
				</div>
			</PageTitle>

			{isLoading && <Loader />}

			{isError && (
				<SectionTitle
					title='Something went wrong'
					subtitle='Try again later'
				/>
			)}

			{favorites.length === 0 && (
				<SectionTitle
					title='You have no saved artworks'
					subtitle='Browse more artworks'
				/>
			)}
			{!isLoading && !isError && favorites.length > 0 && (
				<div>
					<SectionTitle
						title='Saved by you'
						subtitle='Your favorites list'
					/>
					<GridContainer>
						{artwork.map(artwork => (
							<GalleryItem
								key={artwork.id}
								artwork={artwork}
							/>
						))}
					</GridContainer>
				</div>
			)}
		</FavoritePage>
	)
}

export default FavoritesPage
