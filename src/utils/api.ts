import { ArtworksById, ArtworksResponse } from 'src/sharedTypes/apiTypes'
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

export const getArtworkById = async (ids: number[]): Promise<ArtworksById> => {
	const response = await axiosInstance.get<ArtworksById>(`/artworks`, {
		params: { ids }
	})
	return response.data
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
