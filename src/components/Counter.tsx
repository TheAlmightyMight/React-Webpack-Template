import React, { useState } from 'react'

export const Counter: React.FC = () => {
	const [count, setCount] = useState(0)

	return (
		<div className='class'>
			<p onClick={() => setCount(prev => prev + 1)}>Count: {count}</p>
			Example component <span>Hello</span>
		</div>
	)
}
