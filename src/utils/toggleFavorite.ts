export const toggleFavorite = (id: number) => {
	const favoritesString = localStorage.getItem('favorites')
	const favorites: number[] = favoritesString ? JSON.parse(favoritesString) : []

	const index = favorites.indexOf(id)

	if (index !== -1) {
		favorites.splice(index, 1)
	} else {
		favorites.push(id)
	}

	localStorage.setItem('favorites', JSON.stringify(favorites))
}
