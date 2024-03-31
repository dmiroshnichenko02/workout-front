import React from 'react'

import './assets/styles/index.scss'
import Router from './routes/Routes'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>
)
