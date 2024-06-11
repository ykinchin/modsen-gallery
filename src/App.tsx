import AppErrorBoundary from '@components/ErrorBoundary'
import { GlobalStyles } from '@styles/global'
import AppRouter from './router/AppRouter'

function App() {
	return (
		<AppErrorBoundary>
			<AppRouter />
			<GlobalStyles />
		</AppErrorBoundary>
	)
}

export default App
