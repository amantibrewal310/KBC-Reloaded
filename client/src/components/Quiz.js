import React, { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../helpers/Context';
import { Questions } from '../helpers/QuestionBank';
import Question from './Question';
import { CashSetData } from '../helpers/CashSetData';
import Lifeline from './Lifeline';
import CashSet from './CashSet';
import './quiz.css';
import Timer from './Timer';
import QuestionWithTimer from './QuestionWithTimer';

const Quiz = () => {
	const { gameState, setGameState } = useContext(QuizContext);
	const [curLevel, setCurLevel] = useState(0);
	const [questionStatus, setQuestionStatus] = useState('notAnswered');
	const [question, setQuestion] = useState({});
	const [timerLength, setTimerLength] = useState(10);

	console.log(gameState);

	const nextQuestionHandler = () => {
		if (curLevel === 15) {
			setGameState('endScreenWinner');
		} else {
			setCurLevel(curLevel + 1);
			setQuestionStatus('notAnswered');
			setQuestion(Questions[curLevel]);
			setTimerLength(10);
		}
	};
	useEffect(() => {
		setQuestion(Questions[curLevel]);
		// if(questionStatus === "noCorrect") {

		// }
	}, [curLevel]);
	console.log(curLevel, 'CUrrentLevel');

	return (
		<>
			<div className='Quiz'>
				<h1>Quiz</h1>
				{curLevel < 6 && (
					<QuestionWithTimer
						{...question}
						currentLevel={curLevel}
						questionStatus={questionStatus}
						setQuestionStatus={setQuestionStatus}
						timerLength={10}
					/>
				)}
				{curLevel >= 6 && (
					<Question
						{...question}
						currentLevel={curLevel}
						questionStatus={questionStatus}
						setQuestionStatus={setQuestionStatus}
					/>
				)}
				<div className='msg'>
					{questionStatus === 'notCorrect' && <p>Sorry</p>}
					{questionStatus === 'timesUp' && <p>Sorry Times UP!!</p>}
					{questionStatus === 'correct' && (
						<p>
							Congratulations! You have won{' '}
							{CashSetData[curLevel].price}
						</p>
					)}
				</div>
				{questionStatus === 'notAnswered' && (
					<Lifeline question={question} setQuestion={setQuestion} />
				)}

				{questionStatus === 'correct' && (
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
			<CashSet currentLevel={curLevel} />
		</>
	);
};

export default Quiz;
