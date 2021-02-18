import React, { useState } from 'react';
import Axios from 'axios';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const loginHandler = () => {
		Axios.post('http://localhost:3001/login', {
			username,
			password,
		}).then((response) => {
			console.log(response);
		});
	};

	return (
		<div>
			<h1>Login</h1>
			<label>Username</label>
			<input
				type='text'
				onChange={(e) => {
					setUsername(e.target.value);
				}}
			></input>
			<label>Password</label>
			<input
				type='password'
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			></input>
			<button onClick={loginHandler}>Login</button>
		</div>
	);
};

export default Login;
