import { useLocalStorage } from './useLocalStorage'

export function useFavorites() {
	const [favorites, setFavorites] = useLocalStorage<number[]>('favorites', [])

	const checkIsFavorite = (id: number) => favorites.includes(id)

	const toggleFavorite = (id: number) => {
		const newFavorites = favorites.includes(id)
			? favorites.filter(fav => fav !== id)
			: [...favorites, id]
		setFavorites(newFavorites)
	}

	return {
		favorites,
		checkIsFavorite,
		toggleFavorite
	}
}
