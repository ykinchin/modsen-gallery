import { renderHook, waitFor } from '@testing-library/react'
import useFetchData, { FetchFunction } from './useFetch'

const fakeFetchFunction: FetchFunction<string> = async () => {
	return { data: 'test data' }
}

describe('useFetchData hook', () => {
	it('Fetch data successfully', async () => {
		const { result } = renderHook(() => useFetchData(fakeFetchFunction))

		expect(result.current.isLoading).toBe(true)
		expect(result.current.isError).toBe(false)
		expect(result.current.data).toBeNull()

		await waitFor(() => !result.current.isLoading)

		expect(result.current.isLoading).toBe(false)
		expect(result.current.isError).toBe(false)
		expect(result.current.data).toEqual('test data')
	})

	it('Fetch with error ', async () => {
		const errorFetchFunction: FetchFunction<string> = async () => {
			throw new Error('Fetch error')
		}

		const { result } = renderHook(() => useFetchData(errorFetchFunction))

		expect(result.current.isLoading).toBe(true)
		expect(result.current.isError).toBe(false)
		expect(result.current.data).toBeNull()

		await waitFor(() => !result.current.isLoading)

		expect(result.current.isLoading).toBe(false)
		expect(result.current.isError).toBe(true)
		expect(result.current.data).toBeNull()
	})

	it('Check if data is cached', async () => {
		const { result, rerender } = renderHook(() =>
			useFetchData(fakeFetchFunction, [], 'testCacheKey')
		)

		expect(result.current.isLoading).toBe(true)
		expect(result.current.isError).toBe(false)
		expect(result.current.data).toBeNull()

		await waitFor(() => !result.current.isLoading)

		expect(result.current.isLoading).toBe(false)
		expect(result.current.isError).toBe(false)
		expect(result.current.data).toEqual('test data')

		rerender()

		expect(result.current.isLoading).toBe(false)
		expect(result.current.isError).toBe(false)
		expect(result.current.data).toEqual('test data')
	})
})
