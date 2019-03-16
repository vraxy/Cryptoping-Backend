var createError = require('http-errors');
var cors = require('cors');
var request = require('request');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var getIndexPage = require('./routes/index');
var formDataPage = require('./routes/formdata');
var respDataPage = require('./routes/response');
var bittrex = require('./routes/bittrex');
var errorPage = require('./routes/error');
var mysql = require('mysql');
var randomstring = require("randomstring");
var app = express();
var fs = require('fs');
var qs = require('querystring');
var multer  = require('multer');
var upload = multer();
const responseTime = require('response-time');
const redis = require('redis');

// Encrypt cookies while setting. Decrypt cookies while using.
const Cryptr = require('cryptr');
var SecretKey = randomstring.generate({  length: 64 ,  charset: 'alphabetic' });
const cryptr = new Cryptr(SecretKey);

// HTTP Headers.
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Max-Age", "600");
    res.header("X-XSS-Protection", "1; mode=block");
    res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-PINGOTHER, X-Requested-With, contentType, Content-Type, Accept, Authorization");
    res.header("Access-Control-Request-Headers", "Origin, X-PINGOTHER, X-Requested-With, contentType, Content-Type, Accept, Authorization");
    res.header("Access-Control-Request-Method", "POST");
    res.header("User-Agent","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36");
    res.header("X-Requested-With","XMLHttpRequest");
    res.header("Access-Control-Max-Age","86400");
    res.header("statusText","Headers OK");
    res.header("Cache-Control","private");
    res.header("X-Powered-By","Cryptopings");
    res.header("status", "200");
    next();
});

// use response-time as a middleware
app.use(responseTime());

const middlewares = [
    express.static(path.join(__dirname, 'public')),
    express.static(path.join(__dirname, 'ace-builds-master')),
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json()
];

app.use(middlewares);

// view engine setup
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let options = {
  maxAge: 1000 * 60 * 60, 
  httpOnly: true, 
  signed: false
}

app.use(cookieParser());
app.set('json spaces', 4); 

// GET method route

app.use(cors());

app.get('/', getIndexPage);

app.get('/home', getIndexPage);
app.get('/bittrex', bittrex);
app.get('/formdata', formDataPage);
app.get('/response', respDataPage);
app.get('/error', errorPage);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.locals.query = "Page requested in not there yet.";
  res.locals.success = "Execution returned error. ";
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.query = "Some error occured. WebSocket wss://api.cryptoping.com/store not active. Please check error details below.";
  res.locals.message = err.message;
  res.locals.error = err;
  res.locals.status = err.status === "" ? "50x" : 500;
  res.locals.success = "Execution returned error. ";
  res.render('error');
});

module.exports = app;
