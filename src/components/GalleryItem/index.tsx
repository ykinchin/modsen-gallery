import AddButton from '@components/AddButton'
import Logo from '@components/Logo'
import { Artwork } from '@sharedTypes/apiTypes'
import { getImageUrl } from '@utils/imageUtils'
import { useState } from 'react'
import { useFavorites } from 'src/context/FavoritesContext'
import {
	Author,
	ContentContainer,
	Description,
	FlexContainer,
	ImageContainer,
	Images,
	ItemWrapper,
	LogoContainer,
	Title,
	TitleWrapper
} from './styled'

type Props = {
	artwork: Artwork
}

const GalleryItem = ({ artwork }: Props) => {
	const imageUrl = getImageUrl(artwork.image_id)
	const [hovered, setHovered] = useState(false)

	const handleMouseEnter = () => setHovered(true)
	const handleMouseLeave = () => setHovered(false)

	const { checkIsFavorite, toggleFavorite } = useFavorites()

	return (
		<ItemWrapper
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<FlexContainer>
				<ImageContainer>
					<Images
						src={imageUrl}
						alt={artwork.title || 'Artwork'}
						hovered={hovered}
					/>
					<LogoContainer hovered={hovered}>
						<Logo />
					</LogoContainer>
				</ImageContainer>
				<ContentContainer>
					<TitleWrapper>
						<Title>{artwork.title || 'Unknown title'}</Title>
						<Author>{artwork.artist_title || 'Unknown author'}</Author>
					</TitleWrapper>
					<Description>{artwork.date_end}</Description>
				</ContentContainer>
			</FlexContainer>

			<AddButton
				isFavorite={checkIsFavorite(artwork.id)}
				onClick={() => toggleFavorite(artwork.id)}
			/>
		</ItemWrapper>
	)
}

export default GalleryItem
