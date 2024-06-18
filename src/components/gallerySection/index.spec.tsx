import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import useFetchData from 'src/hooks/useFetch'
import { GallerySection } from '.'

jest.mock('@utils/api')
jest.mock('src/hooks/useFetch')

describe('GallerySection', () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	it('Render loader', () => {
		;(useFetchData as jest.Mock).mockReturnValue({
			data: [],
			isLoading: true,
			isError: false
		})

		render(
			<MemoryRouter>
				<GallerySection />
			</MemoryRouter>
		)

		expect(screen.getByTestId('loader')).toBeInTheDocument()
	})

	it('Render error', () => {
		;(useFetchData as jest.Mock).mockReturnValue({
			data: [],
			isLoading: false,
			isError: true
		})

		render(
			<MemoryRouter>
				<GallerySection />
			</MemoryRouter>
		)

		expect(screen.getByText('Something went wrong')).toBeInTheDocument()
		expect(screen.getByText('Try again later')).toBeInTheDocument()
	})

	it('Render artworks when data is fetched', () => {
		const mockArtworks = [
			{
				id: 1,
				title: 'Artwork 1',
				artist_title: 'Artist 1',
				date_end: 2222,
				image_id: 'image1'
			},
			{
				id: 2,
				title: 'Artwork 2',
				artist_title: 'Artist 2',
				date_end: 2221,
				image_id: 'image2'
			}
		]

		;(useFetchData as jest.Mock).mockReturnValue({
			data: mockArtworks,
			isLoading: false,
			isError: false
		})

		render(
			<MemoryRouter>
				<GallerySection />
			</MemoryRouter>
		)

		expect(screen.getByText('Here some more')).toBeInTheDocument()
		expect(screen.getByText('Other works for you')).toBeInTheDocument()

		mockArtworks.forEach(artwork => {
			expect(screen.getByText(artwork.title)).toBeInTheDocument()
			expect(screen.getByText(artwork.artist_title)).toBeInTheDocument()
		})
	})
})
