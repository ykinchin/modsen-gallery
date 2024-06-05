import AppLayout from '@components/AppLayout/AppLayout'
import { PATHS } from '@constants/routes'
import FavoritesPage from '@pages/FavoritesPage/FavoritesPage'
import HomePage from '@pages/HomePage/HomePage'
import PicturePage from '@pages/PicturePage/PicturePage'
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
					element={<PicturePage />}
				/>
			</Route>
		</Routes>
	)
}

export default AppRouter
