var express = require('express');
var router = express.Router();
var request = require('request');
var MongoClient = require('mongodb').MongoClient;
var db;

router.get('/', function (req, res) {
    request('https://api.bittrex.com/api/v1.1/public/getmarketsummaries', function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var check = "";
            var query = "";
            var success = "";
            var data = JSON.parse(body);
            res.render('index', { data, query, success, check });
        }
    })
});

module.exports = router;
