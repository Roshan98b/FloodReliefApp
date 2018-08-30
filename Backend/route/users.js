// jshint esversion : 6

var express = require('express');
var router = express.Router();

var request = require('./request');
var member = require('./member');

// Member route
router.use('', member);

// Request route
router.use('', request);

router.post('/test',
        (req, res) => {
                console.log('Sup');
                res.status(200).json({Array: 
                [
                        {
                                name: "Success",
                                mobile: "9765413245",
                                date: "2018-12-01",
                                pin: 560064,
                                _id: "4bd6t4t465h465ds4rhrh4s6r5"
                        },
                        {
                                name: "Success",
                                mobile: "9765413245",
                                date: "2018-12-01",
                                pin: 560064,
                                _id: "4bd6t4t465h465ds4rhrh4s6r5"
                        },
                        {
                                name: "Success",
                                mobile: "9765413245",
                                date: "2018-12-01",
                                pin: 560064,
                                _id: "4bd6t4t465h465ds4rhrh4s6r5"
                        },
                        {
                                name: "Success",
                                mobile: "9765413245",
                                date: "2018-12-01",
                                pin: 560064,
                                _id: "4bd6t4t465h465ds4rhrh4s6r5"
                        },
                        {
                                name: "Success",
                                mobile: "9765413245",
                                date: "2018-12-01",
                                pin: 560064,
                                _id: "4bd6t4t465h465ds4rhrh4s6r5"
                        }
                ]});                                
});


module.exports = router;