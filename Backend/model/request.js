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
            },
            Gloves: {
                type: Number
            },
            Towels: {
                type: Number
            },
            Pants: {
                type: Number
            },
            Shirts: {
                type: Number
            },
            Blankets: {
                type: Number
            }
        },
		Utilities: {
            Odomous: {
                type: Number
            },
            Utensils: {
                type: Number
            },
            Matchsticks: {
                type: Number
            },
            Medicine: {
                type: Number
            },
            Torch: {
                type: Number
            },
            Bandages: {
                type: Number
            },
            FirstAidKit: {
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
            Milk: {
                type: Number
            },
            Bread: {
                type: Number
            },
            Chips: {
                type: Number
            },
            Water: {
                type: Number
            }
        }                
    }]
});

var Request = mongoose.model('request', ModelSchema);

module.exports = Request;

module.exports.addRequest = (model, callback) => {
	model.save(callback);
};

module.exports.getAllRequests = (callback) => {
    var sort = {
        $sort: {
            date: -1
        }
    };
    Request.aggregate([sort], callback);
};

module.exports.findById = (id, callback) => {
    var query = {_id: id};
    Request.findOne(query, callback);
}