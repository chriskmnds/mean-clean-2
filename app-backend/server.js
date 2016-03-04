var cors = require('cors'),
  express = require('express'),
  bodyParser  = require('body-parser'),
  morgan = require('morgan'),
  shortid = require('shortid'),
  main = require('./routes/main');
  
var app = express();
var http = require('http').Server(app);

// use cors, restrict origin
app.use(cors({origin: 'http://localhost:8000'}));

// use bodyparser so we can grab information from POST requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// log all requests to the console
app.use(morgan('dev'));



app.get('/', main.main_route);



http.listen(3000);
console.log('Listening on port 3000...');

/**
 * Clean up on exit.
 * - Close servers
 * - Disconnect all subscribed sockets
 */
var gracefulExit = function() {
  console.log('exiting now..');
  http.close();
}

var logUncaughtServerError = function(err) {
    console.log(err);
};

process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);
process.on('uncaughtException', logUncaughtServerError);
