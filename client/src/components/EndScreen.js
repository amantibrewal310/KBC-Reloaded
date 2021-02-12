import React, { useContext } from 'react';
import { QuizContext } from '../helpers/Context';

const EndScreen = () => {
	const { gameState, setGameState } = useContext(QuizContext);
	return (
		<div>
			<h3>End Screen</h3>
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
