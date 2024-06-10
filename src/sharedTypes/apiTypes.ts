export type ArtworksResponse = {
	data: Artwork[]
	pagination?: Pagination
}

export type ArtworksById = {
	data: Artwork[]
}

export type SingleArtwork = {
	data: Artwork
}

export type Artwork = {
	id: number
	title: string
	theme_titles: string[]
	api_model: string
	artist_id: ArtistId
	artist_ids: ArtistId[]
	alt_titles: null | string
	api_link: string
	artist_title: ArtistTitle
	artist_titles: ArtistTitle[]
	artist_display: string
	category_titles: string[]
	description: null | string
	artwork_type_title: string
	fiscal_year: number
	classification_title: ClassificationTitle
	classification_titles: ClassificationTitle[]
	image_id: string
	place_of_origin: string
	date_end: number
	date_start: number
	isLoading: boolean
	isError: boolean
	dimensions: string
	credit_line: string
}

export type Pagination = {
	current_page: number
	limit: number
	next_url: string
	offset: number
	total: number
	total_pages: number | null
}

type ArtistId = number
type ArtistTitle = string

type ClassificationTitle = string
