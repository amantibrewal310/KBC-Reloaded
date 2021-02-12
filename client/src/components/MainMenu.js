import React, { useContext } from 'react';
import { QuizContext } from '../helpers/Context';

const MainMenu = () => {
	const { gameState, setGameState } = useContext(QuizContext);
	return (
		<div className='Menu'>
			<h3>Ready to Play??</h3>
			<button
				onClick={() => {
					setGameState('quiz');
				}}
			>
				Start Quiz
			</button>
		</div>
	);
};

export default MainMenu;
