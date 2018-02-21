var express = require('express'),
    bodyParser  = require('body-parser'),
    morgan = require('morgan'),
    pkg = require('./package.json'),
    path = require('path');

var app = module.exports.app = exports.app = express();
//var http = require('http').Server(app);

var PORT = process.env.PORT || 8000;

process.env.NODE_ENV = pkg.configs.node_env || 'development';

// output environment information
console.log('------------------------------');
console.log('Node:\t\t' + process.version);
console.log('Environment:\t' + process.env.NODE_ENV);
console.log('Working dir:\t' + process.cwd());
console.log('------------------------------');

// view options
app.locals = {
  pretty: true,
  compileDebug: false,
  pkg:pkg
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.set('view options', jadeOptions);//deprecated

// setup static resource serving
app.use('/', express.static(__dirname + '/public'));

// use bodyparser so we can grab information from POST requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// setup routes
require('./routes')(app);

// start server
var server = app.listen(PORT, function() {
  console.log('Listening on port ' + PORT);
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