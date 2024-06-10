import AddButton from '@components/AddButton'
import Logo from '@components/Logo'
import { Artwork } from '@sharedTypes/apiTypes'
import { getImageUrl } from '@utils/imageUtils'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
	const navigate = useNavigate()
	const imageUrl = getImageUrl(artwork.image_id)
	const [hovered, setHovered] = useState(false)

	const handleMouseEnter = () => setHovered(true)
	const handleMouseLeave = () => setHovered(false)

	const { checkIsFavorite, toggleFavorite } = useFavorites()

	const handleClick = (
		id: number,
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.stopPropagation()
		toggleFavorite(id)
	}

	return (
		<ItemWrapper
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={() => navigate(`/artwork/${artwork.id}`)}
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
						<Author>
							{artwork.artist_title ||
								artwork.artist_display ||
								'Unknown author'}
						</Author>
					</TitleWrapper>
					<Description>{artwork.date_end}</Description>
				</ContentContainer>
			</FlexContainer>

			<AddButton
				isFavorite={checkIsFavorite(artwork.id)}
				onClick={event => handleClick(artwork.id, event)}
			/>
		</ItemWrapper>
	)
}

export default GalleryItem
