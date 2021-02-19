import React, { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../helpers/Context';
import { Questions } from '../helpers/QuestionBank';
import Question from './Question';
import { CashSetData } from '../helpers/CashSetData';
import Lifeline from './Lifeline';
import CashSet from './CashSet';
import './quiz.css';
import QuestionWithTimer from './QuestionWithTimer';

const Quiz = () => {
	const { setGameState, score, setScore, minScore, setMinScore } = useContext(
		QuizContext
	);
	const [curLevel, setCurLevel] = useState(0);
	const [questionStatus, setQuestionStatus] = useState('notAnswered');
	const [question, setQuestion] = useState({});
	const [fiftyFifty, setFiftyFifty] = useState(true);
	const [switchQues, setSwitchQues] = useState(true);
	const numberOfQuestion = 15;
	const nextQuestionHandler = () => {
		if (CashSetData[curLevel].checkpoint) {
			setMinScore(score);
		}
		if (curLevel === numberOfQuestion - 1) {
			setGameState('endScreenWinner');
		} else {
			setCurLevel(curLevel + 1);
			setQuestionStatus('notAnswered');
		}
	};
	useEffect(() => {
		setQuestion(Questions[curLevel]);
	}, [curLevel]);
	useEffect(() => {
		setScore(0);
		setMinScore(0);
	}, []);

	return (
		<>
			<div className='Quiz'>
				<h1>Quiz</h1>
				<h3>Score: {score}</h3>
				{curLevel < numberOfQuestion / 3 && (
					<QuestionWithTimer
						question={question}
						currentLevel={curLevel}
						questionStatus={questionStatus}
						setQuestionStatus={setQuestionStatus}
						timerLength={10}
						setScore={setScore}
						minScore={minScore}
						price={CashSetData[curLevel].price}
					/>
				)}
				{curLevel >= numberOfQuestion / 3 &&
					curLevel < numberOfQuestion && (
						<Question
							question={question}
							currentLevel={curLevel}
							questionStatus={questionStatus}
							setQuestionStatus={setQuestionStatus}
							setScore={setScore}
							minScore={minScore}
							price={CashSetData[curLevel].price}
						/>
					)}
				<div className='msg'>
					{questionStatus === 'notCorrect' && <p>Sorry</p>}
					{questionStatus === 'timesUp' && <p>Sorry Times UP!!</p>}
					{questionStatus === 'correct' && (
						<p>
							Congratulations! You have won
							{CashSetData[curLevel].price}
						</p>
					)}
				</div>
				{questionStatus === 'notAnswered' && (
					<Lifeline
						question={question}
						setQuestion={setQuestion}
						fiftyFifty={fiftyFifty}
						setFiftyFifty={setFiftyFifty}
						switchQues={switchQues}
						setSwitchQues={setSwitchQues}
					/>
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
