// jshint esversion : 6

var express = require('express');
var mongoose = require('mongoose');

var Member = require('../model/member'); 
var Request  = require('../model/request');
var router = express.Router();

// post
router.post('/submitrequest', (req, res) => {
	var temp = req.body;
	temp._id = new mongoose.Types.ObjectId();
	temp._Uid = mongoose.Types.ObjectId(req.body._Uid);
	temp.date = new Date();
	var obj = new Request(temp);
	console.log(temp);
	console.log(req.body);
	Request.addRequest(obj, (err, model) => {
		if(err) {
			console.log(err);
			res.status(501).json(err);
		}
		else res.status(200).json({message: "Request Successfull"});
	});
});

// get
router.get('/feed', (req, res) => {
	var obj = [];
	Request.getAllRequests((err, model) => {
		if(err) {
			console.log(err);
			res.status(501).json(err);
		} else {
			for (let i of model) {
				Member.findById(i._Uid, (err, mmodel) => {
					if(err) {
						console.log(err);
						res.status(501).json(err);
					} else {
						var temp = {};
						temp._id = i._id;
						temp.name = mmodel.name;
						temp.mobile = mmodel.mobile;
						temp.pin = mmodel.pin;
						temp.date = i.date.toString();
						console.log(temp);
						obj.push(temp);
						if(obj.length == model.length) res.status(200).json({Array: obj});
					}
				});
			}
		}
	});
});

router.post('/feedview', (req, res) => {
	id = req.body._id;
	id = mongoose.Types.ObjectId(id);
	console.log(req.body);
	console.log('');

	Request.findById(id, (err, model) => {
		if(err) {
			console.log(err);
			res.status(501).json(err);
		} else {
			var obj = {}; 
			Member.getByUid(model._Uid, (err, mmodel) => {
				if(err) {
					console.log(err);
					res.status(501).json(err);
				} else {
					obj = model;
					obj.date = obj.date.toString();
					obj.name = mmodel.name;
					obj.pin = mmodel.pin;
					obj.address = mmodel.address;
					obj.mobile = mmodel.mobile;
					res.status(200).json(obj);
				}
			});
		}
	});
});

module.exports = router;