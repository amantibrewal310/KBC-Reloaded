import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';

function App() {
	const { isLoading } = useAuth0();
	if (isLoading) return <div>loading....</div>;
	return (
		<div>
			<h1>KBC Reloaded</h1>
			<LoginButton />
			<LogoutButton />
			<Profile />
		</div>
	);
}

export default App;
