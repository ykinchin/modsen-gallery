import { fireEvent, render } from '@testing-library/react'
import { CarouselItem } from '.'

const mockCheckIsFavorite = jest.fn().mockReturnValue(false)
const mockToggleFavorite = jest.fn()

jest.mock('src/context', () => ({
	useFavoritesContext: jest.fn(() => ({
		checkIsFavorite: mockCheckIsFavorite,
		toggleFavorite: mockToggleFavorite
	}))
}))

describe('CarouselItem', () => {
	const artworkMock = {
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

	it('renders CarouselItem with artwork details and AddButton', () => {
		const { getByText, getByRole } = render(
			<CarouselItem artwork={artworkMock} />
		)

		expect(getByText('Artwork Title')).toBeInTheDocument()
		expect(getByText('Artist Name')).toBeInTheDocument()
		expect(getByText(1234)).toBeInTheDocument()

		expect(mockCheckIsFavorite).toHaveBeenCalledWith(1)

		const addButton = getByRole('button')
		expect(addButton).toBeInTheDocument()

		fireEvent.click(addButton)

		expect(mockToggleFavorite).toHaveBeenCalledWith(1)
	})
})
