// jshint esversion : 6

var express = require('express');
var mongoose = require('mongoose');

var Member = require('../model/member'); 
var Request  =require('../model/request');
var router = express.Router();

// post
router.post('/submitreqeust', (req, res) => {
	var temp = req.body;
	temp._id = new mongoose.Types.ObjectId();
	temp.date = new Date();
	var obj = new Request(temp);
	Request.addRequest(obj, (err, model) => {
		if(err) res.status(501).json(err);
		else res.status(200).json({message: "Request Successfull"});
	});
});

// get
router.get('/feed', (req, res) => {
	var obj = [];
	Request.getAllRequests((err, model) => {
		for (let i of model) {
			temp = model;
			Member.findById(i._Uid, (err, mmodel) => {
				temp.name = mmodel.name;
				temp.mobile = mmodel.mobile;
				temp.location = mmodel.location;
				temp.pin = mmodel.pin;
			});
			obj.push(temp);
			if(obj.length == model.length) res.status(200).json(obj);
		}
	});
});

module.exports = router;