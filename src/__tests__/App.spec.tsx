import React from 'react'
import { mountWithRouter } from '../utils/mount'
import { screen } from '@testing-library/react'
import { App } from '../App'

describe('<App />', () => {
	it('renders the app', () => {
		mountWithRouter(<App />)
<<<<<<< HEAD
		expect(screen.getByText('Hello')).toBe('')
=======
		expect(screen.getByText('Hello')).toBeInTheDocument()
>>>>>>> d37f69287623d66fce191fe484368efd90e5c35e
	})
})
