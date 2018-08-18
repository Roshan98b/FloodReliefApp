// jshint esversion : 6

var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

var mongoose = require('mongoose');

var ModelSchema = mongoose.Schema({
	_id: mongoose.Schema.ObjectId,
	_Uid: {
		type: mongoose.Schema.ObjectId,
		refs: 'member',
		unique: false
    },
    date: {
        type: Date
    },
	items: [{
		Clothes: {
            Sweater: {
                type: Number
            },
            Undergarments: {
                type: Number 
            }
        },
		Utilities: {
            Odomos: {
                type: Number
            },
            SNapkin: {
                type: Number 
            }
        },
		Food: {
            BabyFood: {
                type: Number
            },
            Biscuits: {
                type: Number 
            },
            ReadyToEatMeals: {
                type: Number
            },
            Rusks: {
                type: Number
            }
        }                
    }]
});

var Member = mongoose.model('request', ModelSchema);

module.exports = Member;

module.exports.addRequest = (model, callback) => {
	model.save(callback);
};

module.exports.getAllRequests = (callback) => {
    var sort = {
        date: -1
    };
    Request.aggregate([sort], callback);
};

module.exports.findById = (id, callback) => {
    Request.findById(id, callback);
}