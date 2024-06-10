import AddButton from '@components/AddButton'
import Loader from '@components/Loader'
import SectionTitle from '@components/SectionTitle'
import { Artwork } from '@sharedTypes/apiTypes'
import { getDetailedArtwork } from '@utils/api'
import { getImageUrl } from '@utils/imageUtils'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFavorites } from 'src/context/FavoritesContext'
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

const ArtworkPage = () => {
	const { id } = useParams<{ id: string }>()
	const [artwork, setArtwork] = useState<Artwork | null>(null)
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const { checkIsFavorite, toggleFavorite } = useFavorites()
	const imageUrl = artwork && getImageUrl(artwork.image_id)

	useEffect(() => {
		const fetchArtworks = async () => {
			setIsLoading(true)
			setIsError(false)
			try {
				if (!id) return
				const response = await getDetailedArtwork(+id)
				setArtwork(response.data)
			} catch (error) {
				setIsError(true)
			} finally {
				setIsLoading(false)
			}
		}
		fetchArtworks()
	}, [])

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

export default ArtworkPage
