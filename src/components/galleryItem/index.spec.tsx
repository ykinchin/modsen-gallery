import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { getImageUrl } from '@utils/imageUtils'
import { BrowserRouter } from 'react-router-dom'
import { useFavoritesContext } from 'src/context'
import { GalleryItem } from '.'

jest.mock('src/context', () => ({
	useFavoritesContext: jest.fn()
}))

jest.mock('@utils/imageUtils', () => ({
	getImageUrl: jest.fn()
}))

const artwork = {
	id: 1,
	title: 'Artwork Title',
	artist_title: 'Artist Name',
	date_end: 1234,
	image_id: 'image123',
	theme_titles: ['1', '2'],
	api_model: 'model',
	artist_id: 12,
	artist_ids: [1, 3, 45],
	alt_titles: null,
	api_link: 'link',
	artist_titles: ['ArtistTitle1', 'ArtistTitle2'],
	artist_display: 'display',
	category_titles: ['a', 'b'],
	description: 'descroption',
	artwork_type_title: 'artwork',
	fiscal_year: 1234,
	classification_title: 'classification',
	classification_titles: ['class1'],
	place_of_origin: 'NY',
	date_start: 1234,
	isLoading: false,
	isError: false,
	dimensions: 'string',
	credit_line: 'string'
}

describe('GalleryItem', () => {
	beforeEach(() => {
		;(useFavoritesContext as jest.Mock).mockReturnValue({
			checkIsFavorite: jest.fn().mockReturnValue(false),
			toggleFavorite: jest.fn()
		})
		;(getImageUrl as jest.Mock).mockReturnValue(
			'https://example.com/mona-lisa.jpg'
		)
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	it('Render GalleryItem', () => {
		render(
			<BrowserRouter>
				<GalleryItem artwork={artwork} />
			</BrowserRouter>
		)

		expect(screen.getByText('Artwork Title')).toBeInTheDocument()

		expect(screen.getByText('Artist Name')).toBeInTheDocument()

		expect(screen.getByText(1234)).toBeInTheDocument()

		const addButton = screen.getByRole('button')
		expect(addButton).toBeInTheDocument()
	})

	it('Call toggleFavorite', () => {
		render(
			<BrowserRouter>
				<GalleryItem artwork={artwork} />
			</BrowserRouter>
		)

		const addButton = screen.getByRole('button')
		fireEvent.click(addButton)

		expect(useFavoritesContext().toggleFavorite).toHaveBeenCalledWith(1)
	})
})
