var express = require('express');
var router = express.Router();

router.get('/formdata', function(req, res, next) {
	var form_check = "";
	var form_query = "";
	var form_data = "";
	var form_success = ""
	res.render('formdata', { form_check, form_query, form_data, form_success });
});

module.exports = router;
