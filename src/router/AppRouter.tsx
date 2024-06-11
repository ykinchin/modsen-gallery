import AppLayout from '@components/AppLayout'
import { PATHS } from '@constants/routes'
import ArtworkPage from '@pages/ArtworkPage'
import FavoritesPage from '@pages/FavoritesPage'
import HomePage from '@pages/HomePage/HomePage'
import ResultsPage from '@pages/ResultsPage'
import { Route, Routes } from 'react-router-dom'

const AppRouter = () => {
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

export default AppRouter
