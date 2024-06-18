import { renderHook } from '@testing-library/react'
import { act } from 'react'
import { useFavorites } from './useFavorites'

describe('useFavorites', () => {
	beforeEach(() => {
		localStorage.clear()
	})

	it('Add and remove favorites', () => {
		const { result } = renderHook(() => useFavorites())

		expect(result.current.favorites).toEqual([])
		expect(result.current.checkIsFavorite(1)).toBe(false)

		act(() => {
			result.current.toggleFavorite(1)
		})

		expect(result.current.favorites).toEqual([1])
		expect(result.current.checkIsFavorite(1)).toBe(true)

		act(() => {
			result.current.toggleFavorite(2)
		})

		expect(result.current.favorites).toEqual([1, 2])
		expect(result.current.checkIsFavorite(2)).toBe(true)

		act(() => {
			result.current.toggleFavorite(1)
		})

		expect(result.current.favorites).toEqual([2])
		expect(result.current.checkIsFavorite(1)).toBe(false)

		act(() => {
			result.current.toggleFavorite(2)
		})

		expect(result.current.favorites).toEqual([])
		expect(result.current.checkIsFavorite(2)).toBe(false)
	})
})
