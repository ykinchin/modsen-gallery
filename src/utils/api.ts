import {
	ArtworksById,
	ArtworksResponse,
	SearchResult,
	SingleArtwork
} from 'src/sharedTypes/apiTypes'
import { axiosInstance } from './axiosConfing'

export const getArtworks = async (
	page: number,
	limit: number
): Promise<ArtworksResponse> => {
	const response = await axiosInstance.get<ArtworksResponse>('/artworks', {
		params: { page, limit }
	})
	return response.data
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
	id: number | string
): Promise<SingleArtwork> => {
	const response = await axiosInstance.get<SingleArtwork>(`/artworks/${id}`)
	return response.data
}

export const getArtworksByQuery = async (
	query: string
): Promise<SearchResult> => {
	const response = await axiosInstance.get<SearchResult>('/artworks/search', {
		params: {
			q: query,
			fields: 'id,title,artist_display,image_url'
		}
	})
	return response.data
}
