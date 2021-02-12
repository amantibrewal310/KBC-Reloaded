import React, { useEffect, useState } from 'react';

const Timer = () => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		if (count < 5) {
			setCount(count + 1);
		}
	}, [count]);
	return (
		<div>
			<h1>Current Count: {count}</h1>
		</div>
	);
};

export default Timer;
