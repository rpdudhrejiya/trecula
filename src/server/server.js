const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var jwt = require('jsonwebtoken');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`)
});
app.post('/login',(req, res) => {
	const { email, password } = req.body;
	console.log({email, password});
	const accessToken = jwt.sign({email}, 'thisissecret', { expiresIn: 60000 });
	res.json(accessToken);
})
// listen on the port
app.listen(port);