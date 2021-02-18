import React, { useState } from 'react';

const Lifeline = (props) => {
	console.log(props);
	const [lifeline1, setLifeline1] = useState(true);
	const [lifeline2, setLifeline2] = useState(true);

	const lifeline1Handler = () => {
		console.log(lifeline1);
		let ans = props.question.answer;
		let q = { ...props.question };

		let arr = [];

		for (let key of Object.keys(q)) {
			if (ans === key) continue;
			if (key === 'optionA') {
				arr.push('A');
			} else if (key === 'optionB') {
				arr.push('B');
			} else if (key === 'optionC') {
				arr.push('C');
			} else if (key === 'optionD') {
				arr.push('D');
			}
		}
		console.log(arr);
		let i = Math.floor(Math.random() * 3);
		q['option' + arr[i]] = '';
		arr.splice(i, 1);
		i = Math.floor(Math.random() * 2);
		q['option' + arr[i]] = '';

		props.setQuestion(q);
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
