import { useEffect, useRef, useState } from 'react'

type FetchFunction<T> = () => Promise<{ data: T }>

const useFetchData = <T>(
	fetchFunction: FetchFunction<T>,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	dependencies: any[] = [],
	cacheKey?: string
) => {
	const [data, setData] = useState<T | null>(null)
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const cache = useRef<{ [key: string]: T }>({})

	useEffect(() => {
		const fetchData = async () => {
			setIsError(false)
			setIsLoading(true)

			if (cacheKey && cache.current[cacheKey]) {
				setData(cache.current[cacheKey])
				setIsLoading(false)
				return
			}

			try {
				const response = await fetchFunction()
				setData(response.data)

				if (cacheKey) {
					cache.current[cacheKey] = response.data
				}
			} catch (error) {
				setIsError(true)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, dependencies)

	return { data, isLoading, isError }
}

export default useFetchData
