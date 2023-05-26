import React from 'react'
import { Route, Routes } from 'react-router'
import { Counter } from './components/Counter'
import './style.css'

export const App = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Counter />}
			/>
		</Routes>
	)
}
