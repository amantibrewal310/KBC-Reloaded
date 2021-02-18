import React, { useEffect, useState } from 'react';
import './question.css';

const QuestionWithTimer = (props) => {
	const [selectedOption, setSelectedOption] = useState();
	const [optionDisabled, setOptionDisabled] = useState(false);
	console.log(props);

	const lockHandler = () => {
		setOptionDisabled(true);

		if (selectedOption === props.answer) {
			props.setQuestionStatus('correct');
		} else {
			props.setQuestionStatus('notCorrect');
		}
	};
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
		// const timer =
	}, [count, props]);
	return (
		<div className='question-container'>
			<div className='timer-container'>
				<h3>Timer: {count}</h3>
			</div>
			<div className='question-box'>{props.prompt}</div>
			<div className='options'>
				<button
					onClick={() => setSelectedOption('optionA')}
					disabled={optionDisabled}
				>
					{props.optionA}
				</button>
				<button
					onClick={() => setSelectedOption('optionB')}
					disabled={optionDisabled}
				>
					{props.optionB}
				</button>
				<button
					onClick={() => setSelectedOption('optionC')}
					disabled={optionDisabled}
				>
					{props.optionC}
				</button>
				<button
					onClick={() => setSelectedOption('optionD')}
					disabled={optionDisabled}
				>
					{props.optionD}
				</button>
			</div>
			{selectedOption && props.questionStatus === 'notAnswered' && (
				<button onClick={lockHandler} className='question-lock'>
					Lock
				</button>
			)}
		</div>
	);
};

export default QuestionWithTimer;
