import { useEffect, useRef, useState } from 'react'

type FetchFunction<T> = () => Promise<{ data: T }>

const useFetchData = <T>(
	fetchFunction: FetchFunction<T>,
	dependencies: React.DependencyList = [],
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
	}, [...dependencies, cacheKey, fetchFunction])

	return { data, isLoading, isError }
}

export default useFetchData
