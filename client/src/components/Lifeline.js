import React from 'react';
import { extraQuestion } from '../helpers/QuestionBank';
import './Lifeline.css';

const Lifeline = (props) => {
	const {
		question,
		setQuestion,
		fiftyFifty,
		setFiftyFifty,
		switchQues,
		setSwitchQues,
	} = props;

	const fiftyFiftyHandler = () => {
		let ans = question.answer;
		let q = { ...question };

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
		let i = Math.floor(Math.random() * 3);
		q['option' + arr[i]] = '';
		arr.splice(i, 1);
		i = Math.floor(Math.random() * 2);
		q['option' + arr[i]] = '';

		setQuestion(q);
		setFiftyFifty(false);
		// setLifeline1(false);
	};
	const switchQuesHandler = () => {
		let len = extraQuestion.length;
		let i = Math.floor(Math.random() * len);
		setQuestion(extraQuestion[i]);
		setSwitchQues(false);
	};

	return (
		<div className='lifeline-container'>
			<button disabled={!fiftyFifty} onClick={fiftyFiftyHandler}>
				50 50
			</button>
			<button disabled={!switchQues} onClick={switchQuesHandler}>
				Switch Question
			</button>
		</div>
	);
};

export default Lifeline;
