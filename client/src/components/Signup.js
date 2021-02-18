import React, { useState } from 'react';
import Axios from 'axios';

const Signup = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const register = () => {
		Axios.post('http://localhost:3001/register', {
			username,
			password,
		}).then((response) => {
			console.log(response);
		});
	};

	return (
		<div>
			<h1>Registration</h1>
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
			<button onClick={register}>Register</button>
		</div>
	);
};

export default Signup;
