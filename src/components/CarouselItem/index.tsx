import { AddButton } from '@components/addButton'
import { AppLogo } from '@components/appLogo'
import { Artwork } from '@sharedTypes/apiTypes'
import { getImageUrl } from '@utils/imageUtils'
import React, { memo, useMemo } from 'react'
import { useFavoritesContext } from 'src/context'
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

export const CarouselItem = memo(({ artwork }: Props) => {
	const { id, title, artist_title, date_end, image_id } = useMemo(
		() => artwork,
		[]
	)

	const imageUrl = useMemo(() => getImageUrl(image_id), [image_id])
	const { checkIsFavorite, toggleFavorite } = useFavoritesContext()

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
					<AppLogo isError />
				</ErrorContainter>
			)}
			<FlexContainer>
				<ContentContainer>
					<TitleWrapper>
						<Title>{title || 'Unknown title'}</Title>
						<Author>{artist_title || 'Unknown author'}</Author>
					</TitleWrapper>
					<Description>{date_end}</Description>
				</ContentContainer>
				<AddButton
					isFavorite={checkIsFavorite(id)}
					onClick={event => handleClick(id, event)}
				/>
			</FlexContainer>
		</>
	)
})
