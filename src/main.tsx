import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { FavoritesProvider } from './context/FavoritesContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<FavoritesProvider>
				<App />
			</FavoritesProvider>
		</BrowserRouter>
	</React.StrictMode>
)
