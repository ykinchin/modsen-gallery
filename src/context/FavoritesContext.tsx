import { getFavorites, saveToFavorite } from '@utils/favoriteUtils'
import { ReactNode, createContext, useContext, useMemo, useState } from 'react'

type Props = {
	children: ReactNode
}

type ContextType = {
	favorites: number[]
	toggleFavorite: (id: number) => void
	checkIsFavorite: (id: number) => boolean
}

const FavoritesContext = createContext<ContextType>({
	favorites: [],
	toggleFavorite: () => {},
	checkIsFavorite: () => false
})

export const FavoritesProvider = ({ children }: Props) => {
	const [favorites, setFavorites] = useState<number[]>(getFavorites())

	const checkIsFavorite = (id: number) => favorites.includes(id)

	const toggleFavorite = (id: number) => {
		const newFavorites = favorites.includes(id)
			? favorites.filter(fav => fav !== id)
			: [...favorites, id]
		setFavorites(newFavorites)
		saveToFavorite(newFavorites)
	}

	const value = useMemo(
		() => ({
			favorites,
			toggleFavorite,
			checkIsFavorite
		}),
		[favorites, toggleFavorite, checkIsFavorite]
	)

	return (
		<FavoritesContext.Provider value={value}>
			{children}
		</FavoritesContext.Provider>
	)
}

export const useFavorites = () => useContext(FavoritesContext)
