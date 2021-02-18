import React, { useState } from 'react';
import './question.css';
import Timer from './Timer';

const Question = (props) => {
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
	return (
		<div className='question-container'>
			{props.timerLength && (
				<Timer
					timerLength={props.timerLength}
					setQuestionStatus={props.setQuestionStatus}
				/>
			)}
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

export default Question;
