import { AddButton } from '@components/addButton'
import { AppLogo } from '@components/appLogo'
import { Loader } from '@components/loader'
import { SectionTitle } from '@components/sectionTitle'
import { Artwork } from '@sharedTypes/apiTypes'
import { getDetailedArtwork } from '@utils/api'
import { getImageUrl } from '@utils/imageUtils'
import { useMemo } from 'react'
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
	LogoWrapper,
	RowWrapper,
	YearTitle
} from './styled'

const ArtworkPage = () => {
	const { id } = useParams<{ id: string }>()
	const { checkIsFavorite, toggleFavorite } = useFavoritesContext()

	const fetchArtwork = () => getDetailedArtwork(Number(id))

	const {
		data: artwork,
		isLoading,
		isError
	} = useFetchData<Artwork>(fetchArtwork, [id])

	const imageUrl = useMemo(
		() => artwork?.image_id && getImageUrl(artwork.image_id),
		[artwork]
	)

	if (isLoading) return <Loader />

	if (isError || !artwork) {
		return (
			<SectionTitle
				title='Artwork is not available right now'
				subtitle='Browse more Artworks'
			/>
		)
	}

	const {
		id: artworkId,
		title,
		artist_title,
		date_start,
		date_end,
		credit_line,
		dimensions,
		description,
		place_of_origin
	} = artwork

	return (
		<ArtworkSection>
			<ImageWrapper>
				{imageUrl ? (
					<ArtworkImg url={imageUrl} />
				) : (
					<LogoWrapper>
						<AppLogo />
					</LogoWrapper>
				)}
				<ButtonWrapper>
					<AddButton
						isFavorite={checkIsFavorite(artworkId)}
						onClick={() => toggleFavorite(artworkId)}
					/>
				</ButtonWrapper>
			</ImageWrapper>
			<ContentWrapper>
				<BlockWrapper>
					<BlockTitle>{title || 'Unknown title'}</BlockTitle>
					<AuthorTitle>{artist_title || 'Unknown author'}</AuthorTitle>
					<YearTitle>
						{date_start || 'Unknown'}-{date_end || 'Unknown'}
					</YearTitle>
				</BlockWrapper>

				<BlockWrapper>
					<BlockTitle>Overview</BlockTitle>
					<RowWrapper>
						<span>Credits:</span>
						{credit_line || 'Unknown'}
					</RowWrapper>
					<RowWrapper>
						<span>Dimensions:Sheet:</span>
						{dimensions || 'Unknown'}
					</RowWrapper>
					<RowWrapper>
						<span>Description:</span>
						{description || 'Unknown'}
					</RowWrapper>
					<RowWrapper>
						<span>Place of origin:</span>
						{place_of_origin || 'Unknown'}
					</RowWrapper>
				</BlockWrapper>
			</ContentWrapper>
		</ArtworkSection>
	)
}

export default ArtworkPage
