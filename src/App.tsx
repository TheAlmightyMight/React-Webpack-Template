import React from 'react'
import { Route, Routes } from 'react-router'
import { Example } from './components/Example'
import './style.css'

const Lazy = React.lazy(() => import('./Lazy'))
const Lazy2 = React.lazy(() => import('./Lazy-2'))
export const App = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Example />}
			/>
			<Route
				path='/'
				element={<Lazy />}
			/>

			<Route
				path='/'
				element={<Lazy2 />}
			/>
		</Routes>
	)
}
