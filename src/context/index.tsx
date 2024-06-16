import { ReactNode, createContext, useContext, useMemo } from 'react'
import { useFavorites } from 'src/hooks/useFavorites'

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
	const { favorites, toggleFavorite, checkIsFavorite } = useFavorites()

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

export const useFavoritesContext = () => useContext(FavoritesContext)
