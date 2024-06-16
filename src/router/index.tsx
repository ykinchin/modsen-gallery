import { AppLayout } from '@components/appLayout'
import { PATHS } from '@constants/routes'
import { ArtworkPage } from '@pages/artworkPage'
import { FavoritesPage } from '@pages/favoritesPage'
import { HomePage } from '@pages/homePage'
import { ResultsPage } from '@pages/resultsPage'
import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
	return (
		<Routes>
			<Route
				path={PATHS.main}
				element={<AppLayout />}
			>
				<Route
					index
					element={<HomePage />}
				/>
				<Route
					path={PATHS.favorites}
					element={<FavoritesPage />}
				/>
				<Route
					path={PATHS.artwork}
					element={<ArtworkPage />}
				/>
				<Route
					path={PATHS.results}
					element={<ResultsPage />}
				/>
			</Route>
		</Routes>
	)
}
