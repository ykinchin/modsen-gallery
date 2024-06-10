import AddButton from '@components/AddButton'
import ErrorLogo from '@components/ErrorLogo'
import { Artwork } from '@sharedTypes/apiTypes'
import { getImageUrl } from '@utils/imageUtils'
import { toggleFavorite } from '@utils/toggleFavorite'
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
				<AddButton onClick={() => toggleFavorite(artwork.id)} />
			</FlexContainer>
		</>
	)
}

export default CarouselItem
