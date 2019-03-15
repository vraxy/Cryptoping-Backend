var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var check = "";
	var query = "";
	var data = "";
    var success = "";
	res.render('index', { data, query, success, check });
});

module.exports = router;
