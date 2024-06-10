import { useEffect, useState } from 'react'

const getFavorites = (): number[] => {
	const favoritesString = localStorage.getItem('favorites')
	return favoritesString ? JSON.parse(favoritesString) : []
}

const saveToFavorite = (favorites: number[]) => {
	localStorage.setItem('favorites', JSON.stringify(favorites))
}

export const useFavorite = (id: number) => {
	const [isFavorite, setIsFavorite] = useState(false)

	useEffect(() => {
		const favorites = getFavorites()
		setIsFavorite(favorites.includes(id))
	}, [id])

	const toggleFavorite = () => {
		const favorites = getFavorites()
		const index = favorites.indexOf(id)

		if (index !== -1) {
			favorites.splice(index, 1)
		} else {
			favorites.push(id)
		}

		saveToFavorite(favorites)
		setIsFavorite(favorites.includes(id))
	}

	return { isFavorite, toggleFavorite }
}
