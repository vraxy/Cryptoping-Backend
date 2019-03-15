var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/error', function(req, res, next) {
	var check = "";
	var query = "Actually you reached this page by mistake. Just go back.";
	var data = "";
	var success = "No Error here.";
	var message = "No Error Occured on this page.";
	var status = "203";
	var error = "No Error";
	res.render('error', { data, query, success, check, message, status, error });
});

module.exports = router;
