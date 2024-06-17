import {
	ArtworksById,
	ArtworksResponse,
	SearchResult,
	SingleArtwork,
	SortOption
} from 'src/sharedTypes/apiTypes'
import { axiosInstance } from './axiosConfing'

export const getArtworks = async (
	page: number,
	limit: number
): Promise<ArtworksResponse> => {
	const { data } = await axiosInstance.get<ArtworksResponse>('/artworks', {
		params: { page, limit }
	})
	return data
}

export const getArtworkById = async (
	ids: number[]
): Promise<{ data: ArtworksById }> => {
	const response = await axiosInstance.get<ArtworksById>(`/artworks`, {
		params: { ids }
	})
	return response
}

export const getDetailedArtwork = async (
	id: number
): Promise<SingleArtwork> => {
	const { data } = await axiosInstance.get<SingleArtwork>(`/artworks/${id}`)
	return data
}

export const getArtworksByQuery = async (
	query: string,
	sortBy?: SortOption
): Promise<SearchResult> => {
	const { data } = await axiosInstance.get<SearchResult>('/artworks/search', {
		params: {
			q: query,
			fields: 'id,title,artist_display,image_url',
			multi_match: {
				query,
				fields: ['artist_display', 'title']
			},
			sort: sortBy
		}
	})
	return data
}
