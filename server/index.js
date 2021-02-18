const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(
	cors({
		origin: ['http://localhost:3000/'],
		methods: ['GET', 'POST'],
		credentials: true, // allowing cookie to enable
	})
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
	session({
		key: 'userId',
		secret: 'secret',
		resave: false,
		saveUninitialized: false,
		cookie: {
			expires: 60 * 60 * 60,
		},
	})
);

const db = mysql.createConnection({
	user: 'root',
	host: 'localhost',
	password: '',
	database: 'KBCReloaded',
});

app.post('/register', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	bcrypt.hash(password, saltRounds, (err, hash) => {
		if (err) {
			console.log(err);
		}
		db.query(
			'INSERT INTO users (username, password) VALUES (?, ?)',
			[username, hash],
			(err, result) => {
				console.log(err);
			}
		);
	});
});

app.post('/login', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	db.query(
		'SELECT * FROM users WHERE username = ?;',
		username,
		(err, result) => {
			if (err) {
				console.log(err);
				res.send({
					err: err,
				});
			} else {
				if (result.length > 0) {
					bcrypt.compare(
						password,
						result[0].password,
						(err, response) => {
							if (response) {
								res.send(result);
							} else {
								res.send({
									message:
										'Wrong username/password combination!',
								});
							}
						}
					);
				} else {
					res.send({
						message: "User doesn't exist",
					});
				}
			}
		}
	);
});

app.listen(3001, () => {
	console.log('APP is running');
});
