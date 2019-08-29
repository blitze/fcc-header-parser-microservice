const express = require('express');
const path = require('path');

const app = express();
const port = process.env.port || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>
	res.sendFile(path.join(__dirname, '/views/index.html')),
);

app.get('/api/whoami', (req, res) => {
	res.json({
		ipaddress: req.headers['x-real-ip'],
		language: req.headers['accept-language'],
		software: req.headers['user-agent'],
	});
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
