import CarouselItem from '@components/CarouselItem'
import ErrorLogo from '@components/ErrorLogo'
import Loader from '@components/Loader'
import SectionTitle from '@components/SectionTitle'
import { Artwork } from '@sharedTypes/apiTypes'
import { getArtworks } from '@utils/api'
import { generatePages } from '@utils/pageUtils'
import { useEffect, useState } from 'react'
import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight
} from 'react-icons/md'
import {
	CarouselContainer,
	CarouselWrapper,
	ErrorWrapper,
	ItemWrapper,
	LeftArrow,
	Page,
	PaginationWrapper,
	RightArrow
} from './styled'

const CarouselSection = () => {
	const [artworks, setArtworks] = useState<Artwork[]>([])
	const [currentPage, setCurrentPage] = useState(1)
	const [totalPages, setTotalPages] = useState<number | null>(null)
	const pagesToShow = generatePages(currentPage, totalPages)

	useEffect(() => {
		const fetchArtworks = async (page: number, limit: number) => {
			try {
				const response = await getArtworks(page, limit)
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

		setArtworks(Array(3).fill({ isLoading: true, isError: false }))

		fetchArtworks(currentPage, 3)
	}, [currentPage])

	const handleNextPage = () => {
		if (totalPages && currentPage < totalPages) {
			setCurrentPage(currentPage + 1)
		}
	}

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	const handlePageClick = (page: number) => {
		setCurrentPage(page)
	}

	return (
		<CarouselWrapper>
			<SectionTitle
				title='Topics for you'
				subtitle='Our special gallery'
			/>
			<CarouselContainer>
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
							<CarouselItem artwork={artwork} />
						)}
					</ItemWrapper>
				))}
			</CarouselContainer>
			<PaginationWrapper>
				{currentPage !== 1 && (
					<LeftArrow onClick={handlePrevPage}>
						<MdOutlineKeyboardArrowLeft size={24} />
					</LeftArrow>
				)}
				{pagesToShow.map(page => (
					<Page
						key={page}
						current={page === currentPage}
						onClick={() => handlePageClick(page)}
					>
						{page}
					</Page>
				))}
				<RightArrow onClick={handleNextPage}>
					<MdOutlineKeyboardArrowRight size={24} />
				</RightArrow>
			</PaginationWrapper>
		</CarouselWrapper>
	)
}

export default CarouselSection
