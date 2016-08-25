var cors = require('cors'),
  express = require('express'),
  bodyParser  = require('body-parser'),
  mongoose = require('mongoose'),
  morgan = require('morgan'),
  shortid = require('shortid'),
  main = require('./routes/main'),
  pkg = require('./package.json');

var dbName = 'meanCleanBackend';
var dbServer = pkg.configs.dbServer;
var dbConnectionUrl = dbServer + '/' + dbName;

var dbConn = mongoose.connection;

process.env.NODE_ENV = pkg.configs.node_env || 'development';

// output environment information
console.log('------------------------------');
console.log('Node:\t\t' + process.version);
console.log('Environment:\t' + process.env.NODE_ENV);
console.log('Working dir:\t' + process.cwd());
console.log('------------------------------');

dbConn.on('connected', function(ref) {
  console.log('Connected to ' + dbConnectionUrl + '!');

  var app = express();
  
  // use cors, restrict origin
  app.use(cors({
    origin: 'http://localhost:8000'
  }));
  
  // use bodyparser so we can grab information from POST requests
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  
  // setup routes
  require('./routes')(app);
  
  app.listen(3000);
  console.log('Listening on port 3000...');
  
});

dbConn.on("error", function(err) {
  console.error('Failed to connect to DB ' + dbConnectionUrl + ' on startup ', err);
});

dbConn.on('disconnected', function () {
  console.log('Mongoose default connection to DB :' + dbConnectionUrl + ' disconnected');
});

/**
 * Clean up on exit.
 * - Close servers
 * - Disconnect all subscribed sockets
 */
var gracefulExit = function() {
  dbConn.close(function () {
    console.log('Mongoose default connection with DB :' + dbConnectionUrl + ' is disconnected through app termination (gracefulExit).');
    process.exit(0);
  });
}

var logUncaughtServerError = function(err) {
    console.log(err);
};

process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);
process.on('uncaughtException', logUncaughtServerError);

try {
  //options.server.socketOptions = options.replset.socketOptions = { keepAlive: 1 };
  mongoose.connect(dbConnectionUrl);
  console.log('Trying to connect to DB ' + dbConnectionUrl);
} catch (err) {
  console.log('Server initialization failed ' , err.message);
}