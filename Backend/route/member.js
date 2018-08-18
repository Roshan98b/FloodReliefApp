// jshint esversion : 6

var express = require('express');
var mongoose = require('mongoose');

var Member = require('../model/member'); 
var router = express.Router();

//Login
router.post('/login', (req, res) => {
	Member.getbyMobile(req.body.mobile, (err, model) => {
		if(err) res.status(501).json(err);
		if(model == null) res.status(500).json({message: 'Mobile Number does not Exist'});  
		else {
            console.log(model);
            res.status(200).json(model);
        }
	});
});

// Register
router.post('/member', (req, res) => {
	var member = new Member({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name,
		mobile: req.body.mobile,
		pin: req.body.pin,
		address: req.body.address
    });
    console.log(member);
	Member.addMember(member, (err, model) => {
		if(err) res.status(501).json({error: "Error"});
		else res.status(200).json({message: "Registration Successfull"});
	});
});

//Edit profile
router.post('/editedprofile',
	(req, res) => {
		var member = new Member({
			_id: req.body.id,
			name: req.body.name,
			mobile: req.body.mobile,
			pin: req.body.pin,
			address: req.body.address
		});
		Member.updateByMobile(member, (err, model) => {
			if(err) res.status(501).json(err);
			else {
				res.status(200).json({
                        _id: req.body.id,
                        name: req.body.name,
                        mobile: req.body.mobile,
                        pin: req.body.pin,
                        address: req.body.address
				});
			}
	});
});

module.exports = router;