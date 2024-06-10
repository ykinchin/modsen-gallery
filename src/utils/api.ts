import {
	Artwork,
	ArtworkById,
	ArtworksResponse
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

export const getArtworkById = async (id: string): Promise<Artwork> => {
	const response = await axiosInstance.get<ArtworkById>(`/artworks/${id}`)
	return response.data.data
}

export const getArtworksByQuery = async (
	query: string
): Promise<ArtworksResponse> => {
	const response = await axiosInstance.get<ArtworksResponse>(
		'/artworks/search',
		{
			params: { q: query }
		}
	)
	return response.data
}
