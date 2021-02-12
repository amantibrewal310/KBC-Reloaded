import './App.css';
import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';

import { QuizContext } from './helpers/Context';
import EndScreen from './components/EndScreen';
import CashSet from './components/CashSet';

function App() {
	const [gameState, setGameState] = useState('menu');
	const [score, setScore] = useState(0);
	const { isLoading } = useAuth0();
	if (isLoading) return <div>loading....</div>;
	return (
		<div>
			<h1>KBC Reloaded</h1>
			<LoginButton />
			<LogoutButton />
			<Profile />
			<QuizContext.Provider
				value={{ gameState, setGameState, score, setScore }}
			>
				{gameState === 'menu' && <MainMenu />}
				{gameState === 'quiz' && <Quiz />}
				{gameState === 'endScreen' && <EndScreen />}
				<CashSet />
			</QuizContext.Provider>
		</div>
	);
}

export default App;
