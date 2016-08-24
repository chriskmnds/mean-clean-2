var express = require('express'),
    bodyParser  = require('body-parser'),
    morgan = require('morgan'),
    pkg = require('./package.json');

var app = module.exports.app = exports.app = express();
//var http = require('http').Server(app);

var viewOptions = {
  pretty: true,
  compileDebug: false,
  pkg:pkg
};

app.set('view engine', 'jade');
//app.set('view options', jadeOptions);//deprecated

app.locals = viewOptions;

// Setup static resource serving
app.use('/', express.static(__dirname + '/public'));

// use bodyparser so we can grab information from POST requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// log all requests to the console
app.use(morgan('dev'));


app.get('/', function(req,res) {
  res.render('index');
});

var server = app.listen(8000, function() {
  console.log('Listening on port 8000');
});//*/


/**
 * Clean up on exit.
 * - Close servers
 * - Disconnect all subscribed sockets
 */
var gracefulExit = function() {
  console.log('exiting now..');
  server.close();
}

var logUncaughtServerError = function(err) {
    console.log(err);
};

process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);
process.on('uncaughtException', logUncaughtServerError);