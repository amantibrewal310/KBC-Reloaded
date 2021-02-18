import React, { useContext } from 'react';
import { QuizContext } from '../helpers/Context';
import './mainMenu.css';

const MainMenu = () => {
	const { gameState, setGameState } = useContext(QuizContext);
	return (
		<div className='Menu'>
			<h2>Ready to Play??</h2>
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
