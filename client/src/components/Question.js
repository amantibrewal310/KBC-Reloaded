import React, { useState } from 'react';

const Question = (props) => {
	const [selectedOption, setSelectedOption] = useState();
	const [optionDisabled, setOptionDisabled] = useState(false);

	const lockHandler = () => {
		setOptionDisabled(true);

		if (selectedOption === props.answer) {
			props.questionStatus('correct');
		} else {
			props.questionStatus('notCorrect');
		}
	};
	return (
		<div>
			<p>{props.prompt}</p>
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
			{selectedOption && <button onClick={lockHandler}>Lock</button>}
		</div>
	);
};

export default Question;
