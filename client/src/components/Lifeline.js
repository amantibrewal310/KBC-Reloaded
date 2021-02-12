import React, { useState } from 'react';

const Lifeline = () => {
	const [lifeline1, setLifeline1] = useState(true);
	const [lifeline2, setLifeline2] = useState(true);

	const lifeline1Handler = () => {
		console.log(lifeline1);
		setLifeline1(false);
	};
	const lifeline2Handler = () => {
		console.log(lifeline2);
		setLifeline2(false);
	};

	return (
		<div>
			<button disabled={!lifeline1} onClick={lifeline1Handler}>
				50 50
			</button>
			<button disabled={!lifeline2} onClick={lifeline2Handler}>
				Switch Question
			</button>
		</div>
	);
};

export default Lifeline;
