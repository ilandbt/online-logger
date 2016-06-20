var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db.js');
var _ = require('underscore');


var app = express();
var PORT = process.env.PORT || 3000;


//application level middleware for parsing all json body received
app.use(bodyParser.json());

app.get('/logs', function(req, res) {
	db.log.findAll()
		.then(function(loggs) {
			res.json(loggs);
		}, function(loggs) {
			console.log(error);
			return res.status(500).send();
		});
});

//post new log item
app.post('/logs', function(req, res) {
	//get only completed, description fields
	var body = _.pick(req.body, "log");

	db.log.create(body)
		.then(function(log) {
			res.json(log.toJSON());

		}, function(error) {
			console.log(error);
			return res.status(400).json(error);
		});
});

db.sequelize.sync({
	force: true
}).then(function() {
	app.listen(PORT, function() {
		console.log('Express listening to port : ' + PORT);
	});
});