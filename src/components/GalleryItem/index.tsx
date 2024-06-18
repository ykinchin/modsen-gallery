import { AddButton } from '@components/addButton'
import { AppLogo } from '@components/appLogo'
import { Artwork } from '@sharedTypes/apiTypes'
import { getImageUrl } from '@utils/imageUtils'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFavoritesContext } from 'src/context'
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

export const GalleryItem = ({ artwork }: Props) => {
	const { id, title, artist_title, artist_display, date_end, image_id } =
		artwork

	const navigate = useNavigate()
	const imageUrl = useMemo(() => image_id && getImageUrl(image_id), [image_id])
	const [hovered, setHovered] = useState(false)

	const { checkIsFavorite, toggleFavorite } = useFavoritesContext()

	const handleMouseEnter = () => setHovered(true)
	const handleMouseLeave = () => setHovered(false)

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
			onClick={() => navigate(`/artwork/${id}`)}
		>
			<FlexContainer>
				<ImageContainer>
					{imageUrl ? (
						<>
							<Images
								src={imageUrl}
								alt={title || 'Artwork'}
								$hovered={hovered}
							/>
							<LogoContainer $hovered={hovered}>
								<AppLogo />
							</LogoContainer>
						</>
					) : (
						<AppLogo />
					)}
				</ImageContainer>

				<ContentContainer>
					<TitleWrapper>
						<Title>{title || 'Unknown title'}</Title>
						<Author>
							{artist_title || artist_display || 'Unknown author'}
						</Author>
					</TitleWrapper>
					<Description>{date_end}</Description>
				</ContentContainer>
			</FlexContainer>

			<AddButton
				isFavorite={checkIsFavorite(id)}
				onClick={event => handleClick(id, event)}
			/>
		</ItemWrapper>
	)
}
