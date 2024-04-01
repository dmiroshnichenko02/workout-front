/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth.js'

import NotFound from '../components/screens/not-found/NotFound.jsx'

import { routes } from './routes.data'

const Router = () => {
	const { setIsAuth, isAuth } = useAuth()

	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					if (route.isAuth && !isAuth) {
						return false
					}
					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					)
				})}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
