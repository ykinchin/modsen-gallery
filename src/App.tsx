import { AppErrorBoundary } from '@components/errorBoundary'
import { GlobalStyles } from '@styles/global'
import { AppRouter } from './router'

export function App() {
	return (
		<AppErrorBoundary>
			<AppRouter />
			<GlobalStyles />
		</AppErrorBoundary>
	)
}
