// jshint esversion : 6

var mongoose = require('mongoose');

var ModelSchema = mongoose.Schema({
	_id: mongoose.Schema.ObjectId,
	name: {
		type: String
	},
	mobile: {
		type: String
    },
    pin: {
        type: Number
    },
    address: {
        type: String
    }
});

var Member = mongoose.model('member', ModelSchema);

module.exports = Member;

module.exports.addMember = (model, callback) => {
	model.save(callback);
};

module.exports.getbyMobile = (mobile , callback) => {
    let query = {mobile: mobile};
    Member.findOne(query, callback);
};

module.exports.updateByMobile = (model, callback) => {
    let query = {_id: model.id};
    let opt = model;
    Member.update(query, opt, callback);
};