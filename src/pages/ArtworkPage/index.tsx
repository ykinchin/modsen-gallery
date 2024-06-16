import { AddButton } from '@components/addButton'
import { Loader } from '@components/loader'
import { SectionTitle } from '@components/sectionTitle'
import { Artwork } from '@sharedTypes/apiTypes'
import { getDetailedArtwork } from '@utils/api'
import { getImageUrl } from '@utils/imageUtils'
import { useParams } from 'react-router-dom'
import { useFavoritesContext } from 'src/context'
import useFetchData from 'src/hooks/useFetch'
import {
	ArtworkImg,
	ArtworkSection,
	AuthorTitle,
	BlockTitle,
	BlockWrapper,
	ButtonWrapper,
	ContentWrapper,
	ImageWrapper,
	RowWrapper,
	YearTitle
} from './styled'

export const ArtworkPage = () => {
	const { id } = useParams<{ id: string }>()
	const { checkIsFavorite, toggleFavorite } = useFavoritesContext()

	const fetchArtwork = () => getDetailedArtwork(+id!)

	const {
		data: artwork,
		isLoading,
		isError
	} = useFetchData<Artwork>(fetchArtwork, [])

	const imageUrl = artwork && getImageUrl(artwork.image_id)

	if (isLoading) return <Loader />

	if (isError || !artwork)
		return (
			<SectionTitle
				title='Artwork is not availible right now'
				subtitle='Browse more Artworks'
			/>
		)

	return (
		<ArtworkSection>
			<ImageWrapper>
				<ArtworkImg url={imageUrl} />
				<ButtonWrapper>
					<AddButton
						isFavorite={checkIsFavorite(artwork.id)}
						onClick={() => toggleFavorite(artwork.id)}
					/>
				</ButtonWrapper>
			</ImageWrapper>
			<ContentWrapper>
				<BlockWrapper>
					<BlockTitle>{artwork?.title || 'Unknown title'}</BlockTitle>
					<AuthorTitle>{artwork?.artist_title || 'Unknown author'}</AuthorTitle>
					<YearTitle>
						{artwork?.date_start || 'Unknown'}-{artwork?.date_end || 'Unknown'}
					</YearTitle>
				</BlockWrapper>

				<BlockWrapper>
					<BlockTitle>Overview</BlockTitle>
					<RowWrapper>
						<span>Credits:</span>
						{artwork?.credit_line || 'Unknown'}
					</RowWrapper>
					<RowWrapper>
						<span>Dimensions:Sheet:</span>
						{artwork?.dimensions || 'Unknown'}
					</RowWrapper>
					<RowWrapper>
						<span>Description:</span>
						{artwork?.description || 'Unknown'}
					</RowWrapper>
					<RowWrapper>
						<span>Place of origin:</span>
						{artwork?.place_of_origin || 'Unknown'}
					</RowWrapper>
				</BlockWrapper>
			</ContentWrapper>
		</ArtworkSection>
	)
}
