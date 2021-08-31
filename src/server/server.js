const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var jwt = require('jsonwebtoken');
const app = express();
const port = process.env.VUE_APP_DB_PORT || 8000;
const mysql = require('mysql')
const pool  = mysql.createPool({
	connectionLimit : 10,
	host            : '127.0.0.1',
	user            : 'root',
	password        : '',
	database        : 'trecula_db'
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`)
});
app.post('/login-with-google',(req, res) => {
	const { email, password } = req.body;
	pool.getConnection((err, connection) => {
		if(err) throw err
		connection.query('SELECT * FROM user WHERE email = ?;', [email], (err, rows) => {
			connection.release()
			if(!err) {
				if(!rows[0]) {
					connection.query('INSERT INTO user (email, password) VALUES (?,"");', [email],(err, rows) => {
						connection.release()
						if(err) {
							console.log(err);
						}
					})
				}
				res.status(200).send();
			}
			else {
				console.log(err);
			}
		})
	})
})
app.post('/login',(req, res) => {
	const { email, password } = req.body;
	pool.getConnection((err, connection) => {
		if(err) throw err
		connection.query('SELECT * FROM user WHERE email = ?', [email], (err, rows) => {
			connection.release()
			if (!err) {
				if(rows[0] && rows[0].password === password) {
					const user = {
						email: rows[0].email,
						password: rows[0].password
					}
					const payload = {
						"sub": rows[0].id,
					}
					const accessToken = jwt.sign(payload, 'thisissecret');
					res.json({user, accessToken});
				}
				else {
					res.json();
				}
			} else {
				throw err;
			}
		})
	})
})
app.listen(port);