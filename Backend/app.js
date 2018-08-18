// jshint esversion : 6

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var path = require('path');

var users = require('./route/users');

var app = express();
var mongodbUrl = 'mongodb://localhost:27017/flood';

// MongoDB Connection
mongoose.connect(mongodbUrl);
mongoose.connection.on('connected', () => {
	console.log('Connected to mongodb '+ mongodbUrl);
});
mongoose.connection.on('error', (err) => {
	console.log('Error Connecting to mongo '+ mongodbUrl);
	console.log(err);
});

// Static Pages /public/index.html
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// CORS
app.use(cors(
	{
		origin: ['http://127.0.0.1:4200'],
		credentials: true
	}
));

// Users route
app.use('/users',users);

app.use('*', (req, res) => {
	res.status(401).json({message: 'URL not Found'});
});

app.listen(3000, () => {
	console.log('Started server using port no 3000');
});