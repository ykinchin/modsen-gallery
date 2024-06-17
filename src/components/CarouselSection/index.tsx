import { AppIcon } from '@components/appIcon'
import { AppLogo } from '@components/appLogo'
import { CarouselItem } from '@components/carouselItem'
import { Loader } from '@components/loader'
import { SectionTitle } from '@components/sectionTitle'
import { LimitPerPage } from '@constants/limits'
import { Artwork } from '@sharedTypes/apiTypes'
import { getArtworks } from '@utils/api'
import { generatePages } from '@utils/pageUtils'
import { useEffect, useState } from 'react'
import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight
} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import {
	Arrow,
	CarouselContainer,
	CarouselWrapper,
	ErrorWrapper,
	ItemWrapper,
	Page,
	PaginationWrapper
} from './styled'

const SMALL_SCREEN_WIDTH = 1024

export const CarouselSection = () => {
	const navigate = useNavigate()
	const [artworks, setArtworks] = useState<Artwork[]>([])
	const [currentPage, setCurrentPage] = useState(1)
	const [totalPages, setTotalPages] = useState<number | null>(null)
	const [limit, setLimit] = useState(
		window.innerWidth < SMALL_SCREEN_WIDTH ? 1 : 3
	)
	const pagesToShow = generatePages(currentPage, totalPages)

	useEffect(() => {
		const handleResize = () => {
			setLimit(
				window.innerWidth < SMALL_SCREEN_WIDTH
					? LimitPerPage.Small
					: LimitPerPage.Medium
			)
		}

		window.addEventListener('resize', handleResize)

		handleResize()

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	useEffect(() => {
		const fetchArtworks = async (page: number, limit: number) => {
			setArtworks(Array(limit).fill({ isLoading: true, isError: false }))

			try {
				const response = await getArtworks(page, limit)
				const preparedArtworks = response.data.map(artwork => ({
					...artwork,
					isLoading: false,
					isError: false
				}))

				setArtworks(preparedArtworks)
				setTotalPages(response.pagination!.total_pages)
			} catch (error) {
				const errorArtworks = Array(limit).fill({
					isLoading: false,
					isError: true
				})
				setArtworks(errorArtworks)
			}
		}

		fetchArtworks(currentPage, limit)
	}, [currentPage, limit])

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
				{artworks.map(({ id, isLoading, isError, ...rest }, index) => (
					<ItemWrapper
						key={id || index}
						onClick={() => navigate(`/artwork/${id}`)}
					>
						{isLoading ? (
							<Loader />
						) : isError ? (
							<ErrorWrapper>
								<AppLogo isError />
								<p>Failed to load artwork</p>
							</ErrorWrapper>
						) : (
							<CarouselItem artwork={{ id, isLoading, isError, ...rest }} />
						)}
					</ItemWrapper>
				))}
			</CarouselContainer>

			<PaginationWrapper>
				{currentPage !== 1 && (
					<Arrow onClick={handlePrevPage}>
						<AppIcon
							Icon={MdOutlineKeyboardArrowLeft}
							color='black'
						/>
					</Arrow>
				)}
				{pagesToShow.map(page => (
					<Page
						key={page}
						$current={page === currentPage}
						onClick={() => handlePageClick(page)}
					>
						{page}
					</Page>
				))}
				<Arrow onClick={handleNextPage}>
					<AppIcon
						Icon={MdOutlineKeyboardArrowRight}
						color='black'
					/>
				</Arrow>
			</PaginationWrapper>
		</CarouselWrapper>
	)
}
