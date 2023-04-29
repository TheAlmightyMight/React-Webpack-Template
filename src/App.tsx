import React from 'react'
import { Route, Routes } from 'react-router'
import './style.css'

const Lazy = React.lazy(() => import('./Lazy'))

export const App = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<p>yayayayayayay</p>}
			/>
			<Route
				path='/'
				element={<Lazy />}
			/>
		</Routes>
	)
}
