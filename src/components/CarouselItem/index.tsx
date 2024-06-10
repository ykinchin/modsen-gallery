import AddButton from '@components/AddButton'
import ErrorLogo from '@components/ErrorLogo'
import { Artwork } from '@sharedTypes/apiTypes'
import { getImageUrl } from '@utils/imageUtils'
import { useFavorites } from 'src/context/FavoritesContext'
import {
	Author,
	Background,
	ContentContainer,
	Description,
	ErrorContainter,
	FlexContainer,
	Title,
	TitleWrapper
} from './styled'

type Props = {
	artwork: Artwork
}

const CarouselItem = ({ artwork }: Props) => {
	const imageUrl = getImageUrl(artwork.image_id)
	const { checkIsFavorite, toggleFavorite } = useFavorites()

	const handleClick = (
		id: number,
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.stopPropagation()
		toggleFavorite(id)
	}

	return (
		<>
			{imageUrl ? (
				<Background url={imageUrl} />
			) : (
				<ErrorContainter>
					<ErrorLogo />
				</ErrorContainter>
			)}
			<FlexContainer>
				<ContentContainer>
					<TitleWrapper>
						<Title>{artwork.title || 'Unknown title'}</Title>
						<Author>{artwork.artist_title || 'Unknown author'}</Author>
					</TitleWrapper>
					<Description>{artwork.date_end}</Description>
				</ContentContainer>
				<AddButton
					isFavorite={checkIsFavorite(artwork.id)}
					onClick={event => handleClick(artwork.id, event)}
				/>
			</FlexContainer>
		</>
	)
}

export default CarouselItem