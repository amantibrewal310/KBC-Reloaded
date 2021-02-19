import React, { useContext } from 'react';
import { QuizContext } from '../helpers/Context';
import './endScreen.css';

const EndScreen = () => {
	const { gameState, setGameState, score } = useContext(QuizContext);
	return (
		<div className='endscreen-container'>
			<h1>End Screen</h1>
			{gameState === 'endScreenWinner' && <h1>WINNER!!!</h1>}
			<h2>Your Score: {score}</h2>
			<button
				onClick={() => {
					setGameState('menu');
				}}
			>
				Back to Main Menu
			</button>
		</div>
	);
};

export default EndScreen;
