import { renderHook } from '@testing-library/react'
import { act } from 'react'
import { FavoritesProvider, useFavoritesContext } from '.'

jest.mock('src/hooks/useFavorites', () => ({
	useFavorites: () => ({
		favorites: [1, 2, 3],
		toggleFavorite: jest.fn(),
		checkIsFavorite: jest.fn()
	})
}))

describe('useFavoritesContext', () => {
	it('Return favorites list and functions from useFavorites', () => {
		const { result } = renderHook(() => useFavoritesContext(), {
			wrapper: FavoritesProvider
		})

		expect(result.current.favorites).toEqual([1, 2, 3])
		expect(typeof result.current.toggleFavorite).toBe('function')
		expect(typeof result.current.checkIsFavorite).toBe('function')
	})

	it('Call toggleFavorite function', () => {
		const { result } = renderHook(() => useFavoritesContext(), {
			wrapper: FavoritesProvider
		})

		act(() => {
			result.current.toggleFavorite(4)
		})

		expect(result.current.toggleFavorite).toHaveBeenCalledWith(4)
	})
})
