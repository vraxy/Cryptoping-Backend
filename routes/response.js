var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/response', function(req, res, next) {
	var check = "";
	var query = "";
	var data = {": No Response here. Nothing to query.": {}}
	var success = ""
	res.render('response', { data, query, success, check });
});

module.exports = router;
