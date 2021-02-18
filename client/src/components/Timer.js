import React, { useEffect, useState } from 'react';

const Timer = (props) => {
	// const { timerLength } = { ...props };
	const [count, setCount] = useState(props.timerLength);
	// const [timeLeft, setTimeLeft] = useState()
	useEffect(() => {
		if (count > 0) {
			setTimeout(() => {
				setCount(count - 1);
			}, 1000);
		} else {
			console.log('Times Ups!!');
			props.setQuestionStatus('timesUp');
		}
		return () => clearTimeout(count);
		// const timer =
	}, [count, props]);
	return (
		<div className='timer-container'>
			<h3>Timer: {count}</h3>
		</div>
	);
};

export default Timer;
