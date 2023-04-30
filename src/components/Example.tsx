import React from 'react'
import { sum } from '../utils/sum'

export const Example: React.FC = () => {
	return (
		<div className='class'>
			<span>blue span</span>example dummy {sum(2, 2)}
		</div>
	)
}
