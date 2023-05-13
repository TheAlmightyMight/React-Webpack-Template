import React from 'react'
import { sum } from '../utils/sum'

export const Example: React.FC = () => {
	return <div className='class'>Example dummy {sum(2, 2)}</div>
}
