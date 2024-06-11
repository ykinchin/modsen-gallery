import ErrorLogo from '@components/ErrorLogo'
import GalleryItem from '@components/GalleryItem'
import Loader from '@components/Loader'
import SectionTitle from '@components/SectionTitle'
import { Artwork } from '@sharedTypes/apiTypes'
import { getArtworks } from '@utils/api'
import { useEffect, useState } from 'react'
import { ErrorWrapper, GalleryGrid, ItemWrapper } from './styled'

const GallerySection = () => {
	const [artworks, setArtworks] = useState<Artwork[]>([])
	const [totalPages, setTotalPages] = useState<number | null>(null)

	useEffect(() => {
		const fetchRandomArtworks = async (limit: number) => {
			try {
				const randomPage = Math.floor(Math.random() * (totalPages || 100)) + 1
				const response = await getArtworks(randomPage, limit)
				setArtworks(
					response.data.map(artwork => ({
						...artwork,
						isLoading: false,
						isError: false
					}))
				)
				setTotalPages(response.pagination!.total_pages)
			} catch (error) {
				setArtworks(prevArtworks =>
					prevArtworks.map(artwork => ({
						...artwork,
						isLoading: false,
						isError: true
					}))
				)
			}
		}

		setArtworks(Array(9).fill({ isLoading: true, isError: false }))
		fetchRandomArtworks(9)
	}, [])

	return (
		<section>
			<SectionTitle
				title='Here some more'
				subtitle='Other works for you'
			/>
			<GalleryGrid>
				{artworks.map((artwork, index) => (
					<ItemWrapper key={artwork.id || index}>
						{artwork.isLoading ? (
							<Loader />
						) : artwork.isError ? (
							<ErrorWrapper>
								<ErrorLogo />
								<p>Failed to load artwork</p>
							</ErrorWrapper>
						) : (
							<GalleryItem artwork={artwork} />
						)}
					</ItemWrapper>
				))}
			</GalleryGrid>
		</section>
	)
}

export default GallerySection
