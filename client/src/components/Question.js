import React, { useEffect, useState } from 'react';
import './question.css';

const Question = (props) => {
	const {
		setQuestionStatus,
		questionStatus,
		question,
		currentLevel,
		setScore,
		minScore,
		price,
	} = props;
	const [selectedOption, setSelectedOption] = useState(null);
	const [optionDisabled, setOptionDisabled] = useState(false);

	useEffect(() => {
		setOptionDisabled(false);
		setSelectedOption(null);
	}, [currentLevel]);

	const lockHandler = () => {
		setOptionDisabled(true);
		if (selectedOption === question.answer) {
			setQuestionStatus('correct');
			setScore(price);
		} else {
			setQuestionStatus('notCorrect');
			setScore(minScore);
		}
	};
	return (
		<div className='question-container'>
			<div className='question-box'>{question.prompt}</div>
			<div className='options'>
				<button
					className={
						selectedOption === 'optionA' ? 'btn-active' : 'btn'
					}
					onClick={() => setSelectedOption('optionA')}
					disabled={optionDisabled}
				>
					{question.optionA}
				</button>
				<button
					className={
						selectedOption === 'optionB' ? 'btn-active' : 'btn'
					}
					onClick={() => setSelectedOption('optionB')}
					disabled={optionDisabled}
				>
					{question.optionB}
				</button>
				<button
					className={
						selectedOption === 'optionC' ? 'btn-active' : 'btn'
					}
					onClick={() => setSelectedOption('optionC')}
					disabled={optionDisabled}
				>
					{question.optionC}
				</button>
				<button
					className={
						selectedOption === 'optionD' ? 'btn-active' : 'btn'
					}
					onClick={() => setSelectedOption('optionD')}
					disabled={optionDisabled}
				>
					{question.optionD}
				</button>
			</div>
			{selectedOption && questionStatus === 'notAnswered' && (
				<button onClick={lockHandler} className='question-lock'>
					Lock
				</button>
			)}
		</div>
	);
};

export default Question;
