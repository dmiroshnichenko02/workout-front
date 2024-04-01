import React from 'react'

import './assets/styles/index.scss'
import AuthProvider from './providers/AuthProvider'
import Router from './routes/Routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<Router />
			</QueryClientProvider>
		</AuthProvider>
	</React.StrictMode>
)
