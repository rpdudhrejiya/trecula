const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var jwt = require('jsonwebtoken');
const app = express();
const port = process.env.VUE_APP_PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`)
});
app.post('/login',(req, res) => {
	const { email, password } = req.body;
	console.log({email, password});
	const user = {
		email,password
	}
	const payload = {
		"sub": "1234567890",
	}
	const accessToken = jwt.sign(payload, 'thisissecret', { expiresIn: "120s" });
	res.json({user, accessToken});
})
app.listen(port);