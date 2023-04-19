import React, { useState } from 'react'

export const App = () => {
	const [count, setCount] = useState(0)
	return <h1 onClick={() => setCount(prev => prev + 1)}>Yay! {count}</h1>
}
