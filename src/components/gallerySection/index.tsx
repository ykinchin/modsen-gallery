import { GalleryItem } from '@components/galleryItem'
import { Loader } from '@components/loader'
import { SectionTitle } from '@components/sectionTitle'
import { LimitPerPage } from '@constants/limits'
import { getArtworks } from '@utils/api'
import useFetchData from 'src/hooks/useFetch'
import { GalleryGrid, GalleryWrapper, ItemWrapper } from './styled'

export const GallerySection = () => {
	const randomPage = Math.floor(Math.random() * 100) + 1

	const fetchRandomArtworks = () => getArtworks(randomPage, LimitPerPage.Large)

	const {
		data: artworks,
		isLoading,
		isError
	} = useFetchData(fetchRandomArtworks, [])

	if (isError) {
		return (
			<SectionTitle
				title='Something went wrong'
				subtitle='Try again later'
			/>
		)
	}

	return (
		<GalleryWrapper>
			<SectionTitle
				title='Here some more'
				subtitle='Other works for you'
			/>
			{isLoading ? (
				<Loader />
			) : (
				<GalleryGrid>
					{artworks &&
						artworks.map(({ id, ...rest }, index) => (
							<ItemWrapper key={id || index}>
								<GalleryItem artwork={{ id, ...rest }} />
							</ItemWrapper>
						))}
				</GalleryGrid>
			)}
		</GalleryWrapper>
	)
}
