// jshint esversion : 6

var express = require('express');
var router = express.Router();

var request = require('./request');
var member = require('./member');

// Member route
router.use('', member);

// Request route
//router.use('', resquest);

router.post('/test',
	(req, res) => {
        console.log(req.body);
        res.status(200).json({message: "Success"});
	}
);


module.exports = router;