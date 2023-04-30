import React from 'react'
import { Route, Routes } from 'react-router'
import { Example } from './components/Example'
import './style.css'

const Lazy = React.lazy(() => import('./Lazy'))

export const App = () => {
	return (
		<Routes>
			<p>hello</p>
			<Route
				path='/'
				element={<Example />}
			/>
			<Route
				path='/'
				element={<Lazy />}
			/>
		</Routes>
	)
}
