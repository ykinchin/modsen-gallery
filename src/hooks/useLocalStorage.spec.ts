import { act, renderHook } from '@testing-library/react'
import { useLocalStorage } from './useLocalStorage'

describe('useLocalStorage', () => {
	beforeEach(() => {
		localStorage.clear()
	})

	it('Get and remove value from localStorage', () => {
		const { result } = renderHook(() =>
			useLocalStorage('testKey', 'initialValue')
		)

		expect(result.current[0]).toBe('initialValue')

		act(() => {
			result.current[1]('newValue')
		})

		expect(result.current[0]).toBe('newValue')

		expect(localStorage.getItem('testKey')).toBe(JSON.stringify('newValue'))

		act(() => {
			localStorage.setItem('testKey', JSON.stringify('directChange'))
		})

		const { result: secondRender } = renderHook(() =>
			useLocalStorage('testKey', 'initialValue')
		)
		expect(secondRender.current[0]).toBe('directChange')
	})
})
