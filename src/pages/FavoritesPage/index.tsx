import { GalleryItem } from '@components/galleryItem'
import { Loader } from '@components/loader'
import { SectionTitle } from '@components/sectionTitle'
import { ArtworksById } from '@sharedTypes/apiTypes'
import { getArtworkById } from '@utils/api'
import { BiBookmark } from 'react-icons/bi'
import { useFavoritesContext } from 'src/context'
import useFetchData from 'src/hooks/useFetch'
import { FavoritePage, GridContainer, PageTitle } from './styled'

const FavoritesPage = () => {
	const { favorites } = useFavoritesContext()

	const fetchFavorites = () => getArtworkById(favorites)

	const {
		data: artwork,
		isLoading,
		isError
	} = useFetchData<ArtworksById>(fetchFavorites, [favorites])

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
						{artwork?.data.map(({ id, ...rest }) => (
							<GalleryItem
								key={id}
								artwork={{ id, ...rest }}
							/>
						))}
					</GridContainer>
				</div>
			)}
		</FavoritePage>
	)
}

export default FavoritesPage
