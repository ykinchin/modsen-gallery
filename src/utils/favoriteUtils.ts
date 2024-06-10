export const getFavorites = (): number[] => {
	const favoritesString = localStorage.getItem('favorites')
	return favoritesString ? JSON.parse(favoritesString) : []
}

export const saveToFavorite = (favorites: number[]) => {
	localStorage.setItem('favorites', JSON.stringify(favorites))
}
