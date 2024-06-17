import { Loader } from '@components/loader'
import { PATHS } from '@constants/routes'
import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const AppLayout = lazy(() => import('@components/appLayout'))
const HomePage = lazy(() => import('@pages/homePage'))
const FavoritesPage = lazy(() => import('@pages/favoritesPage'))
const ArtworkPage = lazy(() => import('@pages/artworkPage'))
const ResultsPage = lazy(() => import('@pages/resultsPage'))

export const AppRouter = () => {
	return (
		<Routes>
			<Route
				path={PATHS.main}
				element={
					<Suspense fallback={<Loader />}>
						<AppLayout />
					</Suspense>
				}
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
