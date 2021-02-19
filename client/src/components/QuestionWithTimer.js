import React, { useEffect, useState } from 'react';
import './question.css';
let timer;

const QuestionWithTimer = (props) => {
	const {
		setQuestionStatus,
		question,
		timerLength,
		currentLevel,
		minScore,
		setScore,
		price,
	} = props;

	const [selectedOption, setSelectedOption] = useState(null);
	const [optionDisabled, setOptionDisabled] = useState(false);
	const [count, setCount] = useState(timerLength);

	const lockHandler = () => {
		setOptionDisabled(true);
		clearTimeout(timer);
		if (selectedOption === question.answer) {
			setQuestionStatus('correct');
			setScore(price);
		} else {
			setQuestionStatus('notCorrect');
			setScore(minScore);
		}
	};
	useEffect(() => {
		clearTimeout(timer);
		setOptionDisabled(false);
		setSelectedOption(null);
		setCount(timerLength);
	}, [currentLevel, timerLength]);

	useEffect(() => {
		clearTimeout(timer);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (count > 0) {
			timer = setTimeout(() => {
				setCount(count - 1);
			}, 1000);
		} else {
			clearTimeout(timer);
			setQuestionStatus('timesUp');
		}
	}, [count, setQuestionStatus]);
	return (
		<div className='question-container'>
			<div className='timer-container'>
				<h3>Timer: {count}</h3>
			</div>
			<div className='question-box'>{question.prompt}</div>
			<div className='options'>
				<button
					className={
						selectedOption === 'optionA' ? 'btn-active' : 'btn'
					}
					onClick={() => setSelectedOption('optionA')}
					disabled={optionDisabled || question.optionA === ''}
				>
					{question.optionA}
				</button>
				<button
					className={
						selectedOption === 'optionB' ? 'btn-active' : 'btn'
					}
					onClick={() => setSelectedOption('optionB')}
					disabled={optionDisabled || question.optionB === ''}
				>
					{question.optionB}
				</button>
				<button
					className={
						selectedOption === 'optionC' ? 'btn-active' : 'btn'
					}
					onClick={() => setSelectedOption('optionC')}
					disabled={optionDisabled || question.optionC === ''}
				>
					{question.optionC}
				</button>
				<button
					className={
						selectedOption === 'optionD' ? 'btn-active' : 'btn'
					}
					onClick={() => setSelectedOption('optionD')}
					disabled={optionDisabled || question.optionD === ''}
				>
					{question.optionD}
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
