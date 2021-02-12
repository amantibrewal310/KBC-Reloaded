import React, { useContext, useState } from 'react';
import { QuizContext } from '../helpers/Context';
import { Questions } from '../helpers/QuestionBank';
import Question from './Question';
import { CashSetData } from '../helpers/CashSetData';
import Lifeline from './Lifeline';

const Quiz = () => {
	const { gameState, setGameState } = useContext(QuizContext);
	const [curLevel, setCurLevel] = useState(0);
	const [ansStatus, setAnsStatus] = useState('notAnswered');

	const nextQuestionHandler = () => {
		if (curLevel === 15) {
			setGameState('endScreenWinner');
		} else {
			setCurLevel(curLevel + 1);
			setAnsStatus('notAnswered');
		}
	};

	return (
		<div className='Quiz'>
			<h1>Quiz</h1>
			<Question
				{...Questions[curLevel]}
				currentLevel={curLevel}
				questionStatus={setAnsStatus}
			/>
			<div className='msg'>
				{ansStatus === 'notCorrect' && <p>Sorry</p>}
				{ansStatus === 'correct' && (
					<p>
						Congratulations! You have won{' '}
						{CashSetData[curLevel].price}
					</p>
				)}
			</div>
			<Lifeline />

			{ansStatus === 'correct' && (
				<button onClick={nextQuestionHandler}>Next Question</button>
			)}
			<button
				onClick={() => {
					setGameState('endScreen');
				}}
			>
				QUIT
			</button>
		</div>
	);
};

export default Quiz;
