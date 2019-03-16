var express = require('express');
var router = express.Router();
var request = require('request');
var MongoClient = require('mongodb').MongoClient;
var db;

//Establish Connection
/* MongoClient.connect('mongodb://localhost:27017/mydb', function (err, database) {
    if (err)
        throw err;
    else {
        db = database;
        console.log('Connected to MongoDB');
    }
}); */

router.get('/', function (req, res) {
    request('https://api.bittrex.com/api/v1.1/public/getmarketsummaries', function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var check = "";
            var query = "";
            var success = "";
            var data = JSON.parse(body);
            /* db.collection('bittrex').insert(body, function (err, result) {
                if (err)
                    console.log('Mongo Error');
                else
                    console.log('Success');

            }); */
            res.render('index', { data, query, success, check });
        }
    })
});

module.exports = router;
