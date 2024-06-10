import AppLayout from '@components/AppLayout'
import { PATHS } from '@constants/routes'
import ArtworkPage from '@pages/ArtworkPage'
import FavoritesPage from '@pages/FavoritesPage'
import HomePage from '@pages/HomePage/HomePage'
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
					path={PATHS.picture}
					element={<ArtworkPage />}
				/>
			</Route>
		</Routes>
	)
}

export default AppRouter
