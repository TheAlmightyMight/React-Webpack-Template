import React from 'react'
import { Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

// TODO: mount with Redux provider

export const mountWithRouter = (children: React.ReactElement) => {
	return render(<BrowserRouter>{children}</BrowserRouter>)
}

export const mountWithRoutes = (children: React.ReactElement) => {
	return render(
		<BrowserRouter>
			<Routes>{children}</Routes>
		</BrowserRouter>,
	)
}
