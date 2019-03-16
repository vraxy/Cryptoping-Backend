var express = require('express');
var router = express.Router();
var request = require('request');

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

router.get('/bittrex', function (req, res) {
    request('https://api.bittrex.com/api/v1.1/public/getmarketsummaries', function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var check = "";
            var query = "";
            var success = "";
            var data = JSON.parse(body);
            res.render('blank', { data, query, success, check });
        }
    })
});

router.get('/db', async (req, res) => {
    try {
        const client = await pool.connect()
        const result = await client.query('SELECT * FROM test_table');
        const results = { 'results': (result) ? result.rows : null };
        res.render('pages/db', results);
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
})

module.exports = router;